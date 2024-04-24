import React from 'react'
import userLogo from '../../asset/images/user.png';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div class="hidden sm:flex h-screen min-w-[20rem] max-w-[20rem] flex-col overflow-hidden bg-indigo-400 text-white">
            <h1 class="mt-10 ml-10 text-3xl bg-indigo-400 font-bold">ADMIN</h1>
            <ul class="mt-10 space-y-3 my-3 p-2">

                <li class=" flex cursor-pointer space-x-2 rounded-md px-10 py-4 text-gray-300 hover:bg-slate-600">
                    <Link to='/admin' >

                        {/* <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </span> */}
                        <span class="">DashBoard</span>
                    </Link>
                </li>
                <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
                    <Link to='user'>
                        {/* <span
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                        </span> */}
                        <span class="">User Management</span>
                        {/* <svg class="absolute -top-1/2 -right-1 h-32 w-8 text-gray-50" xmlns="http://www.w3.org/2000/svg" viewBox="399.349 57.696 100.163 402.081" width="1em" height="4em">
                        <path fill="currentColor" d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z" />
                    </svg> */}
                    </Link>
                </li>
                <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
                    <Link to='item'>
                        {/* <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </span> */}
                        <span class="">Inventory Management</span>
                    </Link>
                </li>
                <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
                    <Link to='notify'>
                        {/* <span
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        </span> */}
                        <span class="">Notifications</span>
                    </Link>
                </li>
                <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
                    <Link to='setting'>
                        {/* <span
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </span> */}
                        <span class="">Settings</span>
                    </Link>
                </li>
            </ul>
            <div class="my-6 mt-auto mx-5 flex cursor-pointer bg-indigo-400">
                <div>
                    <img class="h-12 w-12 rounded-full" src={userLogo} />
                </div>
                <div class="ml-3 ">
                    <p class="font-medium">Akash Chaurasia</p>
                    <p class="text-sm text-gray-300">Ghaziabad, India</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar