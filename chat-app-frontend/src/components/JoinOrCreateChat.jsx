import React, { useState } from 'react'
import chatIcon from '../assets/chat.png'
import toast from 'react-hot-toast';
import { createRoomApi, joinRoomApi } from '../services/RoomService';
import { useChatContext } from '../context/ChatContext';
import { useNavigate } from 'react-router';

const JoinOrCreateChat = () => {
    const [userDetails, setUserDetails] = useState({
        roomId: '',
        userName: ''
    });

    const { roomId, userName, setRoomId, setCurrentUser, setConnected } = useChatContext();

    const navigate = useNavigate();

    function handleInputChange(event) {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        });
    }

    function validateUserDetails() {
        if (userDetails.roomId.trim() === "" || userDetails.userName.trim() === "") {
            toast.error('Please enter room id and your name');
            return false;
        }
        return true;
    }

    // async function joinRoom() {
    //     if (validateUserDetails()) {
    //         console.log('Join Room', userDetails);
    //         try {
    //             const response = await joinRoomApi(userDetails.roomId);
    //             console.log('Room joined', response);

    //             // Set the room id and user name in the context
    //             setRoomId(userDetails.roomId);
    //             setCurrentUser(userDetails.userName);
    //             setConnected(true);

    //             // Redirect to the chat page
    //             navigate('/chat');
    //         } catch (error) {
    //             if (error.status == 404) {
    //                 toast.error('Room not found');
    //             } else {
    //                 console.error('Error joining room', error);
    //                 toast.error('Error joining room');
    //             }
    //         }
    //         return;
    //     }
    // }
    const joinRoom = async () => {
        if (validateUserDetails()) {
            console.log('Join Room', userDetails);
            try {
                const response = await joinRoomApi(userDetails.roomId);
                if (response && response.roomId) {
                    console.log('Room joined', response);

                    // Set the room id and user name in the context
                    setRoomId(userDetails.roomId);
                    setCurrentUser(userDetails.userName);
                    setConnected(true);

                    // Redirect to the chat page
                    navigate('/chat');
                    toast.success('Room joined successfully');
                } else {
                    toast.error('Room not found');
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    toast.error('Room not found');
                } else {
                    console.error('Error joining room', error);
                    toast.error('Error joining room');
                }
            }
        }
    };

    const createRoom = async () => {
        if (validateUserDetails()) {
            console.log('Create Room', userDetails);
            try {
                const response = await createRoomApi(userDetails);
                console.log('Room created', response);
                toast.success('Room created successfully');

                // Set the room id and user name in the context
                setRoomId(response.roomId);
                setCurrentUser(userDetails.userName);
                setConnected(true);

                // Redirect to the chat page
                navigate('/chat');
            } catch (error) {
                if (error.status == 400) {
                    toast.error('Room already exists');
                } else {
                    console.error('Error creating room', error);
                    toast.error('Error creating room');
                }
            }
            return;
        }
        toast.error('Invalid user details');
    };

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='p-8 w-full flex-col gap-4 max-w-md rounded dark:bg-gray-800 shadow'>

                <img src={chatIcon} className='w-24 mx-auto' />

                <h1 className='text-center text-2xl font-semibold mb-5'>Join / Create Room</h1>

                {/* Name */}
                <div className='mt-4'>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                        Your Name
                    </label>
                    <input
                        type='text'
                        onChange={handleInputChange}
                        id='name'
                        name='userName'
                        value={userDetails.userName}
                        placeholder='Your Name'
                        className='mt-1 block w-full px-3 py-2 border rounded-lg dark:bg-gray-600 border-gray-300 dark:border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-50 sm:text-sm'

                    />
                </div>

                {/* Room ID */}
                <div className='mt-4'>
                    <label htmlFor='room' className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
                        Room ID / New Room Id
                    </label>
                    <input
                        type='text'
                        onChange={handleInputChange}
                        value={userDetails.roomId}
                        id='room'
                        name='roomId'
                        placeholder='Room ID'
                        className='mt-1 block w-full px-3 py-2 border rounded-lg dark:bg-gray-600 border-gray-300 dark:border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-50 sm:text-sm'
                    />
                </div>

                {/* Join Buttons */}
                <div className='mt-10 flex justify-center gap-4'>
                    <button onClick={joinRoom}
                        className='px-6 py-2 w-full bg-green-700 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'>
                        Join Room
                    </button>
                </div>

                {/* Create Buttons */}
                <div className='mt-4 flex justify-center gap-4'>
                    <button onClick={createRoom}
                        className='px-6 py-2 w-full bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                        Create Room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinOrCreateChat;