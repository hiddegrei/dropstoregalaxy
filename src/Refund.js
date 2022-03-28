import React from 'react';
import "./Refund.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Refund() {
    return (
        <div className="refund">
             <div className="refund__window">
                 <div className="refund__header">Returns and Refunds</div>

                 <div className="refund__text">We assure that all of our products go through multiple levels of quality inspections before it gets shipped out.
                 
                 </div>
                 <div className="refund__text">However, should your item by delivered with a manufacturing fault, we will replace or refund it , with the following conditions:
                 
                 </div>
                 <div className="refund__optie">
                     <FiberManualRecordIcon/> You must request a replacement or refund by sending an email to support@galaxy360tech.com within 7 days of accepting delivery of your order
                 </div>
                  <div className="refund__optie">
                     <FiberManualRecordIcon/> Clearly state in your email: Your full name used for the order, name of item(s), clear close-up photo(s) of the issue and description of the issue
                 </div>

                 <div className="refund__optie">
                     <FiberManualRecordIcon/> We do not accepts replacements/refunds, except for manufacturing faults of the Galaxy Ligth Projector itself.
                 </div>

                 <div className="refund__optie">
                     <FiberManualRecordIcon/>To be eligible for a replacement/refund, a video showing the manufacturing faults is required. Item must be unused and in the same condition that you received it. It must also be in the original packaging
                 </div>

                 <div className="refund__text">Once your return is received and inspected, we will send you an email to notify you that we have received your item. We will also notify you of the approval or rejection of your replacement/refund.
                 
                 </div>

                 <div className="refund__text">Upon approval, your replacement/refund will be processed. For refunds, a credit will automatically be applied to you credit card or orignal method of payment within 3-5 business days, subject to the processing duration of the bank.
                 
                 </div>
                 <div className="refund__text">We reserve the right to deny unreasonable replacements, refunds and exchanges
                 
                 </div>
                 <div className="refund__text">We are not liable for any lost or stolen mails
                 
                 </div>
                 <div className="refund__text">We reserve the right to reject any cancellation, refund deemed unfit or unreasonable.
                 
                 </div>

                 <div className="refund__canc">
                     <div className="refund__canc__h">Cancellation</div>
                     <div className="refund__canc">
                         We regret to inform you that we don't accept any cancellations after a conformation email has been send out. For cases when the order
                         has not been dispatched yet, cancellations will be subjected to approval upon notice, depending on the processing, simply contact us at 
                         <span style={{display:'flex',fontWeight:'bold'}}>supportgalaxy360tech@gmail.com</span> and we will get back to you within 3 business days.
                         Should a return and refund we approved, you will be refunded fully via your payment methode within 3-5 business days, subject to the processing duration of the bank.
                         We reserve the rights to reject any cancellations, refund deemed unfit or unreasonable.

                         In the event the provided address is incorrect/incomplete or change of mind after purchase, kindly note that a re-delivery or cancellation fee of 30 USD is chargeable.

                         Should the item be returned in a used condition upon receipt, a fee of 15 USD is chargeable and the balance amount will be refunded.
                     </div>




                 </div>

             </div>
            
        </div>
    )
}

export default Refund
