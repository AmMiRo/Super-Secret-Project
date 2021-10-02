import {
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOG_OUT_START,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
} from "./authActions";

const initialState = {
    userId: null,
    username: null,
    isAuthorizing: false,
    isAuthorized: false,
    error: null,
};

export const authReducer = (state = initialState, action) => {
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
                isAuthorized: true,
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
                isAuthorized: true,
            };
        case REGISTER_FAILURE:
            return { ...state, isAuthorizing: false, error: action.payload };

        case LOG_OUT_START:
            return state;
        case LOG_OUT_SUCCESS:
            return { ...initialState };
        case LOG_OUT_FAILURE:
            return { ...state, error: action.payload };

        // default
        default:
            return state;
    }
};
