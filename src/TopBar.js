import React,{useState,useEffect} from 'react';
import "./TopBar.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import {IconButton} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import { Badge } from '@material-ui/core';
import {useStateValue} from "./Stateprovider";

function TopBar() {
    const history=useHistory()
    const [search,setSearch]=useState(false);
    const [searchInput,setSearchInput]=useState('');
    const[{user,basket},dispatch]=useStateValue();
    const [small,setSmall]=useState(false)

     useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])

   if(small){return(
       <div className="topbar">
           <div className="topbar__sectie" >
           <div className="topbar__logo__s">
                <img onClick={()=>history.push('/')}  alt="" className="topbar__logo__image"src="https://firebasestorage.googleapis.com/v0/b/socialapp-4fd2c.appspot.com/o/Blue_and_White_Gaming_Logo__1_-removebg-preview%20(1).png?alt=media&token=e0b795cb-f71f-4ee7-b817-5da0bda6868a"></img>
                </div>

                <div className="topbar__buttons__s">
            <div onClick={()=>history.push('/')} className="topbar__optie__s">
                Home

            </div>

            <div  onClick={()=>history.push('/shop')} className="topbar__optie__s">
                Shop
                
            </div>
            <div onClick={()=>history.push('/faq')} className="topbar__optie__s">
                FAQ

            </div>
            </div>
            <div className="topbar__bag__s">
               
               
                <Badge badgeContent={basket?.length} color="primary">
                <ShoppingBasketIcon onClick={()=>history.push('/cart')} className="icon__button2"/>
                </Badge>

            </div>
        </div>
       </div>

   )}
    return (
        <div className="topbar">
            <div style={{display:'flex',width:'100%',height:'100%'}}>
                {!search?
                <div className="topbar__sectie" >
            <div className="topbar__logo">
                <img alt="" className="topbar__logo__image"src="https://firebasestorage.googleapis.com/v0/b/socialapp-4fd2c.appspot.com/o/Blue_and_White_Gaming_Logo__1_-removebg-preview%20(1).png?alt=media&token=e0b795cb-f71f-4ee7-b817-5da0bda6868a"></img>
                </div>
            <div className="topbar__buttons">
            <div onClick={()=>history.push('/')} className="topbar__optie">
                Home

            </div>

            <div  onClick={()=>history.push('/shop')} className="topbar__optie">
                Shop
                
            </div>
            <div onClick={()=>history.push('/faq')} className="topbar__optie">
                FAQ

            </div>
            </div>
            <div className="topbar__bag">
               
                {/* <SearchIcon className="icon__button" onClick={()=>setSearch(true)} style={{marginRight:'10px'}}/>
                <PersonIcon onClick={()=>history.push('/account')} className="icon__button"/> */}
                <Badge badgeContent={basket?.length} color="primary">
                <ShoppingBasketIcon onClick={()=>history.push('/cart')} className="icon__button"/>
                </Badge>

            </div>
            </div>
            :
            <div  className="topbar__sectie">
                <div className="topbar__search">
                    <input className="topbar__search__input" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput}></input>
                    <CloseIcon className="icon__button" onClick={()=>setSearch(false)}/>
                    
                </div>

                </div>}
            </div>
        </div>
    )
}

export default TopBar
