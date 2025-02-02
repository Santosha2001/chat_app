import React from 'react'
import chatIcon from '../assets/chat.png'

const JoinCreateChat = () => {
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
                        id='name'
                        name='name'
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
                        id='room'
                        name='room'
                        placeholder='Room ID'
                        className='mt-1 block w-full px-3 py-2 border rounded-lg dark:bg-gray-600 border-gray-300 dark:border-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-50 sm:text-sm'
                    />
                </div>

                {/* Join Buttons */}
                <div className='mt-10 flex justify-center gap-4'>
                    <button className='px-6 py-2 w-full bg-green-700 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'>
                        Join Room
                    </button>
                </div>

                {/* Create Buttons */}
                <div className='mt-4 flex justify-center gap-4'>
                    <button className='px-6 py-2 w-full bg-blue-700 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                        Create Room
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinCreateChat;