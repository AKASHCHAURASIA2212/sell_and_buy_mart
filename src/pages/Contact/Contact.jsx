import './index.css'
import React, { useState } from 'react';
import contact_logo from '../../asset/images/contact.webp'
import api_url from '../../utils/utils';
const Contact = () => {

    let user_id = localStorage.getItem("user_id");
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: ''
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

        console.log(formData);
        let url = `${api_url}/api/mail/${user_id}`
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                // navigate('/')
                setFormData({
                    subject: '',
                    email: '',
                    message: ''
                })

            }).catch((e) => {
                console.log(e);
            })

    };

    return (
        <div className='px-4 md:px-10 min-h-[88vh] bg6 flex flex-col md:flex-row justify-around'>

            <div className='contact_logo rounded-xl w-full lg:w-[45%] flex flex-col justify-center items-center h-[40vh] sm:h-[100%]'>
                <img src={contact_logo} className='h-[70%]' />
                <div className='flex flex-col justify-center items-center h-auto -mt-12 text-center'>
                    <span className='text-xl md:text-3xl lg:text-4xl font-bold mb-2'>How can we help you?</span>
                    <span className='text-sm md:text-2xl lg:text-2xl font-semibold mb-3'>Got an Issue? Want to send feedback? Let us know.</span>
                    <span className='text-2xl md:text-4xl lg:text-5xl font-extrabold'>Contact US</span>
                </div>
            </div>

            <div className=" bg4 p-4 my-12 rounded-xl w-full lg:w-[45%]">
                {/* <h1 className=" text-3xl font-bold">Contact Us</h1> */}
                <form onSubmit={handleSubmit} className="  rounded-2xl">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-50">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="text-gray-600 outline-none w-full h-12 rounded-md p-3 mt-3"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-50">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="text-gray-600 outline-none w-full h-12 rounded-md p-3 mt-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-50">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="text-gray-600 outline-none w-full h-48 rounded-md p-3 mt-3 resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-block bg1  text-gray-900 font-semibold py-2 px-4 rounded-md mt-8"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
