import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Tabs, Tab } from 'react-bootstrap';
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts, setLoader } from "../../../Redux/stateSlice/stateSlice";
import swal from "sweetalert";










const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(0);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [size,handleSize] = useState(0)



  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.states.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(`https://cryptic-stream-56151.herokuapp.com/productById/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count < 0) {
      setCount(0);
      return;
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    axios("https://cryptic-stream-56151.herokuapp.com/allProducts").then((res) =>{
      dispatch(setAllProducts(res.data))
      filterRun()
    }
    );
    
  }, [product]);

  const filterRun = () => {
    const filteredProduct = allProducts.filter(
      (p) => p.title !== product.title
    );
    setRelatedProduct(filteredProduct);
  }

  const handleProductAdd = () => {
    product.quantity =count || 0;
    product.size=size || 0;
    delete product._id;
    delete product.review;

    axios.post('https://cryptic-stream-56151.herokuapp.com/addedProduct',{product})
    .then(res=> {
      if(res.data.acknowledged){
        swal({
          title: "product add success!",
          icon: "success",
        });
        dispatch(setLoader(Math.random()*5000))
      }else{
        swal({
          title: "Something happen!",
          icon: "success",
        });
      }
    });
  }



  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="">
              <img className="img-fluid" src={product?.img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="">
              <h3 className="fw-bold">{product?.title}</h3>
              <h5 style={{ color: "gray" }} className="fw-bold">
                {product?.price}
              </h5>
            </div>

            <div className="mt-5">
              <span style={{ color: "gray" }} className="fs-5 me-2 mt-4">
                Size
              </span>
              <select
                onChange={(e)=> handleSize(e.target.value) }
                className="border p-2"
                style={{ width: "40%" }}
                name="cars"
                id="cars"
              >
                {product?.size?.length &&
                  product?.size?.map((size, index) => {
                    return (
                      <option key={index} className="border-1" value={size}>
                        {size}
                      </option>
                    );
                  })}
              </select>
            </div>

            <div className="mt-4">
              <div className="d-flex">
                <div className="d-flex border">
                  <div
                    onClick={increaseCount}
                    className="border p-2  d-flex align-items-center"
                  >
                    <IconContext.Provider
                      value={{
                        color: "black",
                        size: "1.3rem",
                        className: "arrow",
                      }}
                    >
                      <AiOutlineArrowUp />
                    </IconContext.Provider>
                  </div>
                  <div className="border px-5 fw-bold d-flex align-items-center">
                    {count}
                  </div>
                  <div onClick={decreaseCount} className="border p-2">
                    <IconContext.Provider
                      value={{
                        color: "black",
                        size: "1.3rem",
                        className: "arrow",
                      }}
                    >
                      <AiOutlineArrowDown />
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="ms-2 d-flex align-items-center">
                  <Button onClick={handleProductAdd} variant="warning">
                    Add To Card
                    <IconContext.Provider
                      value={{
                        color: "black",
                        size: "1.8rem",
                        className: "ps-2",
                      }}
                    >
                      <AiOutlineArrowRight />
                    </IconContext.Provider>
                  </Button>
                </div>
              </div>
              
                <div className="pt-5">
                   <h5>SKU: N/A</h5>
                   <h6>Category: Uncategorized</h6>
                </div>



                <div className="pt-5">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="">
                        <Tab className="" eventKey="home" title="ADDITIONAL INFORMATION">
                           <div className="border p-4">
                                <p>Color black</p>
                           </div>
                        </Tab>
                        <Tab eventKey="review" title="REVIEWS">
                           <div className="border p-4">
                               <div className="row g-2">
                                    <div className="col-12 col-md-12 col-lg-12 p-2">
                                        <label>Comment *</label>
                                        <textarea style={{backgroundColor:'#F5F5F5'}} className="w-100 p-2 border" width="100%" rows="10" placeholder="Message"></textarea>   
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12 pe-2 my-4">
                                        <label>Name *</label>
                                        <input style={{backgroundColor:'#F5F5F5'}} className="w-100 p-2 border" type="text" placeholder="First Name"/>
                                    </div>
                                    
                                    <div className="col-12 col-md-12 col-lg-12 pe-2">
                                        <label>Email *</label>
                                        <input style={{backgroundColor:'#F5F5F5'}} className="w-100 p-2 border" type="email" placeholder="Email Address"/>
                                    </div>
                                    
                                    <button className="bg-warning text-white border-0 p-2 fs-5">SUBMIT</button>
                                </div>
                           </div>
                        </Tab>
                       
                    </Tabs>
                </div>
            </div>
          </div>

          {/* related-products */}
          <div className="col-12">
            <div className="row mt-5">
              {relatedProduct.length &&
                relatedProduct.map((pr) => {
                  return (
                    <div className="col-5 col-md-3 col-lg-2">
                      <div
                        onClick={() => navigate(`/detail/${pr?._id}`)}
                        className=""
                      >
                        <img
                          style={{ minHeight: "250px" }}
                          className="img-fluid"
                          src={pr?.img}
                          alt=""
                        />
                        <h5 className="mt-3">{pr?.title}</h5>
                        <h5>{pr?.price}</h5>
                      </div>
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

export default ProductDetails;
