import React from 'react'
import RightBar from './RightBar'
import Sidebar from './Sidebar'
import "../css/home.css"
const Home = () => {
    return (
        <div className="home">
                <Sidebar/>
                <RightBar/>
        </div>
    )
}

export default Home
