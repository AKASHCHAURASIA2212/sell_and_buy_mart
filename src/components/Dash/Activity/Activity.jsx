import React from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../../../asset/images/user.png'
import box_logo from '../../../asset/images/box.webp'
function Activity({ data }) {
    // console.log(data);
    return (
        <div className='mt-2'>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:pt-10 md:mt-12 lg:grid-cols-3">

                {data?.userData != null && data.userData.length > 0 &&
                    <div className="relative max-w-md rounded-xl border p-6 pb-10 text-gray-900 bg-18">
                        <p className="text-lg font-medium">Latest Users</p>

                        {data?.userData != null && data.userData.length > 0 && data.userData.map((user) => {
                            return (
                                <div className="flex items-center py-2 my-1 bg-white hover:bg-gray-200 rounded-lg px-2">
                                    <img className="h-10 w-10 rounded-full object-cover" src={user?.user_img == '' ? userLogo : user?.user_img} alt="Simon Lewis" />
                                    <p className="ml-4 w-56">
                                        <strong className="block font-medium">{user.username}</strong>
                                        <p className="text-xs text-gray-400">{user.email}</p>
                                        <p className="text-xs truncate font-medium text-indigo-600">{user.address} </p>
                                    </p>
                                </div>
                            )
                        })}
                        <Link to="/admin/user" className='absolute  bottom-1 right-2 my-1'>
                            <span className='text-black'>See More</span>
                        </Link>
                    </div>}

                {data?.itemData != null && data.itemData.length > 0 &&
                    <div className="relative max-w-md rounded-xl border p-6 pb-10 text-gray-900 bg5">
                        <p className="text-lg font-medium">Latest Items</p>

                        {data?.itemData != null && data.itemData.length > 0 && data.itemData.map((item) => {
                            return (
                                <div className="flex items-center py-2 my-1 bg-white hover:bg-gray-200 rounded-lg px-2">
                                    <img className="h-10 w-10 rounded-full object-cover" src={item?.img == '' ? box_logo : item?.img} />
                                    <p className="ml-4 w-56">
                                        <strong className="block font-medium">{item.item_name}</strong>

                                        <p className="text-xs truncate font-medium text-indigo-600">{item.location} </p>
                                        <p className="text-xs truncate font-medium text-indigo-600">{item.item_category} </p>
                                    </p>
                                </div>
                            )
                        })}
                        <Link to="/admin/item" className='absolute  bottom-1 right-2 my-1'>
                            <p className='text-black'>See More</p>
                        </Link>
                    </div>}

                {data?.mailData != null && data.mailData.length > 0 &&
                    <div className="relative max-w-md rounded-xl border p-6 pb-10 text-gray-900 bg9">
                        <p className="text-lg font-medium">Latest Notification</p>
                        {data?.mailData != null && data.mailData.length > 0 && data.mailData.map((mail) => {
                            return (
                                <div className="flex items-center py-2 my-1 bg-white hover:bg-gray-200 rounded-lg px-2">
                                    <img className="h-10 w-10 rounded-full object-cover" src={userLogo} alt="Simon Lewis" />
                                    <p className="ml-4 w-56">
                                        <strong className="block font-medium overflow-hidden">{mail.email}</strong>

                                        <p className="text-xs truncate font-medium text-indigo-600 ">{mail.email} </p>

                                        <p className="text-xs truncate font-medium text-indigo-600">{mail.subject} </p>
                                    </p>
                                </div>
                            )
                        })}
                        <Link to="/admin/notify" className='absolute  bottom-1 right-2 my-1'>
                            <p className='text-black'>See More</p>
                        </Link>

                    </div>}
            </div>
        </div>
    )
}

export default Activity