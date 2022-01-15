import React from 'react';
import './Profile.css'
import { Nav, Table } from 'react-bootstrap';

const Profile = () => {
    return (
        <div className="profile-bg">
           <div className="text-center">
                <h1 className="fw-bolder text-warning big-font">DASHBOARD</h1>
           </div>

           {/* middle-res-section */}
           <div className="red-bg text-light">
               <div className="container py-5">
                  <h4 className="py-3">HOLA <br/>LOREM LOREM LOREM LOREM</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut inventore, ad ipsam cumque laborum natus labore blanditiis mollitia recusandae. Nihil praesentium cupiditate expedita non at tenetur assumenda. Consectetur odit rerum quidem dignissimos. Autem eum aliquid dolorum commodi quia officiis! Amet distinctio accusantium nisi nulla beatae quaerat aliquam error dolores incidunt?</p>

                  <h5 className="py-4">SIBLING DISCOUNTS ALSO APPLY: <span className="text-dark">15% OFF</span>SECOND CHILD AND <span className="text-dark">20% OFF</span> THIRD CHILD ONWARD</h5>

                  <p className="text-dark mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestiae.</p>
                  <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, molestiae.</p>
               </div>
           </div>

           {/* info-section */}

           <div className="info-bg py-4">
               <div className="container">
                   <Nav className="justify-content-center gap-2" activeKey="">
                        <Nav.Item>
                           <Nav.Link className="px-4 bg-danger text-light" href="">Dashboard</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link className="px-4 bg-secondary text-light" eventKey="link-1">Beginner player</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Nav.Link className="px-4 bg-secondary text-light" eventKey="link-2">Player history</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                           <Nav.Link className="px-4 bg-secondary text-light" eventKey="disabled" > Log out </Nav.Link>
                        </Nav.Item>
                    </Nav>
               </div>

               {/* table */}

               <div className="container overflow-scroll">
                   <div className="d-flex justify-content-between mt-4 mb-2">
                       <h3>PLAYER PROFILE</h3>

                        <div className="">
                            <Nav className="justify-content-center gap-2" activeKey="">
                                <Nav.Item>
                                  <Nav.Link className="px-3 bg-dark text-light" eventKey="">Add Player</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                  <Nav.Link className="px-3 bg-dark text-light" eventKey="disabled" >View All</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                   </div>
                    <Table bordered hover variant="">
                        <thead>
                         <tr className="bg-danger text-light">
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Category</th>
                            <th>Training</th>
                            <th>Team</th>
                            <th>Payment Status</th>
                            <th>Add Team</th>
                         </tr>
                        </thead>
                        <tbody>
                         <tr>
                            <td>Board atlethec</td>
                            <td>2010-08-5</td>
                            <td>U-10</td>
                            <td>Docs[2]</td>
                            <td>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                            </td>
                            <td>
                                <p className="text-light bg-warning p-2">Payment pending</p>
                            </td>
                            <td>
                                <p className="text-light bg-secondary p-1">Add Team</p>
                            </td>
                         </tr>
                         <tr>
                            <td>Board atlethec</td>
                            <td>2010-08-5</td>
                            <td>U-8</td>
                            <td>Docs[2]</td>
                            <td>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                                <p>season-B: team one </p>
                            </td>
                            <td>
                                <p className="text-light bg-success p-2">Done</p>
                            </td>
                            <td>Docs</td>
                         </tr>
                        </tbody>
                    </Table>
               </div>


               {/* text */}
               <div className="container py-3">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit </p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, illum.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque vitae laudantium.</p>
               </div>

               {/* two-column */}
               <div className="container">
                   <div className="row p-4 g-4">
                       <div className="col-12 col-md-6 col-lg-6">
                             <div className="bg-white">
                                 <div className="bg-danger ps-2 text-white p-1">Guardian Profile</div>

                                 <div className="p-4">
                                    <h6>Nazma Akther</h6>
                                    <h6>nazma@nazma.gmail.com</h6>
                                    <h6>015444444444</h6>
                                    <h6>Dubai</h6>
                                  
                                  <div className="d-flex justify-content-between align-items-end">
                                     <p></p>
                                     <p className="bg-dark p-2 px-3 text-white rounded">Edit Information</p>
                                  </div>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi aliquid deleniti aspernatur, maiores fugit laboriosam commodi saepe non recusandae asperiores.</p>
                                 </div>  
                             </div>
                       </div>

                       <div className="col-12 col-md-6 col-lg-6">
                            <div className="bg-white">
                                 <div className="bg-danger ps-2 text-white p-1">View Payment History</div>

                                 <div className="p-5">
                                 <Table responsive className="">
                                                <thead>
                                                    <tr>
                                                       <th>Itack</th>
                                                       <th>Total(ARCA)</th>
                                                       <th>Date</th>
                                                    </tr>
                                                </thead>
                                            <tbody>

                                                <tr>
                                                    <td>LA-6465649684884</td>
                                                    <td>154.3</td>
                                                    <td>22/03/2021</td>
                                                    <td><span className="text-white bg-success rounded p-1">New</span></td>
                                                </tr>

                                                <tr>
                                                    <td>LA-6465649684884</td>
                                                    <td>2421.3</td>
                                                    <td>02/05/2019</td>
                                                    <td><span className="text-white bg-success rounded p-1">New</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                 </div>       
                             </div>
                       </div>
                   </div>
               </div>




           </div>
        </div>
    );
};

export default Profile;