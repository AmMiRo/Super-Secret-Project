import React from "react";
import UserSearch from "./userSearch";

function MessageFormView(props) {
    const { setIsCreatingMessage, message, handleChanges, handleSubmit } =
        props;

    return (
        <div>
            {message.recipient === "" && <UserSearch />}
            <form>{/* Form goes here */}</form>
            <button onClick={() => setIsCreatingMessage(false)}>Cancel</button>
        </div>
    );
}

export default MessageFormView;
