import { combineReducers } from "redux";
import searchReducer from './reducers/searchReducer';
import menuReducer from './reducers/menuReducer';


const rootReducer = combineReducers({searchReducer, menuReducer});

export default rootReducer; 