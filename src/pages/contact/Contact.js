import React from "react";
import './Contact.css';
import { ImLocation } from "react-icons/im";
import { IconContext } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-bg">
      <div className="contact-status text-light">
        <h1 className="bold-font">Contact Us</h1>
        <p
          style={{ height: "5px", width: "60px" }}
          className="bg-warning mx-auto mt-1"
        ></p>
      </div>


{/* part-one */}
     <div className="bg-white">
     <div className="container py-5">
          <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                   <div className="border text-center py-5">
                   <IconContext.Provider value={{ color: "goldenrod",size:"3.2rem",className: "mb-4" }}>
                        <ImLocation/> 
                   </IconContext.Provider>
                        <h4 className="fw-bold">Location Of Training</h4>
                        <p>Mirdif - Dubai</p>
                   </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <div className="border text-center py-5">
                   <IconContext.Provider value={{ color: "goldenrod",size:"3.2rem",className: "mb-4" }}>
                        <MdEmail/> 
                   </IconContext.Provider>
                        <h4 className="fw-bold">Email us</h4>
                        <p>info@strikers.ae</p>
                   </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <div className="border text-center py-5">
                   <IconContext.Provider value={{ color: "goldenrod",size:"3.2rem",className: "mb-4" }}>
                        <IoCall/> 
                   </IconContext.Provider>
                        <h4 className="fw-bold">Phone Number</h4>
                        <p>+971508183559</p>
                   </div>
              </div>
          </div>
      </div>
     </div>


     {/* part-two-contact-form-map */}

     <div style={{backgroundColor:'#F0F0EF'}} className="">
         <div className="container py-5">
              <div className="row">
                  {/* contact-form */}
                  <div className="col-12 col-md-12 col-lg-6 p-4">
                        <div className="row g-2">
                           <div className="col-12 col-md-6 col-lg-6 pe-2">
                               <input className="w-100 p-2 border" type="text" placeholder="First Name"/>
                           </div>
                           <div className="col-12 col-md-6 col-lg-6 ps-2">
                              <input className="w-100 p-2 border" type="text" placeholder="Last Name"/>
                           </div>
                           <div className="col-12 col-md-6 col-lg-6 pe-2">
                               <input className="w-100 p-2 border" type="email" placeholder="Email Address"/>
                           </div>
                           <div className="col-12 col-md-6 col-lg-6 ps-2">
                               <input className="w-100 p-2 border" type="text" placeholder="Subject"/>
                           </div>

                           <div className="col-12 col-md-12 col-lg-12 p-1">
                               <textarea className="w-100 p-2 border" width="100%" rows="10" placeholder="Message"></textarea>   
                           </div>
                           <button className="bg-warning text-white border-0 p-2 fs-5">SUBMIT</button>
                        </div>
                  </div>
                  {/* google-map */}
                  <div className="col-12 col-md-12 col-lg-6 p-4">
                       <iframe title="d" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d738838.2872855499!2d55.46489312064472!3d24.30319466067772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1642097468189!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                  </div>
              </div>
         </div>
     </div>
    </div>
  );
};

export default Contact;
