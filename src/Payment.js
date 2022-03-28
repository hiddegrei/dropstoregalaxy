import React,{useEffect,useState} from 'react';
import Paypal from "./Paypal"
import "./Payment.css";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {useHistory} from "react-router-dom";
import {useStateValue} from "./Stateprovider";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';





function Payment() {
     const history=useHistory();
      const[{basket,address},dispatch]=useStateValue();
      const [amount,setAmount]=useState(basket[0]?.amount);
       const [subTotal,setSubTotal]=useState(0);
    const [totalItems,setTotalItems]=useState(0);
    const [small,setSmall]=useState(false)


       useEffect(()=>{
                  if(basket[0]?.amount!==amount){
                      dispatch({type:'PLUS_BASKET',id:basket[0]?.id,plus:amount})

                  }

              },[amount])

      useEffect(()=>{
          
          if(basket.length<1){
              history.push('/cart')

          }
      },[basket])

      useEffect(()=>{
                  var total=0
                 
                  if(basket.length>0){
                      
                      
                      setTotalItems(0)
                     
                      basket.map((doc)=>{
                          
                           total=total+(doc.price*doc.amount)
                         
                         var newtotal=Math.round((total + Number.EPSILON) * 100) / 100
                         
                          setSubTotal(newtotal)
                          setTotalItems(old=>old+doc.amount)
                      })
                  }
              },[basket])

               useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])  

    if(small){return(
        <div className="payment">
            <div className={`payment__window ${small&&"paymentSmall"}`}>
                 <div className="payment__left__s">
                      <div className="payment__left__optie">
                          <div className="payment__left__optie__header">You delivery address</div>
                          <div className="payment__left__optie__body1">

                              <div className="delivery__address__container">
                         <div className="delivery__address__container__header"> Delivery address <span onClick={()=>history.push('/checkout')} className="delivery__address__container__header__link">Change</span></div>

                       
                        <div className="delivery__address">
                 <div className="delivery__address__optie">{address[0]?.fullName}</div>
                 <div className="delivery__address__optie">{address[2]?.streetAddress} {address[3]?.addressUnit}</div>
                 <div className="delivery__address__optie">{address[6]?.postcode}, {address[4]?.city}, {address[5]?.state}, {address[1]?.countryChosen}</div>
                 <div className="delivery__address__optie">{address[4]?.countryChosen}</div>
                 <div className="delivery__address__optie">Email: {address[8]?.email}</div>
                 {address[7]?.phonenumber!==undefined&&
                 <div className="delivery__address__optie">Phone: {address[7]?.phonenumber}</div>}

             </div>


                    </div>

                          </div>


                      </div>
                     
                      <div className="payment__left__optie">
                          <div className="payment__left__optie__header">Your order</div>
                          <div className="payment__left__optie__body2">
                               <div className="payment__left__optie__body2__top">
                                   <div className="payment__left__optie__body2__top__image">
                                       <img alt=""src={basket[0]?.image}className="payment__left__optie__body2__top__image__i"/>
                                   </div>
                                   <div className="payment__left__optie__body2__top__mid__s">
                                       <div className="payment__left__optie__body2__top__mid__opties">
                                      
                                       <div className="payment__left__optie__body2__top__mid__optie__s">{basket[0]?.name}</div>
                                       <div className="payment__left__optie__body2__top__mid__optie">
                                           <RemoveIcon className="remove__icon" onClick={()=>{if(amount>1){setAmount(amount-1)}}}/>
                                  <div className="productpage__top__info__aantal__buttons__number">{amount}</div>
                                  <AddIcon  className="remove__icon" onClick={()=>{if(amount>0){setAmount(amount+1)}}}/>
                                       </div>
                                        
                                        <div className="payment__left__optie__body2__top__mid__optie__h">${basket[0]?.price}</div>
                                        </div>

                                   </div>
                                   

                               </div>
                                


                          </div>

                      </div>

                 </div>

            <div className="payment__right__s">
                <div className="payment__left__optie__header__s">Order Summary</div>
                <div className="payment__right__body">
                     <div className="payment__left__optie__body2__bottom__con">
                                        <div className="payment__left__optie__body2__bottom__con__column">
                                             <div className="payment__left__optie__body2__bottom__optie">Subtotal: </div>
                                        <div className="payment__left__optie__body2__bottom__optie">Postage and Packing: </div>
                                        <div className="payment__left__optie__body2__bottom__optie">Total: </div>

                                        </div>
                                         <div className="payment__left__optie__body2__bottom__con__column">
                                             <div className="payment__left__optie__body2__bottom__optie">${subTotal}</div>
                                        <div className="payment__left__optie__body2__bottom__optie__f">Free</div>
                                        <div className="payment__left__optie__body2__bottom__optie__h"> ${subTotal}</div>

                                        </div>
                                       

                                    </div>

                         <div className="payment__right__body__method__header">Select a payment method and place order </div>

                         <div className="payment__right__body__paypal">
                             <Paypal name={address[0]?.fullName} email={address[8]?.email} total={subTotal}city={address[4]?.city}state={address[5]?.state}postal_code={address[6]?.postcode}/>

                         </div>
                         
                </div>

            </div>


            </div>
            
        </div>

    )}
    

    
    return (
        
        <div className="payment">
            <div className="payment__window">
                 <div className="payment__left">
                      <div className="payment__left__optie">
                          <div className="payment__left__optie__header">You delivery address</div>
                          <div className="payment__left__optie__body1">

                              <div className="delivery__address__container">
                         <div className="delivery__address__container__header"> Delivery address <span onClick={()=>history.push('/checkout')} className="delivery__address__container__header__link">Change</span></div>

                       
                        <div className="delivery__address">
                 <div className="delivery__address__optie">{address[0]?.fullName}</div>
                 <div className="delivery__address__optie">{address[2]?.streetAddress} {address[3]?.addressUnit}</div>
                 <div className="delivery__address__optie">{address[6]?.postcode}, {address[4]?.city}, {address[5]?.state}, {address[1]?.countryChosen}</div>
                 <div className="delivery__address__optie">{address[4]?.countryChosen}</div>
                 <div className="delivery__address__optie">Email: {address[8]?.email}</div>
                 {address[7]?.phonenumber!==undefined&&
                 <div className="delivery__address__optie">Phone: {address[7]?.phonenumber}</div>}

             </div>


                    </div>

                          </div>


                      </div>
                     
                      <div className="payment__left__optie">
                          <div className="payment__left__optie__header">Your order</div>
                          <div className="payment__left__optie__body2">
                               <div className="payment__left__optie__body2__top">
                                   <div className="payment__left__optie__body2__top__image">
                                       <img alt=""src={basket[0]?.image}className="payment__left__optie__body2__top__image__i"/>
                                   </div>
                                   <div className="payment__left__optie__body2__top__mid">
                                       <div className="payment__left__optie__body2__top__mid__opties">
                                      
                                       <div className="payment__left__optie__body2__top__mid__optie">{basket[0]?.name}</div>
                                        <div className="payment__left__optie__body2__top__mid__optie__h">${basket[0]?.price}</div>
                                        </div>

                                   </div>
                                   <div className="payment__left__optie__body2__top__r">
                                       <RemoveIcon className="remove__icon" onClick={()=>{if(amount>1){setAmount(amount-1)}}}/>
                                  <div className="productpage__top__info__aantal__buttons__number">{amount}</div>
                                  <AddIcon  className="remove__icon" onClick={()=>{if(amount>0){setAmount(amount+1)}}}/>
                                   </div>

                               </div>
                                


                          </div>

                      </div>

                 </div>

            <div className="payment__right">
                <div className="payment__left__optie__header">Order Summary</div>
                <div className="payment__right__body">
                     <div className="payment__left__optie__body2__bottom__con">
                                        <div className="payment__left__optie__body2__bottom__con__column">
                                             <div className="payment__left__optie__body2__bottom__optie">Subtotal: </div>
                                        <div className="payment__left__optie__body2__bottom__optie">Postage and Packing: </div>
                                        <div className="payment__left__optie__body2__bottom__optie">Total: </div>

                                        </div>
                                         <div className="payment__left__optie__body2__bottom__con__column">
                                             <div className="payment__left__optie__body2__bottom__optie">${subTotal}</div>
                                        <div className="payment__left__optie__body2__bottom__optie__f">Free</div>
                                        <div className="payment__left__optie__body2__bottom__optie__h"> ${subTotal}</div>

                                        </div>
                                       

                                    </div>

                         <div className="payment__right__body__method__header">Select a payment method and place order </div>

                         <div className="payment__right__body__paypal">
                             <Paypal name={address[0]?.fullName} email={address[8]?.email} total={subTotal} city={address[4]?.city}state={address[5]?.state}postal_code={address[6]?.postcode}/>

                         </div>
                         
                </div>

            </div>


            </div>

           

           
           
           
             

             
            
             
               
  



  

            
        </div>
    )
}

export default Payment

