import React from 'react'
import InputText from './InputText'

const MainTextArea = ({ messages, chatBoxRef, currentUser }) => {
    return (
        <div className='flex flex-col h-screen'>
            <main className='flex-grow overflow-auto py-20 w-2/3 dark:bg-zinc-500 mx-auto h-screen' ref={chatBoxRef}>
                <div className='flex flex-col gap-2 p-4 h-full overflow-auto'>
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.sender === currentUser ? 'justify-end' : 'justify-start'}`}>
                            <div className={`flex items-start gap-2 p-3 rounded-lg shadow-md max-w-max ${message.sender === currentUser ? 'bg-blue-500 text-white' : 'bg-white dark:bg-gray-700 text-black dark:text-gray-200'}`}>
                                <img
                                    src={message.sender === currentUser ? 'https://avatar.iran.liara.run/public/18' : 'https://avatar.iran.liara.run/public/19'}
                                    alt={`${message.sender}'s avatar`}
                                    className='w-10 h-10 rounded-full'
                                />
                                <div className='flex flex-col'>
                                    <span className='font-semibold'>{message.sender}</span>
                                    <span>{message.content}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <InputText />
        </div>
    )
}

export default MainTextArea;