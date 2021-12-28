import React from "react";
import './planetsCard.css'

const PlanetsCard = (props) => {

    return (
        <div className="planets">
            <p className="planets-characteristic">Name: {props.item.name} </p>
            <p className="planets-characteristic">Climate: {props.item.climate} </p>
            <p className="planets-characteristic">Diameter: {props.item.diameter} </p>
            <p className="planets-characteristic">Gravity: {props.item.gravity} </p>
            <p className="planets-characteristic">Orbital period: {props.item.orbital_period} </p>
            <p className="planets-characteristic">Population: {props.item.population} </p>
            <p className="planets-characteristic">Rotation period: {props.item.rotation_period} </p>
            <p className="planets-characteristic">Surface water: {props.item.surface_water} </p>
            <p className="planets-characteristic">Terrain: {props.item.terrain} </p>
        </div>
    );
}

export default PlanetsCard;