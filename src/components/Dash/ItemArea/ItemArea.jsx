import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../../../asset/images/box.png'
import Pagination from '../../Pagination/Pagination';
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { HiCheck } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import api_url from '../../../utils/utils';

function ItemArea() {

    let [itemData, setUserData] = useState(null);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(5);
    let [totalCount, settotalCount] = useState(null);
    let [showModal, setShowModal] = useState(false);
    let [replyTo, setReplyTo] = useState(null);
    let [item_id, setItemId] = useState(null);
    let user_id = localStorage.getItem("user_id")

    const [formData, setFormData] = useState({
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleApprove = async (item_id) => {
        // e.preventDefault();
        // // console.log("handle Approve : ", item_id);

        let url = `${api_url}/api/admin/item/approve`;

        let data = {
            itemId: item_id,
            approved_by: user_id
        }

        let result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                // // console.log(data);
                // navigate('/')
                // window.location.reload();

            }).catch((e) => {
                console.log(e);
            })
    }
    const handleDelete = async (item_id) => {
        // e.preventDefault();
        // console.log("handle Approve : ", item_id);

        let url = `${api_url}/api/admin/item/delete`;

        let data = {
            itemId: item_id,
            deleted_by: user_id
        }

        let result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data);
                // navigate('/')
                window.location.reload();

            }).catch((e) => {
                console.log(e);
            })
    }

    const handleRejectSubmit = (item_id) => {
        setItemId(item_id)
        setShowModal(true)
    }

    const handleReject = async (e) => {
        e.preventDefault();

        // console.log(formData);

        let url = `${api_url}/api/admin/item/reject`;

        let data = {
            message: formData.message,
            itemId: item_id,
            rejected_by: user_id
        }

        // console.log(data);

        let result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data);
                setShowModal(false)
                // navigate('/')
                window.location.reload();


            }).catch((e) => {
                console.log(e);
            })
    }

    async function getUserDetails() {

        let url = `${api_url}/api/admin/item/${page}/${limit}`;
        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data.data.itemData.res);
                settotalCount(data.data.itemData.totalCount)
                setUserData(data.data.itemData.res)

            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        getUserDetails()
    }, [page])



    return (
        <div className="relative w-full px-0 -mt-1 overflow-hidden sm:rounded-lg  min-h-full">


            <div className={`absolute flex justify-center items-center w-[95%] md:w:[48%] ${showModal ? 'flex' : 'hidden'} z-10`}>
                <div className=" bg-red-300 p-4 my-12 rounded-xl w-full lg:w-[45%]">
                    <form onSubmit={handleReject} className="rounded-2xl relative">

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Reason For Rejection
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="text-gray-600 outline-none w-full h-48 rounded-md p-3 mt-3 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md mt-0 float-right"
                        >
                            Send
                        </button>

                        <div className='absolute top-0 right-2 text-xl' onClick={() => {
                            setShowModal(false)
                        }}>
                            <MdOutlineCancel />
                        </div>
                    </form>

                </div>
            </div>
            <div className="px-4 py-5 sm:px-6 bg5 rounded-md">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Item Information
                </h3>
                {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about Item.
                </p> */}
            </div>
            <div className="flex flex-wrap mt-2">
                <div className="w-full mx-auto">
                    <div className="relative flex flex-col border-2 bg-clip-border rounded-lg min-h-[64vh]">
                        <div className="flex-auto block pb-8 pt-6 px-2">
                            <div className="overflow-x-auto">
                                <div className="w-full my-0 align-middle text-dark ">
                                    <div className=" w-full ">
                                        <div className="font-semibold text-[0.95rem] text-secondary-dark flex flex-row">
                                            <div className="pb-3 ml-2 pl-3 md:pl-0 text-start w-[30%] md:w-[20%]">ITEM</div>
                                            <div className="pb-3 -ml-3 md:ml-0 text-start w-[20%] md:w-[20%]">PRICE</div>
                                            <div className="pb-3 text-start w-[25%] md:w-[20%] hidden md:block">STATUS</div>
                                            <div className="pb-3 text-start w-[25%] md:w-[20%]">CREATED</div>
                                            <div className="pb-3 pl-3 md:pl-0 text-start w-[25%] md:w-[20%]">ACTION</div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        {itemData != null && itemData.length > 0 && itemData.map((item) => {
                                            return (
                                                <div className="flex flex-row justify-center items-center">

                                                    <div className="py-3 text-start w-[30%] md:w-[20%]">
                                                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-end mr-6 md:mr-0">
                                                            <div className="relative inline-block shrink-0 rounded-2xl">
                                                                <img src={item?.img == '' ? userLogo : item?.img} alt="" className='h-8 w-8 md:h-12 md:w-12 rounded-full object-cover object-center' />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <p className="mb-1"> {item.item_name} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-start w-[20%] md:w-[20%] ">
                                                        <span className="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg -ml-2 md:ml-0 text-xs md:text-lg">{item.item_price}</span>
                                                    </div>
                                                    <div className="text-start w-[25%] md:w-[20%] hidden md:block">
                                                        <span className="font-semibold bg-green-200 px-2 py-1 rounded-lg -ml-2 md:ml-0 text-xs md:text-lg">{item.status}</span>
                                                    </div>
                                                    <div className="text-start w-[25%] md:w-[20%]">
                                                        <span className="text-xs md:text-lg -ml-3 md:ml-0 font-bold">{new Date(item.date_entered).toLocaleDateString('en-GB')}</span>
                                                    </div>
                                                    <div className="text-start w-[25%] md:w-[20%]">
                                                        <div className="w-full flex flex-row">
                                                            {
                                                                item.status != 'unavailable' && <Link to={`edit/${item.item_id}`} className="   bg-blue-300 md:rounded-lg text-center text-sm md:text-lg font-semibold mb-1 md:mb-0 rounded-full h-6 w-6 md:h-8 md:w-8 flex justify-center items-center">
                                                                    <FiEdit />
                                                                </Link>
                                                            }


                                                            {
                                                                item.status == 'pending' && <div onClick={() => { handleApprove(item.item_id) }} className="   bg-green-300 md:rounded-lg text-center text-sm md:text-lg font-semibold ml-2 mb-1 md:mb-0 rounded-full h-6 w-6 md:h-8 md:w-8 flex justify-center items-center">
                                                                    <HiCheck />
                                                                </div>
                                                            }

                                                            {
                                                                item.status == 'pending' && <div onClick={() => { handleRejectSubmit(item.item_id) }} className="   bg-red-500 rounded-full md:rounded-lg text-sm md:text-lg font-semibold ml-2 h-6 w-6 md:h-8 md:w-8 flex justify-center items-center">
                                                                    <ImCancelCircle />
                                                                </div>
                                                            }

                                                            {
                                                                item.status == 'available' && <div onClick={() => { handleDelete(item.item_id) }} className="   bg-red-500 rounded-full md:rounded-lg text-sm md:text-lg font-semibold ml-2 h-6 w-6 md:h-8 md:w-8 flex justify-center items-center">
                                                                    <MdDelete />
                                                                </div>
                                                            }


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

        </div>)
}

export default ItemArea