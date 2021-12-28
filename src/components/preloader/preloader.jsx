import React from "react";
import './preloader.css';
import preloader from '../../icons/icons8-preloader.gif';

const Preloader = () => {

    return (
        <div className="preloader">
            <img src={preloader} alt="" className="preloader-icon" />
        </div>
    );
}

export default Preloader;