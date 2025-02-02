import React from 'react'
import App from '../App'
import { Route, Routes } from 'react-router'
import ChatPage from '../components/pages/ChatPage'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/about" element={<h2>this is about page</h2>} />
            <Route path="/*" element={<h2>404 Page Not Found.</h2>} />
        </Routes>
    )
}

export default AppRoutes;