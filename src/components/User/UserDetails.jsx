import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { useParams } from 'react-router-dom';
import UserDetailsCard from '../Card/UserDetailsCard';

function UserDetails() {

    // let userId = localStorage.getItem("user_id")

    let { userId } = useParams()



    console.log(userId);

    let [userData, setUserData] = useState(null);

    let [inputDisabled, setInputDisabled] = useState(true)

    let [formData, setFormData] = useState(null);


    const getUserDetails = async (e) => {

        await fetch(`http://localhost:3000/api/users/${userId}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log("userDetails : ", data.data.data);
                let userdata = data.data.data;
                setUserData(userdata)
                // console.log("USERDATA : ", userData);

                let test_data = {
                    userId: userId,
                    username: userdata.username,
                    email: userdata.email,
                    phone: userdata.phone,
                    address: userdata.address,
                    role: userdata.role
                }
                // console.log(test_data);

                setFormData(test_data)
                console.log("FORMDATA : ", formData);

            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        getUserDetails()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };

    const handleSubmit = async (e) => {
        setInputDisabled(true)
        e.preventDefault();
        console.log("handleSubmit : ", formData);

        let data = {
            "userId": userId,
            "username": formData.username,
            "password": formData.password,
            "email": formData.email,
            "phone": formData.phone,
            "address": formData.address,
            "role": formData.role,
        }

        await fetch("http://localhost:3000/api/users/update", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);

            }).catch((e) => {
                console.log(e);
            })
    };


    return (
        <div class="w-full p-3 shadow_cstm overflow-hidden sm:rounded-lg  my-0 mx-0 min-h-[70vh]">
            <div class="px-4 py-5 mb-3 sm:px-6 bg-blue-200 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    User Details
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about user.
                </p>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-start'>

                <div className="w-full md:w-[30%] h-full mt-2 ">
                    <UserDetailsCard data={userData} />
                </div>

                <div className="w-full md:w-[70%] mx-2">
                    <div class="mt-2 mb-4">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='username' id='username' value={formData?.username} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Phone No
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='phone' id='phone' value={formData?.phone} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='email' name='email' id='email' value={formData?.email} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Role
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <select id="role" disabled={inputDisabled} className='outline-none w-full h-full px-2 py-3' name='role' onChange={handleChange}>

                                        <option value="admin" selected={formData?.role == 'admin'} >Admin</option>
                                        <option value="user" selected={formData?.role == 'user'}>User</option>
                                    </select>
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Address
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='address' id='address' value={formData?.address} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Profile Img
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='file' name='img' id='img' value={formData?.img_path} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="flex flex-row justify-start items-center pt-5">
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
                                        <div className="px-2 py-2 w-[8rem] bg-green-300 flex flex-row justify-around items-center rounded-md" onClick={handleSubmit}>
                                            <button>SAVE</button>
                                            <MdOutlineDoneOutline />
                                        </div>
                                    </>}
                            </div>
                        </dl>
                        <div className='user_profile_img'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails