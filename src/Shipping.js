import React,{useState,useEffect} from 'react';
import "./Shipping.css";

function Shipping() {
    const [small,setSmall]=useState(false)
     useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])   
    return (
        <div className="shipping">
            <div className="shipping__window">
                <div className="shipping__header">
                Shipping guide
                </div>

                <div className="shipping__par">
                    <div className="shipping__par__header">Shipping processing times</div>
                     <div className="shipping__par__text">Your order will be dispatched within 3 business days</div>
                    
                </div>

                <div className="shipping__par">
                    <div className="shipping__par__header">Delivery times</div>
                     <div className="shipping__par__text">The delivery of your order depends on the proximity of your shipping address</div>

                     <div className="shipping__par__times__container">
                     <div className="shipping__par__times">
                          <div className={`shipping__par__times__header ${small&&"ship__small"}`}>Shipping address</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>United States</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>Spain</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>Canada</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>Australia</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>Rest of world</div>

                     </div>
                     <div className="shipping__par__times">
                          <div className={`shipping__par__times__header ${small&&"ship__small"}`}>Delivery times</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>15-31 days</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>10-21 days</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>10-25 days</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>15-30 days</div>
                          <div className={`shipping__par__times__text  ${small&&"ship__small"}`}>10-35 days</div>

                     </div>
                     </div>
                    
                </div>

                 <div className="shipping__par">
                   
                     <div className="shipping__par__text">We are not responsible for items not received due incorrect/incomplete shipping
                     provided or packages lost after delivery. If your package gets lost in transit, we will do everything we can to assist you.
                     However we are not responsible for packages once proof of delivery is generated.
                     </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Shipping
