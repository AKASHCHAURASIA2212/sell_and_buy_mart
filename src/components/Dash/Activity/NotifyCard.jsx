import React from 'react'
import UserDetailsCard from './UserDetailsCard'

function NotifyCard({ data, setShowModal, setReplyTo }) {
    return (

        <div className="flex items-center justify-center w-[95%] sm:w-[48%] md:w-[33%] lg:w-[30%] h-[15rem] md:h-[20rem] mx-2 my-2">

            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-full">

                <div className="relative m-0 w-full shrink-0 overflow-hidden rounded-ss-xl rounded-se-xl bg-white bg-clip-border text-gray-700">
                    <UserDetailsCard data={data.sender} />
                </div>
                <div className="px-6 bg-gray-100 relative h-full">

                    <p className="mb-2 block font-sans text-lg mt-3 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <span className='text-bold'>Subject : </span>{data.subject}
                    </p>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {data.message}
                    </p>
                    <button
                        className="absolute bottom-1 right-1 flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button" onClick={() => {
                            setShowModal(true)
                            setReplyTo(data.sender.email);
                        }}
                    >Reply
                    </button>

                </div>
            </div>

        </div>


    )
}

export default NotifyCard