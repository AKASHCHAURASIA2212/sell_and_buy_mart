import React, { useState } from 'react'

function Card2({ item }) {

    let status_c = "Pending";
    let bg = "bg-orange-500";

    if (item.status == "available") {
        status_c = "Active";
        bg = "bg-green-500"
    } else if (item.status == "unavailable") {
        status_c = "InActive";
        bg = "bg-red-500"
    }

    let [status, setStatus] = useState(status_c);
    let [statusBg, setStatusBg] = useState(bg);


    return (
        <div className="relative w-[25rem] max-h-[25rem] mx-auto my-8 bg-white p-6 rounded-lg shadow-md">
            <img src="desk.jpg" alt="Item Image" className=" object-cover rounded-md mr-4" />
            <div className="flex items-center mb-4 ">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.item_name}</h2>
                    <p className="text-gray-600 text-sm sm:text-lg">Date: {item.date_entered}</p>
                    <p className="text-gray-600 text-sm sm:text-lg">Location: {item.location}</p>
                    <p className="text-gray-600 text-sm sm:text-lg">Price: {item.item_price}</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4 text-sm md:text-lg">{item.item_desc}</p>

            <div className="flex justify-between ">
                <div className="flex justify-start absolute top-0 right-0">
                    <button className={`${statusBg} text-white px-2 py-1 rounded-se-lg rounded-es-lg hover:bg-indigo-600 transition duration-300 text-sm`}>{status}</button>
                </div>
                <div className="flex justify-end">
                    {status_c != "Pending" && status_c != "InActive" &&
                        <>
                            <button className="bg-indigo-500 text-white px-2 py-2 mr-2 mx-auto rounded-md hover:bg-indigo-600 transition duration-300 text-sm w-[4rem]">Edit</button>

                            <button className="bg-red-500 text-white px-2 py-2 mx-auto rounded-md hover:bg-red-600 transition duration-300 text-sm w-[4rem]" onClick={() => { delete_item(item._id) }}>Delete</button>
                        </>
                    }
                </div>

            </div>


        </div>
    )
}

export default Card2