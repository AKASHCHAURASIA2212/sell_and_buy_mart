import './index.css'
import React, { useContext, useState, useEffect } from 'react';
import SliderComponent from '../../components/slider/slider';
import Listing from '../Listing/Listing';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import Furniture from '../../asset/cat_logo/furniture.png'
import Cars from '../../asset/cat_logo/cars.png'
import Electronics from '../../asset/cat_logo/electronics.png'
import Sports from '../../asset/cat_logo/sports.png'
import Music from '../../asset/cat_logo/music.png'
import Bikes from '../../asset/cat_logo/bikes.png'
import Books from '../../asset/cat_logo/books.png'
import Jobs from '../../asset/cat_logo/jobs.png';
import axios from 'axios';
import Filter from '../../components/Filter/Filter';
import Newsletter from '../../components/newsletter/newsletter';
import FeatureWrapper from '../../components/feature/FeatureWrapper';


const Home = () => {

    const cat_icon_array = {
        Furniture,
        Cars,
        Electronics,
        Sports,
        Music,
        Bikes,
        Books,
        Jobs,
    }

    const categories = Object.keys(cat_icon_array);
    return (
        <>
            <div className='mx-1'>
                <div className='h-[35vh] md:h-[55vh] lg:h-[70vh] bg-white p-2 -mx-1'>
                    <SliderComponent />
                </div>
                <div className="category flex flex-col flex-wrap justify-center items-start mb-2  py-3 sm:py-6 w-full text-black mx-0">
                    <div className='flex flex-row justify-around justify-self-start items-center w-full overflow-x-auto'>
                        {
                            categories.length > 0 && categories.map((item, index) => {
                                return (
                                    <Link to={`/listing/${item}`} className='bg-green-300 rounded-xl mx-1'>
                                        <div className="catItem flex flex-col justify-center items-center max-h-10 max-w-10 min-h-8 min-w-8 mx-6 my-4  rounded-md" key={index}>
                                            <img src={cat_icon_array[item]} alt="" className="logo h-full w-full" />
                                            <span className="catname text-sm">{item}</span>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <Filter />
                </div>
                <div className="w-full flex flex-col -mx-1">
                    <Listing />
                </div>
            </div>
            <FeatureWrapper />
            <Newsletter />
        </>
    );
};

export default Home;
