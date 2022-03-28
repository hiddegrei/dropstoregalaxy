import React,{useState,useEffect} from 'react';
import "./Checkout.css";
import {useStateValue} from "./Stateprovider";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {countryList} from "./countryData"
import {db} from "./firebase";
import {useHistory} from "react-router-dom";


function Checkout() {
     const history=useHistory()
    const[{profile,address},dispatch]=useStateValue();
    const [drop,setDrop]=useState(false);
    const [countryD,setCountryD]=useState(countryList);
    const [countryChosen,setCountryChosen]=useState('');
    const [fullName,setFullName]=useState('');
    const [streetAddress,setStreetAddress]=useState('');
    const [addressUnit,setAddressUnit]=useState('');
    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [postcode,setPostcode]=useState('');
    const [phonenumber,setPhonenumber]=useState('');
    const [small,setSmall]=useState(false)
    const [email,setEmail]=useState('')

     useEffect(()=>{
             let isSubscribed = true
if(isSubscribed){
    
 window.addEventListener('click',checkClick);
return ()=>{ window.removeEventListener('click',checkClick) }  
}
return () => isSubscribed = false
         },[])
         const checkClick=(e)=>{
                  setDrop(false)}

 const newAddress=()=>{
     if(countryChosen&&fullName&&streetAddress&&addressUnit&&city&&state&&postcode&&profile&&email){
         db.collection('users').doc(profile.username).update({
             fullName:fullName,
             countryChosen:countryChosen,
             streetAddress:streetAddress,
             addressUnit:addressUnit,
             city:city,
             state:state,
             postcode:postcode,
             phonenumber:phonenumber,
             email:email
         })
     }else{alert('missing credentials')} 
      if(countryChosen&&fullName&&streetAddress&&addressUnit&&city&&state&&postcode){
         dispatch({type:'SET_ADDRESS',address:[ {fullName:fullName},
             {countryChosen:countryChosen},
             {streetAddress:streetAddress},
             {addressUnit:addressUnit},
            { city:city},
             {state:state},
             {postcode:postcode},
             {phonenumber:phonenumber},
             {email:email}]})

             history.push('/checkout/delivery')
     }
     else{alert('missing credentials')} 

    

 }       
  useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])       
   

    return (
        <div className="checkout">
            <div className="checkout__header">Select a delivery address</div>

             <div className="checkout__address">
                 <div className="checkout__address__name">{fullName}</div>
                 <div className="checkout__address__optie">{streetAddress} {addressUnit}</div>
                 <div className="checkout__address__optie">{postcode}, {city}, {state},{countryChosen}</div>
                 <div className="checkout__address__optie">{countryChosen}</div>
                 <div className="checkout__address__optie">Email: {email}</div>
                 <div className="checkout__address__optie">Phone: {phonenumber}</div>
                  
                  {(countryChosen&&fullName&&streetAddress&&addressUnit&&city&&state&&postcode&&email)?
                  <div onClick={()=>newAddress()} className="checkout__address__button">Deliver to this address</div>:

                      <div  className="checkout__address__button2">Add your address below</div>}
             </div>

             <div className="checkout__new__address">
                 <h2 className="checkout__new__address__header">Add/Edit delivery address</h2>

                 <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">Select country/region</div>
                     {!drop?
                     <div onClick={(e)=>{
                         e.stopPropagation()
                         e.preventDefault()
                         setDrop(true)}} className="checkout__new__address__optie__input__drop">{countryChosen}  <ExpandMoreIcon /></div>:
                     <div className="checkout__new__address__optie__drop">
                         {countryD.map((doc)=>(
                             <div onClick={()=>setCountryChosen(doc)} className="country__optie">{doc}</div>
                         ))}
                         </div>}
                     
                 </div>

                 <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">Full name (first name and last name)</div>
                     
                     <div className="checkout__new__address__optie__input"><input onChange={(e)=>setFullName(e.target.value)} value={fullName} className="checkout__new__address__optie__input__input"></input></div>
                     
                 </div>

                 <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">Street address</div>
                     
                     <div className="checkout__new__address__optie__input"><input placeholder="Street address, P.O. box, company name, c/o" onChange={(e)=>setStreetAddress(e.target.value)} value={streetAddress} className="checkout__new__address__optie__input__input"></input></div>
                     <div className="checkout__new__address__optie__input"><input placeholder="Flat, suite, unit, building, floor, etc" onChange={(e)=>setAddressUnit(e.target.value)} value={addressUnit} className="checkout__new__address__optie__input__input"></input></div>
                 </div>

                  <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">City</div>
                     
                     <div className="checkout__new__address__optie__input"><input  onChange={(e)=>setCity(e.target.value)} value={city} className="checkout__new__address__optie__input__input"></input></div>
                    
                 </div>

                 <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">State/Province/Region</div>
                     
                     <div className="checkout__new__address__optie__input"><input  onChange={(e)=>setState(e.target.value)} value={state} className="checkout__new__address__optie__input__input"></input></div>
                    
                 </div>

                  <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">Postcode</div>
                     
                     <div className="checkout__new__address__optie__input"><input  onChange={(e)=>setPostcode(e.target.value)} value={postcode} className="checkout__new__address__optie__input__input"></input></div>
                    
                 </div>

                  <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">Email</div>
                     
                     <div className="checkout__new__address__optie__input"><input  onChange={(e)=>setEmail(e.target.value)} value={email} className="checkout__new__address__optie__input__input"></input></div>
                    
                 </div>

                 <div className={`checkout__new__address__optie ${small&&"checkSmall"}`}>
                     <div className="checkout__new__address__optie__header">Phone number</div>
                     
                     <div className="checkout__new__address__optie__input"><input placeholder="optional"  onChange={(e)=>setPhonenumber(e.target.value)} value={phonenumber} className="checkout__new__address__optie__input__input"></input></div>
                    
                 </div>

                 {/* <div onClick={()=>newAddress()} className="addNew__button">Add new address</div> */}

             </div>
            
        </div>
    )
}

export default Checkout
