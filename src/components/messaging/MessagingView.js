import React from "react";
import MessagesSideBar from "./messagesSideBar";
import MessageForm from "./messageForm";

function MessagingView(props) {
    const { isCreatingMessage, setIsCreatingMessage } = props;

    return (
        <div>
            <MessagesSideBar setIsCreatingMessage={setIsCreatingMessage} />
            <div>
                {/* will display a button to create a new message or a message form */}
                {!isCreatingMessage && (
                    <button onClick={() => setIsCreatingMessage(true)}>
                        New Message
                    </button>
                )}
                {isCreatingMessage && (
                    <MessageForm setIsCreatingMessage={setIsCreatingMessage} />
                )}
            </div>
        </div>
    );
}

export default MessagingView;
