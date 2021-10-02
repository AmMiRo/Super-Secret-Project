import axios from "axios";

// sign in user actions
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const signIn = (userInfo) => async (dispatch) => {
    dispatch({ type: SIGN_IN_START });

    try {
        response = await axios.post("url goes here", userInfo);

        dispatch({ type: SIGN_IN_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SIGN_IN_FAILURE, payload: error });
    }
};

// register user actions
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerUser = (userInfo) => async (dispatch) => {
    dispatch({ type: REGISTER_START });

    try {
        response = await axios.post("url goes here", userInfo);

        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error });
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
