import './index.css'

import React, { useState } from 'react';


const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    // let cars_logo = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fnewsletter-banner-template-ribbon-label-sign-image177650292&psig=AOvVaw0_INWXy8EmZ2n2JfGH2kID&ust=1713097219205000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjt5M6Wv4UDFQAAAAAdAAAAABAJ'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://api.example.com/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

        <div className="mx-1 md:px-10 h-[60vh] overflow-hidden my-12">
            <div className="mx-1 bg-indigo-300 p-12 rounded-md flex flex-col md:flex-row items-center justify-center h-full">
                {/* Input field for email */}
                <form onSubmit={handleSubmit} className="flex flex-row items-center container w-full md:w-[40%] lg:w-[48%]">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full md:w-auto px-4 py-2 mx-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md"
                        disabled={loading}
                    >
                        {loading ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </form>

                {/* Logo on the right side */}
                <div className="newsletter_logo w-full md:w-[60%] lg:w-[48%] text-center px-3">
                    <span className='block font-extrabold text-xl md:text-2xl lg:text-7xl'>Get notified</span>
                    <span className='block text-lg md:text-xl lg:text-5xl font-bold text-indigo-600 mt-3 mb-2'>Want latest news and updates?</span>
                    <span className='block text-sm md:text-lg lg:text-4xl font-bold'>Sign up for our newsletter.</span>
                </div>

            </div>
        </div>

    );
};

export default Newsletter;
