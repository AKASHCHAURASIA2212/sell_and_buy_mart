import NotifyCard from '../Activity/NotifyCard'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userLogo from '../../../asset/images/user.png'
import Pagination from '../../Pagination/Pagination';
import { MdOutlineCancel } from "react-icons/md";
import api_url from '../../../utils/utils';
import loaderGif from '../../../asset/images/loading.gif'
import Loading from '../../Loading/Loading';

function Notify() {
    let [mailData, setMailData] = useState(null);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(5);
    let [totalCount, settotalCount] = useState(null);
    let [showModal, setShowModal] = useState(false);
    let [replyTo, setReplyTo] = useState(null);

    let [isLoading, setIsLoading] = useState(true);
    let token = localStorage.getItem("token");


    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    async function getUserDetails() {

        let url = `${api_url}/api/mail/${page}/${limit}`;
        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {
                // // console.log(data);
                setMailData(data.data.allMail)
                settotalCount(data.data.totalCount)

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
        formData.email = replyTo;
        console.log(formData);
        let url = `${api_url}/api/mail/send`

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data);
                // navigate('/')

            }).catch((e) => {
                // console.log(e);
            })

    };

    return (
        <>
            {
                isLoading === true && <div className='loader'>
                    <Loading />
                </div>
            }
            <div className='relative -mt-1'>

                <div className={`absolute flex justify-center items-center w-[100%] md:w:[48%] ${showModal ? 'flex' : 'hidden'} z-10`}>
                    <div className=" bg5 p-4 my-12 rounded-xl w-full lg:w-[45%]">
                        <form onSubmit={handleSubmit} className="rounded-2xl relative">
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={replyTo}
                                    onChange={handleChange}
                                    className="text-gray-600 outline-none w-full h-12 rounded-md p-3 mt-3"
                                />
                            </div>
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
                                className="inline-block bg2 text-white font-semibold py-2 px-4 rounded-md mt-0 float-right" onClick={() => { setShowModal(false) }}
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

                <div class="px-4 py-5 mb-3 sm:px-6 bg9 rounded-md">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Notification
                    </h3>
                    {/* <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Details and informations about Notification.
                </p> */}
                </div>

                <div className='overflow-auto-y min-h-[65vh] w-full flex flex-row flex-wrap justify-around items-start bg1 rounded-lg mb-8'>
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
        </>


    )
}

export default Notify