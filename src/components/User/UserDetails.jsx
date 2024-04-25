import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";


function UserDetails() {

    let [userData, setUserData] = useState({
        "address"
            :
            "123 Main St, Anytown, USA",
        "email"
            :
            "test@gmail.com",
        "id"
            :
            "f547",
        "password"
            :
            "12345",
        "phone"
            :
            "+1234567890",
        "role"
            :
            "user",
        "user_id"
            :
            1001,
        "username"
            :
            "Akash Chaurasia",
        "img_path": "avatar.jpg"
    });

    let [inputDisabled, setInputDisabled] = useState(true)

    const getUserDetails = async (e) => {

        let result = await fetch("http://localhost:3000/user_data", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                setUserData(data[0])

            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        // getUserDetails()
    }, [])

    return (
        <div class="w-full px-6 pt-6 shadow_cstm overflow-hidden sm:rounded-lg  h-full">
            <div class="px-4 py-5 sm:px-6 bg-indigo-400 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    User database
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about user.
                </p>
            </div>
            <div class="mt-2">
                <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input type='text' name='username' id='username' placeholder={userData.username} value={userData.username} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Phone No
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input type='text' name='username' id='username' placeholder={userData.username} value={userData.phone} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input type='text' name='username' id='username' placeholder={userData.username} value={userData.email} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Role
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            {/* <input type='text' name='username' id='username' placeholder={userData.username} value={userData.role} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} /> */}
                            <select id="roleSelect" disabled={inputDisabled} className='outline-none w-full h-full px-2 py-3'>
                                <option value="admin">Admin</option>
                                <option value="user" selected>User</option>
                            </select>
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input type='text' name='username' id='username' placeholder={userData.username} value={userData.address} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Profile Img
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input type='file' name='username' id='username' placeholder={userData.img_path} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                        </dd>
                    </div>

                    <div class="flex flex-row justify-start items-center ">
                        {inputDisabled &&
                            <div className="px-2 py-2 mr-2 w-[8rem] bg-indigo-300 flex flex-row justify-around items-center rounded-md" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                <button>EDIT</button>
                                <FaRegEdit />
                            </div>}
                        {!inputDisabled &&
                            <>
                                <div className="px-2 py-2 w-[8rem] mr-2 bg-red-300 flex flex-row justify-around items-center rounded-md" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                    <button>CANCEL</button>
                                    <GiCancel />
                                </div>
                                <div className="px-2 py-2 w-[8rem] bg-green-300 flex flex-row justify-around items-center rounded-md">
                                    <button>SAVE</button>
                                    <MdOutlineDoneOutline />
                                </div>
                            </>}
                    </div>
                </dl>
                <div className='user_profile_img'></div>
            </div>
        </div>
    )
}

export default UserDetails