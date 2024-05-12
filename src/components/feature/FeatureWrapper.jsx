import React from 'react'
import Feature from './feature'
import logo_cstm from '../../asset/cat_logo/jobs.png';

function FeatureWrapper() {

    const feature_data = [
        {
            heading: "Sell Your Product",
            description: "Reach a broader audience and maximize your sales potential by listing your products on our platform, making it easy for buyers to discover and purchase from you",
            logo: logo_cstm,
            theme: ""
        },
        {
            heading: "Connect With People",
            description: "Build meaningful connections with fellow users, buyers, and sellers alike, fostering a community-driven environment where networking and collaboration thrive.",
            logo: logo_cstm,
            theme: ""
        },
        {
            heading: "Price Effective",
            description: "Benefit from cost-efficient solutions that help you save money while ensuring you get the most value out of your purchases.",
            logo: logo_cstm,
            theme: ""
        },
        {
            heading: "Quality Product",
            description: "Explore a range of high-quality products meticulously curated to meet your standards and exceed expectations in terms of durability, performance, and design",
            logo: logo_cstm,
            theme: ""
        }
    ]

    return (
        <div className="p-0 flex flex-col md:flex-row justify-start lg:justify-around items-center flex-wrap h-max bg2 min-h-[72vh] md:px-10 py-4">

            {feature_data.map((item, index) => {
                return (
                    <div className={` bg-12 text-gray-800 h-[25vh]  md:min-h-[50vh] rounded-md shadow-md w-[95%] sm:w-[90%] md:w-[48%] lg:w-[23%] px-4 py-4 my-2 mx-2`} >
                        <div className="flex items-center mb-4">
                            <img src={logo_cstm} alt="Feature Logo" className="h-12 mx-2 text-white text-sm sm:text-lg " />
                            <span className=" text-white text-sm sm:text-lg">{item.heading}</span>
                        </div>
                        <span className="w-100% text-white text-sm sm:text-lg">{item.description}</span>
                    </div>
                )

            })}
        </div>
    )
}

export default FeatureWrapper