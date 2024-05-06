import React, { useEffect, useState } from 'react'
import Activity from '../Activity/Activity'
import Stats from '../Activity/Stats'
function Panel() {

    let [stats, setStates] = useState(null);
    let [activity, setActivity] = useState(null);

    let fetchData = async () => {

        let result = await fetch("http://localhost:3000/api/admin/dash", {
            method: "GET",
            // body: JSON.stringify({ "data": "" }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then((data) => {
                // console.log(data.data);

                let totalCount = {
                    userCount: data.data.userData.totalCount,
                    itemCount: data.data.itemData.totalCount,
                    mailCount: data.data.mailData.totalCount,
                }

                console.log(totalCount);

                setStates(totalCount)

                let allData = {
                    userData: data.data.userData.res,
                    itemData: data.data.itemData.res,
                    mailData: data.data.mailData.res,
                }

                console.log(allData);

                setActivity(allData)


            }).catch((e) => {
                console.log(e);
            })


    }

    useEffect(async () => {
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