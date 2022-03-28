import React,{useState,useEffect} from 'react';
import "./Register.css";
import {db,auth} from "./firebase";
import {useStateValue} from "./Stateprovider";


function Register() {
     const[{user},dispatch]=useStateValue();
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const [fname,setFname]=useState('');
     const [lname,setLname]=useState('');
     
    
const register=(e)=>{
        e.preventDefault();

        var newemail = email.replace(/\s+/g, '');
        
        if(fname&&lname&&email&&password){

auth.createUserWithEmailAndPassword(newemail,password).then((userCredential) => {
    // Signed in
    var newuser = userCredential.user;
     dispatch({
    type:'SET_USER',
    user:newuser,})
   
    db.collection('users').doc(email).set({
    email:newuser.email,
    userId:newuser.uid,
    firstname:fname,
    lastname:lname,
    name:fname+''+lname
    
    
})


setEmail('')
    setFname('')
     setLname('')
    setPassword('')


})
        .then((auth)=>{
            
        }).catch(error=>alert(error.message))
    }
else{alert('missing credentials')}     

    }
    
   
  

    return (
        <div className="register">
            <h1 className="register__header">Register</h1>

            <div className="register__login">
                <div className="register__optie">
                <div className="register__login__optie">
                    <div className="register__login__optie__header"> First name</div>
                     <div className="register__login__optie__input">
                    <input className="register__login__optie__input__input" onChange={(e)=>setFname(e.target.value)} value={fname}></input>
                     </div>
                </div>
                <div className="register__login__optie">
                     <div className="register__login__optie__header">Last name</div>
                     <div className="register__login__optie__input">
                    <input   className="register__login__optie__input__input" onChange={(e)=>setLname(e.target.value)} value={lname}></input>
                     </div>
                </div>
            </div>

            <div className="register__optie">
                <div className="register__login__optie">
                    <div className="register__login__optie__header">Email</div>
                     <div className="register__login__optie__input">
                    <input className="register__login__optie__input__input" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                     </div>
                </div>
                <div className="register__login__optie">
                     <div className="register__login__optie__header">Password</div>
                     <div className="register__login__optie__input">
                    <input  type="password" className="register__login__optie__input__input" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                     </div>
                </div>
            </div>
            <div onClick={register} className="register__login__button">Sign Up</div>

            </div>

            
            </div>
    )
}

export default Register
