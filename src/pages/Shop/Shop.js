import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllProducts } from "../../Redux/stateSlice/stateSlice";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.states.allProducts);

  let navigate = useNavigate();

  useEffect(() => {
    axios("https://cryptic-stream-56151.herokuapp.com/allProducts").then((res) =>
      dispatch(setAllProducts(res.data))
    );
  }, []);

  return (
    <div className="bg-white py-5">
      <div className="container">
        <div className="row">
          {/* category-section */}
          <div className="col-12 col-md-12 col-lg-3 pt-0 p-3">
            <select className="border p-2" style={{width:'100%'}} name="cars" id="cars">
              <option className="border-1" value="Sort By Default">Sort By Default</option>
              <option className="border-1" value="Sorting By Popularity">Sorting By Popularity</option>
              <option className="border-1" value="Sort By Average Rating">Sort By Average Rating</option>
              <option className="border-1" value="Sort By Latest">Sort By Latest</option>
            </select>
          </div>

          {/* product-section */}
          <div className="col-12 col-md-12 col-lg-9">
            <div className="row">
              {allProducts.length &&
                allProducts.map((product, index) => {
                  return (
                    <div onClick={()=>navigate(`/detail/${product._id}`)} key={index} className="col-12 col-md-6 col-lg-4">
                      <Card>
                        <Card.Img
                          className="img-fluid"
                          style={{ minHeight: "330px" }}
                          variant="top"
                          src={product.img}
                        />
                        <Card.Body>
                          <Card.Title>{product.title}</Card.Title>
                          <Card.Title style={{ color: "gray" }}>
                            {product.price}
                          </Card.Title>
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

export default Shop;
