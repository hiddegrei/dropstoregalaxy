import React from 'react';
import "./Thanks.css";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function Thanks() {
    return (
        <div className="thanks">
            <div className="thanks__window ">
                <div className="thanks__optie">
                    Your order is successfully accepted! We are going to get your order ready for shipment!
                < DoneOutlineIcon style={{display:'flex',marginLeft:'5px',color:'green'}}/>
                </div>
                <div className="thanks__optie">You will soon receive a confirmation email</div>
                
            </div>
            
        </div>
    )
}

export default Thanks
