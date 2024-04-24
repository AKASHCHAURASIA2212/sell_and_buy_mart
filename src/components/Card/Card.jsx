import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

import { FaRupeeSign } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";



function Card({ item }) {
    return (
        <div>
            <div className=" flex w-full min-w-[10rem] max-h-[25rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className=" mx-4 mt-4 overflow-hidden bg-blue-gray-500 text-white shadow-lg shadow-blue-gray-500/40 h-[45%]">
                    {/* <img
                        src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                        alt="ui/ux review check"
                        className='h-2/5'
                    /> */}
                    <p className='h-full w-full bg-indigo-500 text-indigo-500 rounded-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut hic debitis voluptatem, id iure itaque delectus dolores accusantium. Tenetur ratione harum atque dicta provident? Maiores natus repellat id officiis iste. Provident totam fugit nisi possimus iste. Eos adipisci ullam minus optio magnam deserunt natus ad corrupti commodi provident veniam laboriosam eveniet perspiciatis molestias facere doloribus dolorum dolore deleniti saepe aspernatur, error, vel harum neque. Quasi quisquam, assumenda reiciendis ratione sint molestias sequi velit enim eaque quos ducimus ex? Saepe nisi dolores itaque soluta assumenda placeat vero accusantium consequatur pariatur tempora, error, eaque praesentium ad provident hic vitae consequuntur explicabo iure possimus voluptate ducimus aliquid voluptas doloribus rerum! Perferendis illum accusamus eaque incidunt magni fuga id perspiciatis? Totam odio ab officia, eius id, culpa nostrum corrupti suscipit adipisci illo dolore ipsam temporibus eligendi quam expedita iure accusamus consectetur? Praesentium eaque, asperiores quaerat porro numquam iusto labore, repudiandae officia impedit tempore illo minima natus qui sunt! Nam placeat est ad nobis architecto, corrupti reiciendis unde facilis quas magnam eaque, maxime eos distinctio nesciunt nisi voluptatem blanditiis provident, fugit laudantium. Vero aliquid repellat odio molestias omnis ut. Sunt perferendis, ab incidunt voluptas animi laborum quis quos odit veniam, iste iusto quibusdam ratione officiis in qui libero vel cumque doloremque mollitia voluptatum enim suscipit repellendus asperiores quia? Necessitatibus iusto iste aut placeat quam iure sequi nemo est reprehenderit fuga ut repellendus, recusandae consequatur magnam ad harum repellat, minus possimus dolorum dolor quaerat ex. Dicta veritatis temporibus vero, dolore iusto odit libero ipsum ea consectetur nihil consequatur tempora id illum quaerat facere! Debitis fugiat, assumenda nemo impedit est dolorem nostrum consequuntur nam similique, id excepturi praesentium obcaecati eaque molestiae dolores vel facere maiores. Recusandae repellat quam quisquam quo odit magnam delectus iure ullam eveniet veniam asperiores impedit, molestias omnis, voluptatibus voluptatem fugiat voluptate accusantium? </p>

                </div>
                <div className="px-6 my-3 h-2/5">
                    <div className="mb-3 flex items-center justify-between">
                        <p className="block font-sans text-lg font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {item.item_desc}
                        </p>
                    </div>

                    <div className='w-full flex flex-row flex-wrap justify-start items-center'>

                        <div className="item_location w-1/2 flex flex-row justify-start items-center mt-2">
                            <div className="location_icon">
                                <IoLocationOutline color='blue' />
                            </div>
                            <p className='ml-2 text-sm md:text-lg '>{item.location}</p>
                        </div>

                        <div className="item_date_enteindigo w-full flex flex-row justify-start items-center mt-2 font-small">
                            <div className="date_enteindigo_icon h-5 w-5">
                                <MdDateRange color='indigo' />

                            </div>
                            <span className='ml-2 text-sm'>2024-01-20</span>
                        </div>

                        <div className="item_price w-1/2 flex flex-row justify-start items-center mt-2">
                            <div className="price_icon">
                                <FaRupeeSign color='green' />
                            </div>
                            <span className='ml-2 text-sm'>{item.item_price}</span>
                        </div>

                        <div className="item_statu w-full flex flex-row justify-start items-center mt-2 pl-1">
                            <span className='text-indigo-500 text-sm md:text-md'>{(item.status).charAt(0).toUpperCase()
                                + (item.status).slice(1)}</span>
                        </div>

                        {/* <div className="item_posted_by w-1/2 flex flex-row mt-2 justify-start items-center">
                            <span className='h-8 w-8 rounded-3xl  border-indigo-700  bg-indigo-500'></span>
                        </div> */}

                        {/* <div className="item_details">
                        <span className=''></span>
                    </div> */}
                    </div>
                    {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                        <span
                            data-tooltip-target="money"
                            className="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                            >
                                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                    clip-rule="evenodd"
                                ></path>
                                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                            </svg>
                        </span>
                        <span
                            data-tooltip-target="wifi"
                            className="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </span>

                        <span
                            data-tooltip-target="bedrooms"
                            className="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                            >
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                            </svg>
                        </span>

                        <span
                            data-tooltip-target="tv"
                            className="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                            >
                                <path d="M19.5 6h-15v9h15V6z"></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </span>
                        <span
                            data-tooltip-target="fire"
                            className="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </span>
                        <span
                            data-tooltip-target="more"
                            className="cursor-pointer rounded-full border border-indigo-500/5 bg-indigo-500/5 p-3 text-indigo-500 transition-colors hover:border-indigo-500/10 hover:bg-indigo-500/10 hover:!opacity-100 group-hover:opacity-70"
                        >
                            +20
                        </span>

                    </div> */}
                </div>
            </div>

        </div>

    )
}

export default Card