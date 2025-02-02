import React, { useRef, useState } from 'react'
import Header from './Header';
import InputText from './InputText';
import MainTextArea from './MainTextArea';

const ChatPage = () => {

    const [messages, setMessages] = useState([
        { sender: 'Santosh', content: 'Hello' },
        { sender: 'Santosh', content: 'How are you?' },
        { sender: 'Santosh', content: 'I am fine' },
        { sender: 'Santosh', content: 'What about you?' },
        { sender: 'Santosh', content: 'I am also fine' },
        { sender: 'Santosh', content: 'Thank you' },
        { sender: 'Santosh', content: 'Bye' }
    ]);
    const [input, setInput] = useState('');
    const [stompClient, setStompClient] = useState(null);
    const [roomId, setRoomId] = useState('');
    const inputRef = useRef(null);
    const chatBoxRef = useRef(null);

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Main Text Area */}
            <MainTextArea >
                {/* Chat Messages */}
                <div ref={chatBoxRef} className='flex flex-col gap-2 p-4 h-full overflow-auto'>
                    {messages.map((message, index) => (
                        <div key={index} className='flex flex-col gap-1'>
                            <span className='text-gray-400 text-sm'>{message.sender}</span>
                            <span className='text-gray-200'>{message.content}</span>
                        </div>
                    ))}
                </div>
            </MainTextArea>

            {/* Input text */}
            <InputText />
        </div>
    )
}

export default ChatPage;