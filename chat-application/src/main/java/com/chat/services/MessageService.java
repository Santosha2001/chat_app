package com.chat.services;

import com.chat.entities.Message;
import com.chat.payload.MessageRequest;

public interface MessageService {
    Message sendMessage(String roomId, MessageRequest request);
}
