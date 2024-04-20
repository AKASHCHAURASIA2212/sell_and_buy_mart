import React, { useContext, useState, useEffect } from 'react'
import './index.css'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card/Card';
import BreadCrum from '../../components/BreadCrum/BreadCrum';

// Example data for dynamic rendering
// const itemsData = [
//     { id: 1, name: 'Item 1', description: 'Description for Item 1' },
//     { id: 2, name: 'Item 2', description: 'Description for Item 2' },
//     { id: 3, name: 'Item 3', description: 'Description for Item 3' },
//     { id: 4, name: 'Item 4', description: 'Description for Item 4' }
// ];

const Item = ({ item }) => (

    <div className="item w-full" >

        <img src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="item img" style={{ height: "50%", width: "100%" }} />
        <h2 className="font-semibold mb-2">{item.item_desc}</h2>
        <p>{item.item_price}</p>
        <p>{item.location}</p>
        <p>{item.item_category}</p>
        <p>{item.status}</p>
    </div>
);

const Listing = ({ title = "Latest Items" }) => {

    let { cat, id } = useParams();
    let [categorylist, setcategorylist] = useState([]);
    let [itemsdata, setItemsData] = useState([]);
    // console.log(cat, id);

    title = id == undefined ? cat : "Similier Item";


    // const { categorylist, itemsdata } = useContext(MyContext);

    const fetchData2 = async (url, type) => {
        try {
            const response = await axios.get(url);
            // console.log(response.data);
            if (type == 1) {
                setItemsData(response.data)
            } else if (type == 2) {
                setcategorylist(response.data)
            }
            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        // setIsLoading(true);
        fetchData2("http://localhost:3000/items", 1)
        fetchData2("http://localhost:3000/categories", 2)
        // setcategorylist(categories)
        // let banner = fetchData2("http://localhost:3000/banner", 3)
        // setbannerdata(banner)

        // console.log("items :", itemsdata);
        // console.log("categories", categorylist);
        // console.log("banner", bannerdata);
        // setIsLoading(false);
    }, []);

    // console.log("listing items :", itemsdata);
    // console.log("listing categories", categorylist);

    // Extract keys and values
    let allItems;

    if (categorylist && itemsdata) {
        // console.log("category data : " + categorylist, JSON.stringify(categorylist));
        // console.log("itemsdata data : " + itemsdata, JSON.stringify(itemsdata));
        const categories = Object.keys(categorylist);
        const items = Object.values(itemsdata);

        // console.log(categories);
        // console.log(itemsdata);

        // Store keys and values in separate variables
        // const furnitureItems = items[0];
        // const carsItems = items[1];
        // Similarly, define variables for other categories if needed

        // console.log("Categories:", categories);
        // console.log("Furniture Items:", furnitureItems);
        // console.log("Cars Items:", carsItems);

        // console.log("Post data : ", itemsdata);

        allItems = Object.values(itemsdata).flat();

        console.log("All Items:", allItems);

        if (cat) {
            let cat_c = cat.toLowerCase();
            console.log(cat_c);
            allItems = allItems.filter((data) => {
                if (data.item_category == cat_c) {
                    return data;
                }
            })
        }

        console.log("All Items:", allItems);

        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

    }

    const list = [
        { 'name': 'Home', 'ref': '/' },
        { 'name': cat, 'ref': '/Listing/' + cat },
    ]

    return (

        <div className={`${cat != undefined && id == undefined ? 'md:px-10' : ''} mx-1 my-8 w-full`}>
            {
                cat != undefined && id == undefined &&
                <BreadCrum list={list} />
            }

            <div className="container pt-4 bg-indigo-100 rounded-xl mt-4">
                <h1 className="header">{title}</h1>

                <div className="item-container flex flex-row flex-wrap justify-around items-center">

                    {allItems != undefined && allItems.length > 0 && allItems.map((item) => (
                        <Link to={`/listing/${item.item_category}/${item._id}`} className='w-40 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            < Card key={item._id} item={item} />
                        </Link >
                    ))}
                </div >
            </div >
        </div >
    );
};

export default Listing;
