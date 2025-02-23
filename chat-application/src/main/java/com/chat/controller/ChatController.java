package com.chat.controller;

import com.chat.entities.Message;
import com.chat.payload.MessageRequest;
import com.chat.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:5173")
public class ChatController {

    @Autowired
    private MessageService messageService;

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(
            @DestinationVariable String roomId,
            @RequestBody MessageRequest request
    ) {
        return messageService.sendMessage(roomId, request);
    }

    // Add this endpoint for testing via Postman
    @PostMapping("/app/sendMessage/{roomId}")
    public Message sendMessageViaRest(
            @PathVariable String roomId,
            @RequestBody MessageRequest request
    ) {
        return messageService.sendMessage(roomId, request);
    }
}
