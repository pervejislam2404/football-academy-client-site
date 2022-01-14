import React from 'react';
import './Register.css';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import profile from './user-profile.png'
import CurrencyFormat from 'react-currency-format';

const Register = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
    };



    return (
        <div className="register-bg">
        <div className="register-status text-light">
           <h1 className="bold-font">About us</h1>
           <div className="container text-center">
               <h5>All player can book for free trial and our coach will evaluate player level. We make special discount for good player in order to keep them with our team. Selective players should participate in all matches and tournaments that we join.</h5>
           </div>
        </div>


        {/* register-form */}
        
        <div className="bg-white">
        <div className="Register-bg p-5 container">
            <div className="register-container p-4 mx-auto">
               <div className="row">
                   <div style={{backgroundColor:'#FED501'}} className="col-12 col-md-6 col-lg-6 text-center pt-3 pb-3">
                        <div className="">
                        <img className="img-fluid user-profile" src={profile} alt="" />
                        </div>
                        <div className="container pt-3 pb-3">
                            <h5 className="fs-3 fw-bold">Les't get you set up</h5>
                            <p className="text-secondary fw-normal">It should only take a couple of minutes to pair with your watch</p>
                        </div>
                   </div>


                   <div className="col-12 col-md-6 col-lg-6 pt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>


                        <Form.Control type="text"
                        className="border-0 bg-light p-3 mb-3"
                        {...register("name", { required: true})} 
                        placeholder="Name" 
                         />


                       <select {...register("gender")}
                        className="border-0 bg-light p-3 mb-3 w-100"
                                            {...register("password", { required: true, minLength: 8})} 
                                            placeholder="Password"  
                        >
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>

                       
                        <Form.Control 
                        type="email"  
                        className="border-0 bg-light p-3 mb-3"
                        {...register("password", { required: true, minLength: 8})} 
                        placeholder="Email"  
                        />

                       <CurrencyFormat
                       className="border-0 bg-light p-3 mb-3 w-100"
                       {...register("password", { required: true, minLength: 8})} 
                       placeholder="Number" 
                       format="+880 (###) ###-###" mask="_"/>

                       <Form.Control type="text"
                        className="border-0 bg-light p-3 mb-3"
                        {...register("name", { required: true})} 
                        placeholder="Name" 
                         />

                        <select {...register("gender")}
                        className="border-0 bg-light p-3 mb-3 w-100"
                                            {...register("password", { required: true, minLength: 8})} 
                                            placeholder="Password"  
                        >
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>



                        <Form.Control 
                        type="date" 
                        className="border-0 bg-light p-3 mb-3 w-100"
                        {...register("password", { required: true, minLength: 8})} 
                        placeholder="Password"  
                        />


                         <Button type="submit" className="d-block w-100 text-light fs-5 my-4" variant="info">Book Now</Button>
                        </form>
                        <div className="text-center">
                            <h6><span>Already have an account? </span><Link className="text-decoration-none" to="/login">Sign in</Link></h6> 
                        </div>

                        <div className="text-center pt-3">
                            <h6 className="text-danger">{}</h6> 
                       </div>
                   </div>
               </div>
            </div>
        </div>
        </div>
     </div>
    );
};

export default Register;