import React from 'react'
import userLogo from '../../asset/images/icon-user.svg';

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

            <div className="chat-area-input shadow-md p-2 bg-indigo-500 rounded-lg">
                <input type="text" className='outline-none p-3 text-2xl border-2 border-red h-full w-full rounded-xl' placeholder='Message' />
            </div>
        </div>
    )
}

export default ChatHandler