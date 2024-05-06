import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import UserDetailsCard from '../Card/UserDetailsCard';
import ItemDetailsCard from '../Card/ItemDetailsCard';


function ItemDetails() {

    let [itemData, setItemData] = useState({
        "_id": "2",
        "buyer": [
            1002,
            1003
        ],
        "seller": [
            1001
        ],
        "item_category": "electronics",
        "item_name": "Smartwatch",
        "item_price": "300",
        "item_desc": "Advanced smartwatch with fitness tracking features.",
        "location": "Mumbai",
        "date_entered": "2024-01-15",
        "status": "unavailable",
        "img": "smartwatch_img1.jpg",
        "posted_by": "User2",
        "id": "8991"
    });

    let [inputDisabled, setInputDisabled] = useState(true)

    const getUserDetails = async (e) => {

        let result = await fetch("http://localhost:3000/user_data", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                setItemData(data[0])

            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        // getUserDetails()
    }, [])

    return (
        <div class="w-full p-3 shadow_cstm overflow-hidden sm:rounded-lg  my-0 mx-0 min-h-[70vh]">
            <div class="px-4 py-5 mb-3 sm:px-6 bg-blue-200 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Item Details
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about item.
                </p>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-start'>

                <div className="w-full md:w-[30%] h-full mt-2 md:mx-2 ">
                    <ItemDetailsCard data={itemData} for={"item"} />
                </div>

                <div className="w-full md:w-[70%]">
                    <div class="mt-2 mb-4">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item name
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='username' id='username' placeholder={itemData.item_name} value={itemData.item_name} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Category
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='username' id='username' placeholder={itemData.item_category} value={itemData.item_category} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Price
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='username' id='username' placeholder={itemData.item_price} value={itemData.item_price} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    location
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='username' id='username' placeholder={itemData.location} value={itemData.location} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                                </dd>
                            </div>
                            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Status
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='username' id='username' placeholder={itemData.status} value={itemData.status} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                                    {/* <select id="roleSelect" disabled={inputDisabled} className='outline-none w-full h-full px-2 py-3'>
                                <option value="admin">Admin</option>
                                <option value="user" selected>User</option>
                            </select> */}
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Desc
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='text' name='username' id='username' placeholder={itemData.item_desc} value={itemData.item_desc} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                                </dd>
                            </div>
                            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    Item Img
                                </dt>
                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 border-gray-300">
                                    <input type='file' name='username' id='username' placeholder={itemData.img} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} />
                                </dd>
                            </div>

                            <div class="flex flex-row justify-start items-center mb-12">
                                {inputDisabled &&
                                    <div className="px-2 py-2 mr-2 w-[8rem] bg-indigo-300 flex flex-row justify-around items-center rounded-md" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                        <button>EDIT</button>
                                        <FaRegEdit />
                                    </div>}
                                {!inputDisabled &&
                                    <>
                                        <div className="px-2 py-2 w-[8rem] mr-2 bg-red-300 flex flex-row justify-around items-center rounded-md" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                            <button>CANCEL</button>
                                            <GiCancel />
                                        </div>
                                        <div className="px-2 py-2 w-[8rem] bg-green-300 flex flex-row justify-around items-center rounded-md">
                                            <button>SAVE</button>
                                            <MdOutlineDoneOutline />
                                        </div>
                                    </>}
                            </div>
                        </dl>
                        <div className='user_profile_img'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails