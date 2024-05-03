import React from 'react'
import { Link } from 'react-router-dom'

function Activity({ data }) {
    console.log(data);
    return (
        <div className=''>
            <div className="grid grid-cols-1 gap-5 bg-gray-100 p-2 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
                <div className="relative max-w-md rounded-xl border p-6 pb-10 text-gray-900 bg-white">
                    <p className="text-lg font-medium">Latest Users</p>

                    {data?.userData != null && data.userData.length > 0 && data.userData.map((user) => {
                        return (
                            <div className="flex items-center py-2 my-1 bg-gray-100 hover:bg-gray-200 rounded-lg px-2">
                                <img className="h-10 w-10 rounded-full object-cover bg-red-500" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
                                <p className="ml-4 w-56">
                                    <strong className="block font-medium">{user.username}</strong>
                                    <span className="text-xs text-gray-400">{user.email} <a className="truncate font-medium text-indigo-600" href="#">{user.address}</a> </span>
                                </p>
                            </div>
                        )
                    })}


                    <Link to="/admin/user" className='absolute my-1 botton-0 right-2 hover:text-blue-800'>
                        <p className='text-blue-600'>See More</p>
                    </Link>

                </div>

                <div className="relative max-w-md rounded-xl border p-6 pb-10 text-gray-900 bg-white">
                    <p className="text-lg font-medium">Latest Items</p>

                    {data?.itemData != null && data.itemData.length > 0 && data.itemData.map((item) => {
                        return (
                            <div className="flex items-center py-2 my-1 bg-gray-100 hover:bg-gray-200 rounded-lg px-2">
                                <img className="h-10 w-10 rounded-full object-cover bg-red-500" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
                                <p className="ml-4 w-56">
                                    <strong className="block font-medium">{item.item_name}</strong>
                                    <span className="text-xs text-gray-400">{item.location} <a className="truncate font-medium text-indigo-600" href="#">{item.item_category}</a> </span>
                                </p>
                            </div>
                        )
                    })}


                    <Link to="/admin/item" className='absolute my-1 botton-0 right-2 hover:text-blue-800'>
                        <p className='text-blue-600'>See More</p>
                    </Link>

                </div>

                <div className="relative max-w-md rounded-xl border p-6 pb-10 text-gray-900 bg-white">
                    <p className="text-lg font-medium">Latest Users</p>

                    {data?.userData != null && data.userData.length > 0 && data.userData.map((user) => {
                        return (
                            <div className="flex items-center py-2 my-1 bg-gray-100 hover:bg-gray-200 rounded-lg px-2">
                                <img className="h-10 w-10 rounded-full object-cover bg-red-500" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
                                <p className="ml-4 w-56">
                                    <strong className="block font-medium">{user.username}</strong>
                                    <span className="text-xs text-gray-400">{user.email} <a className="truncate font-medium text-indigo-600" href="#">{user.address}</a> </span>
                                </p>
                            </div>
                        )
                    })}


                    <Link to="/admin/user" className='absolute my-1 botton-0 right-2 hover:text-blue-800'>
                        <p className='text-blue-600'>See More</p>
                    </Link>

                </div>


                {/* <div className="relative max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
                    <p className="text-lg font-medium">Latest Notification</p>
                    <div className="mt-4">
                        <p className="float-left mb-2">Direct</p>
                        <span className="float-right mb-2">20,00</span>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                            <div className="h-full w-10/12 overflow-hidden rounded-full bg-indigo-600"></div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="float-left mb-2">Referral</p>
                        <span className="float-right mb-2">2,000</span>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                            <div className="h-full w-4/12 overflow-hidden rounded-full bg-indigo-600"></div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="float-left mb-2">Google</p>
                        <span className="float-right mb-2">1,500</span>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                            <div className="h-full w-3/12 overflow-hidden rounded-full bg-indigo-600"></div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="float-left mb-2">Facebook</p>
                        <span className="float-right mb-2">260</span>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-50">
                            <div className="h-full w-1/12 overflow-hidden rounded-full bg-indigo-600"></div>
                        </div>
                    </div>
                    <Link to="/admin/user" className='absolute my-1 botton-0 right-2 hover:text-blue-800'>
                        <p className='text-blue-600'>See More</p>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Activity