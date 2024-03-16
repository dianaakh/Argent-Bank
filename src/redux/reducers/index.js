import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import editNameReducer from "./editName.reducer";

export default combineReducers({
    login: authReducer,
    editName: editNameReducer,
})