import axios from "axios";

// fetch all messages actions
export const GET_MESSAGES_START = "GET_MESSAGES_START";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILURE = "GET_MESSAGES_FAILURE";
export const fetchMessages = () => async (dispatch) => {
    dispatch({ type: GET_MESSAGES_START });

    try {
        response = await axios.get("url goes here", {
            userId: "userId goes here",
        });

        dispatch({ type: GET_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_MESSAGES_FAILURE, payload: error });
    }
};

// fetch message actions
export const GET_MESSAGE_START = "GET_MESSAGE_START";
export const GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS";
export const GET_MESSAGE_FAILURE = "GET_MESSAGE_FAILURE";
export const fetchMessages = () => async (dispatch) => {
    dispatch({ type: GET_MESSAGE_START });

    try {
        response = await axios.get("url goes here", {
            messageId: "messageId goes here",
        });

        dispatch({ type: GET_MESSAGE_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_MESSAGE_FAILURE, payload: error });
    }
};

// send message actions
export const SEND_MESSAGE_START = "SEND_MESSAGE_START";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";
export const sendMessage = () => async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_START });

    try {
        response = await axios.post("url goes here", {
            messageData: "message data goes here",
        });

        dispatch({ type: SEND_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SEND_MESSAGE_FAILURE, payload: error });
    }
};

// edit message actions
export const EDIT_MESSAGE_START = "EDIT_MESSAGE_START";
export const EDIT_MESSAGE_SUCCESS = "EDIT_MESSAGE_SUCCESS";
export const EDIT_MESSAGE_FAILURE = "EDIT_MESSAGE_FAILURE";
export const editMessage = () => async (dispatch) => {
    dispatch({ type: EDIT_MESSAGE_START });

    try {
        response = await axios.put("url goes here", {
            messageData: "message data goes here",
        });

        dispatch({ type: EDIT_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: EDIT_MESSAGE_FAILURE, payload: error });
    }
};

// delete message actions
export const DELETE_MESSAGE_START = "DELETE_MESSAGE_START";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAILURE = "DELETE_MESSAGE_FAILURE";
export const sendMessage = () => async (dispatch) => {
    dispatch({ type: DELETE_MESSAGE_START });

    try {
        response = await axios.delete("url goes here", {
            messageId: "messageId goes here",
        });

        dispatch({ type: DELETE_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELETE_MESSAGE_FAILURE, payload: error });
    }
};
