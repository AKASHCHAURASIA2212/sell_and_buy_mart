import React, { useEffect, useState } from 'react'
import ChatArea from './ChatArea'
import ChatSideBar from './ChatSideBar'
import userLogo from '../../asset/images/user.png';
import ChatHandler from './ChatHandler';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function ChatContainer() {

    const user_id = localStorage.getItem("user_id")
    const username = localStorage.getItem("username")

    const [showChat, setShowChat] = useState(false);
    const [buyer_data, setBuyerData] = useState(null);
    const [seller_data, setSellerData] = useState(null);

    const isMobile = window.innerWidth <= 640; // Assuming tablet size is <= 768px

    let { id } = useParams();
    let navigate = useNavigate();
    console.log(id);

    // const { bannerData, catList, postData } = useContext(MyContext);

    const [items, setItems] = useState([]);

    const fetchData2 = async (url) => {
        try {
            const response = await axios.get("http://localhost:3000/items_data");
            // console.log("details --> ", response.data);
            let itemdata = response.data.filter((data) => {
                // console.log(data);
                if (data._id == id) {
                    return data
                }
            })
            console.log("ChatContainer : ", itemdata);
            setBuyerData(itemdata[0].buyer)
            setSellerData(itemdata[0].seller)

            console.log(buyer_data);
            console.log(seller_data);

            // if (buyer_data.length > 0) {
            //     setShowChat(true);
            // }
            // setItems(itemdata[0])
            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        fetchData2("http://localhost:3000/items_data")
    }, []);


    return (
        <div className="h-[88vh] flex justify-start w-full px-8 py-4 bg-white-500">
            {buyer_data == null &&
                <ChatHandler />
                // <h1>CHAT HANDLER</h1>
            }
            {buyer_data != null &&
                <div className='w-full flex flex-row flex-wrap justify-between items-center h-full'>
                    <ChatSideBar buyer_data_arr={buyer_data} seller_data_arr={seller_data} />
                    {
                        !isMobile &&
                        <ChatArea className='' />
                    }
                </div>
            }
        </div>
    )
}

export default ChatContainer