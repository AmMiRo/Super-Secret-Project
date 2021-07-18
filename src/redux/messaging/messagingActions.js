import axios from "axios";

// fetch messages actions
export const GET_MESSAGE_START = "GET_MESSAGE_START";
export const GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS";
export const GET_MESSAGE_FAILURE = "GET_MESSAGE_FAILURE";
export const fetchMessages = () => async (dispatch) => {
    dispatch({ type: GET_MESSAGE_START });

    try {
        response = await axios.get("url goes here", {
            user: "user info goes here",
        });

        dispatch({ type: GET_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_MESSAGE_FAILURE, payload: error });
    }
};

// send message actions
export const SEND_MESSAGE_START = "SEND_MESSAGE_START";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";
export const fetchMessages = () => async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_START });

    try {
        response = await axios.get("url goes here", {
            messageData: "message data goes here",
        });

        dispatch({ type: SEND_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SEND_MESSAGE_FAILURE, payload: error });
    }
};
