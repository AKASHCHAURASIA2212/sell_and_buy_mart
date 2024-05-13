import './index.css'
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api_url from '../../utils/utils';
const ResetPasswordMail = () => {

    const navigate = useNavigate();
    let { userId } = useParams();

    const [formData, setFormData] = useState({
        email: '',
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
            "email": formData.email,
            "userId": userId
        }

        let url = `${api_url}/api/users/check`
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data);

                if (data.data) {
                    setMessage(data.message);
                    setTimeout(() => {
                        navigate('/signin')
                    }, 2000)
                } else {
                    setMessage(data.message);
                }
            }).catch((e) => {
                console.log(e);
            })

    };

    return (

        <div className="min-h-screen bg-white-100 flex justify-center items-center mx-4 pt-0 -mt-10">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg border-2 border-indigo-500 ">
                {
                    message !== "" && <h1 className='mb-12 text-blue-600  bg-blue-200 px-6 py-2 rounded-xl'>{message}</h1>
                }
                <h1 className="font-semibold text-center mb-6">Enter Email To Receive Password Reset Link</h1>
                <form className="space-y-4">
                    <div>
                        {/* <label htmlFor="password" className="block font-medium">Email</label> */}
                        <input type="email" id="email" name='email' className="w-full border-white-300 rounded-md shadow-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <Link to={'/'}>
                        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 mt-4" onClick={handleSubmit}>Submit</button>
                    </Link>
                </form>
            </div>
        </div >
    );
};

export default ResetPasswordMail;


