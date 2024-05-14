import React, { useState } from 'react';
import Profile from '../../components/Profile/Profile';
import loaderGif from '../../asset/images/loading.gif'

const User = () => {

    let [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000)

    return (

        <>

            {
                isLoading === true && <div className='loader'>
                    <img src={loaderGif} />
                </div>
            }
            <div className="container px-1">
                <Profile />
            </div>
        </>
    );
};

export default User;
