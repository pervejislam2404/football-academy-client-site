import React,{useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setFeaturedPost } from '../../../Redux/stateSlice/stateSlice';
import { Card, Button } from 'react-bootstrap';

const Des = () => {
    const dispatch = useDispatch();
    const featuredPosts = useSelector((state)=>state.states.featuredPost);

    useEffect(() => {
        axios('https://cryptic-stream-56151.herokuapp.com/featured')
        .then((response) =>{
            dispatch(setFeaturedPost(response.data))
        })
    },[])

    console.log('from redux', featuredPosts);
    return (
        <div style={{marginTop:'-10rem',zIndex:999}}>
            <div style={{position:'relative',zIndex:999}} className="container border bg-white">
                <div className="">
                    <div className="row">
                        {
                            featuredPosts.length && featuredPosts.map((post,index)=>{
                                const {title,subtitle,img} = post;
                                return(
                                <div className="col-12 col-md-12 col-lg-4 p-4">
                                    <Card className="border-0">
                                        <Card.Img variant="top" src={img} />
                                        <Card.Body className="px-0">
                                            <Card.Title>{title}</Card.Title>
                                            <Card.Text style={{color:'gray'}}>
                                            {subtitle}
                                            </Card.Text>
                                            <Button variant="primary">read more</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                                )
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Des;