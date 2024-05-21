// AddPost.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api_url from '../../utils/utils';

const AddPost = () => {

    let user_id = localStorage.getItem('user_id')
    let token = localStorage.getItem("token");


    console.log("user_id : ", user_id);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = {
            item_category: formData.item_category,
            item_name: formData.item_name,
            item_price: formData.item_price,
            item_desc: formData.item_desc,
            img: [],
            location: formData.location,
            seller: formData.seller,
            buyer: [],
            posted_by: formData.posted_by,
        }
        try {

            console.log(data);
            let url = `${api_url}/api/items/add`

            let result = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token

                }
            }).then(res => res.json())
                .then((data) => {
                    console.log(data);
                }).catch((e) => {
                    console.log(e);
                })
            navigate('/user')

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mt-2 mb-4 mx-auto sm:w-full md:w-2/3 lg:w-2/3 border rounded-lg shadow-lg min-h-[80vh] bg-red-400">
            <h1 className="font-bold bg-indigo-600 px-4 py-4 text-center text-white text-sm sm:text-lg rounded-md mb-2">Add New Item</h1>

            <form onSubmit={handleSubmit} className='flex flex-col px-4 bg-indigo-200 rounded-lg'>
                <div className='flex flex-wrap justify-around items-start px-4 bg-indigo-200 rounded-lg'>
                    <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5">
                        <label htmlFor="item_category" className="block font-semibold mb-2 mt-2">Item Category</label>
                        <select
                            id="item_category"
                            name="item_category"
                            className="w-full border rounded px-3 py-2 outline-none appearance-auto"
                            onChange={handleInputChange}
                            value={formData.item_category}
                            required
                        >
                            <option value="" className=''>Select Category</option>
                            <option value="sports" selected>Sports</option>
                            <option value="car">Car</option>
                            <option value="bike">Bike</option>
                            <option value="furniture">Furniture</option>
                        </select>
                    </div>
                    <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5">
                        <label htmlFor="item_name" className="block font-semibold mb-2">Item Name</label>
                        <input
                            type="text"
                            id="item_name"
                            name="item_name"
                            className="w-full border rounded px-3 py-2"
                            onChange={handleInputChange}
                            value={formData.item_name}
                            required

                        />
                    </div>
                    <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5">
                        <label htmlFor="item_price" className="block font-semibold mb-2">Item Price</label>
                        <input
                            type="number"
                            id="item_price"
                            name="item_price"
                            className="w-full border rounded px-3 py-2 outline-none"
                            onChange={handleInputChange}
                            value={formData.item_price}
                            required
                        />
                    </div>
                    <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5">
                        <label htmlFor="location" className="block font-semibold mb-2">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="w-full border rounded px-3 py-2 outline-none"
                            onChange={handleInputChange}
                            value={formData.location}
                            required
                        />
                    </div>
                    <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5">

                        <label htmlFor="date_entered" className="block font-semibold mb-2">Date Entered</label>
                        <input
                            type="date"
                            id="date_entered"
                            name="date_entered"
                            className="w-full border rounded px-3 py-2 outline-none"
                            onChange={handleInputChange}
                            value={formData.date_entered}
                            required
                        />
                    </div>
                    <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5 ">
                        <label htmlFor="images" className="block font-semibold mb-2">Upload Images (Max 4)</label>
                        <input
                            type="file"
                            id="images1"
                            name="images1"
                            className="w-full border rounded px-3 py-3 bg-white"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5">
                        <label htmlFor="item_desc" className="block font-semibold mb-2">Item Description</label>
                        <textarea
                            id="item_desc"
                            name="item_desc"
                            className="w-full border rounded px-3 py-4 h-40 outline-none resize-none"
                            onChange={handleInputChange}
                            value={formData.item_desc}
                            placeholder='Enter Item Description'
                            required
                        />
                    </div>
                </div>

                <div className="mb-4 w-full ml-4 ">
                    <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 sm:w-[21%]">Submit</button>
                    <button type="submit" className="mx-2 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 sm:w-[21%]">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;
