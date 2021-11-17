import React, { useEffect, useState ,forwardRef} from 'react'
import "../css/row.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faClock, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import {  fetchData } from '../fetchData'


const Row = ({title}) => {
    const [movie,setMovie]=useState([])
    const fetchPopular=async()=>{
        setMovie(await fetchData())
    }
    function truncate(string,n)
    {
        return string?.length>n?string.substr(0,n-1)+"...":string;
    }
 
    useEffect(() => { 
        fetchPopular()
    }, [])
    return (
        <div className="row">
            <h2 className="row__text">{title}</h2>
            <span className="hamburger"><FontAwesomeIcon  icon={faBars}/></span>
            <div className="row--images" >
                       {
                           movie && movie.slice(0,7).map((data,index)=>(
                            <div className="row_image">
                            <a href={`/details/${data.id}`}><img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} /></a>
                                <div className="time">
                                    <span style={{color:"white"}}>{truncate(data.title,10)} <FontAwesomeIcon style={{color:"grey"}}icon={faPlayCircle} size="1x"/> </span>
                                    <span><FontAwesomeIcon icon={faClock}/> 120 minutes</span>
                                </div>
                            </div>
                           ))
                       }
         </div>
            
        
    </div>
    );
}


export default Row
