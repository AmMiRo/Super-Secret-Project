import axios from "axios";

// fetch all messages actions
export const GET_MESSAGES_START = "GET_MESSAGES_START";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILURE = "GET_MESSAGES_FAILURE";
export const getMessages = (userId) => async (dispatch) => {
    dispatch({ type: GET_MESSAGES_START });

    try {
        response = await axios.get("url goes here", {
            userId: userId,
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
export const getMessage = (messageId) => async (dispatch) => {
    dispatch({ type: GET_MESSAGE_START });

    try {
        response = await axios.get("url goes here", {
            messageId: messageId,
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
export const sendMessage = (messageData) => async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_START });

    try {
        response = await axios.post("url goes here", messageData);

        dispatch({ type: SEND_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SEND_MESSAGE_FAILURE, payload: error });
    }
};

// edit message actions
export const EDIT_MESSAGE_START = "EDIT_MESSAGE_START";
export const EDIT_MESSAGE_SUCCESS = "EDIT_MESSAGE_SUCCESS";
export const EDIT_MESSAGE_FAILURE = "EDIT_MESSAGE_FAILURE";
export const editMessage = (messageData) => async (dispatch) => {
    dispatch({ type: EDIT_MESSAGE_START });

    try {
        response = await axios.put("url goes here", messageData);

        dispatch({ type: EDIT_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: EDIT_MESSAGE_FAILURE, payload: error });
    }
};

// delete message actions
export const DELETE_MESSAGE_START = "DELETE_MESSAGE_START";
export const DELETE_MESSAGE_SUCCESS = "DELETE_MESSAGE_SUCCESS";
export const DELETE_MESSAGE_FAILURE = "DELETE_MESSAGE_FAILURE";
export const sendMessage = (messageId) => async (dispatch) => {
    dispatch({ type: DELETE_MESSAGE_START });

    try {
        response = await axios.delete("url goes here", messageId);

        dispatch({ type: DELETE_MESSAGES_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELETE_MESSAGE_FAILURE, payload: error });
    }
};

// set recipient id
export const UPDATE_RECIPIENT_ID = "UPDATE_RECIPIENT_ID";
export const setRecipientId = (recipientId) => (dispatch) => {
    dispatch({ type: UPDATE_RECIPIENT_ID, payload: recipientId });
};

// upload photo
export const UPLOAD_PHOTO_START = "UPLOAD_PHOTO_START";
export const UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS";
export const UPLOAD_PHOTO_FAILURE = "UPLOAD_PHOTO_FAILURE";
export const uploadPhoto = (photo) => async (dispatch) => {
    dispatch({ type: UPLOAD_PHOTO_START });

    try {
        // logic to upload photo to bucket and send photo url as payload goes here
    } catch (error) {
        dispatch({ type: UPLOAD_PHOTO_FAILURE, payload: error });
    }
};
