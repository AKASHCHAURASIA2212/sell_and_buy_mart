import React from 'react'
import ChatMessageOther from './ChatMessageOther'
import ChatMessageSelf from './ChatMessageSelf'
import userLogo from '../../asset/images/user.png';

import './index.css'
function ChatArea() {
    return (
        <div className={`h-full w-full sm:w-[50%] md:w-[60%] lg:w-[70%] flex flex-col justify-start items-center  px-2 rounded-md`}>
            <div className="chat-area-header w-full flex justify-between items-center p-2 shadow1 bg-white rounded-md">
                <div className="details flex flex-col justify-center items-start">
                    <div className='flex flex-row justify-end items-center'>
                        <img src={userLogo} className='h-10 w-10 bg-gray-400 p-2 rounded-3xl mr-2' />
                        <span className='text-xl font-mono font-bold '>AKASH</span>

                    </div>
                    <span className='font-bold'>online</span>
                </div>
                {/* <div className="options text-3xl">
                    :
                </div> */}
            </div>
            <div className="chat-area-cont w-full shadow1 p-2 flex-1 bg-white my-2 rounded-md">
                <div className="chat-area w-full flex flex-col">
                    <ChatMessageOther />
                    <ChatMessageSelf />
                </div>
            </div>
            <div className="chat-area-input w-full shadow1 p-2 bg-white rounded-md">
                <input type="text" className='outline-none p-3 text-2xl border-2 border-red h-full w-full border-none' placeholder='Message' />
            </div>
        </div>
    )
}

export default ChatArea