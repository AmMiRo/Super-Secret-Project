import React from "react";
import UserSearch from "./userSearch";

function MessageFormView(props) {
    const {
        setIsCreatingMessage,
        message,
        setMessage,
        blankMessage,
        handleChanges,
        handleSubmit,
    } = props;

    return (
        <div>
            {/* renders UserSearch if message has no recipient */}
            {message.recipient === "" && <UserSearch />}
            {/* message form */}
            <form>{/* Form goes here */}</form>
            {/* button canceles current message */}
            <button
                onClick={() => {
                    setMessage(blankMessage);
                    setIsCreatingMessage(false);
                }}
            >
                Cancel
            </button>
        </div>
    );
}

export default MessageFormView;
