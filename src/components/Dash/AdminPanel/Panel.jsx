import React, { useEffect, useState } from 'react'
import Activity from '../Activity/Activity'
import Stats from '../Activity/Stats'
import api_url from '../../../utils/utils';
function Panel() {

    let [stats, setStates] = useState(null);
    let [activity, setActivity] = useState(null);

    let fetchData = async () => {
        let url = `${api_url}/api/admin/dash`;

        let result = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
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
        <div className='h-full bg-white overflow-scroll'>
            <Stats data={stats} />
            <Activity data={activity} />
        </div>
    )
}

export default Panel