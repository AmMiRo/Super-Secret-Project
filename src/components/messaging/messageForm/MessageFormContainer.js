import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../../../redux/messaging/messagingActions";
import MessageFormView from "./MessageFormView";

function MessageFormContainer(props) {
    const { setIsCreatingMessage } = props;

    // get users, userId, recipientId from redux
    const userId = useSelector((state) => state.auth.userId);
    const messageRecipientId = useSelector(
        (state) => state.messaging.recipientId
    );

    // creates an initial blank message
    const blankMessage = {
        recipient: messageRecipientId,
        sender: userId,
        contentType: "text",
        content: "",
    };

    // message state
    const [message, setMessage] = useState(blankMessage);

    // handles changes to form
    function handleChanges(e) {
        const value = e.target.value;
        const name = e.target.name;

        setMessage({ ...message, [name]: value });
    }

    // returns true if message has a recipient and content
    function messageIsValid() {
        return message.recipient.length > 0 && message.content.length > 0;
    }

    const dispatch = useDispatch();

    // sends message if it has a recipient and content
    function handleSubmit(e) {
        preventDefault(e);
        if (messageIsValid) {
            dispatch(sendMessage(message));
        }
    }

    return (
        <MessageFormView
            setIsCreatingMessage={setIsCreatingMessage}
            message={message}
            setMessage={setMessage}
            blankMessage={blankMessage}
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
        />
    );
}

export default MessageFormContainer;
