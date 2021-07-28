import React, { useState } from "react";
import MessagingView from "./MessagingView";

function MessagingContainer() {
    const [isCreatingMessage, setIsCreatingMessage] = useState(false);

    return (
        <MessagingView
            isCreatingMessage={isCreatingMessage}
            setCreatingMessage={setIsCreatingMessage}
        />
    );
}

export default MessagingContainer;
