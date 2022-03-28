
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React,{useEffect,useState} from "react";
import TopBar from "./TopBar";
import Home from "./Home";
import ProductPage from './ProductPage';
import Account from "./Account";
import Cart from "./Cart";
import Checkout from "./Checkout"
import {useStateValue} from "./Stateprovider";
import {db,auth} from "./firebase";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Review from "./Review";
import Shop from "./Shop" ;
import Shipping from "./Shipping";
import Faq from "./Faq";
import Bottom from "./Bottom";
import Refund from "./Refund";
import Thanks from "./Thanks"

function App() {
  const[{user},dispatch]=useStateValue();
  const [loaded,setLoaded]=useState(false)
  
  

  useEffect(()=>{
    let isSubscribed=true
    if(isSubscribed){
auth.onAuthStateChanged((authUser)=>{
  // console.log('the user is:',authUser);
  if(authUser){
setLoaded(true)
         dispatch({
           type:'SET_USER',
           user:authUser})
  }else{
    setLoaded(true)
dispatch({
  type:'SET_USER',
  user:null})
  }
})
    }
    return () => isSubscribed = false
  },[user])

  
  useEffect(()=>{
if(user){

 db.collection('users').where('userId', '==', user.uid)
.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
       // console.log( doc.data());
        dispatch({
                  type:'SET_PROFILE',
                  profile:doc.data(),
                 }

                )
    });
}).catch((error)=>console.log(error));
}
                  
  },[user])
if(!user&&!loaded){
  <div style={{flex:1,justifyContent:'center'}}>
    Loading..
  </div>
}
  return (
    <Router>
   <div className="app">
    
     <Switch>

        <Route path="/product/:id">
             <TopBar/>
             <ProductPage/>
             <Bottom/>
       </Route>

       <Route path="/account">
             <TopBar/>
             <Account/>
             <Bottom/>
       </Route>

       <Route path="/faq">
         <TopBar/>
             <Faq/>
             <Bottom/>
             
       </Route>

        <Route path="/shipping">
             <TopBar/>
             <Shipping/>
             <Bottom/>
       </Route>

       <Route path="/thanks">
             <TopBar/>
             <Thanks/>
             <Bottom/>
       </Route>

       <Route path="/returns">
             <TopBar/>
             <Refund/>
             <Bottom/>
       </Route>

       <Route path="/shop">
             <TopBar/>
             <Shop/>
             <Bottom/>
       </Route>

        <Route exact path="/checkout">
             <TopBar/>
             <Checkout/>
       </Route>

       <Route path="/checkout/delivery">
             <TopBar/>
             <Delivery/>
       </Route>

       <Route path="/checkout/payment">
             <TopBar/>
             <Payment/>
             <script src="https://www.paypal.com/sdk/js?client-id=test"></script>
      <script>paypal.Buttons().render('body');</script>
       </Route>

       <Route path="/checkout/review">
             <TopBar/>
             <Review/>
       </Route>

       <Route path="/cart">
             <TopBar/>
             <Cart/>
       </Route>

       <Route path="/">
             <TopBar/>
             <Home/>
             <Bottom/>
       </Route>
     </Switch>

   </div>
   </Router>
  );
}

export default App;
