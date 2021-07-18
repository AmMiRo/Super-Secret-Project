import {
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from "./authActions";

const initialState = {
    userId: null,
    username: null,
    isAuthorizing: false,
    error: null,
};

export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        // user sign in
        case SIGN_IN_START:
            return { ...state, isAuthorizing: true };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isAuthorizing: false,
                userId: action.payload.userId,
                username: action.payload.username,
            };
        case SIGN_IN_FAILURE:
            return { ...state, isAuthorizing: false, error: action.payload };

        // register user
        case REGISTER_START:
            return { ...state, isAuthorizing: true };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthorizing: false,
                userId: action.payload.userId,
                username: action.payload.username,
            };
        case REGISTER_FAILURE:
            return { ...state, isAuthorizing: false, error: action.payload };

        // default
        default:
            return state;
    }
};
