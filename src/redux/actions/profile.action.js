import axios from "axios";

export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

// Action de récupération du profil utilisateur

export const fetchUserProfile = () => {
    return async (dispatch) => {
        let token = localStorage.getItem("token");

        if (!token) {
            token = sessionStorage.getItem("token");
        }
        if (!token) {
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/profile",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                const userProfile = response.data.body;
                dispatch({
                    type: USER_PROFILE,
                    payload: userProfile
                });
            }
        } catch (error) {
            console.error(error);
        }
    }
}


// Action pour mettre à jour le nom d'utilisateur

export const updateUserName = (userName) => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
  
      if (!token) {
        token = sessionStorage.getItem("token");
      }
  
      if (!token) {
        return;
      }
  
      try {
        const response = await axios.put(
          "http://localhost:3001/api/v1/user/profile",
          { userName },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          dispatch({
            type: UPDATE_USER_NAME,
            payload: userName,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
  };