import './index.css'
import React from 'react';
import logo_cstm from '../../asset/cat_logo/jobs.png';

const Feature = ({ data }) => {

    const { heading, description, logo, theme }
        = data;
    // console.log(heading, description, logo);


    return (
        <div className={` bg-indigo-500 text-gray-800 p-4 my-4 mt-8 rounded-md shadow-md min-h-[25rem] w-[20rem] mx-2`} >
            <div className="flex items-center mb-4 w-[100%]">
                <img src={logo} alt="Feature Logo" className="h-12  mr-2 " />
                <span className=" font-extrabold text-xl">{heading}</span>
            </div>
            <span className="w-100% text-xl font-semibold">{description}</span>
        </div>


    );
};

export default Feature;
