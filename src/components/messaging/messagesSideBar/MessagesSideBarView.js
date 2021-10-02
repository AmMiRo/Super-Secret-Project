import React from "react";
import MessageCardView from "./MessageCardView";

function MessagesSideBarView() {
    const { messages, replyToMessage, userId } = props;

    return (
        <div>
            {/* renders a MessageCardView for each message */}
            {messages.map((message) => {
                return (
                    <MessageCardView
                        key={message.id}
                        message={message}
                        replyToMessage={replyToMessage}
                        userId={userId}
                    />
                );
            })}
        </div>
    );
}

export default MessagesSideBarView;
