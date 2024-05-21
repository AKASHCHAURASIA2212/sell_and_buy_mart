import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { useParams } from 'react-router-dom';
import UserDetailsCard from '../Card/UserDetailsCard';
import api_url from '../../utils/utils';
import { MyContext } from '../../App';
import loaderGif from '../../asset/images/loading.gif'
import Loading from '../Loading/Loading';

function UserDetails() {

    let [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    let token = localStorage.getItem("token");
    let isAdmin = localStorage.getItem("admin_status");
    isAdmin = isAdmin === 'true';
    console.log(isAdmin);
    let { userId } = useParams();
    if (userId == undefined || userId == null) {
        userId = localStorage.getItem("user_id");
    }
    // console.log(userId);
    let [userData, setUserData] = useState(null);
    let [inputDisabled, setInputDisabled] = useState(true)
    let [formData, setFormData] = useState(null);
    const [image, setImage] = useState('');

    const getUserDetails = async (e) => {
        let url = `${api_url}/api/users/${userId}`;
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {
                let userdata = data.data.data;
                setUserData(userdata)

                let test_data = {
                    userId: userId,
                    username: userdata.username,
                    dob: userdata.dob,
                    email: userdata.email,
                    phone: userdata.phone,
                    country: userdata.country,
                    city: userdata.city,
                    street: userdata.street,
                    landmark: userdata.landmark,
                    role: userdata.role,
                    user_img: userdata.user_img
                }
                setFormData(test_data)
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

    const handleImageSave = async (image) => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'cpfy_sabm')
        data.append('cloud_name', 'dqjnwvw0d')
        let cloud_name = 'dqjnwvw0d';
        let url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
        let img_url = await fetch(url, {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                // console.log(data.secure_url);
                return data.secure_url;
            }).catch((e) => {
                console.log(e);
                return '';
            });
        return img_url;
    }

    const handleSubmit = async (e) => {
        setInputDisabled(true)
        e.preventDefault();

        // console.log("handleSubmit : ", formData);

        let data = {
            "userId": userId,
            "username": formData.username,
            "dob": formData.dob,
            "password": formData.password,
            "email": formData.email,
            "phone": formData.phone,
            "country": formData.country,
            "city": formData.city,
            "street": formData.street,
            "landmark": formData.landmark,
            "role": formData.role,
        }

        if (image != '') {
            let img_url = await handleImageSave(image)
            data.user_img = img_url;
        }

        // console.log(data);

        let url = `${api_url}/api/users/update`;

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data);
            }).catch((e) => {
                console.log(e);
            })
    };

    return (
        <>
            {
                isLoading === true && <div className='loader'>
                    <Loading />
                </div>
            }
            <div class="w-full p-3 shadow_cstm overflow-hidden sm:rounded-lg  my-0 mx-0 min-h-[70vh]">
                <div class="px-4 py-5 mb-3 sm:px-6 bg1 rounded-md">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        User Details
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-700">
                        Details and informations about user.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row-reverse justify-between items-start'>

                    <div className="w-full md:w-[30%] h-full  md:ml-2">
                        <UserDetailsCard userId={userId} />
                    </div>

                    <div className="w-full md:w-[70%] mt-2 md:mt-0">
                        <div class="rounded-lg bg1">
                            <div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Full name
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='text' name='username' id='username' value={formData?.username} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>

                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        D.O.B ( DD-MM-YYYY )
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='date' name='dob' id='dob' value={formData?.dob} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Phone No
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='text' name='phone' id='phone' value={formData?.phone} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Email address
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='email' name='email' id='email' value={formData?.email} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>


                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Country
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='text' name='country' id='country' value={formData?.country} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>

                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        City
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='text' name='city' id='city' value={formData?.city} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>

                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Street
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='text' name='street' id='street' value={formData?.street} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>

                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Landmark
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='text' name='landmark' id='landmark' value={formData?.landmark} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                    </div>
                                </div>

                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Role
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <select id="role" disabled={!isAdmin} className='outline-none w-full h-full px-2 py-3' name='role' onChange={handleChange} >

                                            <option value="admin" selected={formData?.role == 'admin'} >Admin</option>
                                            <option value="user" selected={formData?.role == 'user'}>User</option>
                                        </select>
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium text-gray-700">
                                        Profile Img
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                        <input type='file' name='images' id='images' value={formData?.img_path} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={(e) => { setImage(e.target.files[0]) }} />
                                    </div>
                                </div>
                                <div class="flex flex-row justify-start items-center pt-2 pb-4 pl-5">
                                    {inputDisabled &&
                                        <div className="px-2 py-2 mr-2 w-[8rem] bg9 flex flex-row justify-around items-center rounded-md" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                            <button>EDIT</button>
                                            <FaRegEdit />
                                        </div>}
                                    {!inputDisabled &&
                                        <>
                                            <div className="px-2 py-2 w-[8rem] mr-2 bg9 flex flex-row justify-around items-center rounded-md" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                                <button>CANCEL</button>
                                                <GiCancel />
                                            </div>
                                            <div className="px-2 py-2 w-[8rem] bg9 flex flex-row justify-around items-center rounded-md" onClick={handleSubmit}>
                                                <button>SAVE</button>
                                                <MdOutlineDoneOutline />
                                            </div>
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails