import React from 'react'
import { FaBox } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';

function Stats({ data }) {
    // console.log(data);

    return (
        <div>
            <div class="flex flex-row flex-wrap justify-between items-center w-full">


                <Link to="/admin/user" class="px-2 py-2 md:px-4 md:py-4 shadow_cstm shadow-blue-100 w-[48%] md:w-[50%] lg:w-[30%] bg-18 mb-4 flex flex-row rounded-xl">
                    <FaUser
                        class="h-10 w-10 md:h-14 md:w-14 rounded-xl bg1 p-2 md:p-4 text-black mt-1" />
                    <div className='ml-4'>
                        <p class="mt-0 font-medium">Users</p>
                        <p class="mt-0 text-xl font-medium">
                            {data?.userCount}
                        </p>
                    </div>
                </Link>

                <Link to="/admin/item" class="px-2 py-2 md:px-4 md:py-4 shadow_cstm shadow-blue-100 w-[48%] md:w-[50%] lg:w-[30%] bg5 mb-4 flex flex-row rounded-xl">
                    <FaBox
                        class="h-10 w-10 md:h-14 md:w-14 rounded-xl bg1 p-2 md:p-4 text-black mt-1" />
                    <div className='ml-4'>
                        <p class="mt-0 font-medium">Items</p>
                        <p class="mt-0 text-xl font-medium">
                            {data?.itemCount}
                        </p>
                    </div>
                </Link>


                <Link to="/admin/notify" class="px-2 py-2 md:px-4 md:py-4 shadow_cstm shadow-blue-100 w-[48%] md:w-[50%] lg:w-[30%] bg9 mb-4 flex flex-row rounded-xl">
                    <IoMdMail
                        class="h-10 w-10 md:h-14 md:w-14 rounded-xl bg1 p-2 md:p-4 text-black mt-1" />
                    <div className='ml-4'>
                        <p class="mt-0 font-medium">Notification</p>
                        <p class="mt-0 text-xl font-medium">
                            {data?.mailCount}
                        </p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Stats