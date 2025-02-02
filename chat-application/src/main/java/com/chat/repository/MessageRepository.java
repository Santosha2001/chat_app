package com.chat.repository;

import com.chat.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
    // Custom query methods can be added here if needed
}
