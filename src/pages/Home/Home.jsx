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


const Home = () => {

    // const { categorylist } = useContext(MyContext);
    let [categorylist, setcategorylist] = useState([]);


    const fetchData2 = async (url, type) => {
        try {
            const response = await axios.get(url);
            // console.log(response.data);
            // if (type == 1) {
            //     setItemsData(response.data)
            // } else if (type == 2) {
            setcategorylist(response.data)
            // }
            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData2("http://localhost:3000/categories", 2)
    }, []);

    if (categorylist) {
        const categories = Object.keys(categorylist);
    }

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
    const categories = Object.keys(categorylist);
    // const items = Object.values(postData);

    // Store keys and values in separate variables
    // const furnitureItems = items[0];
    // const carsItems = items[1];
    // Similarly, define variables for other categories if needed

    console.log("Categories:", categories);
    // console.log("Furniture Items:", furnitureItems);
    // console.log("Cars Items:", carsItems);

    // console.log("Post data : ", postData);

    // const allItems = Object.values(postData).flat();

    // console.log("All Items:", allItems);

    // console.log("&&&&&&&&&&&&&&&  Categories &&&&&&&&&&&&&&&&&&");


    return (
        <div className='mx-auto md:mt-12'>

            <div className='my-2 md:px-10'>
                <SliderComponent />
            </div>


            <div className="category flex flex-col flex-wrap justify-center items-start mb-2 md:my-12 py-4 md:py-12 w-full bg-indigo-500 mx-0">
                <div className="heading justify-self-center sm:text-[2rem] md:text-[2.5rem] sm:px-10 text-center md:text-left mb-4 font-bold hidden sm:block">Category</div>
                <div className='flex flex-row flex-wrap justify-around justify-self-start items-center w-full'>
                    {
                        categories.length > 0 && categories.map((item, index) => {
                            // console.log(item);
                            return (
                                <Link to={`/listing/${item}`}>
                                    <div className="catItem flex flex-col justify-center items-center max-h-10 max-w-10 min-h-8 min-w-8 mx-4 my-4" key={index}>
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
    );
};

export default Home;
