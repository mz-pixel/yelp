package com.example.yelpapp.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class YelpService {

    @Value("${yelp.api.key}")
    private String apiKey;

    private static final String YELP_URL = "https://api.yelp.com/v3/businesses/search";

    public List<Map<String, Object>> searchBusinesses(String term, String location) throws IOException {
        String url = String.format("%s?term=%s&location=%s&limit=25", YELP_URL, term, location);
        CloseableHttpClient client = HttpClients.createDefault();
        HttpGet request = new HttpGet(url);
        request.setHeader("Authorization", "Bearer " + apiKey);

        CloseableHttpResponse response = client.execute(request);
        String responseBody = EntityUtils.toString(response.getEntity());

        ObjectMapper mapper = new ObjectMapper();
        JsonNode rootNode = mapper.readTree(responseBody);
        JsonNode businessesNode = rootNode.path("businesses");

        List<Map<String, Object>> businessesList = new ArrayList<>();
        businessesNode.forEach(business -> {
            Map<String, Object> businessMap = mapper.convertValue(business, Map.class);
            businessesList.add(businessMap);
        });

        client.close();
        return businessesList;
    }
}
