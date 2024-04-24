import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import userLogo from '../../asset/images/user.png';

function ChatBox({ user_data }) {

    const showMessage = (user2ID) => {
        useNavigate()
    }
    console.log(user_data);
    return (

        <nav className="flex min-w-full flex-col font-sans text-base font-normal text-blue-gray-700 h-full">
            {
                user_data != null && user_data.length > 0 &&
                user_data.map((user) => {
                    return (<div onClick={() => { showMessage(user.user_id) }}
                        className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 
                            bg-300-white shadow1 mb-2">
                        <div className="grid mr-4 place-items-center">
                            <img alt="emma" src={userLogo}
                                className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
                        </div>
                        <div>
                            <h6
                                className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                {user.username}
                            </h6>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                {user.address}
                            </p>
                        </div>
                    </div>)
                })
            }


        </nav>

    )
}

export default ChatBox