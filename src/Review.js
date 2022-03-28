import React from 'react';
import "./Review.css";
import {useStateValue} from "./Stateprovider";

function Review() {
     const[{basket,address},dispatch]=useStateValue();
    return (
        <div className="review">
             <div className="review__window">
                 <div className="review__header">
                     <div className="review__header__text"> Review your order</div>
                     <div className="review__header__button">Place your order</div>
                    </div>

                    <div className="review__info">
                        <div className="review__info__address">
                            <div className="review__info__address__name">{address?.name}</div>
                            <div className="review__info__address__optie"></div>

                        </div>
                        <div className="review__info__payment"></div>

                    </div>

             </div>
            
        </div>
    )
}

export default Review
