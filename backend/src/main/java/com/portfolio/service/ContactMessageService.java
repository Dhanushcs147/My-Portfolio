package com.portfolio.service;

import com.portfolio.entity.ContactMessage;
import com.portfolio.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactMessageService {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAllByOrderBySubmittedAtDesc();
    }

    public List<ContactMessage> getUnreadMessages() {
        return contactMessageRepository.findByIsReadOrderBySubmittedAtDesc(false);
    }

    public Optional<ContactMessage> getMessageById(Long id) {
        return contactMessageRepository.findById(id);
    }

    public ContactMessage saveMessage(ContactMessage message) {
        return contactMessageRepository.save(message);
    }

    public void markAsRead(Long id) {
        Optional<ContactMessage> message = contactMessageRepository.findById(id);
        if (message.isPresent()) {
            message.get().setIsRead(true);
            contactMessageRepository.save(message.get());
        }
    }

    public void deleteMessage(Long id) {
        contactMessageRepository.deleteById(id);
    }
}