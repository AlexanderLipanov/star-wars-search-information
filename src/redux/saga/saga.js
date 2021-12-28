import { put, all, takeLatest} from 'redux-saga/effects';

const baseURL = 'https://swapi.dev/api/';

async function getPeople() {
    const request = await fetch(`${baseURL}people/`);
    const data = await request.json();
    return data;
}

async function getFilms() {
    const request = await fetch(`${baseURL}films/`);
    const data = await request.json();
    return data;
}

async function getStarships() {
    const request = await fetch(`${baseURL}starships/`);
    const data = await request.json();
    return data;
}

async function getVehicles() {
    const request = await fetch(`${baseURL}vehicles/`);
    const data = await request.json();
    return data;
}

async function getSpecies() {
    const request = await fetch(`${baseURL}species/`);
    const data = await request.json();
    return data;
}

async function getPlanets() {
    const request = await fetch(`${baseURL}planets/`);
    const data = await request.json();
    return data;
}


function* fetchPeople() {
        const people = yield getPeople();
        const peopleData = people.results;

        yield put({type: 'SET_PEOPLES', peopleData: peopleData});
}

function* fetchFilms() {
    const films = yield getFilms();
    const filmsData = films.results;
    yield put({type: 'SET_FILMS', filmsData: filmsData});
}

function* fetchStarships() {
    const starships = yield getStarships();
    const starshipsData = starships.results;
    yield put({type: 'SET_STARSHIPS', starshipsData: starshipsData});
}

function* fetchVehicles() {
    const vehicles = yield getVehicles();
    const vehiclesData = vehicles.results;
    yield put({type: 'SET_VEHICLES', vehiclesData: vehiclesData});
}

function* fetchSpecies() {
    const species = yield getSpecies();
    const speciesData = species.results;
    yield put({type: 'SET_SPECIES', speciesData: speciesData});
}

function* fetchPlanets() {
    const planets = yield getPlanets();
    const planetsData = planets.results;
    yield put({type: 'SET_PLANETS', planetsData: planetsData});
}


function* peopleWatcher() {
    yield takeLatest('FETCH_PEOPLES',fetchPeople);

}

function* filmsWatcher() {
    yield takeLatest('FETCH_FILMS',fetchFilms);

}

function* starshipsWatcher() {
    yield takeLatest('FETCH_STARSHIPS',fetchStarships);

}

function* vehiclesWatcher() {
    yield takeLatest('FETCH_VEHICLES',fetchVehicles);

}

function* speciesWatcher() {
    yield takeLatest('FETCH_SPECIES',fetchSpecies);

}

function* planetsWatcher() {
    yield takeLatest('FETCH_PLANETS',fetchPlanets);

}



export default function* rootWatcher() {
    yield all([peopleWatcher(), filmsWatcher(), starshipsWatcher(), 
               vehiclesWatcher(), speciesWatcher(), planetsWatcher()]);
}