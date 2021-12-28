import React from "react";
import './filmsCard.css';

const FilmsCard = (props) => {

    return (
        <div className="films-card">
            <p className="films-title"> {props.item.title} </p>
            <p className="films-release-date"> {props.item.release_date} </p>
            <p className="director"> {props.item.director} </p>
        </div>
    );
}

export default FilmsCard;