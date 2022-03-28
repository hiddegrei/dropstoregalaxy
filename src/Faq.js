import React,{useEffect,useState} from 'react';
import "./Faq.css";

function Faq() {
     const [small,setSmall]=useState(false)

     useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])
    return (
        <div className="faq">
            <div className="faq__header">F.A.Q</div>

            <div className="faq__opie">
                <div className={`faq__opie__header ${small&&"faq__opie__header__small"}`}>What batterys should i use for the remote control?</div>
                <div className={`faq__opie__text ${small&&"faq__opie__text__small"}`}>Use 2 AAA to power the remote control on</div>
               
                </div>

                <div className="faq__opie">
                <div className={`faq__opie__header ${small&&"faq__opie__header__small"}`}>How dow I power the projector on?</div>
                <div className={`faq__opie__text ${small&&"faq__opie__text__small"}`}>The Galaxy Ligth Projector comes with a USB cable. You can power it with your computer, mobile phone charget or a powerbank</div>
               
                </div>

                 <div className="faq__opie">
                <div className={`faq__opie__header ${small&&"faq__opie__header__small"}`}>Can I adjust the brightness of the projector?</div>
                <div className={`faq__opie__text ${small&&"faq__opie__text__small"}`}>Yes you can, there are 6 brightness levels for you to adjust to you preference</div>
                </div>

                 <div className="faq__opie">
                <div className={`faq__opie__header ${small&&"faq__opie__header__small"}`}>Can I recharge the Galaxy 360 projector ?</div>
                <div className={`faq__opie__text ${small&&"faq__opie__text__small"}`}>Yes you can easily recharge the battery via the USB port! </div>
                </div>
            
        </div>
    )
}

export default Faq
