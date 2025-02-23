package com.chat.payload;

import java.time.LocalDateTime;

public class MessageRequest {

    private String content;
    private String sender;
    private String roomId;
    private LocalDateTime timeStamp;
    private String fileName;
    private byte[] fileData;

    public MessageRequest() {

    }

    public MessageRequest(String content, String sender, String roomId, String fileName, byte[] fileData) {
        this.content = content;
        this.sender = sender;
        this.roomId = roomId;
        this.fileName = fileName;
        this.fileData = fileData;
    }

    // Getters and Setters
    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }
}
