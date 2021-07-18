import {
    GET_MESSAGES_START,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_FAILURE,
    GET_MESSAGE_START,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAILURE,
    SEND_MESSAGE_START,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE,
    EDIT_MESSAGE_START,
    EDIT_MESSAGE_SUCCESS,
    EDIT_MESSAGE_FAILURE,
    DELETE_MESSAGE_START,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_FAILURE,
} from "./messagingActions";

const initialState = {
    isLoading: false,
    isUpdating: false,
    messages: {},
    error: null,
};

export const messagingReducer = (state = initialState, action) => {
    switch (action.type) {
        // get all messages
        case GET_MESSAGES_START:
            return { ...state, isLoading: true };
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                messages: action.payload.messages,
            };
        case GET_MESSAGES_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        // get message by id
        case GET_MESSAGE_START:
            return { ...state, isUpdating: true };
        case GET_MESSAGE_SUCCESS:
            const updatedMessages = { ...state.messages };
            const updatedMessageId = action.payload.id;
            updatedMessages[updatedMessageId] = action.payload;

            return { ...state, isUpdating: false, messages: updatedMessages };
        case GET_MESSAGE_FAILURE:
            return { ...state, isUpdating: false, error: action.payload };

        // send message
        case SEND_MESSAGE_START:
            return { ...state, isUpdating: true };
        case SEND_MESSAGE_SUCCESS:
            const updatedMessages = { ...state.messages };
            const updatedMessageId = action.payload.id;
            updatedMessages[updatedMessageId] = action.payload;

            return { ...state, isUpdating: false, messages: updatedMessages };
        case SEND_MESSAGE_FAILURE:
            return { ...state, isUpdating: false, error: action.payload };

        // edit message
        case EDIT_MESSAGE_START:
            return { ...state, isUpdating: true };
        case EDIT_MESSAGE_SUCCESS:
            const updatedMessages = { ...state.messages };
            const updatedMessageId = action.payload.id;
            updatedMessages[updatedMessageId] = action.payload;

            return { ...state, isUpdating: false, messages: updatedMessages };
        case EDIT_MESSAGE_FAILURE:
            return { ...state, isUpdating: false, error: action.payload };

        // delete messag
        case DELETE_MESSAGE_START:
            return { ...state, isUpdating: true };
        case DELETE_MESSAGE_SUCCESS:
            const updatedMessages = { ...state.messages };
            delete updatedMessages[action.payload];

            return { ...state, isUpdating: false, messages: updatedMessages };
        case DELETE_MESSAGE_FAILURE:
            return { ...state, isUpdating: false, error: action.payload };

        // default
        default:
            return state;
    }
};
