import React from "react";
import './starshipsCard.css';

const StarshipsCard = (props) => {

    return (
        <div className="starships">
            <div className="starships-name-container">
                <p className="starships-name-container-text">Name: {props.item.name} </p>
                <p className="starships-name-container-text">Model: {props.item.model} </p>
                <p className="starships-name-container-text">Class: {props.item.starship_class} </p>
            </div>
            <p className="starships-general">Manufacturer: {props.item.manufacturer} </p>
            <p className="starships-general">Cost in credits: {props.item.cost_in_credits} </p>
            <p className="starships-general">Crew: {props.item.crew} </p>
            <div className="starships-characteristics">
                <p className="characteristics-title">Characteristics</p>
                <p className="starships-characteristic">Length: {props.item.length} </p>
                <p className="starships-characteristic">Cargo capacity: {props.item.cargo_capacity} </p>
                <p className="starships-characteristic">Passengers: {props.item.passengers} </p>
                <p className="starships-characteristic">Hyperdrive rating: {props.item.hyperdrive_rating} </p>
                <p className="starships-characteristic">Max atmpsphering speed: {props.item.max_atmosphering_speed} </p>
            </div>
        </div>
    );
}

export default StarshipsCard;