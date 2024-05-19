import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import box_img from '../../asset/images/box.webp'
import { IoLocationOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { convertDateFormat } from '../../utils/utils';

function Card2({ item, delete_item }) {
    let navigate = useNavigate();
    let status_c = "Pending";
    let bg = "orange";
    if (item.status == "available") {
        status_c = "Active";
        bg = "green"
    } else if (item.status == "unavailable") {
        status_c = "Deleted";
        bg = "red"
    } else if (item.status == "pending") {
        status_c = "Pending";
        bg = "orange"
    } else {
        status_c = "Rejected";
        bg = "blue"
    }

    let [status, setStatus] = useState(status_c);
    let [statusBg, setStatusBg] = useState(bg);

    let editPost = (item_id) => {
        navigate(`/item/edit/${item_id}`)
    }


    return (

        <div className="relative flex w-[10rem] h-[18rem] md:h-[25rem] md:w-[20rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg justify-self-start mb-4">
            <div className=" mx-4 mt-4 overflow-hidden object-center object-cover bg-blue-gray-500 text-black h-3/5">
                <img src={item.img[0] == null ? box_img : item.img[0]} className='object-contain object-center h-full w-full' />
            </div>
            <div className=" px-6 my-3 h-2/5">
                <div className="mb-3 flex flex-col items-center justify-between">
                    {/* {item?.message != '' &&
                        <p className="block text-red-500 text-sm sm:text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {item?.message}

                        </p>
                    } */}

                </div>
                <div className="mb-3 flex flex-col items-center justify-between">
                    <p className="block text-black text-sm sm:text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {item?.item_name.substring(0, 25)}
                        {item?.item_name.length > 25 && "..."}
                    </p>

                </div>

                <div className='w-full flex flex-row flex-wrap justify-start items-center'>

                    <div className="item_location w-[95%] flex flex-row justify-start items-center mt-0 sm:mt-2">
                        <div className="location_icon">
                            <IoLocationOutline color='blue' />
                        </div>
                        <p className='ml-2 text-black text-sm sm:text-lg'>{item.location}</p>
                    </div>

                    <div className="item_date_entered  w-[95%] flex flex-row justify-start items-center mt-0  sm:mt-2  font-small">
                        <div className="item_date_entered date_entered_icon">
                            <MdDateRange color='indigo' />
                        </div>
                        <p className='ml-2 text-black text-sm sm:text-lg'>{convertDateFormat(item?.date_entered)}</p>
                    </div>

                    <div className="item_price w-[95%] flex flex-row justify-start items-center mt-0 sm:mt-2">
                        <div className="price_icon">
                            <FaRupeeSign color='green' />
                        </div>
                        <p className='ml-2 text-orange text-sm sm:text-lg'>{item.item_price}</p>
                    </div>

                    <div className=" item_status flex flex-row justify-start items-center mt-0 absolute top-0 left-0 rounded-ee-lg rounded-ss-lg">
                        <p className={`text-white px-2 py-1 bg-${statusBg}-500 rounded-ee-lg rounded-ss-lg hover:bg-${statusBg}-600 transition duration-300 text-sm`}>{(item.status).charAt(0).toUpperCase()
                            + (item.status).slice(1)}</p>
                    </div>

                    <div className="mt-2 absolute bottom-2 right-2">

                        {(item.status == "available" || item.status == "pending") &&
                            <p className="bg5 text-white  px-1 py-1 md:px-2 md:py-2 mx-auto rounded-md transition duration-300 text-orange text-sm sm:text-lg w-[3rem] md:w-[4rem] flex justify-center items-center" onClick={() => { editPost(item.item_id) }}>Edit</p>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2