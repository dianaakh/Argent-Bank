import axios from "axios";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";


// Action pour gérer la connexion réussie de l'utilisateur
export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
  payload: { token },
});

// Action pour gérer l'échec de connexion de l'utilisateur
export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

// Action pour déconnecter l'utilisateur
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
};

//////// Action pour gérer la connexion de l'utilisateur

export const loginUser = (email, password, navigate, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        const token = response.data.body.token;

        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/user-account");
        dispatch(userLoginSuccess(token));
      }


    } catch (error) {

      if (error.response.status === 400 || error.response.status === 500) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");

        if (error.response.status === 400) {
          dispatch(userLoginFailure(error.response.data.message));
        } else {
          dispatch(userLoginFailure("Erreur interne du serveur."));
        }
        navigate("/login");
      }
    }
  };
};