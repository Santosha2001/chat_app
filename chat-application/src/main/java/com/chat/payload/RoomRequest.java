package com.chat.payload;

public class RoomRequest {
    private String roomId;

    RoomRequest() {

    }

    RoomRequest(String roomId) {
        this.roomId = roomId;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }
}
