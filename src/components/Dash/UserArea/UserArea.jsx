import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../../../asset/images/user.png'
import Pagination from '../../Pagination/Pagination';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";


function UserArea() {

    let [userData, setUserData] = useState(null);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(5);
    let [totalCount, settotalCount] = useState(null);


    async function getUserDetails() {

        let result = await fetch(`http://localhost:3000/api/admin/user/${page}/${limit}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data.data.userData.res);
                settotalCount(data.data.userData.totalCount)
                setUserData(data.data.userData.res)

            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        getUserDetails()
    }, [page])
    return (
        <div className="relative w-full px-0 -mt-1 overflow-hidden sm:rounded-lg  min-h-full">
            <div className="px-4 py-5 sm:px-6 bg-blue-200 rounded-md">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about user.
                </p>
            </div>
            <div className="flex flex-wrap mt-2">
                <div className="w-full mx-auto">
                    <div className="relative flex flex-col border-2 bg-clip-border rounded-lg min-h-[64vh]">
                        <div className="flex-auto block pb-8 pt-6 px-2">
                            <div className="overflow-x-auto">
                                <div className="w-full my-0 align-middle text-dark ">
                                    <div className=" w-full ">
                                        <div className="font-semibold text-[0.95rem] text-secondary-dark flex flex-row">
                                            <div className="pb-3 ml-2 text-start w-[20%]">USER</div>
                                            <div className="pb-3 text-start w-[20%]">STATUS</div>
                                            <div className="pb-3 text-start w-[20%]">ROLE</div>
                                            <div className="pb-3 text-start w-[20%]">CREATED</div>
                                            <div className="pb-3 text-start w-[20%]">ACTION</div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        {userData != null && userData.length > 0 && userData.map((user) => {
                                            return (
                                                <div className="flex flex-row justify-center items-center">

                                                    <div className="py-3 text-start w-[20%]">
                                                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-end mr-6 md:mr-0">
                                                            <div className="relative inline-block shrink-0 rounded-2xl">
                                                                <img src={userLogo} alt="" className='h-8 w-8 md:h-12 md:w-12' />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <p className="mb-1"> {user.username} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-start w-[20%]">
                                                        <span className="font-semibold bg-green-200 px-2 py-1 rounded-lg -ml-2 md:ml-0 text-xs md:text-lg">Active</span>
                                                    </div>
                                                    <div className="text-start w-[20%]">
                                                        <span className="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg -ml-2 md:ml-0 text-xs md:text-lg">{user.role}</span>
                                                    </div>
                                                    <div className="text-start w-[20%]">
                                                        <span className="text-xs md:text-lg -ml-3 md:ml-0 font-bold">{new Date(user.created_at).toLocaleDateString('en-GB')}</span>
                                                    </div>
                                                    <div className="text-start w-[20%]">
                                                        <div className="w-full flex flex-row">
                                                            <Link to={`edit/${user.user_id}`} className="   bg-blue-300 md:rounded-lg text-center text-sm md:text-lg font-semibold mb-1 md:mb-0 rounded-full h-6 w-6 md:h-8 md:w-8 flex justify-center items-center">
                                                                <FiEdit />
                                                            </Link>
                                                            <Link to={`edit/${user.user_id}`} className="   bg-red-500 rounded-full md:rounded-lg text-sm md:text-lg font-semibold ml-2 h-6 w-6 md:h-8 md:w-8 flex justify-center items-center">
                                                                <ImCancelCircle />
                                                            </Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <Pagination page={page} limit={limit} setPage={setPage} setLimit={setLimit} totalCount={totalCount} />
            </div>

        </div>
    )
}

export default UserArea