import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import UserDetailsCard from '../Card/UserDetailsCard';
import ItemDetailsCard from '../Card/ItemDetailsCard';
import api_url from '../../utils/utils';
import { useParams } from 'react-router-dom';


function ItemDetails() {

    let userId = localStorage.getItem("user_id");

    let [itemData, setItemData] = useState(null);

    let [inputDisabled, setInputDisabled] = useState(true)

    let [formData, setFormData] = useState(null);
    const [image, setImage] = useState('');
    let { itemId } = useParams()


    const getUserDetails = async (e) => {
        let url = `${api_url}/api/items/${itemId}`;

        await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {

                // console.log(data);
                let itemData = data.data[0];
                // console.log(itemData);
                setItemData(itemData)

                let test_data = {
                    item_id: itemData?.item_id,
                    item_name: itemData?.item_name,
                    item_category: itemData?.item_category,
                    item_desc: itemData?.item_desc,
                    item_price: itemData?.item_price,
                    location: itemData?.location,
                    status: itemData?.status,
                    img: itemData?.img,
                }

                setFormData(test_data)
                // // console.log("FORMDATA : ", formData);

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
            item_id: formData?.item_id,
            item_name: formData?.item_name,
            item_category: formData?.item_category,
            item_desc: formData?.item_desc,
            item_price: formData?.item_price,
            location: formData?.location,
            status: formData?.status,
            img: formData.img
        }

        if (image != '') {
            let img_url = await handleImageSave(image)
            data.img = [img_url];
        }

        // console.log(data);

        let url = `${api_url}/api/items/update`;

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                // // console.log(data);
            }).catch((e) => {
                console.log(e);
            })
    };

    return (
        <div class="w-full p-3 shadow_cstm overflow-hidden sm:rounded-lg  my-0 mx-0 min-h-[70vh]">
            <div class="px-4 py-5 mb-3 sm:px-6 bg-blue-200 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Item Details
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about item.
                </p>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-start'>

                <div className="w-full md:w-[30%] h-full mt-2 md:mx-2 ">
                    <ItemDetailsCard data={itemData} for={"item"} />
                </div>

                <div className="w-full md:w-[70%]">
                    <div class="mt-2 mb-4">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item name
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='item_name' id='item_name' value={formData?.item_name} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Category
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='item_category' id='item_category' value={formData?.item_category} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} readOnly='true' />
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Price
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='item_price' id='item_price' value={formData?.item_price} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    location
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='location' id='location' value={formData?.location} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Status
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='status' id='status' value={formData?.status} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} readOnly='true' />
                                    {/* <select id="roleSelect" disabled={inputDisabled} className='outline-none w-full h-full px-2 py-3'>
                                <option value="admin">Admin</option>
                                <option value="user" selected>User</option>
                            </select> */}
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Desc
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='item_desc' id='item_desc' value={formData?.item_desc} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handleChange} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Img
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='file' name='img' id='img' className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={(e) => { setImage(e.target.files[0]) }} />
                                </dd>
                            </div>

                            <div class="flex flex-row justify-start items-center mb-12">
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

export default ItemDetails