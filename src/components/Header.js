import React from 'react'
import "../css/header.css"
import weather from "../Images/weather.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
       <div className="header">
            <div className="left-header">
                <img src="https://mui.com/static/images/avatar/1.jpg"></img>
                <div className="left-text">
                    <span className="upper-text">Hii, I am raj shah</span>
                    <span className="bottom-text">How do you feel today?</span>
                </div>
            </div>
            <div className="header-search">
                <form>
                    <input type="search" placeholder="What movie do you want to watch?"/>
                </form>
            </div>
            <div className="header-right">
                <div className="header-options">
                    <div className="bellicon">
                        <FontAwesomeIcon style={{color:"white"}} icon={faBell} />
                    </div>
                </div>
                <div className="header-options">
                        <div>
                            <img src={weather}/>
                        </div>
                        <div className="weather">
                            <span className="weather-text">32°c</span>
                            <span className="city">Hanai, Vietnam</span>
                        </div>
                </div>
            </div>
       </div> 
    )
}

export default Header
