import React from "react";
import { useSelector } from "react-redux";
import './dashboard.css';
import PeoplesCard from "../presentationCards/peoplesCard/peoplesCard";
import FilmsCard from "../presentationCards/filmsCard/filmsCard";
import StarshipsCard from "../presentationCards/starshipsCard/starshipsCard";
import VehiclesCard from "../presentationCards/vehiclesCard/vehiclesCard";
import SpeciesCard from "../presentationCards/speciesCard/speciesCard";
import PlanetsCard from "../presentationCards/planetsCard/planetsCard";
import DeleteIcon from '../../icons/icons8-delete.svg';
import { useDispatch } from "react-redux";
import Preloader from "../preloader/preloader";

export default function Dashboard() {

    const dispatch = useDispatch();
    const {searchReducer} = useSelector(state => state);
    console.log(searchReducer);

    let peoplesCards = searchReducer.peoples.map( (item, index) => <PeoplesCard key={index} item={item} /> );
    let filmsCards = searchReducer.films.map ( (item, index) => <FilmsCard key={index} item={item} /> );
    let starshipsCards = searchReducer.starships.map ( (item, index) => <StarshipsCard key={index} item={item} /> );
    let vehiclesCards = searchReducer.vehicles.map( (item, index) => <VehiclesCard key={index} item={item} /> );
    let speciesCards = searchReducer.species.map( (item, index) => <SpeciesCard key={index} item={item} /> );
    let planetsCards = searchReducer.planets.map( (item, index) => <PlanetsCard key={index} item={item} /> );

    console.log(searchReducer.peoples);

    return (
        <div className="dashboard">
            { searchReducer.isLoading === false
            ? null
            : <Preloader />
            }
            { searchReducer.peoples.length !== 0
            ? <div className="dashboard-section">
                <p className="section-name">peoples <button onClick={() => dispatch({type: 'CLOSE_PEOPLES'})} className="close-section"><img src={DeleteIcon} alt="" className="delete-icon" /></button></p>
                {peoplesCards}
              </div>
            : null
            }
            { searchReducer.films.length !== 0
            ? <div className="dashboard-section">
                <p className="section-name">films <button onClick={() => dispatch({type: 'CLOSE_FILMS'})} className="close-section"><img src={DeleteIcon} alt="" className="delete-icon" /></button></p>
                {filmsCards}
             </div>
            : null
            }
            { searchReducer.starships.length !== 0
            ? <div className="dashboard-section">
                <p className="section-name">starships <button onClick={() => dispatch({type: 'CLOSE_STARSHIPS'})} className="close-section"><img src={DeleteIcon} alt="" className="delete-icon" /></button></p>
                {starshipsCards}
             </div>
            : null
            }
            { searchReducer.vehicles.length !== 0
            ? <div className="dashboard-section">
                <p className="section-name">vehicles <button onClick={() => dispatch({type: 'CLOSE_VEHICLES'})} className="close-section"><img src={DeleteIcon} alt="" className="delete-icon" /></button></p>
                {vehiclesCards}
             </div>
             :null
            }
            { searchReducer.species.length !== 0
            ? <div className="dashboard-section">
                <p className="section-name">species <button onClick={() => dispatch({type: 'CLOSE_SPECIES'})} className="close-section"><img src={DeleteIcon} alt="" className="delete-icon" /></button></p>
                {speciesCards}
             </div>
            : null
            }
            { searchReducer.planets.length !== 0
            ? <div className="dashboard-section">
                <p className="section-name">planets <button onClick={() => dispatch({type: 'CLOSE_PLANETS'})} className="close-section"><img src={DeleteIcon} alt="" className="delete-icon" /></button></p>
                {planetsCards}
             </div>
            : null
            }
        </div>
    );
}