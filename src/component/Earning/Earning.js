import React from 'react'
import './earning.css'
import { IoCall } from "react-icons/io5";
import Content from '../Content/Content';
import List from '../List/List';
const Earning = () => {
    return (
        <div>
            <div className="navbar">
                <div className="left">
                    <img src="https://www.anchors.in/static/media/logo-invite-only.05788d79bfb2d37a65d2.png" alt="" />
                </div>
                <div className="right">
                    <button><IoCall />  Request a call back</button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzyUSZNa9s1imXjyqUBJddojbcqER8yHGow&usqp=CAU" alt="" />
                </div>
            </div>
            <div>
                <Content />
                <List/>
            </div>
        </div>
    )
}

export default Earning
