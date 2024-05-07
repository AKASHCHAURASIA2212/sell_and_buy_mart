import './index.css'
import React from 'react';
import logo_cstm from '../../asset/cat_logo/jobs.png';

const Feature = ({ data }) => {

    const { heading, description, logo, theme }
        = data;

    return (
        <div className={` bg-indigo-600 text-gray-800 p-4 my-4 mt-8 rounded-md shadow-md mx-2`} >
            <div className="flex items-center mb-4 w-[100%]">
                <img src={logo} alt="Feature Logo" className="h-12 mx-2 text-white text-sm sm:text-lg " />
                <span className=" text-white text-sm sm:text-lg">{heading}</span>
            </div>
            <span className="w-100% text-white text-sm sm:text-lg">{description}</span>
        </div>


    );
};

export default Feature;
