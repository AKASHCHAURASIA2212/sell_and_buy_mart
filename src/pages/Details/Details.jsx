import './index.css'
import React, { useContext, useState, useEffect } from 'react';
import SliderComponent from '../../components/slider/slider';
import { useParams } from 'react-router-dom';
import Listing from '../Listing/Listing';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BreadCrum from '../../components/BreadCrum/BreadCrum';
const Details = () => {


    let { cat, id } = useParams();
    let navigate = useNavigate();
    console.log(cat, id);

    // const { bannerData, catList, postData } = useContext(MyContext);

    const [items, setItems] = useState([]);

    const fetchData2 = async (url) => {
        try {
            const response = await axios.get(url);
            console.log("details --> ", response.data);
            let itemdata = response.data[cat].filter((data) => {
                console.log(data);
                if (data._id == id) {
                    return data
                }
            })
            // console.log(itemdata);
            setItems(itemdata[0])
            // return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        fetchData2("http://localhost:3000/items")
    }, []);


    // const items = Object.values(items).flat().filter((item) => {
    //     return item.id == id && item.category == cat
    // });

    console.log("items -> ", items);

    const startChat = (id) => {
        navigate(`/chat/${id}`);
    }

    const list = [
        { 'name': 'Home', 'ref': '/' },
        { 'name': cat, 'ref': '/listing/' + cat },
        { 'name': id, 'ref': id }
    ]

    return (
        <div className=" mx-auto mt-8 md:px-4">
            <BreadCrum list={list} />

            <div className="mt-3 flex flex-wrap flex-column sm:flex-row border-solid border-red-400 rounded-md border-2 w-full">

                <div className="details-cont-img w-full sm:w-2/5 max-h-full m-2">

                    <img src="https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="item img" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className="details-cont-details w-full sm:w-2/5 h-full m-2">
                    {
                        items != null && <>
                            <h1 className="font-bold mb-1">{items.item_desc}</h1>
                            <p className="">{items.posted_by}</p>
                            <p>{items.date_entered}</p>
                            <p>{items.location}</p>
                            <p>{items.item_price}</p>
                            <p>{items.status}</p>
                            <p>{items.item_category}</p>
                            <button className='bg-green p-2 text-3xl' onClick={() => startChat(id)}>Chat</button></>
                    }

                </div>
            </div>

            <div className="flex mt-8">
                <div className="w-full">
                    <Listing title='Similier Items' types={cat} />
                </div>
            </div>
        </div>
    );
};

export default Details;
