import {
    GET_MESSAGE_START,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAILURE,
    SEND_MESSAGE_START,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
} from "./messagingActions";

const initialState = {
    isLoading: false,
    recievedMessages: [],
    sentMessages: [],
    error: null,
};

export const messagingReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
