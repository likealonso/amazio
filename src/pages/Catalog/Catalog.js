import React from 'react'
import './Catalog.css'

const Catalog = (props) => {
    return (
        <div className={"Catalog"}>
            {props.products ? 
            props.products.map((product, idx) => <li key={idx}>{product.name}</li>)
            : 
            <h2>LOADING ..</h2>}
        </div>
    )
}

export default Catalog