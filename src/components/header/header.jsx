import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './header.css';

export default function Header() {

    const dispatch = useDispatch();
    const {
        menuReducer,
        searchReducer
    } = useSelector(state => state);

    let openMenuClass = '';
    if (menuReducer.menuIsOpen === true) {
        openMenuClass = '-open';
    }

    const openMenu = () => {
        dispatch({type: 'MENU_OPEN'});
    }
    
    const fetchPeoples = () => {
        dispatch({type: 'FETCH_PEOPLES'});
    }

    const fetchFilms = () => {
        dispatch({type: 'FETCH_FILMS'});
    }

    const fetchStarships = () => {
        dispatch({type: 'FETCH_STARSHIPS'});
    }

    const fetchVehicles = () => {
        dispatch({type: 'FETCH_VEHICLES'});
    }

    const fetchSpecies = () => {
        dispatch({type: 'FETCH_SPECIES'});
    }

    const fetchPlanets = () => {
        dispatch({type: 'FETCH_PLANETS'});
    }

    return (
        <div className="header">
            <div className="logo-container">
                <p className="logo">STAR WARS</p>
            </div>
            <div className="menu-container">
                { menuReducer.menuIsOpen === true 
                ? <div className='menu-list'>
                    { searchReducer.peoples.length === 0 
                    ? <button onClick={() => fetchPeoples()} className="button-menu-list">Peoples</button>
                    : <button className="button-menu-list">Peoples</button> 
                    }

                    { searchReducer.films.length === 0 
                    ? <button onClick={() => fetchFilms()} className="button-menu-list">Films</button>
                    : <button className="button-menu-list">Films</button> 
                    }

                    { searchReducer.starships.length === 0 
                    ? <button onClick={() => fetchStarships()} className="button-menu-list">Starships</button>
                    : <button className="button-menu-list">Starships</button> 
                    }

                    { searchReducer.vehicles.length === 0 
                    ? <button onClick={() => fetchVehicles()} className="button-menu-list">Vehicles</button>
                    : <button className="button-menu-list">Vehicles</button>
                    }

                    { searchReducer.species.length === 0 
                    ? <button onClick={() => fetchSpecies()} className="button-menu-list">Species</button>
                    : <button className="button-menu-list">Species</button> 
                    }

                    { searchReducer.planets.length === 0 
                    ? <button onClick={() => fetchPlanets()} className="button-menu-list">Planets</button>
                    : <button className="button-menu-list">Planets</button> 
                    }
                </div>
                : null 
                }
                <button onClick={openMenu} className={"button-menu" + openMenuClass}>menu</button>
            </div>
        </div>
    );
}