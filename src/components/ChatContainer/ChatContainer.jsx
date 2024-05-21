import React, { useEffect, useState } from 'react'
import ChatArea from './ChatArea'
import ChatSideBar from './ChatSideBar'
import userLogo from '../../asset/images/user.png';
import ChatHandler from './ChatHandler';
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import api_url from '../../utils/utils';
import loaderGif from '../../asset/images/loading.gif'
import Loading from '../Loading/Loading';

function ChatContainer() {

    let [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    const user_id = localStorage.getItem("user_id")
    let token = localStorage.getItem("token");

    const [showChat, setShowChat] = useState(false);
    const [buyer_data, setBuyerData] = useState(null);
    const [seller_data, setSellerData] = useState(null);
    const [details, setDetails] = useState(null);
    const isMobile = window.innerWidth <= 640;

    let { id, item_id } = useParams();
    let sellerId = id;
    let buyerId = user_id;
    // console.log(sellerId, buyerId, item_id);

    let chat_data = { sender: buyerId, receiver: sellerId, item_id, user_id };


    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const fetchData = async () => {
        try {
            let url = `${api_url}/api/chat/item`;
            let result = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ sellerId, buyerId, item_id }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token
                }
            }).then(res => res.json())
                .then((data) => {
                    // console.log("chat present ", data.data);
                    if (data.data.length != 0) {
                        fetchChatData();
                    }
                }).catch((e) => {
                    console.log(e);
                })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const fetchChatData = async (url) => {
        try {
            let url = `${api_url}/api/chat/user`;

            await fetch(url, {
                method: "POST",
                body: JSON.stringify({ sellerId, buyerId, user_id }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token
                }
            }).then(res => res.json())
                .then((data) => {
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

    const fetchChatDataByUserId = async (url) => {
        try {
            let url = `${api_url}/api/chat/single`;

            await fetch(url, {
                method: "POST",
                body: JSON.stringify({ user_id }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token
                }
            }).then(res => res.json())
                .then((data) => {
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
            fetchData()
        }
        setRefresh(false);
    }, [isMobile, refresh]);

    return (
        <>

            {
                isLoading === true && <div className='loader'>
                    <Loading />
                </div>
            }

            <div className="h-[88vh] flex justify-start w-full px-2 py-2 md:py-0">
                {buyer_data == null &&
                    <ChatHandler data={chat_data} setRefresh={setRefresh} />
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
        </>
    )
}

export default ChatContainer