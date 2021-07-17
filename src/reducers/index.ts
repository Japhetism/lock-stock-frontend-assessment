import { combineReducers } from "redux";
import universityReducer from './universityReducers';
import courseReducer from './courseReducers';

const rootReducers = combineReducers({
    universityData: universityReducer,
    courseData: courseReducer
});

export default rootReducers;