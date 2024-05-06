import React, { useContext } from 'react';
import Profile from '../../components/Profile/Profile';
import { MyContext } from '../../App';
const User = () => {

    let { isLogin, setIsLogin } = useContext(MyContext)

    return (
        <div className="container px-1">
            <Profile />
        </div>
    );
};

export default User;
