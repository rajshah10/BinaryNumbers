import React, { useEffect, useState } from 'react'
import Header from "../components/Header"
import DetailsBar from './DetailsBar'
import Sidebar from './Sidebar'
import { fetchCast, fetchDataById, fetchMovieImages } from '../fetchData'
import { useParams } from 'react-router'
const Details = () => {
    const {id}=useParams()
    const [mid,setId]=useState([])
    const [casts,setCasts]=useState([])
    const [images,setImages]=useState([])
    const fetchDataId=async()=>{
        setId(await fetchDataById(id));
        setCasts(await fetchCast(id));
        setImages(await fetchMovieImages(id))
    }
    useEffect(()=>{
        fetchDataId()
    },[id])
    return (
        <div className="main">
            <Header/>
            <div style={{display:"flex"}}>
                <Sidebar/>
                <DetailsBar 
                    mid={mid}
                    casts={casts}
                    images={images}
                    />
            </div>
        </div>
    )
}

export default Details
