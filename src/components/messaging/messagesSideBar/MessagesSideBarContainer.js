import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getMessages,
    setRecipientId,
} from "../../../redux/messaging/messagingActions";
import MessagesSideBarView from "./MessagesSideBarView";

function MessagesSideBarContainer(props) {
    const { setIsCreatingMessage } = props;

    // selects messages and userId from redux
    const messages = useSelector((state) => state.messageing.messages);
    const userId = useSelector((state) => state.auth.userId);

    // creates an array of the values in messages
    const messagesArr = Object.values(messages);

    const dispatch = useDispatch();

    // reply function sets isCreatingMessage to true to render message form and sets the recipientId for that message
    function replyToMessage(recipientId) {
        setIsCreatingMessage(true);
        setRecipientId(recipientId);
    }

    // calls the getMessages function once when components "mount"
    useEffect(() => {
        dispatch(getMessages(userId));
    }, []);

    return (
        <MessagesSideBarView
            messages={messagesArr}
            replyToMessage={replyToMessage}
            userId={userId}
        />
    );
}

export default MessagesSideBarContainer;
