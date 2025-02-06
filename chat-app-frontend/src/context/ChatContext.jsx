import { Children, createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [roomId, setRoomId] = useState('');
    const [userName, setCurrentUser] = useState('');
    const [connected, setConnected] = useState(false);

    return (
        <ChatContext.Provider value={{
            roomId, setRoomId,
            userName, setCurrentUser,
            connected, setConnected
        }}>{children}</ChatContext.Provider>
    );
};

export const useChatContext = () => {
    return useContext(ChatContext);
};