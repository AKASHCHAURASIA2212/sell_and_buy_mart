import React, { useEffect, useState } from 'react';
import user_img from '../../asset/images/user.png'
import { MdDateRange } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import api_url from '../../utils/utils';


function UserDetailsCard({ userId }) {

    let [userData, setUserData] = useState(null);


    const getUserDetails = async (e) => {
        let url = `${api_url}/api/users/${userId}`;

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((userData) => {
                console.log(userData);
                let userdata = userData.data.data;
                console.log(userdata);
                setUserData(userdata)
            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        getUserDetails()
    }, [userId])

    return (
        <div className="relative w-full h-full flex flex-col rounded-xl text-gray-700 justify-center items-center border-2">
            <div className="mx-4 mt-6 overflow-hidden object-center object-cover bg-blue-gray-500 text-orange-400">
                <img src={user_img} className='rounded-3xl h-20 w-20 md:h-32 md:w-32 object-contain' />

            </div>
            <div className="px-6 my-3">
                <div className="mb-2 flex items-center justify-center">
                    <p className="">
                        {userData?.username}
                    </p>
                </div>

                <div className='w-full flex flex-col flex-wrap justify-center items-center'>

                    <div class="mt-2 flex items-center justify-center">
                        <MdMailOutline />
                        <p class=" text-gray-500 ml-2">
                            {userData?.email}
                        </p>
                    </div>

                    <div class="mt-2 flex items-center justify-center">
                        <MdPhoneAndroid />
                        <p class="ml-2">{userData?.phone}</p>
                    </div>
                    <div class="mt-2 flex items-center justify-center">
                        <FaAddressCard />
                        <p class="ml-2">{userData?.address}</p>
                    </div>
                    <div class="mt-2 flex items-center justify-center">
                        <MdDateRange />
                        <p class="ml-2">22-22-2222</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetailsCard