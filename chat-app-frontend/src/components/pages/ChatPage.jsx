import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import MainTextArea from './MainTextArea';
import InputText from './InputTextBox';
import { useChatContext } from '../../context/ChatContext';
import { useNavigate } from 'react-router';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { BASE_URL } from '../../config/AxiosHelper';
import toast from 'react-hot-toast';
import { getMessagesApi } from '../../services/RoomService';

const ChatPage = () => {
    const { roomId, currentUser, connected, setConnected, logout } = useChatContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!connected) {
            navigate('/');
            window.history.replaceState(null, null, '/'); // Clear browser history
        }
    }, [connected, navigate]);

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [stompClient, setStompClient] = useState(null);
    const inputRef = useRef(null);
    const chatBoxRef = useRef(null);

    useEffect(() => {
        const loadOldMessages = async () => {
            if (!roomId) {
                console.error('Room ID is missing');
                return;
            }
            try {
                const response = await getMessagesApi(roomId);
                console.log('Old messages:', response);
                if (Array.isArray(response)) {
                    setMessages(response);
                } else {
                    console.error('Unexpected response structure:', response);
                    toast.error('Unexpected response structure');
                }
            } catch (error) {
                console.error('Error loading old messages', error);
                toast.error('Error loading messages');
            }
        };
        loadOldMessages();
    }, [roomId]);

    useEffect(() => {
        let stompClient = null;

        const webSocket = () => {
            const socket = new SockJS(`${BASE_URL}/chat`);
            stompClient = Stomp.over(socket);
            stompClient.connect({}, () => {
                console.log('Connected to the server');
                setStompClient(stompClient);
                stompClient.subscribe(`/topic/room/${roomId}`, (message) => {
                    console.log('Message received', message);
                    const newMessage = JSON.parse(message.body);
                    setMessages((prev) => Array.isArray(prev) ? [...prev, newMessage] : [newMessage]); // Ensure prev is an array
                });
            });
        };

        webSocket();

        return () => {
            if (stompClient) {
                stompClient.disconnect(() => {
                    console.log('Disconnected from the server');
                });
            }
        };
    }, [roomId]);

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTo({
                top: chatBoxRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages]);

    const sendMessage = () => {
        if (stompClient && connected && input.trim()) {
            console.log('Input:', input);
            const message = {
                sender: currentUser,
                content: input,
                roomId: roomId,
                timeStamp: new Date().toISOString() // Add the current timestamp
            };
            stompClient.send(`/app/sendMessage/${roomId}`, {}, JSON.stringify(message));
            setInput('');
            // Scroll to the bottom after sending a message
            if (chatBoxRef.current) {
                chatBoxRef.current.scrollTo({
                    top: chatBoxRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleLeaveRoom = () => {
        logout(); // Call the logout function from the context
        setConnected(false); // Set connected to false
        navigate('/');
        window.history.replaceState(null, null, '/'); // Clear browser history
        toast.success('You have left the room');
    };

    return (
        <div>
            <Header roomName={roomId} username={currentUser} onLeaveRoom={handleLeaveRoom} />
            <MainTextArea messages={messages} chatBoxRef={chatBoxRef} currentUser={currentUser} />
            <InputText input={input} setInput={setInput} sendMessage={sendMessage} />
        </div>
    );
};

export default ChatPage;