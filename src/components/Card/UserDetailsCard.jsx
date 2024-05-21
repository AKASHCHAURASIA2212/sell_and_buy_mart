import React, { useEffect, useState } from 'react';
import user_img from '../../asset/images/user.png'
import { MdDateRange } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import api_url from '../../utils/utils';


function UserDetailsCard({ userId }) {

    // console.log(userId);

    let [userData, setUserData] = useState(null);
    let token = localStorage.getItem("token");


    const getUserDetails = async (e) => {
        let url = `${api_url}/api/users/${userId}`;

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((userData) => {
                // console.log(userData);
                let userdata = userData.data.data;
                // console.log(userdata);
                setUserData(userdata)
            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        getUserDetails()
    }, [userId])

    return (
        <div className="relative w-full h-[51vh] flex flex-col rounded-xl text-gray-700 justify-center items-center border-2 bg8">
            <div className="mx-4 mt-6 overflow-hidden object-center object-cover bg-blue-gray-500">
                <img src={userData?.user_img == '' ? user_img : userData?.user_img} className='rounded-full h-20 w-20 md:h-32 md:w-32 object-cover object-center' />

            </div>
            <div className="px-6 my-3 text-gray-100">
                <div className="mb-2 flex items-center justify-center">
                    <p className="">
                        {userData?.username}
                    </p>
                </div>

                <div className='w-full flex flex-col flex-wrap justify-center items-center'>

                    <div class="mt-2 flex flex-row items-center justify-center">
                        <MdMailOutline />
                        <p class="ml-2">
                            {userData?.email}
                        </p>
                    </div>

                    <div class="mt-2 flex items-center justify-center">
                        <MdPhoneAndroid />
                        <p class="ml-2">{userData?.phone}</p>
                    </div>
                    {
                        (userData?.country || userData?.city || userData?.street) &&

                        <div class="mt-2 flex items-center justify-center">
                            <FaAddressCard />
                            <p class="ml-2">{userData?.country} {userData?.city} {userData?.street}.</p>
                        </div>
                    }
                    <div class="mt-2 flex items-center justify-center">
                        <MdDateRange />
                        <p class="ml-2">{userData?.dob}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserDetailsCard