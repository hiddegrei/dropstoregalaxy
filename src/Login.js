import React,{useState,useEffect} from 'react';
import "./Login.css";
import {db,auth} from "./firebase";
import {useStateValue} from "./Stateprovider";


function Login() {
     const[{user},dispatch]=useStateValue();
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     
    

    
   
  

    const signin=(e)=>{
e.preventDefault();
var newemail = email.replace(/\s+/g, '');


if(newemail&&password){
    
// db.collection('users').doc(username).get().then(doc=>{
   
//     if(doc.exists&&(doc.data().email===email)){

        
auth.signInWithEmailAndPassword(newemail,password).then((userCredential) => {
    // Signed in
    var useruser = userCredential.user;
    dispatch({
    type:'SET_USER',
    user:useruser,
    
   
    
})

if(useruser.uid){
   
 db.collection('users').where('userId', '==', useruser.uid)
.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       // console.log( doc.data());
        dispatch({
                  type:'SET_PROFILE',
                  profile:doc.data(),
                 }
                )
    });
}).catch((error)=>console.log(error))
}
// dispatch({
//     type:'SET_HANDLE',
//     handle:username,
// })
   
    // ...
  })
.then((auth)=>{
   
}).catch(error=>alert(error.message))
    // }else{alert('wrong credentials')}


//})
}
else{alert('email/password is missing')}
    }
    
    return (
        <div className="account">
            <h1 className="account__login__header">Login</h1>

            <div className="account__login">
                <div className="account__login__optie">
                    <div className="account__login__optie__header">Email</div>
                     <div className="account__login__optie__input">
                    <input className="account__login__optie__input__input" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                     </div>
                </div>
                <div className="account__login__optie">
                     <div className="account__login__optie__header">Password</div>
                     <div className="account__login__optie__input">
                    <input  type="password" className="account__login__optie__input__input" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                     </div>
                </div>
            </div>
            <div onClick={signin} className="account__login__button">Sign In</div>

            
            </div>
    )
}

export default Login
