import './index.css'

import React, { useState, useContext } from 'react';
import { MyContext } from '../../App';
import { Link, useNavigate } from 'react-router-dom';
import api_url from '../../utils/utils';

const SignIn = () => {

    const navigate = useNavigate();
    let { setIsLogin, setIsAdmin } = useContext(MyContext)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        if (formData.username == '' || formData.password == '' || formData.email == '') {
            setMessage("All Fields Required")
            setTimeout(() => {
                setMessage("")
            }, 2000)
        } else {
            let data = {
                "username": formData.username,
                "password": formData.password,
                "email": formData.email,
            }
            let url = `${api_url}/api/users/signin`
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then((data) => {
                    // console.log(data);

                    if (data.data === "") {
                        setMessage(data.message)
                        setTimeout(() => {
                            setMessage("")
                        }, 2000)
                    } else {
                        if (data.data) {
                            localStorage.setItem("user_id", data.data.user_id)
                            localStorage.setItem("username", data.data.username)
                            localStorage.setItem("login_status", true)

                            if (data.data.role == 'admin') {
                                setIsAdmin(true);
                                localStorage.setItem("admin_status", true)
                            } else {
                                localStorage.setItem("admin_status", false)
                            }
                            setIsLogin(true)
                            navigate('/')
                        }
                    }

                }).catch((e) => {
                    console.log(e);
                })
        }



    };

    return (

        <div className="relative min-h-screen bg-white flex flex-col justify-center items-center px-4">
            {
                message !== "" && <h1 className='absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600  bg-blue-200 px-6 py-2 rounded-xl'>{message}</h1>
            }

            <div className="max-w-md w-full p-6 bg-white-500 rounded-lg shadow_cstm -mt-10 border-2 border-blue-500 ">
                <h1 className=" font-semibold text-center mb-6">SIGN IN</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block font-medium">Username</label>
                        <input type="text" id="username" name='username' className="w-full border-white-300 rounded-md shadow_cstm  outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium">Email</label>
                        <input type="email" id="email" name='email' className="w-full border-white-300 rounded-md shadow_cstm outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input type="password" id="password" name='password' className="w-full border-white-300 rounded-md shadow_cstm  outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <Link to={'/'}>
                        <button type="submit" className="w-full bg5 text-white py-2 rounded-md hover:bg5 transition duration-300 mt-4" onClick={handleSubmit}>Sign In</button>
                    </Link>
                    <div className='my-2'>
                        <span className='block mb-2 text-sm'>Don't Have An Account ?<Link to={'/signup'} className='font-semibold text-blue-500'> SignUp</Link></span>
                        <span className='block text-sm'>Forgot Your Password ?<Link to={'/reset-password'} className='font-semibold text-blue-500'> Click Here To Reset</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
