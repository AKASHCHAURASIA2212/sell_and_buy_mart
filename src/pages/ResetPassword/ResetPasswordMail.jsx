import './index.css'
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api_url, { emailValidation } from '../../utils/utils';
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

        if (emailValidation(formData.email)) {

            let data = {
                "email": formData.email,
                "userId": userId
            }

            let url = `${api_url}/api/users/check`
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            }).then(res => res.json())
                .then((data) => {

                    if (data.data) {
                        setMessage("Password Rest Link has Been Send on Email");
                        setTimeout(() => {
                            navigate('/signin')
                        }, 2000)
                    } else {
                        setMessage(data.message);
                        setTimeout(() => {
                            setMessage("");
                        }, 2000)
                    }
                }).catch((e) => {
                    console.log(e);
                })
        } else {
            setMessage("Email is Not Valid");

            setTimeout(() => {
                setMessage("")
            }, 2000)
        }


    };

    return (

        <div className="h-[88vh] bg-white-100 flex flex-col justify-center items-center mx-4 pt-0 -mt-10">


            <div className="relative max-w-md w-full p-6 bg-white rounded-lg shadow-lg border-2 border-blue-500 ">
                {
                    message !== "" && <span className='absolute -top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block text-white  bg5 px-2 py-2 rounded-md w-full'>{message}</span>
                }
                <h1 className="font-semibold text-center mb-6">Enter Email To Receive Password Reset Link</h1>
                <form className="space-y-4">
                    <div>
                        <input type="email" id="email" name='email' className="w-full border-white-300 rounded-md shadow_cstm outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <Link to={'/'}>
                        <button type="submit" className="w-full bg5 text-white py-2 rounded-md hover:bg5 transition duration-300 mt-4" onClick={handleSubmit}>Submit</button>
                    </Link>
                </form>
            </div>
        </div >
    );
};

export default ResetPasswordMail;


