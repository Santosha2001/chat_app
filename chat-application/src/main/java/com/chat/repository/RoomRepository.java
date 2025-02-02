package com.chat.repository;

import com.chat.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {
    // Get room using roomId
    Room findByRoomId(String roomId);
}