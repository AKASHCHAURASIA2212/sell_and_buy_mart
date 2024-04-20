import './index.css'
import React from 'react';
import logo_cstm from '../../asset/cat_logo/jobs.png';

const Feature = ({ data }) => {

    const { heading, description, logo, theme }
        = data;
    // console.log(heading, description, logo);


    return (
        <div className={`feature bg-indigo-500 text-gray-800 p-4 my-4 mt-8 rounded-md shadow-md mx-1 h-[20rem] w-[55rem]`} >
            <div className="flex items-center mb-4">
                <img src={logo} alt="Feature Logo" className="h-9  mr-2" />
                <h3 className=" font-semibold">{heading}</h3>
            </div>
            <p className="">{description}</p>
        </div>


    );
};

export default Feature;
