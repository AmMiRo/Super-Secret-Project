import axios from "axios";

// authenticate user
export const AUTH_USER_START = "AUTH_USER_START";
export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";
export const AUTH_USER_FAILURE = "AUTH_USER_FAILURE";
export const authUser = () => async (dispatch) => {
    dispatch({ type: AUTH_USER_START });

    try {
        response = await axios.post("url goes here", {
            userInfo: "userInfo goes here",
        });

        dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: AUTH_USER_FAILURE, payload: error });
    }
};

// log out user
export const LOG_OUT_START = "LOG_OUT_START";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
export const authUser = () => async (dispatch) => {
    dispatch({ type: LOG_OUT_START });

    try {
        response = await axios.post("url goes here", {
            userId: "userId goes here",
        });

        dispatch({ type: LOG_OUT_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: LOG_OUT_FAILURE, payload: error });
    }
};

// add new user
export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";
export const authUser = () => async (dispatch) => {
    dispatch({ type: ADD_USER_START });

    try {
        response = await axios.post("url goes here", {
            userInfo: "userInfo goes here",
        });

        dispatch({ type: ADD_USER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ADD_USER_FAILURE, payload: error });
    }
};

// get all users
export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const authUser = () => async (dispatch) => {
    dispatch({ type: GET_USERS_START });

    try {
        response = await axios.post("url goes here");

        dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_USERS_FAILURE, payload: error });
    }
};

// edit user
export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";
export const authUser = () => async (dispatch) => {
    dispatch({ type: EDIT_USER_START });

    try {
        response = await axios.put("url goes here", {
            userInfo: "userInfo goes here",
        });

        dispatch({ type: EDIT_USER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: EDIT_USER_FAILURE, payload: error });
    }
};

// delete user
export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
export const authUser = () => async (dispatch) => {
    dispatch({ type: DELETE_USER_START });

    try {
        response = await axios.delete("url goes here", {
            userId: "userId goes here",
        });

        dispatch({ type: DELETE_USER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELETE_USER_FAILURE, payload: error });
    }
};
