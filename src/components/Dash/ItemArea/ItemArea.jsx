import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../../../asset/images/box.png'
import Pagination from '../../Pagination/Pagination';
function ItemArea() {

    let [itemData, setUserData] = useState(null);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(5);
    let [totalCount, settotalCount] = useState(null);


    async function getUserDetails() {

        await fetch(`http://localhost:3000/api/admin/item/${page}/${limit}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data.data.itemData.res);
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
        <div class="w-full px-6 pt-6 shadow_cstm overflow-hidden sm:rounded-lg  min-h-full">
            <div class="px-4 py-5 sm:px-6 bg-indigo-400 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Item database
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about Item.
                </p>
            </div>
            <div class="flex flex-wrap -mx-3">
                <div class="w-full mb-6  mx-auto">
                    <div class="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div class="relative flex flex-col min-w-0 break-words border-2 bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            {/* <!-- card header --> */}
                            {/* <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span class="mr-3 font-semibold text-dark">Projects Deliveries</span>
                                    <span class="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span>
                                </h3>
                                <div class="relative flex flex-wrap items-center my-2">
                                    <a href="javascript:void(0)" class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See other projects </a>
                                </div>
                            </div> */}
                            {/* <!-- end card header --> */}
                            {/* <!-- card body  --> */}
                            <div class="flex-auto block py-8 pt-6 px-9">
                                <div class="overflow-x-auto">
                                    <table class="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead class="align-bottom">
                                            <tr class="font-semibold text-[0.95rem] text-secondary-dark">
                                                <th class="pb-3 text-start min-w-[175px]">ITEM</th>
                                                <th class="pb-3 text-end min-w-[100px]">STATUS</th>
                                                <th class="pb-3 text-end min-w-[100px]">LOCATION</th>
                                                <th class="pb-3 pr-12 text-end min-w-[175px]">CREATED</th>
                                                <th class="pb-3 text-end min-w-[50px]">ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody className=''>
                                            {itemData != null && itemData.length > 0 && itemData.map((item) => {
                                                return (
                                                    <tr class="border-b border-dashed last:border-b-0">
                                                        <td class="p-3 pl-0">
                                                            <div class="flex items-center">
                                                                <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                                    <img src={userLogo} alt="" className='h-12 w-12' />
                                                                </div>
                                                                <div class="flex flex-col justify-start">
                                                                    <a href="javascript:void(0)" class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> {item.item_name} </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="p-3 pr-0 text-end">
                                                            <span class="font-semibold text-light-inverse text-md/normal bg-green-200 px-2 py-1 rounded-lg">{item.status}</span>
                                                        </td>
                                                        <td class="p-3 pr-0 text-end">
                                                            <span class="font-semibold text-light-inverse text-md/normal bg-purple-200 px-2 py-1 rounded-lg">{item.location}</span>
                                                        </td>
                                                        <td class="p-3 pr-12 text-end">
                                                            <span class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">{new Date(item.date_entered).toLocaleDateString('en-GB')}</span>
                                                        </td>

                                                        <td class="p-3 pr-0 text-end flex justify-between items-center mt-2">

                                                            <Link to={`edit/${item.item_id}`} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-indigo-400 px-2 py-1">
                                                                Edit
                                                            </Link>
                                                            <Link to={`edit/${item.item_id}`} class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center  text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-lg transition-colors duration-200 ease-in-out shadow-none border-0 justify-center bg-red-400 px-2 py-1">
                                                                Delete
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })}



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='-mt-8'>
                <Pagination page={page} limit={limit} setPage={setPage} setLimit={setLimit} totalCount={totalCount} />
            </div>

        </div>

    )
}

export default ItemArea