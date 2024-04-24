import React from 'react'
import userLogo from '../../asset/images/user.png';
import { BsSend } from "react-icons/bs";


function ChatHandler() {
    return (
        <div className='w-full flex flex-col justify-center -mt-20 items-center'>
            <p className='text-3xl'>Start Chat with Seller</p>
            <div className="chat-banner flex flex-row justify-around items-center">

                <div className='buyer-logo h-10 w-10 border-2 border-indigo-700 flex justify-center items-center rounded-3xl bg-indigo-400'>
                    <img src={userLogo} />
                </div>

                <p className='text-xl mx-3 my-8'>Want to Message</p>

                <div className='buyer-logo h-10 w-10 border-2 border-indigo-700 flex justify-center items-center rounded-3xl bg-indigo-400'>
                    <img src={userLogo} />
                </div>
            </div>

            <div className="chat-area-input shadow-md p-2 rounded-lg flex flex-row justify-center items-center">
                <input type="text" className='outline-none p-2 text-sm sm:text-lg border-2 border-red h-full w-full rounded-xl' placeholder='Message' />
                <button className="send p-2 rounded-3xl bg-indigo-400 text-white ml-2">
                    <BsSend size={30} />
                </button>

            </div>
        </div>
    )
}

export default ChatHandler