import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import CourseDes from '../courseDes/CourseDes';
import MiddleSection from '../middleSection/MiddleSection';
import Trophies from '../trophies/Trophies';
import Coaches from '../coaches/Coaches';
import Slider from '../slider/Slider';
import ShowMarquee from '../marquee/ShowMarquee';
import { Modal, Button } from 'react-bootstrap';
import Register from '../../register/Register';

const Home = () => {
    const [modalShow, setModalShow] = useState(false);
 
    const onHide= () => {
        setModalShow(false)
    }
   const modalShowByLoad = ()=>{
    setModalShow(true)
   }

   useEffect(()=>{
    setTimeout(modalShowByLoad,3000)
   },[])


    return (
        <div>
            <Banner/>
            <MiddleSection/>
            <CourseDes/>
            <Trophies/>
            <Coaches/>
            <Slider/>
            <ShowMarquee/>



            {/* modal */}

            <Modal
       show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Register />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    );
};

export default Home;