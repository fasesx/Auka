import businessReducer from "./businessReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    business: businessReducer,
    firestore: firestoreReducer
});

export default rootReducer;