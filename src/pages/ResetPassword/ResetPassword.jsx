import './index.css'
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api_url from '../../utils/utils';
const ResetPassword = () => {

    const navigate = useNavigate();
    let { userId } = useParams();

    const [formData, setFormData] = useState({
        user_id: userId,
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

        let data = {
            "password": formData.password,
            "userId": formData.user_id
        }

        if (formData.password !== formData.confirmPassword) {
            setMessage("Password Not Matched...")
            setTimeout(() => {
                setMessage("")
            }, 2000)
        } else {
            let url = `${api_url}/api/users/reset`
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            }).then(res => res.json())
                .then((data) => {
                    navigate('/signin')
                }).catch((e) => {
                    console.log(e);
                })
        }
    };

    return (

        <div className="min-h-screen bg-white-100 flex justify-center items-center mx-4 pt-0 -mt-10">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg border-2 border-blue-500 ">
                {
                    message !== "" && <h1 className='mb-12 text-white  bg5 px-6 py-2 rounded-md'>{message}</h1>
                }
                <h1 className="font-semibold text-center mb-6">Enter New Password</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input type="password" id="password" name='password' className="w-full border-white-300 rounded-md shadow_cstm outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
                        <input type="password" id="confirmPassword" name='confirmPassword' className="w-full border-white-300 rounded-md shadow_cstm outline-none p-2 mt-2" onChange={handleChange} />
                    </div>

                    <Link to={'/'}>
                        <button type="submit" className="w-full bg5 text-white py-2 rounded-md transition duration-300 mt-4" onClick={handleSubmit}>Submit</button>
                    </Link>

                </form>
            </div>
        </div >
    );
};

export default ResetPassword;


