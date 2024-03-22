import { UPDATE_USER_NAME, USER_PROFILE, } from "../actions/profile.action";

const initialState = {
    userProfile: {
        firstName: '',
        lastName: '',
        userName: ''
    },
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload,
            };

        case UPDATE_USER_NAME:
            const newProfile = { ...state.userProfile, userName: action.payload };
            return {
                ...state,
                userProfile: newProfile,
            };

        default:
            return state;
    }
}

export default profileReducer;