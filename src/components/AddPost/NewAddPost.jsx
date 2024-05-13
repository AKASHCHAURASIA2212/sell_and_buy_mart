import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import api_url from '../../utils/utils';

function NewAddPost() {

    let user_id = localStorage.getItem('user_id')
    // console.log("user_id : ", user_id);
    const [image, setImage] = useState('');
    const [formData, setFormData] = useState({
        item_category: '',
        item_name: '',
        item_price: '',
        item_desc: '',
        date_entered: '',
        img: [],
        location: '',
        status: 'available',
        seller: [user_id],
        buyer: [],
        posted_by: user_id,

    });

    const resetFormData = () => {
        setFormData({
            item_category: '',
            item_name: '',
            item_price: '',
            item_desc: '',
            date_entered: '',
            images: [],
            location: '',
            status: 'available',
            seller: [user_id],
            buyer: [],
            posted_by: user_id,

        })
    }

    let navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        formData.images.push(files)
        setFormData({ ...formData });
    };

    const handleImageSave = async (image) => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'cpfy_sabm')
        data.append('cloud_name', 'dqjnwvw0d')

        let cloud_name = 'dqjnwvw0d';

        // let CLOUDINARY_URL = `cloudinary://739116859478343:gBpoecHz5MTIgLoXaG62WGlhxuQ@dqjnwvw0d`
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
        e.preventDefault();

        let img_url = await handleImageSave(image)

        // console.log(img_url, "00000000000000000000");

        let data = {
            item_category: formData.item_category,
            item_name: formData.item_name,
            item_price: formData.item_price,
            item_desc: formData.item_desc,
            img: [img_url],
            location: formData.location,
            seller: formData.seller,
            buyer: [],
            posted_by: formData.posted_by,
        }

        try {
            // console.log(data);

            let url = `${api_url}/api/items/add`;
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(res => res.json())
                .then((data) => {
                    // console.log(data);
                }).catch((e) => {
                    console.log(e);
                })


            navigate('/user')

        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div class="w-[98%] px-6 pt-6 shadow_cstm overflow-hidden sm:rounded-lg  my-4 mx-auto min-h-[70vh]">
            <div class="px-4 py-5 sm:px-6 bg-indigo-400 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Add New Item
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about Item.
                </p>
            </div>
            <div class="mt-2 mb-4">
                <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Item Category
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">

                            <select
                                id="item_category"
                                name="item_category"
                                className='outline-none w-full h-full px-2 py-3' onChange={handleInputChange}
                            >
                                <option value="" >Select Category</option>
                                <option value="furniture">Furniture</option>
                                <option value="electronics" selected>Electronics</option>
                                <option value="car">Car</option>
                                <option value="bike">Bike</option>
                                <option value="sports" >Sports</option>
                                <option value="books" >Books</option>
                                <option value="music" >Music</option>
                            </select>
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Item Name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input type="text"
                                id="item_name"
                                name="item_name" onChange={handleInputChange}
                                className='outline-none w-full h-full px-2 py-3'
                                required />
                        </dd>
                    </div>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Item Price
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input type="number"
                                id="item_price"
                                name="item_price" onChange={handleInputChange}
                                className='outline-none w-full h-full px-2 py-3'
                                required />
                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Location
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input className='outline-none w-full h-full px-2 py-3' type="text"
                                id="location"
                                name="location"
                                onChange={handleInputChange}
                                required />

                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Upload Image
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <input className='outline-none w-full h-full px-2 py-3' type="file"
                                id="images"
                                name="images"
                                onChange={(e) => { setImage(e.target.files[0]) }} />

                        </dd>
                    </div>
                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Item Description
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                            <textarea className='outline-none w-full h-full px-2 py-3 resize-none'
                                id="item_desc"
                                name="item_desc"
                                onChange={handleInputChange}
                                placeholder='Enter Item Description (Min 75 Charactor)'
                                required />

                        </dd>
                    </div>

                    <div class="flex flex-row justify-center sm:justify-start items-center ">

                        <>
                            <div className="px-2 py-2 w-[8rem] mr-2 bg-red-300 flex flex-row justify-around items-center rounded-md" onClick={resetFormData}>
                                <button>RESET</button>
                                <GiCancel />
                            </div>
                            <div className="px-2 py-2 w-[8rem] bg-green-300 flex flex-row justify-around items-center rounded-md" onClick={handleSubmit}>
                                <button>SAVE</button>
                                <MdOutlineDoneOutline />
                            </div>
                        </>
                    </div>
                </dl>
                <div className='user_profile_img'></div>
            </div>
        </div>
    )
}

export default NewAddPost