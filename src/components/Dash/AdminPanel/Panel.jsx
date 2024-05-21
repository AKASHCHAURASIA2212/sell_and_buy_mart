import React, { useEffect, useState } from 'react'
import Activity from '../Activity/Activity'
import Stats from '../Activity/Stats'
import api_url from '../../../utils/utils';
import loaderGif from '../../../asset/images/loading.gif'
import Loading from '../../Loading/Loading';

function Panel() {

    let [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    let [stats, setStates] = useState(null);
    let [activity, setActivity] = useState(null);
    let token = localStorage.getItem("token");


    let fetchData = async () => {
        let url = `${api_url}/api/admin/dash`;

        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "authorization": token
            }
        }).then(res => res.json())
            .then((data) => {
                let totalCount = {
                    userCount: data.data.userData.totalCount,
                    itemCount: data.data.itemData.totalCount,
                    mailCount: data.data.mailData.totalCount,
                }

                // console.log(totalCount);
                setStates(totalCount)
                let allData = {
                    userData: data.data.userData.res,
                    itemData: data.data.itemData.res,
                    mailData: data.data.mailData.res,
                }

                // console.log(allData);
                setActivity(allData)
            }).catch((e) => {
                console.log(e);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>
            {
                isLoading === true && <div className='loader'>
                    <Loading />
                </div>
            }
            <div className='h-full bg-white overflow-scroll'>
                <Stats data={stats} />
                <Activity data={activity} />
            </div>
        </>
    )
}

export default Panel