import React from 'react'
import userLogo from '../../../asset/images/user.png'

function UserDetailsCard({ data }) {
    return (

        <div className="text-center  h-full flex flex-row justify-start items-center py-2 px-2">
            {/* <img className="w-16 h-16 rounded-full" src={userLogo} alt="" /> */}
            <div className="ml-2">
                {/* <p href="#"
                    className="font-medium leading-none text-gray-900 transition duration-500 ease-in-out">{data.username}
                </p> */}
                <p className='text-lg font-semibold text-center text-white mt-2'>{data}</p>
            </div>
        </div>

    )
}

export default UserDetailsCard