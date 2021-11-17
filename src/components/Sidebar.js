import React from 'react'
import "../css/sidebar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFire, faHome, faSignOutAlt, faTv, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    return (
        <div className="sidebar">
                <div className="sidebar-nav">
                    <div className="sidebar-opt">
                        <FontAwesomeIcon className="font" icon={faHome} size="2x"/>
                        <span className="homes">Home</span>
                    </div>
                    <div className="sidebar-opt">
                        <FontAwesomeIcon className="fonts" icon={faFire} size="2x"/>
                        <span>Popular</span>
                    </div>
                    <div className="sidebar-opt">
                        <FontAwesomeIcon className="fonts" icon={faTv} size="2x"/>
                        <span>Series</span>
                    </div>
                    <div className="sidebar-opt">
                        <FontAwesomeIcon className="fonts" icon={faVideo} size="2x"/>
                        <span>Movies</span>
                    </div>
                    <div className="sidebar-opt">
                        <FontAwesomeIcon className="fonts" icon={faUser} size="2x"/>
                        <span>Profile</span>
                    </div>

                    <div className="sidebar-opts">
                        <FontAwesomeIcon className="fonts" icon={faSignOutAlt} size="2x"/>
                        <span>Logout</span>
                    </div>
                    
                </div>
                
        </div>
    )
}

export default Sidebar
