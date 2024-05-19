import React from 'react'
import { convertDateTimeFormat } from '../../utils/utils'
// import './index.css'

function ChatMessageSelf({ data }) {
    return (
        <div className="rightSideCont h-full w-full mb-2 rounded-md">
            <div className='self-message-cont float-right shadow_cstm p-4'>
                <div className='self-message-msg'>{data.content}</div>
                <div className='flex justify-end'>
                    <p className='self-message-timeStamp text-sm font-thin'>{convertDateTimeFormat(data.date)}</p>
                </div>
            </div>
        </div>

    )
}

export default ChatMessageSelf