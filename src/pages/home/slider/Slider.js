import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../../App.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => {
  return (
    <div className="container pb-5">
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide>
            <div className="px-5 py-2">
                <img className="rounded-pill" src="https://strikers.ae/wp-content/uploads/2017/02/h2-testimonials-img-6-2.jpg" alt="" />
                <h5 className="pt-5">Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus integre, vide viderer eleifend.</h5>
                <p style={{height:'5px', width:'40px'}} className="bg-warning mx-auto mt-5"></p>
                <h5>Jim Evans</h5>
                <h6 className="text-warning fw-bold">PR MANAGER</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="p-5">
                <img className="rounded-pill" src="https://strikers.ae/wp-content/uploads/2017/02/h2-testimonials-img-5-1.jpg" alt="" />
                <h5 className="pt-5">Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus integre, vide viderer eleifend.</h5>
                <p style={{height:'5px', width:'40px'}} className="bg-warning mx-auto mt-5"></p>
                <h5>Evan Hook</h5>
                <h6 className="text-warning fw-bold">PLAYER</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="p-5">
                <img className="rounded-pill" src="https://strikers.ae/wp-content/uploads/2017/02/h2-testimonials-img-4-2.jpg" alt="" />
                <h5 className="pt-5">Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum, no quo maiorum intellegebat, liber regione eu sit. Mea cu case ludus integre, vide viderer eleifend.</h5>
                <p style={{height:'5px', width:'40px'}} className="bg-warning mx-auto mt-5"></p>
                <h5>Rob Bask</h5>
                <h6 className="text-warning fw-bold">PERSONAL COACH</h6>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
