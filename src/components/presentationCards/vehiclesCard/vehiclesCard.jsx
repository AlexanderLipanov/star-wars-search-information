import React from "react";
import './vehiclesCard.css';

const VehiclesCard = (props) => {

    return (
        <div className="vehicles">
            <div className="vehicles-name-container">
                <p className="vehicles-name-container-text">Name: {props.item.name} </p>
                <p className="vehicles-name-container-text">Model: {props.item.model} </p>
                <p className="vehicles-name-container-text">Class: {props.item.vehicle_class} </p>
            </div>
            <p className="vehicles-general">Manufacturer: {props.item.manufacturer} </p>
            <p className="vehicles-general">Cost in credits: {props.item.cost_in_credits} </p>
            <p className="vehicles-general">Crew: {props.item.crew} </p>
            <div className="vehicles-characteristics">
                <p className="vehicles-characteristics-title">Characteristics</p>
                <p className="vehicles-characteristic">Length: {props.item.length} </p>
                <p className="vehicles-characteristic">Cargo capacity: {props.item.cargo_capacity} </p>
                <p className="vehicles-characteristic">Passengers: {props.item.passengers} </p>
                <p className="vehicles-characteristic">Hyperdrive rating: {props.item.hyperdrive_rating} </p>
                <p className="vehicles-characteristic">Max atmpsphering speed: {props.item.max_atmosphering_speed} </p>
            </div>
        </div>
    );
}

export default VehiclesCard;