import React from 'react'
import UserDetailsCard from './UserDetailsCard'

function NotifyCard({ data, setShowModal, setReplyTo }) {
    return (

        <div className="flex items-center justify-center w-[95%] sm:w-[48%] md:w-[33%] lg:w-[30%] h-[18rem] mx-2 my-2">

            <div className="relative flex w-full flex-col rounded-xl bg1 shadow-md h-full">

                <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-ss-xl rounded-se-xl bg5  text-white">
                    <UserDetailsCard data={data.email} />
                </div>
                <div className="px-6 h-full">

                    <span className="mb-2 block font-sans text-sm mt-3 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <span className='text-sm'>Subject : </span>{data.subject}
                    </span>
                    <span className="text-sm font-normal text-gray-700 antialiased overflow-scroll">
                        {data.message}
                    </span>
                    <button
                        className="absolute bottom-1 right-1 flex items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all bg5 "
                        type="button" onClick={() => {
                            setShowModal(true)
                            setReplyTo(data.email);
                        }}
                    >Reply
                    </button>

                </div>
            </div>

        </div>


    )
}

export default NotifyCard