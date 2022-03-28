import React from 'react';
import "./Bottom.css";
import {useHistory} from "react-router-dom";

function Bottom() {
    const history=useHistory()
    return (
        
            <div className="bottom__bar">
                 <div className="bottom__options">
                 <div className="bottom__help">
                      <div onClick={()=>history.push('/shipping')} className="bottom__help__optie">Shipping and returns</div>
                      <div onClick={()=>history.push('/returns')} className="bottom__help__optie">Returns and Refunds</div>
                      <div onClick={()=>history.push('/faq')} className="bottom__help__optie">F.A.Q</div>
                      <div onClick={()=>history.push('/shop')} className="bottom__help__optie">Shop</div>
                 </div>
                  <div className="bottom__help">
                      <div className="bottom__options__image"></div>
                     <img onClick={()=>history.push('/')} alt="" className="topbar__logo__image"src="https://firebasestorage.googleapis.com/v0/b/socialapp-4fd2c.appspot.com/o/Blue_and_White_Gaming_Logo__1_-removebg-preview%20(1).png?alt=media&token=e0b795cb-f71f-4ee7-b817-5da0bda6868a"></img>
                 </div>
                 </div>
                
             </div>
            
       
    )
}

export default Bottom
