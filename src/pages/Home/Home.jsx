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

    // const { categorylist } = useContext(MyContext);
    let [categorylist, setcategorylist] = useState([]);


    // const fetchData2 = async (url) => {
    //     try {
    //         const response = await axios.get(url);
    //         let cat_arr = response.data.data.map((item) => {
    //             return item.item_category
    //         })

    //         setcategorylist(cat_arr)
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }

    // useEffect(() => {
    //     fetchData2("http://localhost:3000/api/items")
    // }, []);

    // if (categorylist) {
    //     const categories = Object.keys(categorylist);
    // }

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


    // Extract keys and values
    const categories = Object.keys(cat_icon_array);
    // const items = Object.values(postData);

    // Store keys and values in separate variables
    // const furnitureItems = items[0];
    // const carsItems = items[1];
    // Similarly, define variables for other categories if needed

    // console.log("Categories:", categories);
    // console.log("Furniture Items:", furnitureItems);
    // console.log("Cars Items:", carsItems);

    // console.log("Post data : ", postData);

    // const allItems = Object.values(postData).flat();

    // console.log("All Items:", allItems);

    // console.log("&&&&&&&&&&&&&&&  Categories &&&&&&&&&&&&&&&&&&");


    return (
        <>
            <div className='mx-auto'>

                <div className='h-[35vh] md:h-[55vh] lg:h-[70vh] bg-white p-2'>
                    <SliderComponent />
                </div>


                <div className="category flex flex-col flex-wrap justify-center items-start mb-2  py-6 w-full bg-indigo-600 text-white mx-0">
                    {/* <div className="heading justify-self-center sm:text-[2rem] md:text-[2.5rem] sm:px-10 text-center md:text-left mb-4 font-bold hidden sm:block">Category</div> */}
                    <div className='flex flex-row justify-around justify-self-start items-center w-full overflow-x-auto'>
                        {
                            categories.length > 0 && categories.map((item, index) => {
                                // console.log(item);
                                return (
                                    <Link to={`/listing/${item}`}>
                                        <div className="catItem flex flex-col justify-center items-center max-h-10 max-w-10 min-h-8 min-w-8 mx-6 my-4" key={index}>
                                            <img src={cat_icon_array[item]} alt="" className="logo h-full w-full" />
                                            <span className="catname">{item}</span>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="w-full flex flex-col  md:px-10">
                    {/* <div className='sm:w-full md:w-1/3 lg:w-1/4'> */}

                    <Filter />
                    {/* </div> */}
                    <div className='w-full'>
                        <Listing />
                    </div>
                </div>

            </div>

            <FeatureWrapper />
            <Newsletter />
        </>
    );
};

export default Home;
