import React from 'react'

function Alert({ data }) {

    return (
        <div class="m-3 absolute top-2 right-2">
            <div class="flex shadow-lg rounded-lg max-w-[20rem]">
                <div class={`px-4 py-6 bg-${data.bg} rounded-lg flex justify-between items-center w-full border border-l-transparent border-gray-20`}>
                    <div class="text-green-600">{data.message}</div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Alert