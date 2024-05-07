import React from 'react'

function Stats({ data }) {
    console.log(data);

    return (
        <div>
            <div class="flex flex-row flex-wrap justify-between items-center w-full">

                <div class="px-2 py-2 md:px-4 md:py-4 shadow_cstm shadow-blue-100 w-[48%] md:w-[50%] lg:w-[30%] bg-blue-200 mb-4 flex flex-row rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14 rounded-xl bg-blue-50 p-2 md:p-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                    </svg>
                    <div className='ml-4'>
                        <p class="mt-0 font-medium">Items</p>
                        <p class="mt-0 text-xl font-medium">
                            {data?.itemCount}
                        </p>
                    </div>
                </div>

                <div class="px-2 py-2 md:px-4 md:py-4 shadow_cstm shadow-blue-100 w-[48%] md:w-[50%] lg:w-[30%] bg-rose-200 mb-4 flex flex-row rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14 rounded-xl bg-blue-50 p-2 md:p-4 text-rose-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                    <div className='ml-4'>
                        <p class="mt-0 font-medium">Users</p>
                        <p class="mt-0 text-xl font-medium">
                            {data?.userCount}
                        </p>
                    </div>
                </div>

                <div class="px-2 py-2 md:px-4 md:py-4 shadow_cstm shadow-blue-100 w-[48%] md:w-[50%] lg:w-[30%] bg-green-200 mb-4 flex flex-row rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-14 md:w-14 rounded-xl bg-blue-50 p-2 md:p-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className='ml-4'>
                        <p class="mt-0 font-medium">Notification</p>
                        <p class="mt-0 text-xl font-medium">
                            {data?.mailCount}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stats