package com.chat.services;

import com.chat.entities.Message;
import com.chat.entities.Room;

import java.util.List;

public interface RoomService {
    Room createRoom(String roomId);

    Room getRoomByRoomId(String roomId);

    List<Message> getMessagesByRoomId(String roomId, int page, int size);
}
