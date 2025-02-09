import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const Header = ({ roomName, username, onLeaveRoom }) => {
    const navigate = useNavigate();

    const handleLeaveRoom = () => {
        onLeaveRoom(); // Call the onLeaveRoom function passed as a prop
    };

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
                    <button
                        className='dark:bg-red-600 dark:hover:bg-red-700 rounded-full px-3 py-1'
                        onClick={handleLeaveRoom}
                    >
                        Leave Room
                    </button>
                </div>
            </header>
        </div>
    );
};

Header.propTypes = {
    roomName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onLeaveRoom: PropTypes.func.isRequired,
};

export default Header;