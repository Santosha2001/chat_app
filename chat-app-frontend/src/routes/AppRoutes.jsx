import React from 'react'
import App from '../App'
import { Route, Routes } from 'react-router'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={App} />
            <Route path="/chat" element={<h2>this is chat application</h2>} />
        </Routes>
    )
}

export default AppRoutes;