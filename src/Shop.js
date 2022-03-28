import React,{useState,useEffect} from 'react';
import "./Shop.css";
import Product from "./Product";
import {db } from "./firebase";

function Shop() {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => (
         setProducts((dat)=>{
                const newdata=doc.data()
                const olddata=dat.filter((dat)=>dat.id!==newdata.id)
                return[...olddata,newdata]})))})

    },[])

    return (
        <div className="shop">
             <div className="shop__header">Products</div>

             <div className="shop__bar">
                  <div className="shop__bar__left"></div>

             </div>

             <div className="shop__products">
                  {products.map((doc)=>(
                      <div className="shop__products__item">
                          {doc.image!==undefined?
                      <Product image={doc.image}name={doc.name}price={doc.price}id={doc.id}stars={doc.stars}/>:
                      <p></p>}
                      </div>
                  ))}

             </div>
            
        </div>
    )
}

export default Shop
