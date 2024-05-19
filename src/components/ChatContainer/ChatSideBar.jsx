import React, { useEffect, useState } from 'react'
import userLogo from '../../asset/images/user.png';
import ChatBox from './ChatBox';
import './index.css'
import { useNavigate } from 'react-router-dom';

function ChatSideBar({ buyer_data_arr, seller_data_arr, details }) {

    let navigate = useNavigate();
    console.log("buyer_data_arr :", buyer_data_arr);
    console.log("seller_data_arr :", seller_data_arr);
    // console.log("details :", details, "seller_data_arr : ", seller_data_arr, "buyer_data_arr : ", buyer_data_arr);
    const user_id = localStorage.getItem("user_id")
    const username = localStorage.getItem("username")

    let bdarr = [];
    let sdarr = [];
    buyer_data_arr.forEach((elem) => {
        let data = { chatID: elem.chat_id };
        data.item_name = elem.item_details[0].item_name
        data.item_category = elem.item_details[0].item_category

        elem.user_details.forEach((user) => {
            if (user.user_id != user_id) {
                data.UserName = user.username
                data.UserID = user.user_id
                data.Mail = user.email
                data.user_img = user.user_img
            }
        })

        data.last_message = elem.messages[elem.messages.length - 1].content
        data.date_entered = elem.messages[elem.messages.length - 1].date_entered


        bdarr.push(data)
    })

    seller_data_arr.forEach((elem) => {

        let data = { chatID: elem.chat_id };
        data.item_name = elem.item_details[0].item_name
        data.item_category = elem.item_details[0].item_category

        elem.user_details.forEach((user) => {
            if (user.user_id != user_id) {
                data.UserName = user.username
                data.UserID = user.user_id
                data.Mail = user.email
                data.user_img = user.user_img

            }
        })
        // console.log("elem.messages : ", elem.messages);
        data.last_message = elem.messages[elem.messages.length - 1].content
        data.date_entered = elem.messages[elem.messages.length - 1].date_entered

        sdarr.push(data)
    })

    const [buyer_data, setBuyerData] = useState(bdarr);
    const [seller_data, setSellerData] = useState(sdarr);

    const [activetabs, setActiveTabs] = useState(0)
    return (
        <div className=' bg-white-500 w-full sm:w-[50%] md:w-[40%] lg:w-[30%] h-[86vh]'>
            <div className="bg-18 shadow_cstm p-1 rounded-md w-full h-full">
                <div className="flex flex-col justify-start w-full ">

                    <div className="flex justify-around items-center w-full">
                        <button className={` text-white focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 my-3 w-2/5 ${activetabs !== 0 ? 'bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl' : 'bg-gradient-to-br from-indigo-600 to-indigo-500 hover:bg-gradient-to-bl'}`} onClick={() => { setActiveTabs(0) }}>Buyer</button>
                        <button className={` text-white focus:outline-none focus:ring-blue-100font-medium rounded-lg text-sm px-5 py-3 text-center me-2 my-3 w-2/5  ${activetabs !== 1 ? 'bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl' : 'bg-gradient-to-br from-indigo-600 to-indigo-500 hover:bg-gradient-to-bl'}`} onClick={() => { setActiveTabs(1) }}>Seller</button>
                    </div>

                    {
                        activetabs == 0 && <div className="container flex flex-col flex-wrap justify-start items-center mb-2 w-full h-[70vh] overflow-y-auto ">
                            <ChatBox user_data={buyer_data} />
                        </div>
                    }
                    {
                        activetabs == 1 && <div className="container flex flex-row flex-wrap justify-start items-center mb-4 w-full h-[70vh] overflow-y-auto  ">
                            <ChatBox user_data={seller_data} />
                        </div>
                    }



                </div>

            </div ></div>
    )
}

export default ChatSideBar