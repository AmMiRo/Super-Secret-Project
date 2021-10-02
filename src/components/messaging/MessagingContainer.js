import React, { useState } from "react";
import MessagingView from "./MessagingView";

function MessagingContainer() {
    // isCreatingMessage will be true when a user creates a new message or replies to a message in their message history
    const [isCreatingMessage, setIsCreatingMessage] = useState(false);

    return (
        <MessagingView
            isCreatingMessage={isCreatingMessage}
            setIsCreatingMessage={setIsCreatingMessage}
        />
    );
}

export default MessagingContainer;
