import './index.css'
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
// import userData from '../../asset/data/user.json'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card2 from '../Card/Card2';


const Profile = () => {

    let user_id = 1001

    let { isLogin, setIsLogin } = useContext(MyContext)

    const [loading, setLoading] = useState(false);

    const [user_data, setUserData] = useState([])
    const [activetabs, setActiveTabs] = useState(0)


    const fetchData2 = async (url, type) => {
        try {
            const response = await axios.get(url);
            console.log(response.data);
            let allItems = Object.values(response.data).flat().filter((data) => {
                if (data.seller[0] == user_id) {
                    return data;
                }
            });
            console.log(allItems);

            setUserData(allItems)

            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const delete_item = (id) => {
        try {
            const response = fetch(`http://localhost:3000/items_data`
                ,
                {
                    method: 'PUT',
                    body: JSON.stringify({ "_id": id }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }

                }
            );
            console.log(response.data);
            // let allItems = Object.values(response.data).flat().filter((data) => {
            //     if (data.seller[0] == user_id) {
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
        fetchData2("http://localhost:3000/items_data")
    }, []);


    // setUserData(userData.userProducts)

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser((prevUser) => ({
    //         ...prevUser,
    //         [name]: value,
    //     }));
    // };

    // const handleSave = async () => {
    //     try {
    //         setLoading(true);
    //         // Simulating API call using axios
    //         const response = await axios.put('https://api.example.com/user', user);
    //         if (response.status === 200) {
    //             alert('User details updated successfully!');
    //             setEditMode(false);
    //         } else {
    //             throw new Error('Failed to update user details');
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         alert('Failed to update user details. Please try again.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     // Fetch user details from API on component mount (simulating with dummy data)
    //     const fetchUserDetails = async () => {
    //         try {
    //             setLoading(true);
    //             // Simulating API call using axios
    //             const response = await axios.get('https://api.example.com/user');
    //             if (response.status === 200) {
    //                 setUser(response.data);
    //             } else {
    //                 throw new Error('Failed to fetch user details');
    //             }
    //         } catch (error) {
    //             console.error(error);
    //             alert('Failed to fetch user details. Please try again.');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchUserDetails();
    // }, []);

    return (
        <div className="bg-white px-8 sm:p-0 sm:m-0 rounded-md shadow-md">
            <div className="flex flex-col justify-between mb-4 bg-indigo-200 relative">

                <div className="flex flex-row justify-start py-4 bg-indigo-400 rounded-md">
                    <div className={`h-10 mx-4 text-lg px-3 py-2 rounded-md ${activetabs !== 0 ? 'bg-gray-500' : 'bg-indigo-500'}`} onClick={() => { setActiveTabs(0) }}>View All</div>
                    <div className={`h-10 mx-4 text-lg px-3 py-2 rounded-md ${activetabs !== 1 ? 'bg-gray-500' : 'bg-indigo-500'}`} onClick={() => { setActiveTabs(1) }}>Active</div>
                    <div className={`h-10 mx-4 text-lg px-3 py-2 rounded-md ${activetabs !== 2 ? 'bg-gray-500' : 'bg-indigo-500'}`} onClick={() => { setActiveTabs(2) }}>InActive</div>
                    <div className={`h-10 mx-4 text-lg px-3 py-2 rounded-md ${activetabs !== 3 ? 'bg-gray-500' : 'bg-indigo-500'}`} onClick={() => { setActiveTabs(3) }}>Pending</div>

                    <div className=" absolute right-0 mx-2">
                        <Link to={`/add/${user_id}`} className="flex">
                            <button className={`bg-indigo-500 text-lg text-white px-4 py-2 mr-2 rounded-md hover:bg-gray-600 transition duration-300 h-10`} onClick={() => { setActiveTabs(0) }}>ADD</button>
                        </Link>
                    </div>
                </div>

                {
                    activetabs == 0 && <div className="container flex flex-row flex-wrap justify-between items-center mb-4">
                        {user_data.length > 0 && user_data.map((item, index) => {

                            return (
                                <Card2 item={item} key={index} />
                            )
                        })
                        }
                    </div>
                }
                {
                    activetabs == 1 && <div className="container flex flex-row flex-wrap justify-between items-center mb-4">
                        {user_data.length > 0 && user_data.filter((item) => item.status == "available").map((item, index) => {

                            return (
                                <Card2 item={item} key={index} />
                            )
                        })
                        }
                    </div>
                }
                {
                    activetabs == 2 && <div className="container flex flex-row flex-wrap justify-between items-center mb-4">
                        {user_data.length > 0 && user_data.filter((item) => item.status == "unavailable").map((item, index) => {

                            return (
                                <Card2 item={item} key={index} />
                            )
                        })
                        }
                    </div>
                }
                {
                    activetabs == 3 && <div className="container flex flex-row flex-wrap justify-between items-center mb-4">
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
