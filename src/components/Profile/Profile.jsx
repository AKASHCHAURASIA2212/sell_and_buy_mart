import './index.css'
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import userData from '../../asset/data/user.json'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card2 from '../Card/Card2';


const Profile = () => {

    let userId = localStorage.getItem('user_id');
    console.log(userId);

    let { isLogin, setIsLogin } = useContext(MyContext)

    const [loading, setLoading] = useState(false);

    const [user_data, setUserData] = useState([])
    const [activetabs, setActiveTabs] = useState(0)


    const fetchData = async () => {
        try {
            await fetch(`http://localhost:3000/api/items/user`, {
                method: "POST",
                body: JSON.stringify({ userId: userId }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then((data) => {
                    console.log(data.data[0]);
                    setUserData(data.data)
                    // localStorage.setItem("userId", data.userId)
                    // localStorage.setItem("username", data.username)
                    // localStorage.setItem("login_status", true)
                    // setIsLogin(true);
                    // navigate('/')

                }).catch((e) => {
                    console.log(e);
                })

            // console.log(allItems);

            // setUserData(allItems)

            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const delete_item = (id) => {
        try {
            const response = fetch(`http://localhost:3000/api/items/${id}`
                ,
                {
                    method: 'DELETE',
                    body: JSON.stringify({ "_id": id }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }

                }
            );
            console.log(response.data);
            // let allItems = Object.values(response.data).flat().filter((data) => {
            //     if (data.seller[0] == userId) {
            //         return data;
            //     }
            // });
            // console.log(sallItems);
            // setUserData(allItems)
            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="bg-white sm:p-0 sm:m-0 rounded-md shadow-md relative -my-4">
            <div className="flex flex-col justify-between bg-white-200 ">

                <div className="flex flex-row md:justify-start flex-wrap p-4 rounded-md md:mx-10 bg-black">

                    <div className={`h-10 w-[4rem] mx-2 my-1 sm:mb-0 text-white text-sm  rounded-md ${activetabs !== 0 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(0) }}>View All</div>

                    <div className={`h-10 w-[4rem] mx-2 my-1 sm:mb-0 text-white text-sm   rounded-md ${activetabs !== 1 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(1) }}>Active</div>

                    <div className={`h-10 w-[4rem] mx-2 my-1 sm:mb-0 text-white text-sm   rounded-md ${activetabs !== 2 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(2) }}>InActive</div>

                    <div className={`h-10 w-[4rem] mx-2 my-1 sm:mb-0 text-white text-sm rounded-md ${activetabs !== 3 ? 'bg-gray-600' : 'bg-indigo-600'} flex justify-center items-center cursor-pointer hover:bg-indigo-600 transition duration-300`} onClick={() => { setActiveTabs(3) }}>Pending</div>

                    <div className=" absolute bottom-2 right-1 mx-2 cursor-pointer">
                        <Link to={`/add/${userId}`} className="flex">
                            <button className={`bg-indigo-600  text-sm sm:text-lg text-white rounded-3xl hover:bg-gray-600 transition duration-300 h-12 w-12`} onClick={() => { setActiveTabs(0) }}>ADD</button>
                        </Link>
                    </div>
                </div>

                {
                    activetabs == 0 && <div className="container flex flex-row flex-wrap justify-between md:justify-around items-center mb-4 min-h-[72vh]">
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
                    activetabs == 1 && <div className="container flex flex-row flex-wrap justify-between items-center mb-4 min-h-[72vh]">
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
                    activetabs == 2 && <div className="container flex flex-row flex-wrap justify-between items-center mb-4 min-h-[72vh]">
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
                    activetabs == 3 && <div className="container flex flex-row flex-wrap justify-between items-center mb-4 min-h-[72vh]">
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


            </div>

        </div >
    );
};

export default Profile;
