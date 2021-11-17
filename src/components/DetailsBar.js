import React, { useEffect, useState } from 'react'
import "../css/detailsbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPlayCircle, faStar } from '@fortawesome/free-solid-svg-icons'
const DetailsBar = ({mid,casts,images}) => {
    var date=new Date([mid].map(d=>(
        d.release_date
    )));
    return (
        
        <div className="details">
            <div className="banner">
                <img src={`https://image.tmdb.org/t/p/original/${mid.backdrop_path}`} />
            </div>
            <div className="pl">
                <FontAwesomeIcon icon={faPlayCircle} size="3x"/>
            </div>
            <div className="carousel">
                        <div className="one">
                            <img src={`https://image.tmdb.org/t/p/original/${mid.backdrop_path}`}/> 
                        </div> 
                        <div className="one">
                            <img src={`https://image.tmdb.org/t/p/original/${mid.backdrop_path}`}/> 
                        </div>
                        <div className="one">
                            <img src={`https://image.tmdb.org/t/p/original/${mid.backdrop_path}`}/> 
                        </div>
                        
            </div>
            <div className="desc">
                <div className="movie-titles">
                        <span className="name">{mid?.title || mid?.original_title}</span>
                        <span >{date.getFullYear(mid?.release_date)} . Animation . {mid.runtime} minutes</span>
                        <span>
                        <FontAwesomeIcon   className="fastar" icon={faStar}/>
                        <FontAwesomeIcon   className="fastar" icon={faStar}/>
                        <FontAwesomeIcon   className="fastar" icon={faStar}/>
                        <FontAwesomeIcon   className="fastar"icon={faStar}/>
                        <FontAwesomeIcon   className="fastar"icon={faStar}/>
                        <span>{mid?.vote_average} ({mid.vote_count} votes)</span>
                        </span>



                </div>
                <div className="movie-desc">
                    <h6>{mid.overview}</h6>
                </div>
            </div>
            <div className="cast">
                <span className="starss">Stars</span>
                <div className="cast-row">
                   {
                       casts.slice(0,3).map((data,index)=>(
                        <div className="cast-desc">
                        <img src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} />
                            <div className="det">
                                <span className="cast-name">{data.name}</span>
                                <span className="voice">{data.character}</span>
                            </div>
                        </div>
                       ))
                   }
             
                    <div className="button">
                        <button className="btn" >Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsBar
