import { LOGOUT_USER, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "../actions/auth.action";

const initialState = {
    loginError: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          loginError: null,
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          loginError: action.payload,
        };
      case LOGOUT_USER:
        return {
          ...state,
          loginError: null,
        };

        default:
            return state;
    }
}

export default authReducer;