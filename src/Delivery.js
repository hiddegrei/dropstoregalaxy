import React,{useState,useEffect} from 'react';
import "./Delivery.css";
import {useStateValue} from "./Stateprovider";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {useHistory} from "react-router-dom";

function Delivery() {
    const history=useHistory()
     const[{basket,address},dispatch]=useStateValue();
      const [drop,setDrop]=useState(false);
    const [newAmount,setNewAmount]=useState(0);
    const [subTotal,setSubTotal]=useState(0);
    const [totalItems,setTotalItems]=useState(0);
    const [check1,setCheck1]=useState(true);
    const [small,setSmall]=useState(false)

     const extraAmount=(num,doc)=>{
        console.log(num)
         setNewAmount(num)
         setSubTotal(0)
          setTotalItems(0)
        const regex = new RegExp("^[0-9]+$");
              var testje=regex.test(num)
             
              if(testje){
                dispatch({type:'PLUS_BASKET',id:doc.id,plus:num})
               

              }}
     useEffect(()=>{
                  if(basket.length>0){
                      setSubTotal(0)
                      setTotalItems(0)
                      basket.map((doc)=>{
                          var total=subTotal+(doc.amount*doc.price)
                         var newtotal=Math.round((total + Number.EPSILON) * 100) / 100
                          console.log(newtotal)
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

    return (
        <div className="delivery">
            <div className="delivery__window">
                <div className="delivery__header">
                    <div className="delivery__header__text">Choose your delivery options</div>
                     {!small&&
                    <div onClick={()=>{if(check1){history.push('/checkout/payment')}}} className="delivery__header__button">Continue</div>}

                    </div>

<div className={`delivery__window__address ${small&&"deliverySmall"}`}>
                    <div className="delivery__address__container">
                         <div className="delivery__address__container__header"> Delivery address <span onClick={()=>history.push('/checkout')} className="delivery__address__container__header__link">Change</span></div>

                       
                        <div className="delivery__address">
                 <div className="delivery__address__optie">{address[0]?.fullName}</div>
                 <div className="delivery__address__optie">{address[2]?.streetAddress} {address[3]?.addressUnit}</div>
                 <div className="delivery__address__optie">{address[6]?.postcode}, {address[4]?.city},{address[5]?.state}, {address[1]?.countryChosen}</div>
                 <div className="delivery__address__optie">{address[4]?.countryChosen}</div>
                  <div className="delivery__address__optie">Email: {address[8]?.email}</div>
                 <div className="delivery__address__optie">Phone: {address[7]?.phonenumber}</div>

             </div>


                    </div>

                    <div className="delivery__products">

                       

                     <div className={`delivery__opties ${small&&"delivery__opties__s"}`}>
                        <div className="delivery__opties__header">Choose a delivery option:</div>

                        <div className="delivery__opties__optie">
                            <div onClick={()=>setCheck1(!check1)} className={`delivery__opties__optie__check ${check1&&"checked"}`}></div>
                            <div className="delivery__opties__optie__text">FREE Standard-Shipping </div>
                        </div>

                    </div>

                    </div>
                    </div>
                    {small&&
                    <div onClick={()=>{if(check1){history.push('/checkout/payment')}}} className="delivery__header__button">Continue</div>}

                    
            </div>
            
        </div>
    )
}

export default Delivery
