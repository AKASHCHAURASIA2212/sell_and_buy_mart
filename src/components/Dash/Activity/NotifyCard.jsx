import React from 'react'
import UserDetailsCard from './UserDetailsCard'

function NotifyCard() {
    return (

        <div className="flex items-center justify-center w-[48%] mx-2 my-2">
            <div className="relative flex w-full flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <UserDetailsCard />
                </div>
                <div className="px-6 bg-gray-100 relative">

                    <p className="mb-2 block font-sans text-lg mt-3 font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Cross-platform service this week
                    </p>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>
                    <button
                        className="absolute bottom-1 right-1 flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >Reply
                    </button>

                </div>
            </div>

        </div>


    )
}

export default NotifyCard