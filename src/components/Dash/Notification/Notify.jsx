import NotifyCard from '../Activity/NotifyCard'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../../../asset/images/user.png'
import Pagination from '../../Pagination/Pagination';
import { MdOutlineCancel } from "react-icons/md";

function Notify() {


    let [mailData, setMailData] = useState(null);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(5);
    let [totalCount, settotalCount] = useState(null);
    let [showModal, setShowModal] = useState(false);
    let [replyTo, setReplyTo] = useState(null);


    async function getUserDetails() {

        let result = await fetch(`http://localhost:3000/api/mail/${page}/${limit}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                setMailData(data.data.allMail)
                settotalCount(data.data.totalCount)
                // setMailData(data.data.mailData.res)

            }).catch((e) => {
                console.log(e);
            })

    };

    useEffect(() => {
        getUserDetails()
    }, [page])

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

        // await fetch(`http://localhost:3000/api/mail/${user_id}`, {
        //     method: "POST",
        //     body: JSON.stringify(formData),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // }).then(res => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         // navigate('/')

        //     }).catch((e) => {
        //         console.log(e);
        //     })

    };

    return (
        <div className='relative -mt-1'>

            <div className={`absolute flex justify-center items-center w-[95%] md:w:[48%] ${showModal ? 'flex' : 'hidden'} z-10`}>
                <div className=" bg-red-300 p-4 my-12 rounded-xl w-full lg:w-[45%]">
                    {/* <h1 className=" text-3xl font-bold">Contact Us</h1> */}
                    <form onSubmit={handleSubmit} className="rounded-2xl relative">
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
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
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
                            className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md mt-0 float-right"
                        >
                            Send
                        </button>

                        <div className='absolute top-0 right-2 text-xl' onClick={() => {
                            setShowModal(false)
                        }}>
                            <MdOutlineCancel />
                        </div>
                    </form>

                </div>
            </div>

            <div class="px-4 py-5 mb-3 sm:px-6 bg-blue-200 rounded-md">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Notification
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about Notification.
                </p>
            </div>

            <div className='overflow-auto-y min-h-[65vh] w-full flex flex-row flex-wrap justify-between items-center bg-white-300 mb-8'>
                {
                    mailData !== null && mailData.length > 0 && mailData.map((mail) => {
                        return (
                            <NotifyCard data={mail} showModal={showModal} setShowModal={setShowModal} setReplyTo={setReplyTo} />
                        )
                    })
                }
            </div>
            <div className='w-full'>
                <Pagination page={page} limit={limit} setPage={setPage} setLimit={setLimit} totalCount={totalCount} />
            </div>


        </div>


    )
}

export default Notify