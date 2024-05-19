import React, { useState } from 'react';
import Profile from '../../components/Profile/Profile';
import loaderGif from '../../asset/images/loading.gif'
import Loading from '../../components/Loading/Loading';

const User = () => {

    let [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    return (

        <>

            {
                isLoading === true && <div className='loader'>
                    <Loading />
                </div>
            }
            <div className="container px-1">
                <Profile />
            </div>
        </>
    );
};

export default User;
