import React from 'react';
import "./Product.css";
import {useHistory} from "react-router-dom";
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({image,name,price,id,stars}) {
    const history=useHistory()
    return (
        <div onClick={()=>history.push(`/product/${id}`)} className="product">
            <div className="product__image">
                <img alt="" src={image}className="product__image__image"/>
            </div>
            <div className="product__name__price">
                <div className="product__name">{name}</div>
                <div className="product__price">${price}</div>
                <div className="product__price">{Array(stars).fill().map((_,i)=>(
                       <p><StarRateIcon/></p>
                      ))}</div>
            </div>
            
        </div>
    )
}

export default Product
