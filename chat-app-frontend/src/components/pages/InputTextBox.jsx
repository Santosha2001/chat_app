import React from 'react'
import { FaPaperPlane, FaPaperclip } from 'react-icons/fa'

const InputText = () => {
    return (
        <div className='fixed bottom-0 w-full dark:text-gray-200'>
            <div className='flex justify-center items-center p-3'>
                <div className='relative w-2/5'>
                    {/* Input field */}
                    <input
                        type='text'
                        id='message'
                        name='message'
                        placeholder='Type a message...'
                        className='w-full px-3 py-2 border rounded-full dark:bg-gray-700 border-gray-300 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-50 sm:text-sm'
                    />

                    <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                        {/* File Attach Icon */}
                        <button className='text-gray-500 dark:text-gray-200 text-xl mr-2'>
                            <FaPaperclip />
                        </button>

                        {/* Send Icon */}
                        <button className='ml-2 text-blue-600 dark:text-blue-400 text-xl'>
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputText;