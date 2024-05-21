import React, { useEffect, useState } from 'react'
import userLogo from '../../asset/images/user.png';
import { BsSend } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import api_url from '../../utils/utils';


function ChatHandler({ data, setRefresh }) {

    let [message, setMessage] = useState("Hi");
    let [senderData, setSenderData] = useState(null);
    let [receiverData, setReceiverData] = useState(null);
    let navigate = useNavigate();
    let token = localStorage.getItem("token");


    console.log(data);

    let { id, item_id } = useParams();

    const getUserDetails = async (userId) => {
        let url = `${api_url}/api/users/${userId}`;

        let result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((userData) => {
                let userdata = userData.data.data;
                console.log(userdata);
                return userdata
            }).catch((e) => {
                console.log(e);
                return null
            })

        return result;

    };

    const [formData, setFormData] = useState({
        "sender": data.sender,
        "receiver": data.receiver,
        "itemId": data.item_id,
        "message": 'Hi',
        "chat_started_by": data.user_id
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
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
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data);

                setRefresh(true);

                // navigate(`/chat/${id}/${item_id}`)
                navigate(`/chat`)

            }).catch((e) => {
                console.log(e);
            })
    }

    const getUser = async () => {

        let data_sender = await getUserDetails(data.sender);
        setSenderData(data_sender)
        let data_receiver = await getUserDetails(data.receiver);
        setReceiverData(data_receiver)
    }

    useEffect(() => {
        getUser()
    }, [data])

    console.log(senderData, receiverData);

    return (
        <div className='w-full flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col justify-around items-center w-full md:w-[25%] h-[50%] py-2 px-2 bg5 rounded-md'>
                <span className='text-3xl text-white'>Start Chat with Seller</span>
                <div className="chat-banner flex flex-row justify-around items-center">
                    <div className='buyer-logo h-12 w-12 md:h-16 md:w-16 flex flex-col justify-center items-center rounded-3xl'>
                        <img src={senderData?.user_img == '' ? userLogo : senderData?.user_img} className='rounded-full h-12 w-12 md:h-16 md:w-16 object-cover object-center' />
                        <span className='text-white text-lg'>{senderData?.username}</span>
                    </div>
                    <span className='text-xl mx-3 my-8 text-white font-semibold'>Want to Message</span>
                    <div className='buyer-logo h-12 w-12 md:h-16 md:w-16 flex flex-col justify-center items-center rounded-3xl'>
                        <img src={receiverData?.user_img == '' ? userLogo : receiverData?.user_img} className='rounded-full h-12 w-12 md:h-16 md:w-16 object-cover object-center' />
                        <span className='text-white text-lg'>{receiverData?.username}</span>
                    </div>
                </div>
                <div className="chat-area-input shadow_cstm p-2 rounded-lg flex flex-row justify-center items-center bg1">
                    <input type="text" className='outline-none p-2 text-sm sm:text-lg border-2 bg-white-700 h-full w-full rounded-xl' placeholder='Message' name='message' onChange={(e) => { handleChange(e) }} />
                    <button className="p-2 md:p-1 rounded-md bg5 text-white ml-2" onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChatHandler