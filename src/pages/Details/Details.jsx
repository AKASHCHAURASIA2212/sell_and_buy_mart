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
import UserDetailsCard from '../../components/Card/UserDetailsCard';


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
        { 'name': items?.item_name, 'ref': items?.item_name }
    ]

    return (
        <div className="mt-6 md:px-4 px-2 -pl-4">
            <BreadCrum list={list} />

            <div className="my-3 flex flex-col sm:flex-row justify-between items-center">
                <div className="w-[95%] md:w-[75%] h-full relative flex flex-wrap flex-column sm:flex-row rounded-xl border-2 overflow-hidden">
                    <div className="details-cont-img w-full h-[30vh] md:h-[50vh] sm:w-[35%] m-2  bg-blue-400 overflow-hidden rounded-xl">
                    </div>
                    <div className="details-cont-details w-full sm:w-[48%] md:h-[50vh] h-full px-3 mt-2 ">
                        {
                            items != null &&
                            <div className='flex flex-col  justify-between items-center h-full'>

                                <div className=''>
                                    <p className="block text-lg sm:text-xl md:text-5xl font-bold">{items.item_name}</p>

                                    < p className="block text-lg sm:text-xl md:text-2xl font-semibold md:mt-6 md:mb-4">{items.item_desc}</p>

                                </div>
                                <div className="flex flex-row flex-wrap justify-start items-center w-full">

                                    <div className="text-lg sm:text-xl md:text-2xl md:my-2 flex flex-row justify-start items-center  w-[95%]">
                                        <MdDateRange color='blue' />
                                        <p className='text-lg sm:text-xl md:text-2 font-semibold ml-2'>{new Date(items.date_entered).toLocaleDateString('en-GB')}</p>
                                    </div>

                                    <div className="text-lg sm:text-xl md:text-2xl md:my-2 flex flex-row justify-start items-center w-[95%]">
                                        <IoLocationOutline color='blue' />
                                        <p className='text-lg sm:text-xl md:text-2xl font-semibold  ml-2'>{items.location}</p>
                                    </div>

                                    <div className="text-lg sm:text-xl md:text-xl md:my-2 flex flex-row justify-start items-center w-[95%]">
                                        <FaRupeeSign color='blue' />
                                        <p className='text-lg sm:text-xl md:text-2xl font-semibold  ml-2'>{items.item_price}</p>
                                    </div>

                                    <div className="text-lg sm:text-xl md:text-2xl md:my-2 flex flex-row justify-start items-center w-[95%]">
                                        <BiCategoryAlt color='red' />
                                        <p className='text-lg sm:text-xl md:text-2xl font-semibold  ml-2'>{items.item_category}</p>
                                    </div>

                                </div>

                                <p className='bg-blue-400 px-3 py-2 text-lg sm:text-xl md:text-3xl absolute top-0 right-0 rounded-se-xl rounded-es-xl mt-2 mr-2'>{items.status}</p>
                                {
                                    items.posted_by != undefined && user_id !== items.posted_by && <button className='bg-blue-500 min-w-[2rem] rounded-md my-2 px-8 py-2 text-2xl font-bold text-white' onClick={() => startChat(items.posted_by, items.item_id)}>Chat</button>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className="w-[24%] min-h-[50vh] hidden md:flex">
                    <UserDetailsCard />
                </div>

            </div>

            <div className="flex mt-2 -ml-2">
                <div className="w-full">
                    <Listing title='Similier Items' types={cat} />
                </div>
            </div>
        </div>
    );
};

export default Details;
