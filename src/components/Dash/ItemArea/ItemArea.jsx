import React from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../../../asset/images/box.png'

function ItemArea() {
    return (

        <div class="w-full px-6 pt-6 shadow_cstm overflow-hidden sm:rounded-lg  min-h-full">
            <div class="px-4 py-5 sm:px-6 bg-indigo-400 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Item database
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about Item.
                </p>
            </div>
            <div class="flex flex-wrap -mx-3">
                <div class="w-full mb-6  mx-auto">
                    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div class="relative flex flex-col min-w-0 break-words border-2 bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            {/* <!-- card header --> */}
                            {/* <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span class="mr-3 font-semibold text-dark">Projects Deliveries</span>
                                    <span class="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span>
                                </h3>
                                <div class="relative flex flex-wrap items-center my-2">
                                    <a href="javascript:void(0)" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See other projects </a>
                                </div>
                            </div> */}
                            {/* <!-- end card header --> */}
                            {/* <!-- card body  --> */}
                            <div class="flex-auto block py-8 pt-6 px-9">
                                <div class="overflow-x-auto">
                                    <table class="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead class="align-bottom">
                                            <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th class="pb-3 text-start min-w-[175px]">ITEM</th>
                                                <th class="pb-3 text-end min-w-[100px]">STATUS</th>
                                                <th class="pb-3 text-end min-w-[100px]">LOCATION</th>
                                                <th class="pb-3 pr-12 text-end min-w-[175px]">CREATED</th>
                                                {/* <th class="pb-3 pr-12 text-end min-w-[100px]"></th> */}
                                                <th class="pb-3 text-end min-w-[50px]">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody className=''>
                                            <tr class="border-b border-dashed last:border-b-0">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src={userLogo} alt="" className='h-12 w-12' />
                                                        </div>
                                                        <div class="flex flex-col justify-start">
                                                            <a class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Akash Chaurasia </a>
                                                            <p class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-sm text-secondary-inverse hover:text-primary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-orange-200 px-2 py-1 rounded-lg">Pending</span>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg">GHAZIABAD</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">2024-04-01</span>
                                                </td>

                                                <td class="p-3 pr-0 text-end flex justify-between items-center mt-2">
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-green-400 px-2 py-1 mr-2">
                                                        Approve
                                                    </Link>
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center  text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-red-400 px-2 py-1">
                                                        Reject
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-dashed last:border-b-0">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src={userLogo} alt="" className='h-12 w-12' />
                                                        </div>
                                                        <div class="flex flex-col justify-start">
                                                            <a class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Akash Chaurasia </a>
                                                            <p class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-sm text-secondary-inverse hover:text-primary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-orange-200 px-2 py-1 rounded-lg">Pending</span>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg">GHAZIABAD</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">2024-04-01</span>
                                                </td>

                                                <td class="p-3 pr-0 text-end flex justify-between items-center mt-2">
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-green-400 px-2 py-1 mr-2">
                                                        Approve
                                                    </Link>
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center  text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-red-400 px-2 py-1">
                                                        Reject
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-dashed last:border-b-0">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src={userLogo} alt="" className='h-12 w-12' />
                                                        </div>
                                                        <div class="flex flex-col justify-start">
                                                            <a class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Akash Chaurasia </a>
                                                            <p class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-sm text-secondary-inverse hover:text-primary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-orange-200 px-2 py-1 rounded-lg">Pending</span>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg">GHAZIABAD</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">2024-04-01</span>
                                                </td>

                                                <td class="p-3 pr-0 text-end flex justify-between items-center mt-2">
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-green-400 px-2 py-1 mr-2">
                                                        Approve
                                                    </Link>
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center  text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-red-400 px-2 py-1">
                                                        Reject
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-dashed last:border-b-0">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src={userLogo} alt="" className='h-12 w-12' />
                                                        </div>
                                                        <div class="flex flex-col justify-start">
                                                            <a class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Akash Chaurasia </a>
                                                            <p class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-sm text-secondary-inverse hover:text-primary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-orange-200 px-2 py-1 rounded-lg">Pending</span>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg">GHAZIABAD</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">2024-04-01</span>
                                                </td>

                                                <td class="p-3 pr-0 text-end flex justify-between items-center mt-2">
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-green-400 px-2 py-1 mr-2">
                                                        Approve
                                                    </Link>
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center  text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-red-400 px-2 py-1">
                                                        Reject
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr class="border-b border-dashed last:border-b-0">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src={userLogo} alt="" className='h-12 w-12' />
                                                        </div>
                                                        <div class="flex flex-col justify-start">
                                                            <a class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Akash Chaurasia </a>
                                                            <p class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-sm text-secondary-inverse hover:text-primary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-orange-200 px-2 py-1 rounded-lg">Pending</span>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span class="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg">GHAZIABAD</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">2024-04-01</span>
                                                </td>

                                                <td class="p-3 pr-0 text-end flex justify-between items-center mt-2">
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-green-400 px-2 py-1 mr-2">
                                                        Approve
                                                    </Link>
                                                    <Link to={'edit'} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center  text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-red-400 px-2 py-1">
                                                        Reject
                                                    </Link>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="px-4 mb-4 flex justify-end space-x-4 -mt-6" aria-label="Pagination">

                <span class="rounded-lg border border-indigo-500 px-2 py-2 text-gray-700">
                    <span class="sr-only">Previous</span>
                    <svg class="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </span>

                <span class="rounded-lg border border-indigo-500 bg-indigo-500 px-4 py-2 text-white">1</span>

                <a class="rounded-lg border border-indigo-500 px-4 py-2 text-gray-700" href="/page/2">2
                </a>

                <a class="rounded-lg border border-indigo-500 px-4 py-2 text-gray-700" href="/page/3">3
                </a>

                <a class="rounded-lg border border-indigo-500 px-2 py-2 text-gray-700" href="/page/2">
                    <span class="sr-only">Next</span>
                    <svg class="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </a>

            </nav>
        </div>


    )
}

export default ItemArea