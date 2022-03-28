import React,{useState,useEffect} from 'react';
import "./Home.css";
import Product from "./Product";
import {db } from "./firebase";
import {useHistory} from "react-router-dom";


function Home() {
    const history=useHistory()
    const [featured,setFeatured]=useState([]);
    const [small,setSmall]=useState(false)
    useEffect(()=>{
        db.collection('products').doc('products').collection('featured').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => (
         setFeatured((dat)=>{
                const newdata=doc.data()
                const olddata=dat.filter((dat)=>dat.name!==newdata.name)
                return[...olddata,newdata]})))})

    },[])
    useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])
    if(small){return(
         <div className="home">
            <div className="home__top1__image">
               
                <div className="home__top1__topbar__s">50% OFF SITE-WIDE + FREE SHIPPING!</div>
                 <div  className="home__top1__text">
                     <div  className="home__top1__text__header__small">The Best Galaxy Light</div>
                     <div  className={`home__top1__text__sub ${small&&"small2"}`}>Bring the party to your own house</div>
                     </div>
                <div onClick={()=>history.push('/product/Lc1TcNMkBiHJASnCC7mW')} className="home__top1__button">Shop now</div>

            </div>
            <div className="small__home__top__2">
                <div className={`home__top2__image ${small&&"small_top2"}`}></div>
                 <div className={`home__top2__text ${small&&"home__top2__text__small"}`}>
                      <div className="home2__text__header__small">TRANSFORM YOUR ROOM</div>
                      <div className="home2__text__sub__small"> Turn your ordinary room into a visually deligthful retreat by just
                      switching on the  Galaxy Light Projector
                      . One touch is all
you need to make your room effortessly stylish
                      </div>
                      {/* <div onClick={()=>history.push('/shop')} className="home__top2__text__button"> Shop now</div> */}
                     
                      </div>
            </div>

              <div className="small__home__top__2">
                  <div className="home__top3__image__s"></div>
                
                 <div className={`home__top2__text ${small&&"home__top2__text__small"}`}>
                      <div className={`home__top2__text__header ${small&&"home2__text__header__small"}`}>GIFT THE BEST</div>
                      <div className={`home__top2__text__sub ${small&&"home2__text__sub__small"}`}> 
                      Make any day special with the
                           Galaxy light projector. 
                     The perfect gift for anyone at any time 
                     you need to make your room effortessly stylish
                      </div>
                      <div onClick={()=>history.push('/product/Lc1TcNMkBiHJASnCC7mW')} className="home__top2__text__button"> Shop now</div>
                     
                      </div>
                      
            </div>

             
            
        </div>

    )}
    return (
        <div className="home">
            <div className="home__top1__image">
                
                <div className="home__top1__topbar">50% OFF SITE-WIDE + FREE SHIPPING!</div>
                
                 <div  className="home__top1__text">
                     <div  className={`home__top1__text__header ${small&&"small"}`}>The Best Galaxy Light</div>
                     <div  className={`home__top1__text__sub ${small&&"small2"}`}>Bring the party to your own house</div>
                     </div>
                <div onClick={()=>history.push('/product/Lc1TcNMkBiHJASnCC7mW')} className="home__top1__button">Shop now</div>

            </div>
            <div className={`home__top2 ${small&&"small__home__top__2"}`}>
                <div className={`home__top2__image ${small&&"small_top2"}`}></div>
                 <div className={`home__top2__text ${small&&"home__top2__text__small"}`}>
                      <div className={`home__top2__text__header ${small&&"home2__text__header__small"}`}>TRANSFORM YOUR ROOM</div>
                      <div className={`home__top2__text__sub ${small&&"home2__text__sub__small"}`}> <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}>Turn your ordinary room into a visually deligthful retreat by just</span>
                      <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}>switching on the  <span style={{fontWeight:'bold',display:'flex',marginLeft:'3px',marginRight:'3px'}}> Galaxy light projector </span> . One touch is all </span>
                      <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}>you need to make your room effortessly stylish</span>
                      </div>
                      {/* <div onClick={()=>history.push('/shop')} className="home__top2__text__button"> Shop now</div> */}
                     
                      </div>
            </div>

              <div className={`home__top2 ${small&&"small__home__top__2"}`}>
                  <div className={`home__top3__image ${small&&"small_top2"}`}></div>
                
                 <div className={`home__top2__text ${small&&"home__top2__text__small"}`}>
                      <div className={`home__top2__text__header ${small&&"home2__text__header__small"}`}>GIFT THE BEST</div>
                      <div className={`home__top2__text__sub ${small&&"home2__text__sub__small"}`}> 
                      <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}>Make any day special with the<span style={{fontWeight:'bold',display:'flex',marginLeft:'3px',marginRight:'3px'}}>
                           Galaxy light projector. </span></span>
                      <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}>The perfect gift for anyone at any time </span>
                     
                      </div>
                      <div onClick={()=>history.push('/product/Lc1TcNMkBiHJASnCC7mW')} className="home__top2__text__button"> Shop now</div>
                     
                      </div>
                      
            </div>

             
            
        </div>
    )
}

export default Home
