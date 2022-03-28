import React,{useState,useEffect} from 'react';
import "./SingleReview.css";
import StarRateIcon from '@material-ui/icons/StarRate';
import CloseIcon from '@material-ui/icons/Close';

function SingleReview({name,stars,text,nat,image1,image2,image3,image4,image5}) {
    const [mainImage,setMainImage]=useState('');
    const [open,setOpen]=useState(false);
    const [small,setSmall]=useState(false)

     useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])
    return (
        <div className={`sreview ${open&&"open"} ${small&&"singleSmall"}`}>

            <div className={`sreview__left ${small&&"leftSmall"}`}>
                <div className="sreview__left__name">{name}</div>
                <div className="sreview__left__nat">
                    <img alt="" src={`https://raw.githubusercontent.com/madebybowtie/FlagKit/master/Assets/PNG/${nat}%402x.png`}className="sreview__left__nat__image"/>
                </div>
             
            </div>

            <div className="sreview__right">
                <div className="sreview__right__stars">{Array(stars).fill().map((_,i)=>(
                       <p><StarRateIcon/></p>
                      ))}</div>
                <div className="sreview__right__text">{text}</div>

<div className="sreview__right__images">
    {image1&&
    <img onClick={()=>{setMainImage(image1)
    setOpen(!open)}} src={image1}alt=""className="sreview__right__images__optie"/>}
     {image2&&
    <img onClick={()=>{setMainImage(image2)
    setOpen(!open)}} src={image2}alt=""className="sreview__right__images__optie"/>}

</div>
{open&&<div className="immie">
    <img alt=""src={mainImage}className="immie__image"/>
    <CloseIcon className="icon" onClick={()=>setOpen(false)}/>
    </div>}
            </div>


             
            
        </div>
    )
}

export default SingleReview
