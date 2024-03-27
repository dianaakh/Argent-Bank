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
            return {
                ...state,
                userProfile: { ...state.userProfile, userName: action.payload }
            };

        default:
            return state;
    }
}

export default profileReducer;