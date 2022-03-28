import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom";
import {db } from "./firebase";
import "./ProductPage.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useStateValue} from "./Stateprovider";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SingleReview from "./SingleReview";
import {useHistory} from "react-router-dom";
import TweetBox from "./TweetBox"


function ProductPage() {
    const history=useHistory()
    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [images,setImages]=useState([]);
    const [mainImage,setMainImage]=useState('');
    const [opties,setOpties]=useState([]);
    const [amount,setAmount]=useState(1);
     const[{user},dispatch]=useStateValue();
     const [color,setColor]=useState('');
     const [small,setSmall]=useState(false);
     const [reviews,setReviews]=useState([]);
     const [totalReviews,setTotalReviews]=useState(0);
     const [reviewsScore,setReviewsScore]=useState(0);
     const [add,setAdd]=useState(false);

     const [reviewText,setReviewText]=useState('')
    //  var elmntToView = document.getElementById("reviews");

   
useEffect(()=>{
db.collection('products').doc(id).collection('reviews').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => (
         setReviews((dat)=>{
                const newdata=doc.data()
                const olddata=dat.filter((dat)=>dat.text!==newdata.text)
                return[...olddata,newdata]})))})

                
         
},[])

useEffect(()=>{
    if(reviews.length>0){
        var total=0
        reviews.map((doc)=>{
            total=total+doc.stars

        })
        setTotalReviews(reviews.length)
        setReviewsScore(Math.round(total/reviews.length))

        

    }
},[reviews])

