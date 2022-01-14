import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="container py-5">
                 <div className="row text-light list-style-none">
                     {/* column-one */}
                     <div className="col-12 col-md-6 col-lg-3">
                        <ul style={{listStyle:'none'}} className="list-style-none">
                            <li className="fs-5 fw-bold pb-5">About Strikers Sport Academy</li>
                            <li className="mb-3 gray-font">We are a team built on friendship, hardwork, persistence, and dedication to our cause. We believe in the power of teamwork and its ability to win the game and grow a stronger society.</li>
                            <li className="gray-font">Our academy is open to players in the under-8 cadre up to the under-16 age group.</li>
                        </ul>
                     </div>


                     {/* column-two */}
                     <div className="col-12 col-md-6 col-lg-3">
                        <ul style={{listStyle:'none'}}>
                            <li className="fs-5 fw-bold pb-5">Latest Posts</li>
                            <li className="lightgray-font">Basics First</li>
                            <li>NOVEMBER 28, 2021</li>
                            <li className="lightgray-font">Born Champions</li>
                            <li>NOVEMBER 28, 2021</li>
                            <li className="lightgray-font">Challenge it!</li>
                            <li>NOVEMBER 28, 2021</li>
                        </ul>
                     </div>


                     {/* column-three */}
                     <div className="col-12 col-md-6 col-lg-3">
                       <ul style={{listStyle:'none'}}>
                            <li className="fs-5 fw-bold pb-5">Quick Links</li>
                            <li>Fees</li>
                            <li>Blog</li>
                            <li>Shop</li>
                            <li>Registration</li>
                            <li>Member Login</li>
                        </ul>
                     </div>


                     {/* column-three */}
                     <div className="col-12 col-md-6 col-lg-3">
                       <ul style={{listStyle:'none'}}>
                            <li className="fs-5 fw-bold pb-5">Contact Information</li>
                            <li><span className="text-warning">Address:</span> Mirdif - Dubai</li>
                            <li><span className="text-warning">Email:</span> info@strikers.ae</li>
                            <li><span className="text-warning">Phone:</span> +971508183559</li>
                            <li><span className="text-warning">Work Time:</span> 09:00 - 17:00</li>
                        </ul>
                     </div>
                 </div>
            </div>
            <div className="bg-dark">
                <div className="container">
                    <div className="d-flex justify-content-between text-light align-items-center pb-2 pt-4">
                        <p>Copyright 2021 © Strikers Sport Academy</p>
                        <p>Follow us:</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;