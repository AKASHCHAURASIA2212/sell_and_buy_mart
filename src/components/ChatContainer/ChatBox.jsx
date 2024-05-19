import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import userLogo from '../../asset/images/user.png';
import { convertDateTimeFormat } from '../../utils/utils';

function ChatBox({ user_data }) {

    let navigate = useNavigate()
    const isMobile = window.innerWidth <= 640;

    const openChatArea = (chatId) => {
        // console.log("user_data chatbox", user_data);
        navigate(`${chatId}`)
    }

    const handleClick = (chatId) => {
        if (isMobile) {
            navigate(`/chats/${chatId}`)
        } else {
            openChatArea(chatId)
        }
    }
    console.log(user_data);
    return (

        <div className="flex min-w-full flex-col font-sans text-base font-normal text-blue-gray-700 h-full">
            {
                user_data?.length == 0 && <div className='h-full w-full flex justify-center items-center'>
                    <span className='text-md md:text-lg lg:text-xl font-semibold text-blue-500'>No Chat Available</span>
                </div>
            }
            {
                user_data != null && user_data.length > 0 &&
                user_data.map((user) => {
                    return (

                        <div onClick={() => { handleClick(user.chatID) }}
                            className="flex items-center w-full p-3 transition-all mb-2 bg1 rounded-lg">
                            <div className="grid mr-4 place-items-center">
                                <img src={user?.user_img == '' ? userLogo : user?.user_img}
                                    className="relative inline-block h-12 w-12 rounded-full  object-cover object-center border-2 border-blue" />
                            </div>
                            <div>
                                <h6
                                    className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                    {user.UserName}
                                </h6>
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                    {user.item_name}
                                </p>
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                    {user.last_message}
                                </p>
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                    {convertDateTimeFormat(user.date_entered)}
                                </p>
                            </div>
                        </div>)
                })
            }
        </div>

    )
}

export default ChatBox