
const SET_PEOPLES = 'SET_PEOPLES';
const SET_FILMS = 'SET_FILMS';
const SET_STARSHIPS = 'SET_STARSHIPS';
const SET_VEHICLES = 'SET_VEHICLES';
const SET_SPECIES = 'SET_SPECIES';
const SET_PLANETS = 'SET_PLANETS';
const CLOSE_PEOPLES = 'CLOSE_PEOPLES';
const CLOSE_FILMS = 'CLOSE_FILMS';
const CLOSE_STARSHIPS = 'CLOSE_STARSHIPS';
const CLOSE_VEHICLES = 'CLOSE_VEHICLES';
const CLOSE_SPECIES = 'CLOSE_SPECIES';
const CLOSE_PLANETS = 'CLOSE_PLANETS';

let initialState = {
    peoples: [],
    films: [],
    starships: [],
    vehicles: [],
    species: [],
    planets: [],
}

const searchReducer = (state = initialState, {type, peopleData, filmsData, 
                                                starshipsData, vehiclesData, 
                                                speciesData, planetsData}) => {

    switch(type) {

        case SET_PEOPLES:
        return {
            ...state,
            peoples: [...peopleData]
        };

        case SET_FILMS:
        return {
            ...state,
            films: [...filmsData]
        };

        case SET_STARSHIPS:
        return {
            ...state,
            starships: [...starshipsData]
        };

        case SET_VEHICLES:
        return {
            ...state,
            vehicles: [...vehiclesData]
        };

        case SET_SPECIES:
        return {
            ...state,
            species: [...speciesData]
        };

        case SET_PLANETS:
        return {
            ...state,
            planets: [...planetsData]
        };

        case CLOSE_PEOPLES:
        return {
                ...state,
                peoples: []
            };

        case CLOSE_FILMS:
        return {
                ...state,
                films: []
            };
        case CLOSE_STARSHIPS:
        return {
                ...state,
                starships: []
            };
        case CLOSE_VEHICLES:
        return {
                ...state,
                vehicles: []
            };
        case CLOSE_SPECIES:
        return {
                ...state,
                species: []
            };
        case CLOSE_PLANETS:
        return {
                ...state,
                planets: []
            };

    default: return state;
    }
}

export default searchReducer;