import React from 'react';
import AllFees from './allFees/AllFees';
import './Fess.css'

const Fees = () => {
    return (
        <div className="fees-bg">
           <div className="fees-status text-light">
              <h1 className="bold-font">About us</h1>
              <p style={{height:'5px', width:'60px'}} className="bg-warning mx-auto mt-1"></p>
              <div className="container"><h5>All player can book for free trial and our coach will evaluate player level. We make special discount for good player in order to keep them with our team. Selective players should participate in all matches and tournaments that we join.</h5></div>
           </div>
           <AllFees/>
        </div>
    );
};

export default Fees;