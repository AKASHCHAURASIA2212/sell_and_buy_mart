import React, { useEffect, useState } from 'react'
import ChatMessageOther from './ChatMessageOther'
import ChatMessageSelf from './ChatMessageSelf'
import userLogo from '../../asset/images/user.png';
import loaderGif from '../../asset/images/loading.gif'
import './index.css'
import { useParams } from 'react-router-dom';
import api_url from '../../utils/utils';
import Loading from '../Loading/Loading';

function ChatArea() {

    let [userName, setUserName] = useState("")
    let [userImg, setUserImg] = useState("")
    let [message, setMessage] = useState(null)
    let user_id = localStorage.getItem("user_id")
    let token = localStorage.getItem("token");

    let [isLoading, setIsLoading] = useState(true);
    let { chatId } = useParams();
    const isMobile = window.innerWidth <= 640;

    const [formData, setFormData] = useState({
        chatId: "",
        sender: user_id,
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            e.target.value = "";

            setIsLoading(true)
            let url = `${api_url}/api/chat/insert`;

            await fetch(url, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token
                }
            }).then(res => res.json())
                .then((data) => {
                    setFormData({
                        chatId: chatId,
                        sender: user_id,
                        message: ""
                    })
                    setMessage(data.data[0].messages)
                    setIsLoading(false)

                    setTimeout(() => {
                        fetchChatData()
                    }, 5000)
                }).catch((e) => {
                    console.log(e);
                })
        }

    }

    const fetchChatData = async () => {
        try {

            // console.log("chat id : ", chatId);
            formData.chatId = chatId;
            let url = `${api_url}/api/chat/chat`;

            await fetch(url, {
                method: "POST",
                body: JSON.stringify({ chatId }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token
                }
            }).then(res => res.json())
                .then((data) => {
                    // console.log("send message : ", data.data);
                    let user_c = data?.data?.userData.filter((item) => {
                        // console.log(item.user_id, user_id);
                        if (item.user_id !== user_id) {
                            return item;
                        }
                    })
                    setUserName(user_c[0].username);
                    setUserImg(user_c[0].user_img);
                    setMessage(data.data.chat[0].messages)
                }).catch((e) => {
                    console.log(e);
                })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchChatData()
    }, [chatId])


    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    return (<>
        {isLoading === true && <div className='w-full h-full flex items-center justify-center min-h-[95vh]'>
            <Loading />
        </div>}
        {isLoading == false &&
            <div className={`h-[88vh] w-full sm:w-[50%] md:w-[60%] lg:w-[70%] flex flex-col justify-start items-center px-2 rounded-md p-2`}>
                <div className="chat-area-header w-full flex justify-between items-center p-2 shadow_cstm bg-18 rounded-md">
                    <div className="details flex flex-col justify-center items-start">
                        <div className='flex flex-row justify-end items-center'>
                            <img src={userImg == '' ? userLogo : userImg} className='h-12 w-12 rounded-3xl mr-2' />
                            <span className='text-xl font-mono font-bold '>{userName}</span>

                        </div>
                        <span className='font-bold'>online</span>
                    </div>
                </div>


                <div className="chat-area-cont w-full shadow_cstm p-2 flex-1 bg-white my-2 rounded-md h-auto overflow-y-auto">
                    {
                        !isMobile && isLoading === true && <div className='w-full h-full flex items-center justify-center'>
                            <Loading />
                        </div>
                    }
                    <div className="chat-area w-full h-full flex flex-col justify-start items-start">
                        {
                            message != null && message.map((elem, index) => {
                                let msgData = { content: elem.content, date: elem.date_entered, msgId: elem.message_id }

                                if (elem.sendBy === user_id) {
                                    return <ChatMessageSelf key={index} data={msgData} />
                                } else {
                                    return <ChatMessageOther key={index} data={msgData} />
                                }
                            })
                        }

                    </div>
                </div>

                <div className="chat-area-input w-full shadow_cstm p-2 bg-white rounded-md">
                    <input type="text" className='outline-none p-3 text-lg sm:text-xl md:text-2xl font-semibold border-2 border-red h-full w-full border-none' placeholder='Message' name='message' onChange={(e) => { handleChange(e) }} onKeyUp={handleSubmit} />
                </div>
            </div>
        }

    </>

    )
}

export default ChatArea