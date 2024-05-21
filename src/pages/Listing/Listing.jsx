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
import Filter from '../../components/Filter/Filter';
import loaderGif from '../../asset/images/loading.gif'
import Loading from '../../components/Loading/Loading';

const Listing = ({ title = "Latest Items" }) => {

    let [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    let { cat, id } = useParams();
    console.log(cat, id);
    let [categorylist, setcategorylist] = useState([]);
    let [itemsdata, setItemsData] = useState([]);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(8);
    let [totalCount, settotalCount] = useState(null);
    let [search, setSearch] = useState('empty');
    let token = localStorage.getItem("token");

    title = id == undefined ? cat : "Similier Item";

    const fetchData = async (url) => {
        try {
            console.log(url);
            await fetch(url, {
                method: "GET",
                // body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "authorization": token,
                }
            }).then(res => res.json())
                .then((response) => {
                    console.log(response);
                    let result = response.data;
                    settotalCount(result.totalCount)
                    setItemsData(result.res)

                }).catch((e) => {
                    console.log(e);
                })
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {
        if (cat == undefined || cat == null) {
            cat = 'empty';
        }
        cat = cat.toLowerCase();
        fetchData(`${api_url}/api/items/${page}/${limit}/${search}/${cat}`)
        console.log('useeffect');
    }, [page, search]);

    const list = [
        { 'name': 'Home', 'ref': '/' },
        { 'name': cat, 'ref': '/Listing/' + cat },
    ]

    return (

        <>
            {
                isLoading === true && <div className='loader'>
                    <Loading />
                </div>
            }
            <div className={`ml-1 mx-auto mb-8 mt-4 w-full`}>
                {
                    cat != undefined && id == undefined &&
                    <BreadCrum list={list} />
                }

                {
                    cat == undefined && id == undefined &&
                    <Filter search={search} setSearch={setSearch} />
                }



                <div className="container pt-2 bg1 rounded-xl mt-1 min-h-[75vh]">
                    <h1 className="header">{title}</h1>

                    <div className="item-container flex flex-row flex-wrap justify-around md:justify-around items-center">

                        {itemsdata?.length == 0 &&
                            <div className='flex flex-col justify-center items-center h-full w-full text-blue-600 text-xl'>
                                No Data Availabe
                            </div>
                        }

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
        </>


    );
};

export default Listing;
