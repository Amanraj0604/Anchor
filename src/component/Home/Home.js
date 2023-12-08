import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
const Home = () => {
    return (
        <>
            <div className="nav">
                <img src="https://www.anchors.in/static/media/logo-invite-only.05788d79bfb2d37a65d2.png" alt="" />
            </div>
            <div className="main">
                <p>Discover your earning <br /> potential</p>
                <p>Turn your Youtube expertise into lucrative income <br /> through resource sharing</p>
            </div>
            <div className="serch">

                <input type="text" placeholder='Enter youtube video link' />
                <Link to="/earning">
                    <button className='butt'>Go to</button>
                </Link>
            </div>
            <div className="stl">
                
            </div>

        </>
    )
}

export default Home
