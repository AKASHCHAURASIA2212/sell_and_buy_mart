import React, { useContext, useState, useEffect } from 'react'
import './index.css'
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Card/Card';
import BreadCrum from '../../components/BreadCrum/BreadCrum';
import Pagination from '../../components/Pagination/Pagination';
import api_url from '../../utils/utils';

const Listing = ({ title = "Latest Items" }) => {

    let { cat, id } = useParams();
    let [categorylist, setcategorylist] = useState([]);
    let [itemsdata, setItemsData] = useState([]);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(8);
    let [totalCount, settotalCount] = useState(null);

    title = id == undefined ? cat : "Similier Item";

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url);
            console.log("data => : ", response.data.data.res);
            console.log("total_count => : ", response.data.data.totalCount);
            let result = response.data.data;
            settotalCount(response.data.data.totalCount)
            setItemsData(response.data.data.res)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData(`${api_url}/api/items/${page}/${limit}`)
    }, [page]);

    const list = [
        { 'name': 'Home', 'ref': '/' },
        { 'name': cat, 'ref': '/Listing/' + cat },
    ]

    return (

        <div className={`mx-1 mb-8 mt-4 w-full`}>
            {
                cat != undefined && id == undefined &&
                <BreadCrum list={list} />
            }

            <div className="container pt-2 bg-indigo-100 rounded-xl mt-1">
                <h1 className="header">{title}</h1>

                <div className="item-container flex flex-row flex-wrap justify-around md:justify-around items-center">

                    {itemsdata != undefined && itemsdata.length > 0 && itemsdata.map((item) => (
                        <Link to={`/listing/${item.item_category}/${item.item_id}`} className='w-[45%] sm:w-[48%] md:w-[33%] lg:w-[22%] -ml-3'>
                            < Card key={item.item_id} item={item} />
                        </Link >
                    ))}
                </div >
                {
                    cat == undefined && id == undefined &&
                    <Pagination page={page} limit={limit} setPage={setPage} setLimit={setLimit} totalCount={totalCount} />
                }
            </div >
        </div >
    );
};

export default Listing;
