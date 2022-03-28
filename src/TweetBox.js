import React, {useState,useEffect} from "react";
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import {db,storage} from "./firebase";
import {useStateValue} from "./Stateprovider";

import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import PollIcon from '@material-ui/icons/Poll';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveIcon from '@material-ui/icons/Remove';
import Picker from 'emoji-picker-react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CloseIcon from '@material-ui/icons/Close';

function TweetBox({sidebar}){
    const [tweetMessage,setTweetMessage]=useState("");
    const [tweetImage,setTweetImage]=useState("");
    const [ imageProgress,setImageProgress]=useState(0);
    const [ audioProgress,setAudioProgress]=useState(0);
    const [tweetAudio,setTweetAudio]=useState("");
    const[{user,profile,windowstate},dispatch]=useStateValue();
    const[ids,setIds]=useState([]);
     const [image,setImage]=useState("");
     const [nat,setNat]=useState('')
    
     const [nchar,setNchar]=useState(0);
    
       const [chosenEmoji, setChosenEmoji] = useState(null);
       const [openEmoji,setOpenEmoji]=useState(false);
       const [postToken,setPostToken]=useState('');
       const [name,setName]=useState('');
       const [star1,setStar1]=useState(false);
       const [star2,setStar2]=useState(false);
       const [star3,setStar3]=useState(false);
       const [star4,setStar4]=useState(false);
       const [star5,setStar5]=useState(false);
       const [small,setSmall]=useState(false)
     
     let naam
    const childPathImage=`image/${profile.username}/${Math.random().toString(36)}`
    const childPathAudio=`audio/${profile.username}/${Math.random().toString(36)}`

     useEffect(()=>{

if(window.innerWidth<550){
    setSmall(true)
}
    },[window.innerWidth])

//      useEffect(()=>{
//              let isSubscribed = true


// if(isSubscribed){
    
//  window.addEventListener('click',checkClick);
// return ()=>{
            
//             window.removeEventListener('click',checkClick)
//         }  
// }
// return () => isSubscribed = false
//          },[])
//          const checkClick=(e)=>{
            
//                //  console.log(e.target.closest('#drop1'))
               
//                   setOpenEmoji(false)
                
//          }

   

 

  const onEmojiClick = (e, emojiObject) => {
      e.preventDefault()
       e.stopPropagation();
     
    setChosenEmoji(emojiObject);
  }
  useEffect(()=>{
      if(chosenEmoji){
    //   setTweetMessage((old)=>{
    //       console.log(old)
    //       return[...old,chosenEmoji.emoji]
    //   })
    const oldmes=tweetMessage
    const newmes=oldmes.concat(chosenEmoji.emoji)
    
    setTweetMessage(newmes)
    }

  },[chosenEmoji])

   
    
    
    const handlechangeimage=(e)=>{
        const image=e.target.files[0]
        
        const task=storage.ref().child(childPathImage).put(image)
        
       const taskProgress=snapshot=>{
           console.log(`transferredImage:${snapshot.bytesTransferred}`)
           setImageProgress(snapshot.bytesTransferred)
       }
        const taskCompleted=()=>{
task.snapshot.ref.getDownloadURL().then((snapshot)=>{
    setTweetImage(snapshot)
})
        }

        const taskError=snapshot=>{
        console.log(snapshot)
        }
        task.on("state__changed",taskProgress,taskError,taskCompleted)
    }
    const handleImage=()=>{
        const fileInput=document.getElementById('imageInput');
        fileInput.click()
    }
   
    

    

    const sendTweet=(e)=>{
        e.preventDefault();
        e.stopPropagation()

        if(name&&tweetMessage&&(star1||star2||star3||star4||star5)){
            var nat1;

            if(nat===('US'||'NL'||'AU'||'ES'||'CA')){
                nat1=nat

            }else{
                nat1='NL'
            }
            console.log('hi')
            var star=0;
            if(star1){
                star=1

            }else if(star2){
                star=2
            }else if(star3){
                star=3
            }else if(star4){
                star=4
            }else if(star5){
                star=5
            }
            db.collection('testReviews').add({
                name:name,
                text:tweetMessage,
                image1:tweetImage,
                stars:star,
                nat:nat1
                
                
            })
            setTweetImage('')
            setTweetMessage('')
            setName('')
            setNat('')
            setStar1(false)
            setStar5(false)
            setStar2(false)
            setStar3(false)
            setStar4(false)

        }
 

        }
       

    
    

    

    useEffect(()=>{
//check length tweetmessage
let len = tweetMessage.length;
let nchar2=0

for(let i = 0; i != len; i++) {
   if(tweetMessage[i] != ' ') {
       
       nchar2++
       
   }
}
setNchar(nchar2)
if(nchar2>250){
    let newTweetMessage=tweetMessage
    newTweetMessage=newTweetMessage.replace(`${newTweetMessage[newTweetMessage.length -1]}`,'')
    setTweetMessage(newTweetMessage)
}
if(len>0){
let testmessage=tweetMessage
let newmes=/@[a-z]+/i.exec(testmessage)

if(newmes){
let testmes=newmes[0].split('@')
let num=-1

testmes.forEach(function(val){
    if(num<0){
        num++
    }else{
      naam=val
    }
})



//  finalmessage=testmessage.replace(/@[a-z]+/i,`<Link to="${naam}">${newmes}</Link>`)
//  console.log(finalmessage)
}}

// let docje=document.getElementById("newmes")
// docje.innerHTML=newstring


    },[tweetMessage])

    useEffect(()=>{
        if(star1){
            setStar2(false)
            setStar3(false)
            setStar4(false)
            setStar5(false)
        }
         if(star2){
            setStar1(false)
            setStar3(false)
            setStar4(false)
            setStar5(false)
        }
         if(star3){
            setStar1(false)
            setStar2(false)
            setStar4(false)
            setStar5(false)
        }
        if(star4){
            setStar1(false)
            setStar2(false)
            setStar3(false)
            setStar5(false)
        }
        if(star5){
            setStar1(false)
            setStar2(false)
            setStar3(false)
            setStar4(false)
           
        }

    },[star1,star2,star3,star4,star5])
    

    return (
<div className="tweetbox">
    
    
    
    <form>
       
        <div className="tweetBox__input">
          
          <div className="tweet__inputs">
              <input className="tweet__input"
           style={{display:'flex',marginRight:'5px'}}
          onChange={(e)=>setTweetMessage(e.target.value)}
          value={tweetMessage}
           placeholder="Write a review"
          type="text"></input>

           <input className="tweet__input"
           style={{display:'flex',marginRight:'5px'}}
          onChange={(e)=>setName(e.target.value)}
          value={name}
           placeholder="name"
          type="text"></input>

           <input className="tweet__input"
           style={{display:'flex',marginRight:'5px'}}
          onChange={(e)=>setNat(e.target.value)}
          value={nat}
           placeholder="(optional) nationality (please use landcodes, like 'US' , 'NL' etc)"
          type="text"></input>

          <div className="stars">
              {star1&&<div className="stars"> < StarRateIcon onClick={()=>setStar1(true)}/> <StarBorderIcon onClick={()=>setStar2(true)}/> <StarBorderIcon onClick={()=>setStar3(true)}/> <StarBorderIcon onClick={()=>setStar4(true)}/> <StarBorderIcon onClick={()=>setStar5(true)}/></div>}
              {star2&&<div className="stars"> <StarRateIcon onClick={()=>setStar1(true)}/> <StarRateIcon onClick={()=>setStar2(true)}/> <StarBorderIcon onClick={()=>setStar3(true)}/> <StarBorderIcon onClick={()=>setStar4(true)}/> <StarBorderIcon onClick={()=>setStar5(true)}/></div>}
               {star3&&<div className="stars"> <StarRateIcon onClick={()=>setStar1(true)}/> <StarRateIcon onClick={()=>setStar2(true)}/>  <StarRateIcon onClick={()=>setStar3(true)}/>  <StarBorderIcon onClick={()=>setStar4(true)}/> <StarBorderIcon onClick={()=>setStar5(true)}/></div>}
             {star4&&<div className="stars"> <StarRateIcon onClick={()=>setStar1(true)}/> <StarRateIcon onClick={()=>setStar2(true)}/>  <StarRateIcon onClick={()=>setStar3(true)}/>  <StarRateIcon onClick={()=>setStar4(true)}/> <StarBorderIcon onClick={()=>setStar5(true)}/></div>}
             {star5&&<div className="stars"> <StarRateIcon onClick={()=>setStar1(true)}/> <StarRateIcon onClick={()=>setStar2(true)}/>  <StarRateIcon onClick={()=>setStar3(true)}/>  <StarRateIcon onClick={()=>setStar4(true)}/> <StarRateIcon onClick={()=>setStar5(true)}/></div>}
             {(!star1&&!star2&&!star3&&!star4&&!star5)&&<div className="stars"><StarBorderIcon onClick={()=>setStar1(true)}/> <StarBorderIcon onClick={()=>setStar2(true)}/>  <StarBorderIcon onClick={()=>setStar3(true)}/>  <StarBorderIcon onClick={()=>setStar4(true)}/> <StarBorderIcon onClick={()=>setStar5(true)}/></div>}
              </div>

          </div>


          
          



          <div id="newmes"></div>
           <p className="maxchar2">{nchar }/250</p>

          </div>
          <div className="pickerContainer">
     {/* {openEmoji&&<button className="picker__button" title="yo" onClick={()=>setOpenEmoji(false)}>yo</button>} */}
      {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )} */}
      {openEmoji&&
      <Picker pickerStyle={{width:'400px'}}  onEmojiClick={onEmojiClick} />
      }
      {openEmoji&&
      < CloseIcon onClick={()=>setOpenEmoji(false)} className="close"/>}

     
    </div>
         
          
          <div className="tweetBox__footer">
              <div className={`tweetBox__tweetbutton ${(!tweetMessage&&(!star1&&!star2&&!star3&&!star4&&!star5))&&"tweetBox__tweetButtonO"}`}>
              <Button
        onClick={sendTweet}
        type="submit"
         className="tweetBox__tweetButton">Post</Button>
        
          </div>
          <input placeholder="ImageInput" hidden="hidden" type="file" id="imageInput" value={image} onChange={handlechangeimage}></input>
       
       {!tweetImage&&
        <Tooltip title="Add media">
        <IconButton  onClick={(e)=>{
            e.stopPropagation()
            handleImage()}}>
        <ImageIcon/>
        </IconButton>
        </Tooltip>
              }
         <div className="bytes">
            
            
            {tweetImage&&<div className="addedImageCon" >
                <IconButton onClick={(e)=>{
                    e.stopPropagation()
                    setTweetImage('')}}>
                <RemoveIcon/>
                </IconButton>
                <img src={tweetImage.uri}alt=""className="addedImage"></img>
                </div>}
        </div>
        

        {!small&&
        <div className="addedEmojiCon">
            <Tooltip  title="Add Emoji">
        <IconButton  onClick={(e)=>{
            e.stopPropagation()
            setOpenEmoji(!openEmoji)}}>
        <EmojiEmotionsIcon/>
        </IconButton>
        </Tooltip>
        
        </div>}
        
        
        
        
        </div>
        
        
    </form>

    <div id="emoji">

    </div>

    
    
</div>


    )
}

export default TweetBox