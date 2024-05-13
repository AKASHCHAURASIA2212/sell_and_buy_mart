import React from 'react'
function Pagination({ limit, page, setPage, setLimit, totalCount }) {
    let pages = Math.ceil(totalCount / limit);

    return (
        <from class="px-4 mt-6 mb-b flex justify-end space-x-4 " aria-label="Pagination">
            {
                page != 1 && <span class="rounded-lg bg2 px-2 py-2 text-white cursor-pointer" onClick={() => { setPage(page - 1) }}>
                    <span class="sr-only">Previous</span>
                    <svg class="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd">
                        </path>
                    </svg>
                </span>
            }
            <span class="rounded-lg bg2 px-4 py-2 text-white">{page}</span>
            {
                page + 1 <= pages &&
                <span class="rounded-lg bg2 px-4 py-2 text-white cursor-pointer" onClick={() => { setPage(page + 1) }}>{page + 1}
                </span>
            }
            {
                page + 2 <= pages &&
                <span class="rounded-lg bg2 px-4 py-2 text-white cursor-pointer" onClick={() => { setPage(page + 1) }}>{page + 2}
                </span>
            }
            {page + 3 < pages && <a class="rounded-lg bg2 px-2 py-2 text-white cursor-pointer" onClick={() => { setPage(page + 3) }}>
                <span class="sr-only">Next</span>
                <svg class="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                    aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd">
                    </path>
                </svg>
            </a>}

        </from>
    )
}

export default Pagination