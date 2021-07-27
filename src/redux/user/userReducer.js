import {
    DELETE_MESSAGE_FAILURE,
    GET_MESSAGE_FAILURE,
} from "../messaging/messagingActions";
import {
    AUTH_USER_START,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAILURE,
    ADD_USER_START,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    EDIT_USER_START,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from "./userActions";

const initialState = {
    isLoading: false,
    user: {},
    users: {},
    error: null,
};

export const userSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        // auth user
        case AUTH_USER_START:
            return { ...state, isLoading: true };
        case AUTH_USER_SUCCESS:
            return { ...state, isLoading: false, user: action.payload };
        case AUTH_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        // add user
        case ADD_USER_START:
            return { ...state, isLoading: true };
        case ADD_USER_SUCCESS:
            return { ...state, isLoading: false, user: action.payload };
        case ADD_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        // get all users
        case GET_USERS_START:
            return { ...state, isLoading: true };
        case GET_USERS_SUCCESS:
            return { ...state, isLoading: false, users: action.payload };
        case GET_USERS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        // edit user
        case EDIT_USER_START:
            return { ...state, isLoading: true };
        case EDIT_USER_SUCCESS:
            return { ...state, isLoading: false, user: action.payload };
        case EDIT_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        // delete user
        case DELETE_USER_START:
            return { ...state, isLoading: true };
        case DELETE_USER_SUCCESS:
            return { ...state, isLoading: false, user: {} };
        case DELETE_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        // default
        default:
            return state;
    }
};
