import React from 'react'
import userLogo from '../../../asset/images/user.png'

function UserDetailsCard() {
    return (

        <div className="p-5 border rounded text-center text-gray-500 h-full bg-gray-300">
            <img className="w-16 h-16 rounded-full mx-auto" src={userLogo} alt="" />
            <div className="text-sm mt-5">
                <a href="#"
                    className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Akash Chaurasia
                </a>
                <p className='text-xl text-gray-900 mt-2'>New York | USA</p>
            </div>

            <p className="mt-4 text-sm text-gray-900">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
                Maiores et perferendis eaque.</p>


        </div>

    )
}

export default UserDetailsCard