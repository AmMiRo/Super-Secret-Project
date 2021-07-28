import React from "react";
import MessageCardView from "./MessageCardView";

function MessagesSideBarView() {
    const { messages, replyToMessage, userId } = props;

    return (
        <div>
            {/* will return and render a MessageCardView for each message in messages array */}
            {messages.map((message) => {
                return (
                    <MessageCardView
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
