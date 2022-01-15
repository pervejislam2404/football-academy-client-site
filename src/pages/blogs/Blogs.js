import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import "./Blogs.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setFeaturedPost } from "../../Redux/stateSlice/stateSlice";

const Blogs = () => {
  const featuredPosts = useSelector((state) => state.states.featuredPost);
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://cryptic-stream-56151.herokuapp.com/featured')
    .then((response) =>{
        dispatch(setFeaturedPost(response.data))
    })
},[])

  return (
    <div className="blogs-bg">
      <div className="blogs-status text-light">
        <h1 className="bold-font">Blog</h1>
        <p
          style={{ height: "5px", width: "60px" }}
          className="bg-warning mx-auto mt-1"
        ></p>
      </div>

      {/* all-blogs */}

      <div className="bg-white py-5">
        <div className="container bg-white">
          <div className="">
            <div className="row">
              {featuredPosts.length &&
                featuredPosts.map((post, index) => {
                  const { title, subtitle, img } = post;
                  return (
                    <div className="col-12 col-md-12 col-lg-4 p-4">
                      <Card className="border-0">
                        <Card.Img variant="top" src={img} />
                        <Card.Body className="px-0">
                          <Card.Title>{title}</Card.Title>
                          <Card.Text style={{ color: "gray" }}>
                            {subtitle}
                          </Card.Text>
                          <p>
                              <IconContext.Provider value={{ color: "",size:"1.5rem", className: "me-2 pb-1" }}>
                                 <AiOutlineCalendar/>
                              </IconContext.Provider>
                             <span className="fw-bold text-secondary">NOVEMBER 28, 2021 |</span>
                             <IconContext.Provider value={{ color: "",size:"1.3rem", className: "mx-3 ms-5" }}>
                             <FiFacebook/>
                             </IconContext.Provider>

                             <IconContext.Provider value={{ color: "",size:"1.3rem", className: "global-class-name" }}>
                             <FiTwitter/>
                             </IconContext.Provider>
                          </p>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
