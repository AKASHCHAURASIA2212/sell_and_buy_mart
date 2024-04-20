
import './index.css'
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Left side content */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p>&copy; 2024 Your Company Name</p>
                    <p>All rights reserved</p>
                </div>

                {/* Right side content */}
                <div className="flex items-center justify-center md:justify-end">
                    <a href="#home" className="mr-4 hover:text-gray-300">Home</a>
                    <a href="#about" className="mr-4 hover:text-gray-300">About</a>
                    <a href="#services" className="mr-4 hover:text-gray-300">Services</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
