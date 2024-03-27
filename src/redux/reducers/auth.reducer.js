import { LOGOUT_USER, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "../actions/auth.action";

const initialState = {
    loginError: null,
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          loginError: null,
          token: action.payload.token,
        };
      case USER_LOGIN_FAILURE:
        return {
          ...state,
          loginError: action.payload,
          token: null,
        };
      case LOGOUT_USER:
        return {
          ...state,
          loginError: null,
          token: null,
        };

        default:
            return state;
    }
}

export default authReducer;