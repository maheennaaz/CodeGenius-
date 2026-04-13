package com.bot.controller;

import org.springframework.web.bind.annotation.*;
import java.util.concurrent.CompletableFuture;
import java.util.Random;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bot")
public class BotController {

    @GetMapping("/chat")
    public CompletableFuture<String> chat(@RequestParam String prompt) {

        return CompletableFuture.supplyAsync(() -> {

            String[] feedbackSamples = {
                "Rating: 8/10\nGood answer. Your explanation is clear and structured. Try adding a real-world example to improve impact.",
                "Rating: 6/10\nYou answered correctly but missed some key technical details. Try explaining the core concept more deeply.",
                "Rating: 9/10\nExcellent response! Your technical understanding and communication are strong.",
                "Rating: 7/10\nNice answer. Work on explaining edge cases for better completeness.",
                "Rating: 5/10\nBasic idea is correct, but needs clearer explanation and confidence."
            };

            Random rand = new Random();
            return feedbackSamples[rand.nextInt(feedbackSamples.length)];
        });
    }
}
