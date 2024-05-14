import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FcGenericSortingDesc } from "react-icons/fc";
import { GrPowerReset } from "react-icons/gr";


function Filter({ search, setSearch }) {

    // let [showMenu, setShowMenu] = useState(false);
    let [filter, setFilter] = useState(search)

    return (
        <div className='w-full mx-auto pb-2 px-2 mt-2 border-2 rounded-xl flex flex-row sm:justify-end md:justify-end items-center flex-wrap justify-between mb-4 bg1'>

            {/* <div className="filter_menu flex flex-row justify-center items-center w-[10%] sm:w-auto">
                <div class="h-10 flex items-center justify-center mt-2 pl-2">
                    <div class="relative text-left h-full">
                        <button id="dropdown-button" class="flex justify-center items-center w-full p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:bg-green-300 h-full" onClick={() => { setShowMenu(!showMenu) }}>
                            <FcGenericSortingDesc size={20} />
                        </button>
                        <div id="dropdown-menu" class={`z-10 absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${showMenu === false ? 'hidden' : ''} `}>
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
            </div> */}

            <div className='h-9 w-9 bg2 mt-2 flex justify-center items-center rounded-xl text-white' onClick={() => {
                setSearch('empty')
                setFilter('')
            }}>
                <GrPowerReset className='h-6 w-6' />
            </div>

            <div className="filter flex flex-row flex-wrap sm:justify-center sm:items-center justify-self-end ml-2 w-[85%] sm:w-auto">
                <div className="search_filter sm:mr-3 w-full">
                    <div class="pt-2 mx-auto text-gray-600 flex flex-row justify-start items-center w-full">
                        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full  sm:max-w-[25rem]"
                            type="text" name="search"
                            value={filter == 'empty' ? '' : filter} placeholder="Search" onChange={(e) => { setFilter(e.target.value) }}
                        />
                        <button type="submit" class="h-10 bg2 rounded-md px-6 ml-1 text-white" onClick={() => { setSearch(filter) }}>
                            <IoIosSearch size={25} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter