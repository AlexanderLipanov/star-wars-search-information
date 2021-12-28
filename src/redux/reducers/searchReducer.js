
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
    isLoading: false,
}

const searchReducer = (state = initialState, {type, peopleData, filmsData, 
                                                starshipsData, vehiclesData, 
                                                speciesData, planetsData}) => {

    switch(type) {

        case SET_PEOPLES:
        return {
            ...state,
            peoples: [...peopleData],
            isLoading: false,
        };

        case 'FETCH_PEOPLES':
        return {
            ...state,
            isLoading: true
        }

        case SET_FILMS:
        return {
            ...state,
            films: [...filmsData],
            isLoading: false,
        };

        case 'FETCH_FILMS':
        return {
            ...state,
            isLoading: true
        }

        case SET_STARSHIPS:
        return {
            ...state,
            starships: [...starshipsData],
            isLoading: false,
        };

        case 'FETCH_STARSHIPS':
        return {
            ...state,
            isLoading: true
        }

        case SET_VEHICLES:
        return {
            ...state,
            vehicles: [...vehiclesData],
            isLoading: false,
        };

        case 'FETCH_VEHICLES':
        return {
            ...state,
            isLoading: true
        }

        case SET_SPECIES:
        return {
            ...state,
            species: [...speciesData],
            isLoading: false,
        };

        case 'FETCH_SPECIES':
        return {
            ...state,
            isLoading: true
        }

        case SET_PLANETS:
        return {
            ...state,
            planets: [...planetsData],
            isLoading: false,
        };

        case 'FETCH_PLANETS':
        return {
            ...state,
            isLoading: true
        }

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