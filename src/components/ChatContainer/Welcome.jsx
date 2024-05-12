import React from 'react'
import chat_logo from '../../asset/images/logo.jpeg'
function Welcome() {
    return (
        <div className={`h-[86vh] w-full sm:w-[50%] md:w-[60%] lg:w-[68%] flex flex-col justify-center items-center rounded-md m-2 shadow_cstm bg-18`}>
            <img src={chat_logo} alt='chat_logo' className='h-[50%] opacity-20 rounded-3xl' />
        </div>
    )
}

export default Welcome