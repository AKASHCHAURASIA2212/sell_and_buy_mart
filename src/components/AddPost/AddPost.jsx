// AddPost.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPost = () => {

    let { user_id } = useParams()
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
        _id: Math.floor(Math.random() * (60 + 1)) + 50,
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
            date_entered: formData.date_entered,
            img: [],
            location: formData.location,
            status: 'available',
            seller: [user_id],
            buyer: [],
            posted_by: user_id,
            _id: Math.floor(Math.random() * (60 + 1)) + 50,
        }
        try {
            // Call your API here to save formData

            let result = await fetch("http://localhost:3000/items_data", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then((data) => {
                    console.log(data);
                    setIsLogin(true)
                }).catch((e) => {
                    console.log(e);
                })

            // Redirect to user routes after successful submission

            navigate('/user')

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mt-12 sm:w-full md:w-2/3 lg:w-2/3 mx-auto border rounded-lg shadow-lg min-h-[80vh] bg-indigo-100">
            <h1 className="text-xl font-bold mb-4 bg-indigo-400 px-4 py-2 text-center">Add New Item</h1>
            <form onSubmit={handleSubmit} className='flex flex-wrap justify-around items-start px-4'>
                <div className="mb-4 w-full sm:w-2/3 md:w-2/5 lg:w-2/5">
                    <label htmlFor="item_category" className="block font-semibold mb-2">Item Category</label>
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
                    {/* <input
                        type="file"
                        id="images2"
                        name="images2"
                        className="w-full border rounded px-3 py-1"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <input
                        type="file"
                        id="images3"
                        name="images3"
                        className="w-full border rounded px-3 py-1"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <input
                        type="file"
                        id="images4"
                        name="images4"
                        className="w-full border rounded px-3 py-1"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                    /> */}
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


                <div className="mb-4 w-full mx-12">
                    <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 sm:w-[21%]">Submit</button>
                    <button type="submit" className="mx-2 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 sm:w-[21%]">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;
