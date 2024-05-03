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
import { BiCategoryAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";


const Details = () => {


    let { cat, id } = useParams();
    let navigate = useNavigate();
    console.log(cat, id);
    const user_id = localStorage.getItem('user_id')

    // const { bannerData, catList, postData } = useContext(MyContext);

    const [items, setItems] = useState([]);

    const fetchData2 = async (url) => {
        try {
            const response = await axios.get(url);
            console.log("details --> ", response.data.data);
            // let itemdata = response.data[cat].filter((data) => {
            //     console.log(data);
            //     if (data._id == id) {
            //         return data
            //     }
            // })
            // console.log(itemdata);
            setItems(response.data.data[0])
            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        fetchData2(`http://localhost:3000/api/items/${id}`)
    }, []);


    const startChat = (seller_id, item_id) => {
        navigate(`/chat/${seller_id}/${item_id}`);
    }

    const list = [
        { 'name': 'Home', 'ref': '/' },
        { 'name': cat, 'ref': '/listing/' + cat },
        { 'name': id, 'ref': id }
    ]

    return (
        <div className=" mx-auto mt-8 md:px-4">
            <BreadCrum list={list} />

            <div className="relative mt-3 flex flex-wrap flex-column sm:flex-row border-solid border-indigo-400 rounded-xl border-2 w-full overflow-hidden min-h-[60vh]">

                <div className="details-cont-img w-full min-h-[40vh] sm:w-[48%] m-2  bg-indigo-600 overflow-hidden rounded-md">
                    {/* <img src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="item img" style={{ height: "100%", width: "100%" }} /> */}

                </div>
                <div className="details-cont-details w-full sm:w-[48%] h-full px-3 mt-2 ">
                    {
                        items != null && <>

                            <p className="block text-lg sm:text-xl md:text-7xl font-bold">{items.item_name}</p>
                            < p className="block text-lg sm:text-xl md:text-4xl font-semibold my-2">{items.item_desc}</p>

                            <div className="flex flex-row flex-wrap justify-start items-center ">

                                <div className="text-lg sm:text-xl md:text-3xl my-2 flex flex-row justify-start items-center  w-[48%]">
                                    <MdDateRange color='indigo' />
                                    <p className='text-lg sm:text-xl md:text-3xl font-semibold'>{new Date(items.date_entered).toLocaleDateString('en-GB')}</p>
                                </div>

                                <div className="text-lg sm:text-xl md:text-3xl my-2 flex flex-row justify-start items-center w-[48%]">
                                    <IoLocationOutline color='blue' />
                                    <p className='text-lg sm:text-xl md:text-3xl font-semibold'>{items.location}</p>
                                </div>

                                <div className="text-lg sm:text-xl md:text-3xl my-2 flex flex-row justify-start items-center w-[48%]">
                                    <FaRupeeSign color='green' />
                                    <p className='text-lg sm:text-xl md:text-3xl font-semibold'>{items.item_price}</p>
                                </div>

                                <div className="text-lg sm:text-xl md:text-3xl my-2 flex flex-row justify-start items-center w-[48%]">
                                    <BiCategoryAlt color='red' />
                                    <p className='text-lg sm:text-xl md:text-3xl font-semibold'>{items.item_category}</p>
                                </div>

                            </div>

                            <p className='bg-green-500 px-2 py-2 text-lg sm:text-xl md:text-3xl absolute top-0 right-0 rounded-se-xl rounded-es-xl mt-2 mr-2'>{items.status}</p>
                            {
                                items.posted_by != undefined && user_id !== items.posted_by && <button className='bg-green-500 min-w-[2rem] rounded-md my-2 px-8 py-2 text-2xl font-bold text-white' onClick={() => startChat(items.posted_by, items.item_id)}>Chat</button>
                            }
                        </>

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
