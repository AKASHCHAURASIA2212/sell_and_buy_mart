import React, { useEffect, useState } from 'react'
import ChatArea from './ChatArea'
import ChatSideBar from './ChatSideBar'
import userLogo from '../../asset/images/user.png';
import ChatHandler from './ChatHandler';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
function ChatContainer() {

    const user_id = localStorage.getItem("user_id")
    const username = localStorage.getItem("username")

    const [showChat, setShowChat] = useState(false);
    const [buyer_data, setBuyerData] = useState(null);
    const [seller_data, setSellerData] = useState(null);
    const [details, setDetails] = useState(null);
    const isMobile = window.innerWidth <= 640;

    const [screenWidth, setScrennWidth] = useState(window.innerWidth);


    let { id, item_id } = useParams();
    let sellerId = id;
    let buyerId = user_id;
    console.log(sellerId, buyerId, item_id);
    let navigate = useNavigate();
    // console.log(id);

    let chat_data = { sender: buyerId, receiver: sellerId, item_id, user_id };

    // const { bannerData, catList, postData } = useContext(MyContext);

    const [items, setItems] = useState([]);

    const fetchData = async (url) => {
        try {

            let result = await fetch("http://localhost:3000/api/chat/item", {
                method: "POST",
                body: JSON.stringify({ sellerId, buyerId, item_id }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then((data) => {
                    console.log("chat present ", data.data);
                    if (data.data.length != 0) {
                        fetchChatData();
                    }

                    // navigate('/chat')

                }).catch((e) => {
                    console.log(e);
                })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const fetchChatData = async (url) => {
        try {

            await fetch("http://localhost:3000/api/chat/user", {
                method: "POST",
                body: JSON.stringify({ sellerId, buyerId, user_id }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then((data) => {
                    // console.log(data.data);
                    let result = data.data;
                    setBuyerData(result.resp.buyer_chat)
                    setSellerData(result.resp.seller_chat)
                    setDetails({
                        itemData: result.itemData, userData: result.userData
                    })

                }).catch((e) => {
                    console.log(e);
                })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {

        if (item_id == undefined && id == undefined) {
            fetchChatDataByUserId()
        } else {
            fetchData("http://localhost:3000/api/chat/item")
        }
    }, [isMobile]);


    return (
        <div className="h-[88vh] flex justify-start w-full px-2 py-2 md:py-4">
            {buyer_data == null &&
                <ChatHandler data={chat_data} />
                // <h1>CHAT HANDLER</h1>
            }
            {buyer_data != null &&
                <div className='w-full h-full flex flex-row flex-wrap justify-between items-center'>
                    <ChatSideBar buyer_data_arr={buyer_data} seller_data_arr={seller_data} details={details} />
                    {!isMobile &&
                        <Outlet />
                    }
                </div>
            }
        </div>
    )
}

export default ChatContainer