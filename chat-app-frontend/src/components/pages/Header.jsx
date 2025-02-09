import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Header = ({ roomName, username }) => {
    const navigate = useNavigate();

    // function to leave the room
    const leaveRoom = () => {
        navigate('/');
        toast.success('You have left the room');
    }

    return (
        <div>
            <header className='flex justify-around fixed w-full h-15 items-center p-3 bg-gray-200 dark:bg-gray-800 dark:text-gray-200'>
                {/* room name container */}
                <div>
                    <h1 className=''>Room Name: {roomName}</h1>
                </div>

                {/* username container */}
                <div>
                    <h2 className=''>Username: {username}</h2>
                </div>

                {/* button: leave room container */}
                <div>
                    <button onClick={leaveRoom}
                        className='dark:bg-red-600 dark:hover:bg-red-700 rounded-full px-3 py-1'>Leave Room</button>
                </div>

            </header>
        </div>
    );
};

export default Header;