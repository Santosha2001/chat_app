import React, { useState, useRef } from 'react'
import Header from './Header'
import MainTextArea from './MainTextArea'
import InputText from './InputTextBox'
import { useChatContext } from '../../context/ChatContext';

const ChatPage = () => {
    const { roomId, currentUser, connected } = useChatContext();
    console.log(roomId, currentUser, connected);

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