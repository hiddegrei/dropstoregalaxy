import React from "react";
import ReactDOM from "react-dom";
import {useHistory} from "react-router-dom";
import {db } from "./firebase";



function Paypal({name,email,total,city,state,postal_code}) {
     const history=useHistory();
    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total
            
          },
        },
      ],
      shipping_address:[
          {
              city:city
          },
          {
              state:state
          },
          {
              postal_code:postal_code
          }
      ]
    });
  };

  const onApprove = (data, actions) => {
      db.collection('orders').add({
          name:name,
          total:total,
          city:city,
          state:state,
          postal:postal_code,
          email:email,


      })

      history.push('/thanks')
    return actions.order.capture();
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}
export default Paypal