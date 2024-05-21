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
import box_img from '../../asset/images/box.webp'
import api_url from '../../utils/utils';


const Details = () => {

    let { cat, id } = useParams();
    let navigate = useNavigate();
    // console.log(cat, id);
    const user_id = localStorage.getItem('user_id')
    let token = localStorage.getItem("token");


    const [items, setItems] = useState(null);

    const fetchData = async (url) => {
        try {
            // const response = await axios.get(url);
            // setItems(response.data.data[0])
            await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token

                }
            }).then(res => res.json())
                .then((data) => {
                    console.log(data.data[0]);
                    setItems(data.data[0])

                }).catch((e) => {
                    console.log(e);
                })

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        let url = `${api_url}/api/items/${id}`
        fetchData(url)
    }, [id]);

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

                <div className="w-[95%] md:w-[75%] h-full relative flex flex-wrap flex-column sm:flex-row rounded-xl bg1 overflow-hidden">
                    <div className="details-cont-img w-full h-[30vh] md:h-[50vh] sm:w-[35%] m-2 bg-white overflow-hidden rounded-xl">

                        {items != null &&
                            < img src={items?.img[0] == null ? box_img : items?.img[0]} alt="" className='h-full w-full object-contain' />
                        }
                    </div>
                    <div className="details-cont-details w-full sm:w-[48%] md:h-[50vh] h-full px-3 mt-2 ">
                        {
                            items != null &&
                            <div className='flex flex-col  justify-between items-start h-full'>

                                <div className='mb-4'>
                                    <span className=" text-2xl sm:text-xl md:text-5xl font-bold block">{items.item_name}</span>
                                    < span className=" text-xl sm:text-xl md:text-2xl font-semibold md:mt-4 md:mb-4 block">{items.item_desc}</span>
                                </div>

                                <div className="flex flex-row flex-wrap justify-start items-center w-full">

                                    <div className="text-xl sm:text-xl md:text-2xl md:my-2 flex flex-row justify-start items-center  w-[95%]">
                                        <MdDateRange color='blue' />
                                        <span className='text-xl font-semibold ml-2'>{new Date(items.date_entered).toLocaleDateString('en-GB')}</span>
                                    </div>

                                    <div className="text-lg sm:text-xl md:text-2xl md:my-2 flex flex-row justify-start items-center w-[95%]">
                                        <IoLocationOutline color='blue' />
                                        <span className='text-lg sm:text-xl md:text-2xl font-semibold  ml-2'>{items.location}</span>
                                    </div>

                                    <div className="text-lg sm:text-xl md:text-xl md:my-2 flex flex-row justify-start items-center w-[95%]">
                                        <FaRupeeSign color='blue' />
                                        <span className='text-lg sm:text-xl md:text-2xl font-semibold  ml-2'>{items.item_price}</span>
                                    </div>

                                    <div className="text-lg sm:text-xl md:text-2xl md:my-2 flex flex-row justify-start items-center w-[95%]">
                                        <BiCategoryAlt color='red' />
                                        <span className='text-lg sm:text-xl md:text-2xl font-semibold  ml-2'>{items.item_category}</span>
                                    </div>

                                </div>

                                <span className='bg5 px-3 py-2 text-lg text-white sm:text-xl md:text-3xl absolute -top-2 -right-2 rounded-se-xl rounded-es-xl mt-2 mr-2'>{items.status}</span>
                                {
                                    items.posted_by != undefined && user_id !== items.posted_by && <button className='bg5 absolute bottom-0 right-3 rounded-md my-2 px-4 py-1 text-lg sm:text-xl md:text-2xl font-semibold text-white' onClick={() => startChat(items.posted_by, items.item_id)}>Chat</button>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className="w-[24%] min-h-[50vh] hidden md:flex">
                    <UserDetailsCard userId={items?.posted_by} />
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
