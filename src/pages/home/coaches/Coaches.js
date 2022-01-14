import React from 'react';
import './Coaches.css'
import { BsCaretRightSquareFill } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

const Coaches = () => {
    return (
        <div className="coach-bg mb-5">

            <div className="container videoBg d-flex align-items-center">
               <div className="text-center px-4 text-light">
                   <h1>About Us</h1>
                   <h5>We are a team built on friendship, hardwork, persistence, and dedication to our cause. We believe in the power of teamwork and its ability to win the game and grow a stronger society. Our academy is open to players in the under-8 cadre up to the under-16 age group.</h5>
                   <div className="pt-5">
                       <IconContext.Provider  value={{ color: "yellow",size:"6rem", className: "bg-secondary p-3 rounded" }}>
                       <a href="https://vimeo.com/139971079 "target="blank">
                          <BsCaretRightSquareFill>
                          </BsCaretRightSquareFill>
                       </a>     
                       </IconContext.Provider>
                   </div>
               </div>
            </div>


            <div style={{paddingTop:'20rem'}} className="container pb-5">
                <div className="text-center text-light py-5">
                     <h2 className="fw-bold">Professional Team Of Coaches</h2>
                     <h5>Maecenas a aliquet justo, non porttitor felis. Etiam orci odio, dapibus a malesuada ut</h5>
                </div>
                <div className="row g-4">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="text-center text-white">
                            <img className="img-fluid text-light" src="https://strikers.ae/wp-content/uploads/2017/02/h2-team-1-2.jpg" alt="" />
                            <h4 className="mt-5">Mario Rogers</h4>
                            <h6 style={{color:'lightgray'}}>TEAM A</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                       <div className="text-center text-white">
                            <img className="img-fluid text-light" src="https://strikers.ae/wp-content/uploads/2017/02/h2-team-2-2.jpg" alt="" />
                            <h4 className="mt-5">Donald Castillo</h4>
                            <h6 style={{color:'lightgray'}}>TEAM B</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                       <div className="text-center text-white">
                            <img className="img-fluid text-light" src="https://strikers.ae/wp-content/uploads/2017/02/h2-team-3-2.jpg" alt="" />
                            <h4 className="mt-5">Roger Taylor</h4>
                            <h6 style={{color:'lightgray'}}>TEAM C</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="text-center text-white">
                            <img className="img-fluid text-light" src="https://strikers.ae/wp-content/uploads/2017/02/h2-team-4-2.jpg" alt="" />
                            <h4 className="mt-5">Max Simpson</h4>
                            <h6 style={{color:'lightgray'}}>TEAM D</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coaches;