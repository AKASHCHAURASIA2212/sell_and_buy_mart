import React, { useContext, useState } from 'react'
import './index.css'

import logo from '../../asset/images/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import UserAcc from '../UserAcc/UserAcc';
import { IoMenuSharp } from "react-icons/io5";


const Header = () => {

    let { isLogin, setIsLogin } = useContext(MyContext)
    let [showMenu, setShowMenu] = useState(false);
    let navigate = useNavigate();

    const closeModal = () => {
        setShowMenu(!showMenu);
    }

    const logoutHandler = () => {
        setIsLogin(false)
        localStorage.setItem("login_status", false);
        navigate('/signup')
    }


    return (

        <div className='modalWrapper' onClick={closeModal} >

            <div className=" bg-black">
                <header className=" text-white p-4">
                    <div className="flex flex-row justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            {/* <img src={logo} alt="Logo" className="h-8 mr-2" /> */}
                            <span className="text-xl font-semibold">S&BM</span>
                        </div>

                        {/* Menu (hidden in mobile view) */}
                        {isLogin &&
                            <nav className="hidden md:flex space-x-4">
                                <Link to="/" className="hover:text-gray-300">Home</Link>
                                <Link to="/about" className="hover:text-gray-300">About</Link>
                                <Link to="/services" className="hover:text-gray-300">Services</Link>
                                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                            </nav>
                        }

                        {/* Sign In/Sign Up buttons */}

                        <div className="flex space-x-4">

                            <span className="menu text-4xl" onClick={() => { setShowMenu(!showMenu) }}>
                                <IoMenuSharp />
                            </span>

                        </div>

                        {showMenu && <div id="dropdown-menu" class={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${showMenu ? 'hidden' : ''} `}>

                            <div class="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                                <a class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="light" width="18px" class="mr-2"><path d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"></path></svg> Light
                                </a>
                                <a class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon" width="18px" class="mr-2"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path></svg> Dark
                                </a>
                                <a class="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="mr-2" viewBox="0 0 32 32" id="desktop"><path d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path></svg> System
                                </a>
                            </div>
                        </div>
                            // <ul className="menu-list list-inline absolute top-20 right-2 bg-white w-48 h-auto text-black z-10 p-2 border-2 border-gray-400">
                            //     {isLogin &&
                            //         <Link to='/'>
                            //             <li className="list-item p-2 m-1 bg-gray-200">Home</li>
                            //         </Link>
                            //     }
                            //     {isLogin &&
                            //         <Link to='/add'>
                            //             <li className="list-item p-2 m-1 bg-gray-200">Ad Post</li>
                            //         </Link>
                            //     }
                            //     {isLogin &&
                            //         <Link to='/user'>
                            //             <li className="list-item p-2 m-1 bg-gray-200" onClick={() => { setIsLogin(true) }}>Profile</li></Link>
                            //     }
                            //     {isLogin && <Link to='/settings'>
                            //         <li className="list-item p-2 m-1 bg-gray-200">Settings</li>
                            //     </Link>}

                            //     {!isLogin && <Link to='/signin'>
                            //         <li className="list-item p-2 m-1 bg-gray-200">Sign In</li>
                            //     </Link>}
                            //     {!isLogin && <Link to='/signup'>
                            //         <li className="list-item p-2 m-1 bg-gray-200">Sign Up</li>
                            //     </Link>}
                            //     {isLogin && <Link to='/signin'>
                            //         <li className="list-item p-2 m-1 bg-gray-200" onClick={logoutHandler}>Sign Out</li>
                            //     </Link>}
                            //     {/* {!isLogin &&
                            //     <li className="list-item"><Link to="/signin" className="hover:text-gray-300">
                            //         <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md">Sign In</button>
                            //     </Link>
                            //     </li>
                            // }
                            // {!isLogin &&
                            //     <Link to="/signup" className="hover:text-gray-300">
                            //         <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md">Sign Up</button>
                            //     </Link>
                            // }
                            // {isLogin &&
                            //     <Link to="/signup" className="hover:text-gray-300">
                            //         <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md" onClick={() => { setIsLogin(false) }}>Sign Out</button>
                            //     </Link>
                            // }

                            // {isLogin &&
                            //     <Link to="/user" className="hover:text-gray-300">
                            //         <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md" onClick={() => { setIsLogin(true) }}>User</button>
                            //     </Link>
                            // } */}
                            // </ul>
                        }

                    </div>
                </header>

            </div>
        </div>

    );
};

export default Header;
