import React from "react";
import { Card } from "react-bootstrap";
import Fade from 'react-reveal/Fade';



const Article = () => {
  return (
    <div className="pt-5">
      <div className="container py-5">
        <div className="row">
          {/* card-one */}
          <Fade left>
          <div className="col-12 col-md-6 col-lg-3">
            <Card className="border-0 text-center" style={{backgroundColor:'#DCDCDC'}}>
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS94nT9puYOF9Zdr5kNW4YLG9ie17C1Li19Hg&usqp=CAU" className="rounded-pill" height="170" width="170" alt="" />
              </div>
              <Card.Body className="border-0">
                <Card.Title className="fw-bold">Preparation</Card.Title>
                <Card.Text style={{color:'#929397'}} className="">
                Preparing well is an important part of any journey and with your journey here, it is no different. We appreciate the importance of preparation and ensure our coaches at all levels do. This is why we make sure we prepare our players properly before every training session, friendly game, and competitive game.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          </Fade>
          {/* card-two */}

         <Fade top>
         <div className="col-12 col-md-6 col-lg-3">
            <Card  className="border-0 text-center"  style={{backgroundColor:'#DCDCDC'}}>
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWepFuN959vQQ8bMpZ3PFDNAeMkWJhj28e9w&usqp=CAU" className="rounded-pill" height="170" width="170" alt="" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Trainning</Card.Title>
                <Card.Text style={{color:'#929397'}} >
                Our training methods at all age levels from u-8, u-10. U-12, u-14 to u-16 all incorporate age-appropriate training routines for the players. For the younger players, a lot more emphasis is placed on understanding the game and playing it in smaller spaces. This is achieved with appropriate small-sided games like 3v3. 5v5, and “piggy in the middle” games.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
         </Fade>

          {/* card-three */}
         <Fade bottom>
         <div className="col-12 col-md-6 col-lg-3">
            <Card  className="border-0 text-center"  style={{backgroundColor:'#DCDCDC'}}>
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDSfLw6Zi-P4a6BOBBgYnOWpCVy21_r9ziw&usqp=CAU" className="rounded-pill" height="170" width="170" alt="" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Motivation</Card.Title>
                <Card.Text style={{color:'#929397'}} >
                Well-motivated players perform at their optimal level. It is not magic or sorcery, it is just plain science and at Strikers Academy, we strive to keep our players well-motivated going into any challenge. Our coaching crew understands the big—and little—things that keep young players motivated and key into it to keep our players sharp every day.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
         </Fade>

          {/* card-four */}

              <Fade right>
              <div className="col-12 col-md-6 col-lg-3">
            <Card  className="border-0 text-center"  style={{backgroundColor:'#DCDCDC'}}>
              <div className="text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJZHOFoO_hc5JQbnK5WgRnf7ojzDld433hA&usqp=CAU" className="rounded-pill" height="170" width="170" alt="" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Realization</Card.Title>
                <Card.Text style={{color:'#929397'}} >
                We know you want to win and our job is to help you realize this dream every step of the way. From training sessions to mini-league games and trial games, we will be there with you at every step of your football journey.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
              </Fade>
         

        </div>
      </div>
    </div>
  );
};

export default Article;
