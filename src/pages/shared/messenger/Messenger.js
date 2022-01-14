import React from 'react';
import './Messenger.css'
import { FaWhatsapp } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

const Messenger = () => {
    return (
        <div className="message">
            <IconContext.Provider value={{ color: "#06FF00" ,size:'3.5rem', className: "bg-white shadow-lg p-2 rounded-pill" }}>
               <FaWhatsapp/>
            </IconContext.Provider>
        </div>
    );
};

export default Messenger;