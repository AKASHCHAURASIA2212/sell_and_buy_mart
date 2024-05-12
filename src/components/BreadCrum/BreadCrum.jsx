import React from 'react'
import { Link } from 'react-router-dom'

function BreadCrum({ list }) {
    return (
        <div className="breadcrum  -mt-2  my-2">
            <ul className="bg-12 shadow_cstm rounded-md p-2">
                <ol className="flex flex-wrap gap-2  text-sm p-4 text-white">
                    {
                        list != null && list.length > 0 && list.map((data, index) => {
                            if (list.length - 1 == index) {
                                return (
                                    <li><span className="">{data.name}</span></li>
                                )
                            } else {
                                return (
                                    <>
                                        <li><Link to={`${data.ref}`} className="hover:text-blue-500 transition duration-300">{data.name}</Link></li>
                                        <li>/</li>
                                    </>
                                )
                            }
                        })
                    }

                </ol>
            </ul>
        </div>
    )
}

export default BreadCrum