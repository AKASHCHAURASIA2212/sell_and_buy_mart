import React from 'react';
import box_img from '../../asset/images/box.webp'
import { IoLocationOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { convertDateFormat } from '../../utils/utils';

function Card({ item }) {
    return (
        <div>
            <div className="relative flex min-w-[10rem] h-[18rem] md:h-[25rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg justify-self-start">
                <div className=" mx-4 mt-4 overflow-hidden object-center object-cover bg-blue-gray-500 text-black h-3/5">
                    <img src={item.img[0] == null ? box_img : item.img[0]} className='object-contain object-center h-full w-full' />
                </div>
                <div className="px-6 my-3 h-2/5">
                    <div className="mb-3 flex items-center justify-between">
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
                            <p className='text-white px-2 py-1 bg5 rounded-ee-lg rounded-ss-lg transition duration-300 text-sm'>{(item.status).charAt(0).toUpperCase()
                                + (item.status).slice(1)}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Card