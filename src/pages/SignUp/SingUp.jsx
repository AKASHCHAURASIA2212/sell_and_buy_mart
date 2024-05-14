import './index.css'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import api_url from '../../utils/utils';
const SingUp = () => {

    const navigate = useNavigate();
    let { setIsLogin, setIsAdmin } = useContext(MyContext)

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        if (formData.password !== formData.confirmPassword) {
            setMessage("Password Not Matched...")
            setTimeout(() => {
                setMessage("")
            }, 2000)
        } else {

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

                let url = `${api_url}/api/users/signup`

                await fetch(url, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }).then(res => res.json())
                    .then((data) => {
                        // console.log("SignUp -> ", data);
                        if (data.data == '') {
                            setMessage(data.message)
                        } else {
                            localStorage.setItem("user_id", data.data.user_id)
                            localStorage.setItem("username", data.data.username)
                            localStorage.setItem("login_status", true)
                            if (data.data.role == 'admin') {
                                setIsAdmin(true);
                                localStorage.setItem("admin_status", true)
                            } else {
                                localStorage.setItem("admin_status", false)
                            }
                            setIsLogin(true);
                            navigate('/')

                        }
                    }).catch((e) => {
                        console.log(e);
                    })
            }

        }
    };

    return (

        <div className="min-h-screen flex flex-col justify-center items-center mx-4 pt-0 -mt-10">

            <div className="max-w-md w-full p-6 pt-2 mt-6 bg-white rounded-lg shadow-lg border-2 border-blue-500 ">
                {
                    message !== "" && <h1 className='absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600  bg-blue-200 px-6 py-2 rounded-xl'>{message}</h1>
                }

                <h1 className="font-semibold text-center mb-6">Sign Up</h1>
                <form className="space-y-2">
                    <div>
                        <label htmlFor="username" className="block font-medium">Username</label>
                        <input type="text" id="username" name='username' className="w-full border-white-300 rounded-md shadow_cstm outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium">Email</label>
                        <input type="email" id="email" name='email' className="w-full border-white-300 rounded-md shadow_cstm outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input type="password" id="password" name='password' className="w-full border-white-300 rounded-md shadow_cstm  outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
                        <input type="password" id="confirmPassword" name='confirmPassword' className="w-full border-white-300 rounded-md shadow_cstm  outline-none p-2 mt-2" onChange={handleChange} required />
                    </div>
                    <Link to={'/'}>
                        <button type="submit" className="w-full bg5 text-white py-2 rounded-md hover:bg5 transition duration-300 mt-4" onClick={handleSubmit}>Sign Up</button>
                    </Link>
                    <div className='my-2'>
                        <span className='block mb-2 text-sm'>Already Have An Account ?<Link to={'/signin'} className='font-semibold text-blue-500'> SignIn</Link></span>
                    </div>
                </form>
            </div>

        </div >
    );
};

export default SingUp;


