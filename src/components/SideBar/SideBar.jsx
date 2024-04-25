import React from 'react'
import userLogo from '../../asset/images/user.png';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div>

            <div class="hidden sm:flex h-screen min-w-[20rem] max-w-[20rem] flex-col overflow-hidden bg-indigo-400 text-white">
                <h1 class="mt-10 ml-10 text-3xl bg-indigo-400 font-bold">ADMIN</h1>
                <ul class="mt-10 space-y-3 my-3 p-2">

                    <li class=" flex cursor-pointer space-x-2 rounded-md px-10 py-4 text-gray-300 hover:bg-slate-600">
                        <Link to='/admin' >
                            <span class="">DashBoard</span>
                        </Link>
                    </li>
                    <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
                        <Link to='user'>
                            <span class="">User Management</span>

                        </Link>
                    </li>
                    {/* <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 font-semibold hover:bg-slate-600">
                        <Link to='user/edit'>
                            <span class="">User Edit</span>

                        </Link>
                    </li> */}
                    <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
                        <Link to='item'>

                            <span class="">Inventory Management</span>
                        </Link>
                    </li>
                    <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
                        <Link to='notify'>

                            <span class="">Notifications</span>
                        </Link>
                    </li>
                    <li class=" flex cursor-pointer space-x-2 rounded-md py-4 px-10 text-gray-300 hover:bg-slate-600">
                        <Link to='setting'>

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

        </div>
    )
}

export default SideBar