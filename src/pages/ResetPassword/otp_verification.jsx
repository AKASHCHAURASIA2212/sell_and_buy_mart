import './index.css'
import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api_url from '../../utils/utils';
const OTP_Varify = () => {

    const navigate = useNavigate();
    let user_id = localStorage.getItem("user_id");

    const [formData, setFormData] = useState({
        otp: '',
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
            "otp": formData.otp,
            "user_id": user_id
        }

        let url = `${api_url}/api/users/verify`
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data.data);
                if (data.data.status) {
                    setMessage("OTP Varified");
                    setTimeout(() => {
                        navigate('/signin')
                    }, 2000)
                } else {
                    setMessage(data.data.data);
                    setTimeout(() => {
                        setMessage("");
                    }, 2000)
                }
            }).catch((e) => {
                console.log(e);
            })

    };

    return (

        <div className="h-[88vh] bg-white-100 flex justify-center items-center mx-4 pt-0 -mt-10">
            <div className="relative max-w-md w-full p-6 bg-white rounded-lg shadow-lg border-2 border-blue-500 ">
                {
                    message !== "" && <span className='absolute -top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block text-white  bg5 px-6 py-2 rounded-md'>{message}</span>
                }
                <h1 className="font-semibold text-center mb-6">Enter OTP To Verify Email</h1>
                <form className="space-y-4">
                    <div>
                        <input type="text" id="otp" name='otp' className="w-full border-white-300 rounded-md shadow_cstm outline-none p-2 mt-2" onChange={handleChange} />
                    </div>
                    <Link to={'/'}>
                        <button type="submit" className="w-full bg5 text-white py-2 rounded-md hover:bg5 transition duration-300 mt-4" onClick={handleSubmit}>Submit</button>
                    </Link>
                </form>
            </div>
        </div >
    );
};

export default OTP_Varify;


