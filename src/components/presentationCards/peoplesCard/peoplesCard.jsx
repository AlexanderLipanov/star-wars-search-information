import React from 'react';
import './peoplesCard.css';

const PeoplesCard = (props) => {

    return (
        <div className="peoples-card">
            <p className="name"> {props.item.name} </p>
            <div className="characteristics" >
                <div className="characterisc-container">
                    <p className="characteristic-name">Birth year:</p>
                    <p className="characteristic-value"> {props.item.birth_year} </p>
                </div>
                <div className="characterisc-container">
                    <p className="characteristic-name">Eye color:</p>
                    <p className="characteristic-value"> {props.item.eye_color} </p>
                </div>
                <div className="characterisc-container">
                    <p className="characteristic-name">Gender:</p>
                    <p className="characteristic-value"> {props.item.gender} </p>
                </div>
                <div className="characterisc-container">
                    <p className="characteristic-name">Hair color:</p>
                    <p className="characteristic-value"> {props.item.hair_color} </p>
                </div>
                <div className="characterisc-container">
                    <p className="characteristic-name">Height:</p>
                    <p className="characteristic-value"> {props.item.height} </p>
                </div>
                <div className="characterisc-container">
                    <p className="characteristic-name">Mass:</p>
                    <p className="characteristic-value"> {props.item.mass} </p>
                </div>
                <div className="characterisc-container">
                    <p className="characteristic-name">Skin color:</p>
                    <p className="characteristic-value"> {props.item.skin_color} </p>
                </div>
            </div>
        </div>
    );
}

export default PeoplesCard;