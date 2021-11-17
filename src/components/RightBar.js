import React from 'react'
import "../css/rightbar.css"
import Row from './Row'
import RowCat from './RowCat'
const RightBar = () => {
    return (
        <div className="rightbar">
            <Row 
                title="Popular"
            />
            <RowCat
                title="Category"
            />
        </div>
    )
}

export default RightBar
