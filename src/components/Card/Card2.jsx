import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import box_img from '../../asset/images/box.webp'
import { IoLocationOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";


function Card2({ item, delete_item }) {

    let navigate = useNavigate();
    let status_c = "Pending";
    let bg = "bg-orange-500";

    if (item.status == "available") {
        status_c = "Active";
        bg = "bg-green-500"
    } else if (item.status == "unavailable") {
        status_c = "InActive";
        bg = "bg-red-500"
    }

    let [status, setStatus] = useState(status_c);
    let [statusBg, setStatusBg] = useState(bg);

    let editPost = () => {
        navigate(`/add/${item.item_id}`)
    }


    return (

        <div className="relative flex w-[45%] sm:w-[48%] md:w-[33%] lg:w-[22%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg justify-self-start mb-8">
            <div className=" mx-4 mt-4 overflow-hidden object-center object-cover bg-blue-gray-500 text-orange-400 h-[40%]">
                <img src={box_img} className='object-contain h-[50%]' />
            </div>
            <div className="px-6 my-3 h-2/5">
                <div className="mb-3 flex items-center justify-between">
                    <p className="block text-orange-400 text-sm sm:text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {item.item_name}
                    </p>
                </div>

                <div className='w-full flex flex-row flex-wrap justify-start items-center'>

                    <div className="item_location w-[95%] flex flex-row justify-start items-center mt-0 sm:mt-2">
                        <div className="location_icon">
                            <IoLocationOutline color='blue' />
                        </div>
                        <p className='ml-2 text-orange-400 text-sm sm:text-lg'>{item.location}</p>
                    </div>

                    <div className="item_date_entered  w-[95%] flex flex-row justify-start items-center mt-0  sm:mt-2  font-small">
                        <div className="item_date_entered date_entered_icon">
                            <MdDateRange color='indigo' />
                        </div>
                        <p className='ml-2 text-orange-400 text-sm sm:text-lg'>2024-01-20</p>
                    </div>

                    <div className="item_price w-[95%] flex flex-row justify-start items-center mt-0 sm:mt-2">
                        <div className="price_icon">
                            <FaRupeeSign color='green' />
                        </div>
                        <p className='ml-2 text-orange text-sm sm:text-lg'>{item.item_price}</p>
                    </div>

                    <div className=" item_status flex flex-row justify-start items-center mt-0 absolute top-0 left-0 rounded-ee-lg rounded-ss-lg">
                        <p className='text-white px-2 py-1 bg-green-500 rounded-ee-lg rounded-ss-lg hover:bg-indigo-600 transition duration-300 text-sm'>{(item.status).charAt(0).toUpperCase()
                            + (item.status).slice(1)}</p>
                    </div>

                    <div className="w-full flex flex-row justify-around sm:justify-start  items-center mt-2">

                        {/* {status_c != "Pending" && status_c != "InActive" && */}

                        <p className="bg-indigo-500 text-white  px-1 py-1 md:px-2 md:py-2 mx-auto rounded-md hover:bg-indigo-600 transition duration-300 text-orange text-sm sm:text-lg w-[3rem] md:w-[4rem] flex justify-center items-center" onClick={() => { editPost() }}>Edit</p>

                        <p className="bg-red-500 text-white px-1 py-1 md:px-2 md:py-2 mx-auto rounded-md hover:bg-red-600 transition duration-300 text-orange text-sm sm:text-lg w-[3rem] md:w-[4rem] flex justify-center items-center" onClick={() => { delete_item(item.item_id) }}>Delete</p>


                    </div>
                </div>
            </div>
        </div>


        // <div className="relative w-[25rem] max-h-[25rem] mx-auto my-8 bg-white p-6 rounded-lg shadow-md">
        //     <img src="desk.jpg" alt="Item Image" className=" object-cover rounded-md mr-4" />
        //     <div className="flex items-center mb-4 ">
        //         <div>
        //             <h2 className="text-lg font-semibold text-gray-800">{item.item_name}</h2>
        //             <p className="text-gray-600 text-sm sm:text-lg">Date: {item.date_entered}</p>
        //             <p className="text-gray-600 text-sm sm:text-lg">Location: {item.location}</p>
        //             <p className="text-gray-600 text-sm sm:text-lg">Price: {item.item_price}</p>
        //         </div>
        //     </div>
        //     <p className="text-gray-700 mb-4 text-sm md:text-lg">{item.item_desc}</p>

        //     <div className="flex justify-between ">
        //         <div className="flex justify-start absolute top-0 right-0">
        //             <button className={`${statusBg} text-white px-2 py-1 rounded-se-lg rounded-es-lg hover:bg-indigo-600 transition duration-300 text-sm`}>{status}</button>
        //         </div>
        //         <div className="flex justify-end">
        //             {status_c != "Pending" && status_c != "InActive" &&
        //                 <>
        //                     <button className="bg-indigo-500 text-white px-2 py-2 mr-2 mx-auto rounded-md hover:bg-indigo-600 transition duration-300 text-sm w-[4rem]" onClick={() => { editPost() }}>Edit</button>

        //                     <button className="bg-red-500 text-white px-2 py-2 mx-auto rounded-md hover:bg-red-600 transition duration-300 text-sm w-[4rem]" onClick={() => { delete_item(item.item_id) }}>Delete</button>
        //                 </>
        //             }
        //         </div>

        //     </div>


        // </div>
    )
}

export default Card2