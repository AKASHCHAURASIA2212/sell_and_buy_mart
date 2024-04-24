import './index.css'
import React from 'react';
import contact_logo from '../../asset/images/about.svg'
import { Link } from 'react-router-dom';


const About = () => {
    return (

        <div className="px-4 md:px-10 min-h-[88vh] bg-indigo-200 flex flex-col justify-center items-center">
            <div className='contact_logo rounded-xl w-full lg:w-[45%] flex flex-col justify-center items-center h-[40vh] sm:h-[100%]'>
                <img src={contact_logo} className=' w-full -mt-20' />
                <div className='flex flex-col justify-center items-center h-auto -mt-12 text-center'>
                    <span className='-mt-12 text-xl md:text-2xl lg:text-3xl font-extrabold'>We’re a passionate group of people working from around the world to build the future of ecommerce.</span>

                    <Link to='/contact' className=' my-6'>
                        <span className='text-xl md:text-3xl lg:text-4xl font-extrabold bg-indigo-600 px-4 py-2 rounded-lg text-white'>Contact US</span>
                    </Link>
                </div>
            </div>
            {/* <div className="container mx-auto mt-8 bg-indigo-500 rounded-xl md:px-10">
            </div> */}
        </div>

    );
};

export default About;
