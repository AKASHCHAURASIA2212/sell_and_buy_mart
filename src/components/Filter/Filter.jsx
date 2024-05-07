import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FcGenericSortingDesc } from "react-icons/fc";
import PriceFilter from '../PriceFilter/PriceFilter';


function Filter() {

    let [showMenu, setShowMenu] = useState(false);
    let [showMenu2, setShowMenu2] = useState(false);

    return (
        <div className='w-full mx-auto pb-2 px-2 -mb-4 mt-2 border-2 border-green-500 rounded-xl flex flex-row sm:justify-end md:justify-end sm:items-center items-start flex-wrap justify-between'>

            <div className="filter_menu flex flex-row justify-center items-center w-[10%] sm:w-auto">
                <div class="h-10 flex items-center justify-center mt-2 pl-2">
                    <div class="relative text-left h-full">
                        <button id="dropdown-button" class="flex justify-center items-center w-full p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:bg-green-300 h-full" onClick={() => { setShowMenu2(!showMenu2) }}>
                            <FcGenericSortingDesc size={20} />
                        </button>
                        <div id="dropdown-menu" class={`z-10 absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${showMenu2 === false ? 'hidden' : ''} `}>
                            <div class="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                                <span className='flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer'>Most Populer</span>
                                <span className='flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer'>Best Rating</span>
                                <span className='flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer'>Newest</span>
                                <span className='flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer'>Price: Low to High</span>
                                <span className='flex  rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer'>Price: High to Low</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter flex flex-row flex-wrap sm:justify-center sm:items-center justify-self-end ml-2 w-[85%] sm:w-auto">
                <div className="search_filter sm:mr-3 w-full">
                    <div class="pt-2 mx-auto text-gray-600 flex flex-row justify-start items-center w-full">
                        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full  sm:max-w-[25rem]"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" class="h-10 bg-green-500 rounded-md px-6 ml-1 text-white">
                            <IoIosSearch />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter