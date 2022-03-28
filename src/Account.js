import React,{useState,useEffect} from 'react';
import "./Account.css";
import {db,auth} from "./firebase";
import {useStateValue} from "./Stateprovider";
import Login from "./Login";
import Register from "./Register"

function Account() {

     const[{user},dispatch]=useStateValue();
     const [register,setRegister]=useState(false)
    

    
    return (
        <div className="account">
           
           {(!user&&!register)&&
           <div className="account" >
           <Login/>
           <div className="noAccount">
                <div className="noAccount__text">No account yet? <span className="span" onClick={()=>setRegister(true)} style={{fontWeight:'bold',marginLeft:'5px'}}> Sign Up</span></div>
                
            </div>
            </div>
            }
             {(!user&&register)&&
           <div className="account" >
           <Register/>
           <div className="noAccount">
                <div className="noAccount__text">Already have an account? <span className="span" onClick={()=>setRegister(false)} style={{fontWeight:'bold',marginLeft:'5px'}}> Sign In</span></div>
                
            </div>
            </div>
            }
            
        </div>
    )
}

export default Account
