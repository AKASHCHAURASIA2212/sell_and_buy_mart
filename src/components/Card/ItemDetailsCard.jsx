import React from 'react';
import box_img from '../../asset/images/box.webp'

import { MdDateRange } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { ImParagraphCenter } from "react-icons/im";


function ItemDetailsCard({ data }) {


    return (
        <div className="relative w-full h-full flex flex-col rounded-xl text-white justify-center items-center border-2 text-center bg8">

            <div className="mx-4 mt-6 overflow-hidden object-center object-cover bg-blue-gray-500 ">
                <img src={data?.img[0] == null ? box_img : data?.img[0]} className='rounded-full h-20 w-20 md:h-32 md:w-32 object-cover object-center' />
            </div>

            <div className="px-6 my-3">

                <div className="mb-2 flex items-center justify-center">
                    <p className="">
                        {data?.item_name}
                    </p>
                </div>

                <div className='w-full flex flex-col flex-wrap justify-start items-center'>
                    <div class="mt-2 flex items-center justify-start">
                        <ImParagraphCenter />
                        <p class="  ml-2">
                            {data?.item_category}
                        </p>
                    </div>

                    <div class="mt-2 flex items-center justify-start">
                        <FaRupeeSign />
                        <p class="ml-2">{data?.item_price}</p>
                    </div>
                    <div class="mt-2 flex items-center justify-start">
                        <FaAddressCard />
                        <p class="ml-2">{data?.location}</p>
                    </div>
                    <div class="mt-2 flex items-center justify-center">
                        <p class="ml-2">{data?.item_desc}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetailsCard