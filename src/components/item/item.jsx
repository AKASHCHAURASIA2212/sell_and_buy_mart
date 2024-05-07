import React from 'react'
import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { imgSrc, name, shortDesc, datePosted, postedBy, id } = item;

    return (
        <div className="item bg-white shadow-md rounded-md p-4 mb-4">
            <div className="flex items-center mb-2">
                <img src={imgSrc} alt={name} className="h-12 w-12 rounded-full mr-4" />
                <div>
                    <h2 className=" font-semibold">{name}</h2>
                    <p className="text-gray-500">{postedBy}</p>
                </div>
            </div>
            <p className="mb-2">{shortDesc}</p>
            <p className=" text-gray-500">Posted on {datePosted}</p>

            <Link to={`/details/${id}`} className="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
                Details
            </Link>
        </div>
    );
};

export default Item;
