import React from 'react';
import { IconContext } from 'react-icons/lib';
import { BsCaretRightSquareFill } from "react-icons/bs";
import './CourseStory.css';

const CourseStory = () => {
    return (
        <div className="bg-white">
           <div className="container text-center py-5">
               <h1 className="fw-bold">This Is Our Story</h1>
               <p style={{height:'5px', width:'60px'}} className="bg-warning mx-auto mt-1"></p>
              <div className="story-bg py-5">
                  {/* <img src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-6-2.jpg" className="img-fluid" alt="" /> */}
                  <div className="py-5">
                       <IconContext.Provider  value={{ color: "yellow",size:"6rem", className: "bg-secondary p-3 rounded" }}>
                       <a href="https://vimeo.com/139971079 "target="blank">
                          <BsCaretRightSquareFill>
                          </BsCaretRightSquareFill>
                       </a>     
                       </IconContext.Provider>
                   </div>
              </div>
              <h5 className="mt-5">Lorem ipsum dolor sit amet, errem facete ut has, vis mundi legere id. At eleifend principes definiebas nec suas debet cum aperi.</h5>
           </div>
        </div>
    );
};

export default CourseStory;