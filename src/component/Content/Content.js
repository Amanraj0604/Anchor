import React from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import './container.css'
const Content = () => {
    return (
        <div>
            <div className="container">
                <div className="left1">
                    <button>Top earner video</button><br />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzyUSZNa9s1imXjyqUBJddojbcqER8yHGow&usqp=CAU" alt="" />
                    <p>uplode on june 23-2023</p>
                </div>
                <div className="mid">
                    <p>How become a pro UI/UX <br />designer</p>
                    <p><span className='spn-icon'><IoEyeSharp/></span> aman</p>
                    <p><span className='spn-icon'><AiTwotoneLike/></span>aman</p>
                    <p><span className='spn-icon'><FaRegMessage/></span> aman</p>
                    
                    
                </div>
                <div className="righ1">
                        
                        <div className="con">
                            <p>₹89898</p>
                            <button><AiTwotoneLike/></button>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Content