useEffect(()=>{
    if(reviewsScore>0){
        db.collection('products').doc(id).update({
            stars:reviewsScore
        })

        
    }
},[reviewsScore])



    


    useEffect(()=>{
        var newId = id.replace(/\s+/g, '');
        db.collection('products').doc(newId).get().then((doc)=>{
            setProduct(doc.data())
           
        })
        db.collection('products').doc(newId).collection('images').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => (
         setImages((dat)=>{
                const newdata=doc.data()
                const olddata=dat.filter((dat)=>dat.src!==newdata.src)
                return[...olddata,newdata]})))})
                db.collection('products').doc(newId).collection('opties').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => (
         setOpties((dat)=>{
                const newdata=doc.data()
                const olddata=dat.filter((dat)=>dat.src!==newdata.src)
                return[...olddata,newdata]})))})


    },[])
    useEffect(()=>{
        if(product!==undefined){
setMainImage(product.image)
        }
    },[product])

    const addToCart=()=>{

        setAdd(true)
       
        dispatch({
    type:'ADD_TO_BASKET',
    item:{
        id:product.id,
        name:product.name,
        image:product.image,
        price:product.price,
        stars:product.stars,
        amount:amount,
        color:color.color,
        instock:product.instock
        
    },
    
})
        
        

    }
    useEffect(()=>{
        if(add){
            setTimeout(()=>{
             setAdd(false)
            },2300)
        }
    },[add])
   
     useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])
    

    

    
    
    return (
        <div className="productpage">
            {add&&
            <div onClick={()=>history.push('/cart')} className="product__added">Added to your cart!</div>}
            <div className={`productpage__top ${small&&"productpage__top__small"}`}>
                <div className={`productpage__top__images ${small&&"productpage__top__images__main__small"}`}>
                    <div className="productpage__top__images__main">
                        <img alt=""src={mainImage}className="productpage__top__images__main__image"/>
                    </div>

                     <div className="productpage__top__images__bottom">
                         {images?.map((doc)=>(
                             <div onClick={()=>setMainImage(doc.src)} className="images__opties">
                                  <img alt=""src={doc.src}className="images__opties__optie"/>
                             </div>
                         ))}

                     </div>

                    

                </div>
                <div className={`productpage__top__info ${small&&"productpage__top__info__small"}`}>
                    <div className="productpage__top__info__header">{product?.name}</div>

                     <div onClick={()=>document.getElementById("reviews").scrollIntoView()} className="productpage__top__info__reviews">
                         {Array(reviewsScore).fill().map((_,i)=>(
                       <p><StarRateIcon/></p>
                      ))}
                      <div style={{display:'flex'}}>({totalReviews} reviews)</div>

                     </div>

                     <div className="productpage__top__info__price">${product?.price}
                     <div className="productpage__top__info__price__old">${(product?.price)*2}</div>
                     </div>
                    
                     
                      <div className="productpage__top__info__aantal">
                          <div className="productpage__top__info__aantal__header">Amount:</div>

                          <div className="productpage__top__info__aantal__buttons">

                                  <RemoveIcon className="remove__icon" onClick={()=>{if(amount>1){setAmount(amount-1)}}}/>
                                  <div className="productpage__top__info__aantal__buttons__number">{amount}</div>
                                  <AddIcon  className="remove__icon" onClick={()=>{if(amount>0){setAmount(amount+1)}}}/>
                          </div>
                          

                      </div>

                      <div onClick={addToCart} className="productpage__top__info__buy__button">Add to cart</div>

                </div>

            </div>
           
         

            <div className="productpage__uitleg">
                <div className="productpage__uitleg__header">How does it work?</div>
                <div className={`uitleg__content ${small&&"uitleg__small"}`}>
                    <div  className={`productpage__uitleg__image ${small&&"uitleg__image__small"}`}>
                        <img alt=""src="https://firebasestorage.googleapis.com/v0/b/socialapp-4fd2c.appspot.com/o/Hb13b98f422f6405ab0dd482fa4f56595w.jpg?alt=media&token=45e033e8-e5a9-49d1-882a-1ac0cf8fdc24" className="productpage__uitleg__image__img"/>
                    </div>
                     <div  className={`productpage__uitleg__text ${small&&"productpage__uitleg__text__small"}`}>
                        
                         <div className="productpage__uitleg__text__optie">
                             ★
                         The Galaxy Light Projector
                          is a laser projector which transforms
                     your room instantly and provides a galatic experience by projecting 
                      a sea of drifting stars against a floating nebula cloud.
                    The Galaxy light projector is powered by a USB and works with a wall charger or a powerbank.
                    </div>
                    <div className="productpage__uitleg__text__optie">
                        ★
                         Built-in Bluetooth Speaker: Connect your phone via Bluetooth with this LED projector 
                         lights or plug USB in port to play lullaby music, relaxing, meditation music at light show. 
                         Volume adjustable fits your baby's peace and sweet sleep. Create a relaxing environment with light
                          projector and listen to your music simultaneously.
                    </div>
                      <div className="productpage__uitleg__text__optie">
                    ★ Holiday Decoration and Great Gift: Sky projector light perfectly fits for any holiday party decorations
                     to create an enjoyable and relaxing bedtime experience for children, soothe and comfort kids to sleep. 
                     Suitable for ballroom, disco, Christmas,birthday party, club, bar, family gathering, etc.
                      A great gift idea for all seasons, family, lover, friends.
                      </div>
                     

                          
                   

                </div>
                </div>
                 
                

            </div>

             <div className="productpage__guar">
                <div className={`productpage__guar__header ${small&&"small__guar__h"}`}>What's included in the box?</div>
                <div className={`productpage__guar__text ${small&&"small__guar__t"}`}>
                    <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}>  <FiberManualRecordIcon/> Usb cable</span>
                     <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}> <FiberManualRecordIcon/> The Galaxy Light Projector (obviously)</span>
                     <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}> <FiberManualRecordIcon/> Remote control</span>
                    <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}> <FiberManualRecordIcon/> User guide </span>
                    </div>

            </div>

            <div className="productpage__guar">
                <div className={`productpage__guar__header ${small&&"small__guar__h"}`}>Our Guarantee</div>
                <div className={`productpage__guar__text ${small&&"small__guar__t"}`}>
                    <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}> Your purchase is backed by our 7 days no-questions asked refund policy,</span>
                     <span style={{marginBottom:'3px',display:'flex',marginLeft:'3px',marginRight:'3px'}}>you don't absolutely love your Galaxy Light Projector send it back for a full refund.</span>
                    </div>

            </div>

            <div id="reviews" className={`productpage__reviews__container ${small&&"reviewSmall"}`}>
                <div className="productpage__reviews__header">Reviews</div>

                 <div className="productpage__reviews__reviews">
                     {reviews.map((doc)=>(
                    <SingleReview name={doc.name}stars={doc.stars}text={doc.text}nat={doc.nat}image1={doc.image1}image2={doc.image2}/>
                     ))}
                     
                 </div>

            </div>

            <div className={`write__review ${small&&"reviewSmall"}`}>
                <div className="write__review__header">Write a review</div>

                <div className="write__review__input__container">
                   <TweetBox/>

                </div>

                 

            </div>

            
        </div>
    )
}

export default ProductPage
