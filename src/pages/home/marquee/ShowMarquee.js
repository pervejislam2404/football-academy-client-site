import React from "react";
import Marquee from "react-fast-marquee";

const ShowMarquee = () => {
  return (
    <div>
      <Marquee className="bg-warning">
        <img className="ball" src="https://strikers.ae/wp-content/uploads/2017/03/h2-client-3.png" alt="" />
        <img className="sku" src="https://strikers.ae/wp-content/uploads/2017/03/h2-client-5.png" alt="" />
        <img className="keeper" src="https://strikers.ae/wp-content/uploads/2017/03/h2-client-1.png" alt="" />
        <img className="loppo" src="https://strikers.ae/wp-content/uploads/2017/03/h2-client-4.png" alt="" />
        <img className="meistro" src="https://strikers.ae/wp-content/uploads/2017/03/h2-client-6.png" alt="" />
        <img className="barks" src="https://strikers.ae/wp-content/uploads/2017/03/h2-client-2.png" alt="" />
        <img className="wstar" src="https://strikers.ae/wp-content/uploads/2017/03/h2-client-7.png" alt="" />
        
      </Marquee>
    </div>
  );
};

export default ShowMarquee;
