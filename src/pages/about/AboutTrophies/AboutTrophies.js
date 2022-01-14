import React from 'react';
import { Card } from 'react-bootstrap';

const AboutTrophies = () => {
    return (
        <div  style={{backgroundColor:'#F5F5F5'}} >
        <div className="container py-5">
   <div className="row">
     {/* card-one */}
     <div className="col-12 col-md-6 col-lg-3" >
       <Card  style={{backgroundColor:'lightgray'}} className="border-0 text-center">
         <div className="text-center">
           <img src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-2-2.jpg" className="img-fluid"   alt="" />
         </div>
         <Card.Body  style={{backgroundColor:'#F5F5F5'}}  className="border-0">
           <Card.Title className="fw-bold pb-3">FIFA World Cup</Card.Title>
           <Card.Text style={{color:'#929397'}} className="">
           Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant.
           </Card.Text>
         </Card.Body>
       </Card>
     </div>
     {/* card-two */}

     <div  style={{backgroundColor:'#F5F5F5'}} className="col-12 col-md-6 col-lg-3">
       <Card  className="border-0 text-center">
         <div className="text-center">
           <img src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-3-2.jpg" className="img-fluid"   alt="" />
         </div>
         <Card.Body  style={{backgroundColor:'#F5F5F5'}}>
           <Card.Title className="fw-bold pb-3">UEFA Champions League</Card.Title>
           <Card.Text style={{color:'#929397'}} >
           Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant.
           </Card.Text>
         </Card.Body>
       </Card>
     </div>

     {/* card-three */}
     <div style={{backgroundColor:'#F5F5F5'}} className="col-12 col-md-6 col-lg-3">
       <Card  className="border-0 text-center">
         <div className="text-center">
           <img src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-4-2.jpg" className="img-fluid"   alt="" />
         </div>
         <Card.Body style={{backgroundColor:'#F5F5F5'}}>
           <Card.Title className="fw-bold pb-3">CAF Cup Of Nations</Card.Title>
           <Card.Text style={{color:'#929397'}} >
           Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant.
           </Card.Text>
         </Card.Body>
       </Card>
     </div>

     {/* card-four */}

     <div style={{backgroundColor:'#F5F5F5'}} className="col-12 col-md-6 col-lg-3">
       <Card  className="border-0 text-center">
         <div className="text-center">
           <img src="https://strikers.ae/wp-content/uploads/2017/02/about-us-img-5-2.jpg" className="img-fluid"   alt="" />
         </div>
         <Card.Body style={{backgroundColor:'#F5F5F5'}}>
           <Card.Title className="fw-bold pb-3">Copa Libertadores</Card.Title>
           <Card.Text style={{color:'#929397'}} >
           Lorem ipsum dolor sit amet, cu his aliquam honestatis, mel ut putant.
           </Card.Text>
         </Card.Body>
       </Card>
     </div>
   </div>
 </div>
   </div>
    );
};

export default AboutTrophies;