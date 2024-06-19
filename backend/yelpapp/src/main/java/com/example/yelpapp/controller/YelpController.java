package com.example.yelpapp.controller;

import com.example.yelpapp.service.YelpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/yelp")
@CrossOrigin(origins = "http://localhost:3000")
public class YelpController {

    @Autowired
    private YelpService yelpService;

    @GetMapping("/search")
    public List<Map<String, Object>> search(@RequestParam String term, @RequestParam String location) throws IOException {
        return yelpService.searchBusinesses(term, location);
    }
}
