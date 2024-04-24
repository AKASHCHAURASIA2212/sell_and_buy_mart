import './index.css'
import React, { useContext, useState, useEffect } from 'react';
import SliderComponent from '../../components/slider/slider';
import { useParams } from 'react-router-dom';
import Listing from '../Listing/Listing';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BreadCrum from '../../components/BreadCrum/BreadCrum';
const Details = () => {


    let { cat, id } = useParams();
    let navigate = useNavigate();
    console.log(cat, id);

    // const { bannerData, catList, postData } = useContext(MyContext);

    const [items, setItems] = useState([]);

    const fetchData2 = async (url) => {
        try {
            const response = await axios.get(url);
            console.log("details --> ", response.data);
            let itemdata = response.data[cat].filter((data) => {
                console.log(data);
                if (data._id == id) {
                    return data
                }
            })
            // console.log(itemdata);
            setItems(itemdata[0])
            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        fetchData2("http://localhost:3000/items")
    }, []);


    // const items = Object.values(items).flat().filter((item) => {
    //     return item.id == id && item.category == cat
    // });

    console.log("items -> ", items);

    const startChat = (id) => {
        navigate(`/chat/${id}`);
    }

    const list = [
        { 'name': 'Home', 'ref': '/' },
        { 'name': cat, 'ref': '/listing/' + cat },
        { 'name': id, 'ref': id }
    ]

    return (
        <div className=" mx-auto mt-8 md:px-4">
            <BreadCrum list={list} />

            <div className="mt-3 flex flex-wrap flex-column sm:flex-row border-solid border-indigo-400 rounded-md border-2 w-full overflow-hidden min-h-[40vh]">

                <div className="details-cont-img w-full min-h-[40vh] sm:w-[48%] m-2  bg-indigo-600 overflow-hidden rounded-md">
                    {/* <img src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="item img" style={{ height: "100%", width: "100%" }} /> */}

                </div>
                <div className="details-cont-details w-full sm:w-[48%] h-full px-3 mt-2 ">
                    {
                        items != null && <>
                            < span className="block text-lg sm:text-xl md:text-2xl font-semibold">{items.item_desc}</span>
                            <span className="block text-lg sm:text-xl md:text-2xl">{items.posted_by}</span>
                            <span className='block text-lg sm:text-xl md:text-2xl'>{items.date_entered}</span>
                            <span className='block text-lg sm:text-xl md:text-2xl'>{items.location}</span>
                            <span className='block text-lg sm:text-xl md:text-2xl'>{items.item_price}</span>
                            <span className='block text-lg sm:text-xl md:text-2xl'>{items.status}</span>
                            <span className='block text-lg sm:text-xl md:text-2xl'>{items.item_category}</span>
                            <button className='bg-green-500 min-w-[2rem] rounded-md my-2 px-8 py-2 text-xl font-bold text-white' onClick={() => startChat(id)}>Chat</button></>
                    }

                </div>
            </div>

            <div className="flex mt-8">
                <div className="w-full">
                    <Listing title='Similier Items' types={cat} />
                </div>
            </div>
        </div>
    );
};

export default Details;
