import api_url from '../../utils/utils';
import './index.css'

import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    let token = localStorage.getItem("token")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let url = `${api_url}/api/mail/newsletter`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": token
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert('Subscribed successfully!');
                setEmail('');
            } else {
                throw new Error('Failed to subscribe');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to subscribe. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="mx-2 h-[50vh] overflow-hidden my-6">
            <div className="mx-0 bg4 p-12 rounded-md flex flex-col md:flex-row items-center justify-around h-full">
                {/* Input field for email */}
                <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center w-full md:w-2/5 lg:w-3/5">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-4/5 md:w-3/5 px-4 py-2 mx-2 border-gray-300 rounded-md shadow_cstm"
                    />
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md"
                        disabled={loading}
                    >
                        {loading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </form>
                <div className="newsletter_logo w-full md:w-2/5 lg:w-2/4 text-center px-3">
                    <span className='block text-black font-extrabold text-3xl md:text-2xl lg:text-6xl'>Get notified</span>
                    <span className='block text-lg md:text-xl lg:text-5xl font-bold text-black mt-3 my-3'>Want latest news and updates?</span>
                    <span className='block text-blue-500 text-2xl md:text-lg lg:text-4xl font-bold'>Sign up for our newsletter.</span>
                </div>
            </div>
        </div>

    );
};

export default Newsletter;
