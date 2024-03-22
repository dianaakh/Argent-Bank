import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import profileReducer from "./profile.reducer";

export default combineReducers({
    auth: authReducer,
    profile: profileReducer,
})