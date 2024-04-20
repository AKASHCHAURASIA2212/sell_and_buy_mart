import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import not_found_logo from '../../asset/images/not_found.png'

const NotFound = () => {
    return (
        <div className='text-center mx-auto flex justify-center items-center flex-col h-[95vh]'>

            <div className="not_found_logo">
                <img
                    src={not_found_logo}
                    alt="Not Found"
                    style={{ width: '150px', marginBottom: '20px' }}
                />
            </div>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
                <button className='bg-green-500 p-2 rounded-md m-2 px-5'>Go to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;
