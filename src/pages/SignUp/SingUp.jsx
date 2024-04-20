import './index.css'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
const SingUp = () => {

    const navigate = useNavigate();
    let { setIsLogin } = useContext(MyContext)


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, validation, etc.
        console.log(formData); // Just for demonstration, replace with actual logic

        let data = {
            "user_id": Math.floor(Math.random() * (1099 - 1010 + 1)) + 1010,
            "username": formData.username,
            "password": formData.password,
            "email": formData.email,
            "phone": "+123456789",
            "address": "123 Elm St, Admin City, USA",
            "role": "user",
        }

        if (password == confirmPassword) {
            setMessage("Password Not Matched...")
        } else {

            let result = await fetch("http://localhost:3000/user_data", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then((data) => {
                    console.log(data);
                    localStorage.setItem("user_id", data.user_id)
                    localStorage.setItem("username", data.username)
                    localStorage.setItem("login_status", true)
                    setIsLogin(true);
                    navigate('/')

                }).catch((e) => {
                    console.log(e);
                })

            // result = result.json();
            // console.log(result);
            // setIsLogin(true)

        }
    };

    return (

        <div className="min-h-screen bg-white-100 flex justify-center items-center mx-4 pt-0 -mt-10">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg border-2 border-indigo-500 ">
                {message != "" &&
                    <div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
                            </svg>
                            {/* <span class="sr-only">Fire icon</span> */}
                        </div>
                        <div class="ms-3 text-sm font-normal">{message}</div>
                        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
                            <span class="sr-only">Close</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>
                }
                <h1 className="font-semibold text-center mb-6">Sign Up</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-medium">Username</label>
                        <input type="text" id="username" name='username' className="w-full border-white-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium">Email</label>
                        <input type="email" id="email" name='email' className="w-full border-white-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input type="password" id="password" name='password' className="w-full border-white-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
                        <input type="password" id="confirmPassword" name='confirmPassword' className="w-full border-white-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <Link to={'/'}>
                        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 mt-4" onClick={handleSubmit}>Sign Up</button>
                    </Link>

                </form>
            </div>
        </div >
    );
};

export default SingUp;


