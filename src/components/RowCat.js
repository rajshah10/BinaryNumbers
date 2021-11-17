import React, { useEffect, useState } from 'react'
import "../css/rowcat.css"
import { fetchCategory } from '../fetchData'
const RowCat = ({title}) => {
    const [category,setCategory]=useState(fetchCategory)
    return (
        <div className="row">
            <h2 className="row__text">{title}</h2>
            <div className="row--image">
                    {
                        category && category.map((data,index)=>(
                            <div className="row_images">
                                <img src={data.image} />
                                <div className="times">
                                        <span style={{color:"white"}}>{data.genre}</span> 
                                </div>
                            </div>
                        ))
                    }
            </div>
        
    
        </div>
    )
}

export default RowCat
