import React from 'react'
import userLogo from '../../../asset/images/user.png'

function UserDetailsCard({ data }) {
    return (

        <div className="border rounded text-center  h-full flex flex-row justify-start items-center py-2 px-2">
            <img className="w-16 h-16 rounded-full" src={userLogo} alt="" />
            <div className="text-sm text-left ml-2">
                <p href="#"
                    className="font-medium leading-none text-gray-900 transition duration-500 ease-in-out">{data.username}
                </p>
                <p className='text-sm text-gray-900 mt-2'>{data.address}</p>
            </div>
        </div>

    )
}

export default UserDetailsCard