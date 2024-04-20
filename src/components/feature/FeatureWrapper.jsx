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
        <div className="container p-0 flex justify-around items-center h-max bg-indigo-800 mx-1 mt-12 py-10 px-10">

            {feature_data.map((item, index) => {
                // console.log("***********Feuture***********8");
                // console.log(item);
                return (
                    <Feature data={item} key={index} />
                )

            })}
        </div>
    )
}

export default FeatureWrapper