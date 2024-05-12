import React from 'react';
import user_img from '../../asset/images/box.png'

import { MdDateRange } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { ImParagraphCenter } from "react-icons/im";


function ItemDetailsCard({ data }) {


    return (
        <div className="relative w-full h-full flex flex-col rounded-xl text-gray-700 justify-center items-center border-2 text-center">

            <div className="mx-4 mt-6 overflow-hidden object-center object-cover bg-blue-gray-500 text-orange-400">
                <img src={data?.img == '' ? user_img : data?.img} className='rounded-full h-20 w-20 md:h-32 md:w-32 object-cover object-center' />
            </div>

            <div className="px-6 my-3">

                <div className="mb-2 flex items-center justify-center">
                    <p className="">
                        {data?.item_name}
                    </p>
                </div>

                <div className='w-full flex flex-col flex-wrap justify-center items-center'>
                    <div class="mt-2 flex items-center justify-center">
                        <MdMailOutline />
                        <p class=" text-gray-500 ml-2">
                            {data?.item_category}
                        </p>
                    </div>

                    <div class="mt-2 flex items-center justify-center">
                        <FaRupeeSign />
                        <p class="ml-2">{data?.item_price}</p>
                    </div>
                    <div class="mt-2 flex items-center justify-center">
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