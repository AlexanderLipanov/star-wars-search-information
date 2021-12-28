import React from "react";
import './speciesCard.css';

const SpeciesCard = (props) => {

    return (
        <div className="species">
            <p className="species-characteristic">Name: {props.item.name} </p>
            <p className="species-characteristic">Average height: {props.item.average_height} </p>
            <p className="species-characteristic">Average lifespan: {props.item.average_lifespan} </p>
            <p className="species-characteristic">Classification: {props.item.classification} </p>
            <p className="species-characteristic">Designation: {props.item.designation} </p>
            <p className="species-characteristic">Eye colors: {props.item.eye_colors} </p>
            <p className="species-characteristic">Hair colors: {props.item.hair_colors} </p>
            <p className="species-characteristic">Language: {props.item.language} </p>
            <p className="species-characteristic">Skin colors: {props.item.skin_colors} </p>
            <p className="species-characteristic">Eye colors: {props.item.eye_colors} </p>
        </div>
    );
}

export default SpeciesCard;