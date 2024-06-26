import './index.css'

import React, { useState, useContext } from 'react';
import { MyContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();
    let { setIsLogin } = useContext(MyContext)


    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch("http://localhost:3000/user_data", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);

                let user = data.filter((item) => {
                    if (item.username == formData.username && item.password == formData.password) {
                        return item;
                    }
                })

                console.log(user);
                if (user) {
                    localStorage.setItem("user_id", user[0].user_id)
                    localStorage.setItem("username", user[0].username)
                    localStorage.setItem("login_status", true)
                    setIsLogin(true)
                    navigate('/')
                }

            }).catch((e) => {
                console.log(e);
            })

    };

    return (

        <div className="min-h-screen bg-white flex justify-center items-center px-4">
            <div className="max-w-md w-full p-6 bg-white-500 rounded-lg shadow-lg -mt-10 border-2 border-indigo-500 ">
                <h1 className=" font-semibold text-center mb-6">Sign In</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-medium">Username</label>
                        <input type="text" id="username" name='username' className="w-full border-white-300 rounded-md shadow-md  focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input type="password" id="password" name='password' className="w-full border-white-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <Link to={'/'}>
                        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 mt-4" onClick={handleSubmit}>Sign In</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
