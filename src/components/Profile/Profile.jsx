import './index.css'
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import userData from '../../asset/data/user.json'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card2 from '../Card/Card2';
import api_url from '../../utils/utils';


const Profile = () => {

    let userId = localStorage.getItem('user_id');
    let token = localStorage.getItem("token");
    // console.log(userId);
    let { isLogin, setIsLogin } = useContext(MyContext)
    const [loading, setLoading] = useState(false);
    const [user_data, setUserData] = useState([])
    const [activetabs, setActiveTabs] = useState(0)


    const fetchData = async () => {
        try {
            let url = `${api_url}/api/items/user`;
            await fetch(url, {
                method: "POST",
                body: JSON.stringify({ userId: userId }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token
                }
            }).then(res => res.json())
                .then((data) => {
                    // console.log(data.data[0]);
                    setUserData(data.data)
                }).catch((e) => {
                    // console.log(e);
                })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const delete_item = (id) => {
        try {
            let url = `${api_url}/api/items/${id}`;
            const response = fetch(url,
                {
                    method: 'DELETE',
                    body: JSON.stringify({ "item_id": id }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "authorization": token
                    }

                }
            );
            // // console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="bg1 rounded-md shadow_cstm relative -my-2 mx-1 sm:mx-2">
            <div className="flex flex-col justify-between bg-white-200 ">

                <div className="flex flex-row justify-between md:justify-start flex-wrap p-2 rounded-md bg-black mt-2 mx-2">

                    <div className={`h-10 w-[3.8rem] sm:w-[4rem] mx-1 sm:mx-2 my-1 sm:mb-0 text-white text-sm  rounded-md ${activetabs !== 0 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(0) }}>All</div>

                    <div className={`h-10 w-[3.8rem] sm:w-[4rem] mx-1 sm:mx-2 my-1 sm:mb-0 text-white text-sm   rounded-md ${activetabs !== 1 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(1) }}>Available</div>

                    <div className={`h-10 w-[3.8rem] sm:w-[4rem] mx-1 sm:mx-2 my-1 sm:mb-0 text-white text-sm   rounded-md ${activetabs !== 2 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(2) }}>Deleted</div>

                    <div className={`h-10 w-[3.8rem] sm:w-[4rem] mx-1 sm:mx-2 my-1 sm:mb-0 text-white text-sm rounded-md ${activetabs !== 3 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(3) }}>Pending</div>

                    <div className={`h-10 w-[3.8rem] sm:w-[4rem] mx-1 sm:mx-2 my-1 sm:mb-0 text-white text-sm rounded-md ${activetabs !== 4 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(4) }}>Rejected</div>

                    <div className=" absolute bottom-2 right-1 mx-2 cursor-pointer z-10">
                        <Link to={`/add/${userId}`} className="flex">
                            <button className={`bg5  text-sm sm:text-lg text-white rounded-full hover:bg-gray-600 transition duration-300 h-14 w-14`} onClick={() => { setActiveTabs(0) }}>ADD</button>
                        </Link>
                    </div>
                </div>

                {
                    activetabs == 0 && <div className="container flex flex-row flex-wrap justify-between md:justify-around items-center mb-8 min-h-[72vh]">
                        {
                            user_data.length == 0 && <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-sm sm:text-lg text-gray-600'>Not Data Found</p>
                            </div>
                        }
                        {user_data.length > 0 && user_data.map((item, index) => {

                            return (
                                <Card2 item={item} delete_item={delete_item} key={index} />
                            )
                        })
                        }
                    </div>
                }
                {
                    activetabs == 1 && <div className="container flex flex-row flex-wrap justify-between md:justify-around items-center mb-8 min-h-[72vh]">
                        {
                            user_data.length == 0 && <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-gray-600 text-sm sm:text-lg'>Not Data Found</p>
                            </div>
                        }
                        {user_data.length > 0 && user_data.filter((item) => item.status == "available").map((item, index) => {

                            return (
                                <Card2 item={item} delete_item={delete_item} key={index} />
                            )
                        })
                        }
                    </div>
                }
                {
                    activetabs == 2 && <div className="container flex flex-row flex-wrap justify-between md:justify-around items-center mb-8 min-h-[72vh]">
                        {
                            user_data.length == 0 && <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-gray-600 text-sm sm:text-lg'>Not Data Found</p>
                            </div>
                        }
                        {user_data.length > 0 && user_data.filter((item) => item.status == "unavailable").map((item, index) => {

                            return (
                                <Card2 item={item} key={index} />
                            )
                        })
                        }
                    </div>
                }
                {
                    activetabs == 3 && <div className="container flex flex-row flex-wrap justify-between md:justify-around items-center mb-8 min-h-[72vh]">
                        {
                            user_data.length == 0 && <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-gray-600 text-sm sm:text-lg'>Not Data Found</p>
                            </div>
                        }
                        {user_data.length > 0 && user_data.filter((item) => item.status == "pending").map((item, index) => {

                            return (
                                <Card2 item={item} key={index} />
                            )
                        })
                        }
                    </div>
                }
                {
                    activetabs == 4 && <div className="container flex flex-row flex-wrap justify-between md:justify-around items-center mb-8 min-h-[72vh]">
                        {
                            user_data.length == 0 && <div className='flex flex-row justify-center items-center w-full'>
                                <p className='text-gray-600 text-sm sm:text-lg'>Not Data Found</p>
                            </div>
                        }
                        {user_data.length > 0 && user_data.filter((item) => item.status == "rejected").map((item, index) => {
                            return (
                                <Card2 item={item} key={index} />
                            )
                        })
                        }
                    </div>
                }


            </div>

        </div >
    );
};

export default Profile;
