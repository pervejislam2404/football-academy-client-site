import React from 'react';
import './CourseDes.css'
import { Button } from 'react-bootstrap';

const CourseDes = () => {
    return (
        <div>
            <div className=" mb-0">
                <div className="row m-0">
                    {/* section-one */}
                    <div className="col-12 col-md-12 col-lg-4 p-0">
                      <div className="containerOne text-light p-5">
                         <h1 className="my-5">Equipment For Beginers</h1>
                         <p>Get the right cones, footballs (children below age 13 are advised to use a size 4 football, while children between 5 and 7 are advised to use a size 3 football), mini goalposts, shinguards, and football boots (it is best to use boots without metal studs, this would help minimize the occurrence of injuries among players). It is also important that players use the right equipment from a young age, this not only helps them stay protected during practice.</p>
                         <h6  className="bg-warning d-inline-block p-2 px-4 text-dark fw-bold mt-2 mb-5">READ MORE</h6>
                     </div>
                    </div>
                   {/* section-two */}
                    <div className="col-12 col-md-12 col-lg-4 p-0">
                        <div className="containerTwo text-dark p-5">
                           <h1 className="my-5">Developing Basic Techniques</h1>
                           <p>Get the right cones, footballs (children below age 13 are advised to use a size 4 football, while children between 5 and 7 are advised to use a size 3 football), mini goalposts, shinguards, and football boots (it is best to use boots without metal studs, this would help minimize the occurrence of injuries among players). It is also important that players use the right equipment from a young age, this not only helps them stay protected during practice.</p>
                         <h6  className="bg-warning d-inline-block p-2 px-4 text-dark fw-bold mt-2 mb-5">READ MORE</h6>
                        </div>
                    </div>
                    {/* section-three */}
                    <div  className="col-12 col-md-12 col-lg-4 p-0">
                         <div className="containerThree  text-light p-5">
                            <h1 className="my-5">Ultimate Coaching Approach</h1>
                            <p>We approach the game at our different age levels with the right mindset. Our youth-centered approach helps players feel safe, free, and expressive, as they will never be scared of making mistakes during practice sessions, but will rather learn from these mistakes. This way, they will understand the ethos of the game and our team from a young age and imbibe the right culture and attitude towards the game thanks to our approach.</p>
                            <h6  className="bg-warning d-inline-block p-2 px-4 text-dark fw-bold mt-2 mb-5">READ MORE</h6>
                         </div>
                    </div>
                </div>
            </div>

            {/* sign-up-info */}
            <div className="bg-warning">
                <div className="container">
                <div className="row m-0 py-5 ">
                    <div className="col-12 col-md-8 col-lg-9 d-flex align-items-center">
                        <h4  className="fw-bold text-light">Become A Part of Our Team Today and Take a Step Closer to your football dreams.</h4>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 d-flex align-items-center">
                        <h6  className="bg-dark d-inline-block py-3 px-4 text-light fw-bold ">SIGN UP NOW</h6>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
};

export default CourseDes;