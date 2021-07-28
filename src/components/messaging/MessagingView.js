import React from "react";
import MessagesSideBar from "./messagesSideBar";
import MessageForm from "./messageForm";

function MessagingView(props) {
    const { isCreatingMessage, setCreatingMessage } = props;

    return (
        <div>
            <MessagesSideBar />
            <div>
                {!isCreatingMessage && (
                    <button onClick={() => setCreatingMessage(true)}>
                        New Message
                    </button>
                )}
                {isCreatingMessage && (
                    <MessageForm setCreatingMessage={setCreatingMessage} />
                )}
            </div>
        </div>
    );
}

export default MessagingView;
