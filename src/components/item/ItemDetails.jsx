import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import UserDetailsCard from '../Card/UserDetailsCard';
import ItemDetailsCard from '../Card/ItemDetailsCard';
import api_url from '../../utils/utils';
import { useParams } from 'react-router-dom';
import loaderGif from '../../asset/images/loading.gif'
import Loading from '../Loading/Loading';


function ItemDetails() {


    let [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)


    let userId = localStorage.getItem("user_id");
    let token = localStorage.getItem("token");

    let [itemData, setItemData] = useState(null);

    let [inputDisabled, setInputDisabled] = useState(true)

    let [formData, setFormData] = useState(null);
    const [image, setImage] = useState('');
    let { itemId } = useParams()


    const getUserDetails = async (e) => {
        let url = `${api_url}/api/items/${itemId}`;

        await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {

                // console.log(data);
                let itemData = data.data[0];
                // console.log(itemData);
                setItemData(itemData)

                let test_data = {
                    item_id: itemData?.item_id,
                    item_name: itemData?.item_name,
                    item_category: itemData?.item_category,
                    item_desc: itemData?.item_desc,
                    item_price: itemData?.item_price,
                    location: itemData?.location,
                    status: itemData?.status,
                    img: itemData?.img,
                }

                setFormData(test_data)
                // // console.log("FORMDATA : ", formData);

            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        getUserDetails()
    }, [])

    const handiveChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    };

    const handiveImageSave = async (image) => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'cpfy_sabm')
        data.append('cloud_name', 'dqjnwvw0d')
        let cloud_name = 'dqjnwvw0d';
        let url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

        let img_url = await fetch(url, {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                // console.log(data.secure_url);
                return data.secure_url;
            }).catch((e) => {
                console.log(e);

                return '';
            });

        return img_url;

    }

    const handiveSubmit = async (e) => {
        setInputDisabled(true)
        e.preventDefault();

        // console.log("handiveSubmit : ", formData);

        let data = {
            item_id: formData?.item_id,
            item_name: formData?.item_name,
            item_category: formData?.item_category,
            item_desc: formData?.item_desc,
            item_price: formData?.item_price,
            location: formData?.location,
            status: formData?.status,
            img: formData.img
        }

        if (image != '') {
            let img_url = await handiveImageSave(image)
            data.img = [img_url];
        }

        // console.log(data);

        let url = `${api_url}/api/items/update`;

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {
                // // console.log(data);
            }).catch((e) => {
                console.log(e);
            })
    };

    return (
        <>
            {
                isLoading === true && <div className='loader'>
                    <Loading />
                </div>
            }

            <div class="w-full p-3 shadow_cstm overflow-hidiven sm:rounded-lg  my-0 mx-0 min-h-[70vh]">
                <div class="px-4 py-5 mb-3 sm:px-6 bg1 rounded-md">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Item Details
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm ">
                        Details and informations about item.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row-reverse justify-between items-start'>

                    <div className="w-full md:w-[30%] h-full mt-2 md:mt-0 md:mx-2 ">
                        <ItemDetailsCard data={itemData} for={"item"} />
                    </div>

                    <div className="w-full md:w-[70%] bg1 rounded-md">
                        <div class="mt-2 mb-4">
                            <div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium ">
                                        Item name
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 ">
                                        <input type='text' name='item_name' id='item_name' value={formData?.item_name} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handiveChange} />
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium ">
                                        Item Category
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 ">
                                        <input type='text' name='item_category' id='item_category' value={formData?.item_category} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handiveChange} readOnly='true' />
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium ">
                                        Item Price
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 ">
                                        <input type='text' name='item_price' id='item_price' value={formData?.item_price} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handiveChange} />
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium ">
                                        location
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 ">
                                        <input type='text' name='location' id='location' value={formData?.location} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handiveChange} />
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium ">
                                        Status
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 ">
                                        <input type='text' name='status' id='status' value={formData?.status} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handiveChange} readOnly='true' />

                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium ">
                                        Item Desc
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 ">
                                        <input type='text' name='item_desc' id='item_desc' value={formData?.item_desc} className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={handiveChange} />
                                    </div>
                                </div>
                                <div class=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <div class="text-sm font-medium ">
                                        Item Img
                                    </div>
                                    <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 border-2 ">
                                        <input type='file' name='img' id='img' className='outline-none w-full h-full px-2 py-3' disabled={inputDisabled} onChange={(e) => { setImage(e.target.files[0]) }} />
                                    </div>
                                </div>

                                <div class="flex flex-row justify-start items-center mb-6 ml-6">
                                    {inputDisabled &&
                                        <div className="px-2 py-2 mr-2 w-[8rem] bg5 flex flex-row justify-around items-center rounded-md" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                            <button>EDIT</button>
                                            <FaRegEdit />
                                        </div>}
                                    {!inputDisabled &&
                                        <>
                                            <div className="px-2 py-2 w-[8rem] mr-2 bg5 flex flex-row justify-around items-center rounded-md cursor-pointer" onClick={() => { setInputDisabled(!inputDisabled) }}>
                                                <button>CANCEL</button>
                                                <GiCancel />
                                            </div>
                                            <div className="px-2 py-2 w-[8rem] bg5 flex flex-row justify-around items-center rounded-md cursor-pointer" onClick={handiveSubmit}>
                                                <button>SAVE</button>
                                                <MdOutlineDoneOutline />
                                            </div>
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetails