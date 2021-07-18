import axios from "axios";

// sign in user actions
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const signIn = () => async (dispatch) => {
    dispatch({ type: SIGN_IN_START });

    try {
        response = await axios.post("url goes here", {
            user: "user info goes here",
        });

        dispatch({ type: SIGN_IN_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SIGN_IN_FAILURE, payload: error });
    }
};

// register user actions
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const registerUser = () => async (dispatch) => {
    dispatch({ type: REGISTER_START });

    try {
        response = await axios.post("url goes here", {
            user: "user info goes here",
        });

        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
};
