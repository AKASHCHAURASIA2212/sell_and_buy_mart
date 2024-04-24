import React from 'react'
import { Link } from 'react-router-dom'
function ItemArea() {
    return (

        <div className="w-full bg-white-200 h-[100vh]">

            <div className="mx-auto mt-8 px-2 p-3 w-[90%]">
                <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
                    <p className="flex-1 text-base font-bold text-gray-900">Items</p>

                    <div className="mt-4 sm:mt-0">
                        <div className="flex items-center justify-start sm:justify-end">
                            <div className="flex items-center">
                                <label for="" className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                                <select name="" className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                    <option className="whitespace-no-wrap text-sm">Recent</option>
                                </select>
                            </div>

                            <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                                <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" className=""></path>
                                </svg>
                                Export to CSV
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border shadow h-[70vh]">
                    <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                        <thead className="hidden  lg:table-header-group">
                            <tr className="">
                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">ID</td>

                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Item Name</td>

                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Posted by</td>

                                {/* <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Phone</td> */}

                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Posted At</td>

                                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                            </tr>
                        </thead>

                        <tbody className="lg:border-gray-300">
                            <tr className='bg-gray-200'>
                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">1001</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="whitespace-no-wrap">Besique Monroe</p>
                                        </div>
                                    </div>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Akash Chaurasia</p>
                                </td>
                                {/* <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">+91-123456789</p>
                                </td> */}

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                                </td>
                            </tr>
                            <tr className='bg-gray-200'>
                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">1001</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="whitespace-no-wrap">Besique Monroe</p>
                                        </div>
                                    </div>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Akash Chaurasia</p>
                                </td>
                                {/* <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">+91-123456789</p>
                                </td> */}

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                                </td>
                            </tr>
                            <tr className='bg-gray-200'>
                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">1001</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="whitespace-no-wrap">Besique Monroe</p>
                                        </div>
                                    </div>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Akash Chaurasia</p>
                                </td>
                                {/* <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">+91-123456789</p>
                                </td> */}

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                                </td>
                            </tr>
                            <tr className='bg-gray-200'>
                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">1001</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="whitespace-no-wrap">Besique Monroe</p>
                                        </div>
                                    </div>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Akash Chaurasia</p>
                                </td>
                                {/* <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">+91-123456789</p>
                                </td> */}

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                                </td>
                            </tr>
                            <tr className='bg-gray-200'>
                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">1001</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="whitespace-no-wrap">Besique Monroe</p>
                                        </div>
                                    </div>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Akash Chaurasia</p>
                                </td>
                                {/* <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">+91-123456789</p>
                                </td> */}

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <p className="whitespace-no-wrap">Sep 28, 2022</p>
                                </td>

                                <td className=" border-gray-200 bg-white px-5 py-5 text-sm">
                                    <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <div className="flex w-full justify-end my-3 py-3">
                    {/* <!-- Previous Button --> */}
                    <Link href="#" className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
                        First
                    </Link>
                    <Link href="#" className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                    </Link>

                    {/* <!-- Next Button --> */}
                    <Link href="#" className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </Link>
                    <Link href="#" className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white">
                        Last
                    </Link>
                </div>
            </div>

        </div>


    )
}

export default ItemArea