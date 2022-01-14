import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import profile from "./profile.png";
import google from './google.png';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
//   const {googleSign,signWithEmailPass} = useFirebase();
  const { register, handleSubmit } = useForm();

//   const errorMsg = useSelector(state=>state.statesCounter.googleSignErrorMsg);


//   const location = useLocation();
//   const navigate = useNavigate();


  const onSubmit = (data) => {
    // signWithEmailPass(data?.email, data?.password, location, navigate)
  };


//   const handleGoogleSign = ()=>{
//       googleSign(location,navigate);
//   }


  return (
    <div className="loginBg">
      <div className="py-5">

        <div className="login-container mx-auto">
          <div className="mx-auto text-center pb-5">
            <img src={profile} className="img-fluid profile-img" alt="" />
            <h4>Make your identity </h4>
          </div>

          {/* login-form */}
          <div className="form-container mx-auto pb-5">
            <form onSubmit={handleSubmit(onSubmit)}>

            <InputGroup className="mb-3">
                <InputGroup.Text className="bg-info" id="basic-addon1">
                    <HiOutlineMail/>
                </InputGroup.Text>
                <FormControl
                type="email" 
                {...register("email")}
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text className="bg-info" id="basic-addon1">
                     <RiLockPasswordLine/>
                </InputGroup.Text>
                <FormControl
                type="password"
                {...register("password")}
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
              <Button type="submit" className="d-block w-100 text-light fs-5 my-4" variant="info">Log In</Button>

              <div className="text-center">
              <h5>--------or login with---------</h5>
              </div>
              <div className="text-center py-3">
                  <span onClick={()=>{}} style={{backgroundColor:'lightgray'}} className="p-4 rounded"><img className="" src={google} alt="" /></span>
              </div>
            </form>

            <div className="text-center">
                 <h6><span>Already have an account? </span><Link className="text-decoration-none" to="/register">Register</Link></h6> 
            </div>

            <div className="text-center pt-3">
                 <h6 className="text-danger"></h6> 
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;