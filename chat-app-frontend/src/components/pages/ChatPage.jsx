import React, { useState, useRef, useEffect } from 'react'
import Header from './Header'
import MainTextArea from './MainTextArea'
import InputText from './InputTextBox'
import { useChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router';
import { use } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { BASE_URL } from '../../config/AxiosHelper';

const ChatPage = () => {
    const { roomId, currentUser, connected } = useChatContext();
    console.log(roomId, currentUser, connected);

    const navigate = useNavigate();
    useEffect(() => {
        if (!connected) {
            navigate('/');
        }
    }, [connected, roomId, currentUser]);

    const [messages, setMessages] = useState([
        { sender: 'Santosh', content: 'Hello' },
        { sender: 'Jhon', content: 'How are you?' },
        { sender: 'Santosh', content: 'I am fine' },
        { sender: 'Santosh', content: 'What about you?' },
        { sender: 'Jhon', content: 'I am also fine' },
        { sender: 'Santosh', content: 'Thank you' },
        { sender: 'Jhon', content: 'Bye' }
    ]);
    const [input, setInput] = useState('');
    const [stompClient, setStompClient] = useState(null);
    // Initialize current user state
    const inputRef = useRef(null);
    const chatBoxRef = useRef(null);

    // page init:
    // load messages from the server
    // init to stom client
    // sbuscribe to the topic

    useEffect(() => {
        const webSocket = () => {
            //Sock JS
            const socket = new SockJS(`${BASE_URL}/chat`);
            const stompClient = Stomp.over(socket);
            stompClient.connect({}, () => {
                console.log('Connected to the server');
                setStompClient(stompClient);
                toast.success('Connected. You can start chatting');
                stompClient.subscribe(`/topic/${roomId}`, (message) => {
                    console.log('Message received', message);
                    const newMessage = JSON.parse(message.body);
                    setMessages((prev) => [...prev, newMessage]);

                    //reset the work after receiving the message
                });
            })
        }
    }, [roomId]);

    // send message

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Main Text Area */}
            <MainTextArea messages={messages} chatBoxRef={chatBoxRef} currentUser={currentUser} />
        </div>
    );
};

export default ChatPage;