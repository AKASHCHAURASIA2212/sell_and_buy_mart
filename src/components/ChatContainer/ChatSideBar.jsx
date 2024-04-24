import React, { useEffect, useState } from 'react'
import userLogo from '../../asset/images/user.png';
import ChatBox from './ChatBox';
import './index.css'
function ChatSideBar({ buyer_data_arr, seller_data_arr }) {

    console.log("buyer_data_arr :", buyer_data_arr);
    console.log("seller_data_arr :", seller_data_arr);
    const user_id = localStorage.getItem("user_id")
    const username = localStorage.getItem("username")


    const [buyer_data, setBuyerData] = useState(null);
    const [seller_data, setSellerData] = useState(null);


    const getUserData = async () => {
        let result = await fetch("http://localhost:3000/user_data", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);

                let seller_data = data.filter((user) => {
                    if (user.user_id == seller_data_arr[0]) {
                        return user;
                    }
                })

                setSellerData(seller_data);

                let buyer_data = data.filter(user => buyer_data_arr.includes(user.user_id))

                setBuyerData(buyer_data)

                console.log("buyer_data :", buyer_data);
                console.log("seller_data :", seller_data);

            }).catch((e) => {
                console.log(e);
            })
    }

    useEffect(() => {
        getUserData()
    }, [])



    const [activetabs, setActiveTabs] = useState(0)
    return (
        <div className='h-full bg-white-500 w-full sm:w-[50%] md:w-[40%] lg:w-[30%]'>
            <div className="bg-white shadow1 p-1 rounded-md w-full h-full">
                <div className="flex flex-col justify-start mb-4 w-full">

                    <div className="flex justify-around items-center w-full">
                        <button className={` text-white focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 my-3 w-2/5 ${activetabs !== 0 ? 'bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl' : 'bg-gradient-to-br from-indigo-600 to-indigo-500 hover:bg-gradient-to-bl'}`} onClick={() => { setActiveTabs(0) }}>Buyer</button>
                        <button className={` text-white focus:outline-none focus:ring-blue-100font-medium rounded-lg text-sm px-5 py-3 text-center me-2 my-3 w-2/5  ${activetabs !== 1 ? 'bg-gradient-to-br from-gray-600 to-gray-500 hover:bg-gradient-to-bl' : 'bg-gradient-to-br from-indigo-600 to-indigo-500 hover:bg-gradient-to-bl'}`} onClick={() => { setActiveTabs(1) }}>Seller</button>
                    </div>

                    {
                        activetabs == 0 && <div className="container flex flex-col flex-wrap justify-start items-center mb-2 w-full">
                            <ChatBox user_data={buyer_data} />
                        </div>
                    }
                    {
                        activetabs == 1 && <div className="container flex flex-row flex-wrap justify-start items-center mb-4 w-full">
                            <ChatBox user_data={seller_data} />
                        </div>
                    }



                </div>

            </div ></div>
    )
}

export default ChatSideBar