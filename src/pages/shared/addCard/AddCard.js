import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBabyCarriage } from "react-icons/fa";
import './AddCard.css'
import {  Offcanvas, Badge } from 'react-bootstrap';
import {
    AiOutlineArrowUp,
    AiOutlineArrowDown
  } from "react-icons/ai";
  import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLoader } from '../../../Redux/stateSlice/stateSlice';





const AddCard = () => {
    const [show, setShow] = useState(false);
    const [addedProduct, setAddedProduct] = useState([]);

    const loader = useSelector((state) => state.states.loader);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(addedProduct)


    useEffect(() => {
        axios('https://cryptic-stream-56151.herokuapp.com/allOrderedProduct')
        .then(res=>setAddedProduct(res.data))
    },[loader])



    const handleDelete = (id) => {
        axios.delete(`https://cryptic-stream-56151.herokuapp.com/deleteOrderedProduct/${id}`)
        .then(res=>{
            console.log(res.data.deletedCount);
                if(res.data.deletedCount){
                    swal({
                        title: "Deleted success!",
                        icon: "success",
                      });
                      dispatch(setLoader(Math.random()*5000))
                }else{
                    swal({
                        title: "! opps something happened",
                        icon: "warning",
                      });
                }
            })
    }

    return (
        <div className="AddCard">
             <IconContext.Provider  value={{ color: "#06FF00" ,size:'4rem', className: "bg-secondary shadow-lg p-3 rounded" }}>
               <FaBabyCarriage onClick={handleShow}>
               </FaBabyCarriage>
               <Badge style={{zIndex:'6666666', position:'relative',top:'-35px',left:'-10px'}} bg="success" className="shadow text-light fs-6 rounded-pill">{addedProduct?.length}</Badge>
            </IconContext.Provider>


             {/* offcanvass */}

                        <>
                
                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>SHOPPING CARD</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{backgroundColor:'#6F902F'}} className="">
                       <div className="row g-2">
                           {addedProduct.length && addedProduct.map(pd=>{return(
                               <div className="col-12 border bg-white">
                                     <div className="row py-2">
                                         <div className="col-2">
                                             <img className="" height="50" width="55" src={pd.product.img} alt="" />
                                         </div>
                                         <div className="col-5">
                                             <p>{pd.product.title}</p>
                                             <p>{pd.product.price}</p>
                                         </div>
                                         <div className="col-5">
                                            <div className="row">
                                                <div className="col-3 border">
                                                <IconContext.Provider
                                                    value={{
                                                        color: "black",
                                                        size: ".8rem",
                                                        className: "arrow",
                                                    }}
                                                    >
                                                    <AiOutlineArrowUp />
                                                </IconContext.Provider>
                                                </div>
                                                <div className="col-4 border">
                                                {pd.product.quantity}
                                                </div>
                                                <div className="col-3 border">
                                                <IconContext.Provider
                                                    value={{
                                                        color: "black",
                                                        size: ".8rem",
                                                        className: "arrow",
                                                    }}
                                                    >
                                                    <AiOutlineArrowDown />
                                                    </IconContext.Provider>
                                                </div>
                                                
                                                {/* delete-button */}
                                                <div onClick={()=>handleDelete(pd._id)} className="pt-2">
                                                    <IconContext.Provider
                                                        value={{
                                                            color: "red",
                                                            size: "2.2rem",
                                                            className: "arrow p-2 rounded-pill bg-secondary",
                                                        }}
                                                        >
                                                        <RiDeleteBinLine/>
                                                    </IconContext.Provider>
                                                </div>
                                            </div>
                                         </div>
                                     </div>
                               </div>
                           )})}
                       </div>
                    </Offcanvas.Body>
                </Offcanvas>
                </>

        </div>
    );
};

export default AddCard;