import React from 'react';
import { Card } from 'react-bootstrap';

const ClubDes = () => {
    return (
        <div style={{backgroundColor:'#F5F5F5'}}>
           <div className="container">
               <div className="row py-5">
                   
                    {/* one */}
                   <div className="col-12 col-md-6 col-lg-3">
                       <Card className="border-0 text-center">
                            <Card.Img className="img-fluid" variant="top" src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-7-2.jpg" />
                            <Card.Body style={{backgroundColor:'#F5F5F5'}} className="">
                                <Card.Title className="fw-bold my-2">Championship</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant verear consec tetuer. Eu sed diam ignota sanctus latine.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </div>

                   {/* two */}
                   <div className="col-12 col-md-6 col-lg-3">
                   <Card className="border-0 text-center">
                            <Card.Img className="img-fluid" variant="top" src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-8-2.jpg" />
                            <Card.Body style={{backgroundColor:'#F5F5F5'}} className="">
                                <Card.Title className="fw-bold my-2">Championship</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant verear consec tetuer. Eu sed diam ignota sanctus latine.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </div>

                   {/* three */}
                   <div className="col-12 col-md-6 col-lg-3">
                   <Card className="border-0 text-center">
                            <Card.Img className="img-fluid" variant="top" src="	https://strikers.ae/wp-content/uploads/2017/02/about-us-img-9-2.jpg" />
                            <Card.Body style={{backgroundColor:'#F5F5F5'}} className="">
                                <Card.Title className="fw-bold my-2">Championship</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant verear consec tetuer. Eu sed diam ignota sanctus latine.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </div>

                   {/* four */}
                   <div className="col-12 col-md-6 col-lg-3">
                      <Card className="border-0 text-center">
                            <Card.Img className="img-fluid" variant="top" src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-10-2.jpg" />
                            <Card.Body style={{backgroundColor:'#F5F5F5'}} className="">
                                <Card.Title className="fw-bold my-2">Championship</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant verear consec tetuer. Eu sed diam ignota sanctus latine.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default ClubDes;