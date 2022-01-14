import React from 'react';
import './About.css';
import AboutTrophies from './AboutTrophies/AboutTrophies';
import CourseStory from './courseStory/CourseStory';
import ClubDes from './clubDes/ClubDes';

const About = () => {
    return (
        <div className="about-bg">
           <div className="about-status text-light">
              <h1 className="bold-font">About us</h1>
           </div>
           <div className="bg-white">
               <div className="container py-5">
                    <h1>We Make History</h1>
                    <p>We are a team built on friendship, hardwork, persistence, and dedication to our cause. We believe in the power of teamwork and its ability to win the game and grow a stronger society. Our academy is open to players in the under-8 cadre up to the under-16 age group.</p>
                    <img src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-1-2.png" alt="" />
               </div>
           </div>
           <AboutTrophies/>
           <CourseStory/>
           <ClubDes/>
        </div>
    );
};

export default About;