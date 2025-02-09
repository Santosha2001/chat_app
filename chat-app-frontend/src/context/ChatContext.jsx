import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [roomId, setRoomId] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const [connected, setConnected] = useState(false);

    const login = (roomId, user) => {
        setRoomId(roomId);
        setCurrentUser(user);
        setConnected(true);
    };

    const logout = () => {
        setRoomId('');
        setCurrentUser('');
        setConnected(false);
        // Clear any session or local storage data if needed
        localStorage.removeItem('chatUser');
    };

    return (
        <ChatContext.Provider value={{
            roomId, setRoomId,
            currentUser, setCurrentUser,
            connected, setConnected,
            login, logout
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = () => {
    return useContext(ChatContext);
};