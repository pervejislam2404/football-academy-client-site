import React from 'react';
import { Card } from 'react-bootstrap';

const Trophies = () => {
    return (
        <div style={{paddingBottom:'25rem'}}>
             <div className="container py-5">
        <div className="row">
          {/* card-one */}
          <div className="col-12 col-md-6 col-lg-3">
            <Card className="border-0 text-center">
              <div className="text-center">
                <img src="https://strikers.ae/wp-content/uploads/2017/02/h2-img-9-3.jpg" className=""   alt="" />
              </div>
              <Card.Body className="border-0">
                <Card.Title className="fw-bold">Amazing Sport Events</Card.Title>
                <Card.Text style={{color:'#929397'}} className="">
                One of our key focuses at Strikers Sports Academy is organizing great events that our players, staff and parents can all get involved with. We arrange competitive matches, competitive tournaments and other team events, tailored to each age range, to ensure all our players compete in a safe, fun environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* card-two */}

          <div className="col-12 col-md-6 col-lg-3">
            <Card  className="border-0 text-center">
              <div className="text-center">
                <img src="https://strikers.ae/wp-content/uploads/2017/02/h2-img-10-2.jpg" className=""   alt="" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Great Teams</Card.Title>
                <Card.Text style={{color:'#929397'}} >
                Our soccer teams at Strikers Sports Academy consist of hard-working, courageous players who value integrity and sportsmanship of the game. Our teams bond quickly and form friendships, building each other’s confidence and ability with soccer.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* card-three */}
          <div className="col-12 col-md-6 col-lg-3">
            <Card  className="border-0 text-center">
              <div className="text-center">
                <img src="	https://strikers.ae/wp-content/uploads/2017/02/h2-img-11-2.jpg" className=""   alt="" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Hard Work</Card.Title>
                <Card.Text style={{color:'#929397'}} >
                Strikers Sports Academy value hard work and all players must be seen to be putting their all into their training sessions and competitions to ensure progression in soccer. Our coaches encourage determination and grit and our players are committed to the sport.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* card-four */}

          <div className="col-12 col-md-6 col-lg-3">
            <Card  className="border-0 text-center">
              <div className="text-center">
                <img src="https://strikers.ae/wp-content/uploads/2017/02/h2-img-12-2.jpg" className=""   alt="" />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold">Winner’s Guide</Card.Title>
                <Card.Text style={{color:'#929397'}} >
                Our Strikers Sports Academy coaches train winning players and teams and encourages a range of mental and physical abilities to create winning players. Our coaching sessions can help you on the path to a professional football career.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Trophies;