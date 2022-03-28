import React,{useState,useEffect} from 'react';
import "./Cart.css";
import {useStateValue} from "./Stateprovider";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {useHistory} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Cart() {
    const history=useHistory()
    const[{basket},dispatch]=useStateValue();
    const [subTotal2,setSubTotal2]=useState(0);
    const [totalItems,setTotalItems]=useState(0);
    const [amount,setAmount]=useState(basket[0]?.amount);
    const [small,setSmall]=useState(false)
   
    

    
              useEffect(()=>{
                  if(basket[0]?.amount!==amount){
                      dispatch({type:'PLUS_BASKET',id:basket[0]?.id,plus:amount})

                  }

              },[amount])

               useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])

             

              useEffect(()=>{
                  var total=0
                 
                  if(basket.length>0){
                      
                      setTotalItems(0)
                     
                      basket.map((doc)=>{
                        
                           total=total+(doc.price*doc.amount)
                         
                         var newtotal=Math.round((total + Number.EPSILON) * 100) / 100
                         
                          setSubTotal2(newtotal)
                          setTotalItems(old=>old+doc.amount)
                      })
                  }
              },[basket])
              if(small){return(
                   <div className="cart3">

            {basket.length<1&&<div className="cart__empty">
                <h3>Your basket is empty, start shopping!</h3>
                </div>}
                {basket.length>0&&<div className="cart__container__s">

                    <div className="cart__header">
                        <div className="cart__header__text">Your basket</div>
                        <div onClick={()=>history.push('/checkout')} className="cart__bestellen__button">Proceed to checkout</div>
                    </div>
                       
                       <div className="cart__basket1">
                    {basket.map((doc)=>(
                        <div className="cart__product">
                            <div className="cart__product__image">
                                <img onClick={()=>history.push('/product/Lc1TcNMkBiHJASnCC7mW')} alt=""className="cart__product__image__image" src={doc.image}/>
                            </div>
                             <div className="cart__product__info">{doc.name}</div>
                              
                               <div className="cart__product__aantal">
                                   <div className="cart__product__aantal__top">
                                   <RemoveIcon className="remove__icon" onClick={()=>{if(amount>1){setAmount(amount-1)}}}/>
                                  <div className="productpage__top__info__aantal__buttons__number">{amount}</div>
                                  <AddIcon  className="remove__icon" onClick={()=>{if(amount>0){setAmount(amount+1)}}}/>
                              
                                </div>
                                <div onClick={()=>dispatch({type:'REMOVE_FROM_BASKET',id:doc.id,})} className="cart__product__aantal__bottom">Remove from basket</div>
                                </div>
                                <div className="cart__product__price">${doc.price}</div>
                            

                        </div>
                    ))}
                    </div>
                    <div className="cart__total__s">
                        <div className="cart__total__text">
                  SubTotal: ({totalItems} items) ${subTotal2}
                        </div>
                        </div>
                    </div>}
                    
            
            
        </div>

              )}
    return (
        <div className="cart3">

            {basket.length<1&&<div className="cart__empty">
                <h3>Your basket is empty, start shopping!</h3>
                </div>}
                {basket.length>0&&<div className="cart__container">

                    <div className="cart__header">
                        <div className="cart__header__text">Your basket</div>
                        <div onClick={()=>history.push('/checkout')} className="cart__bestellen__button">Proceed to checkout</div>
                    </div>
                       
                       <div className="cart__basket">
                    {basket.map((doc)=>(
                        <div className="cart__product">
                            <div className="cart__product__image">
                                <img onClick={()=>history.push('/product/Lc1TcNMkBiHJASnCC7mW')} alt=""className="cart__product__image__image" src={doc.image}/>
                            </div>
                             <div className="cart__product__info">{doc.name}</div>
                              <div className="cart__product__verzend">{doc.instock?"in stock":"not in stock"}</div>
                               <div className="cart__product__aantal">
                                   <div className="cart__product__aantal__top">
                                   <RemoveIcon className="remove__icon" onClick={()=>{if(amount>1){setAmount(amount-1)}}}/>
                                  <div className="productpage__top__info__aantal__buttons__number">{amount}</div>
                                  <AddIcon  className="remove__icon" onClick={()=>{if(amount>0){setAmount(amount+1)}}}/>
                              
                                </div>
                                <div onClick={()=>dispatch({type:'REMOVE_FROM_BASKET',id:doc.id,})} className="cart__product__aantal__bottom">Remove from basket</div>
                                </div>
                                <div className="cart__product__price">${doc.price}</div>
                            

                        </div>
                    ))}
                    </div>
                    <div className="cart__total">
                        <div className="cart__total__text">
                  SubTotal: ({totalItems} items) ${subTotal2}
                        </div>
                        </div>
                    </div>}
                    
            
            
        </div>
    )
}

export default Cart
