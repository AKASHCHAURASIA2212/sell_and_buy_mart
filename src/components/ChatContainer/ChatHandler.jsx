import React, { useState } from 'react'
import userLogo from '../../asset/images/user.png';
import { BsSend } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import api_url from '../../utils/utils';


function ChatHandler({ data }) {

    let [message, setMessage] = useState("Hi");
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        "sender": data.sender,
        "receiver": data.receiver,
        "itemId": data.item_id,
        "message": 'Hi',
        "chat_started_by": data.user_id
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let url = `${api_url}/api/chat/new`;
        let result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);

                navigate(`/chat`)

            }).catch((e) => {
                console.log(e);
            })
    }
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
                <input type="text" className='outline-none p-2 text-sm sm:text-lg border-2 border-red h-full w-full rounded-xl' placeholder='Message' name='message' onChange={(e) => { handleChange(e) }} />
                <button className="send p-2 rounded-3xl bg-indigo-400 text-white ml-2">
                    <BsSend size={30} onClick={handleSubmit} />
                </button>
            </div>
        </div>
    )
}

export default ChatHandler