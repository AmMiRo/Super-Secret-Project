import React from "react";

// Message Card displays info for each message that has been sent to/by a user
function MessageCardView(props) {
    const { message, replyToMessage, userId } = props;

    return (
        <div>
            <p>To: {message.recipientId}</p>
            <p>From: {message.senderId}</p>
            {/* determines the appropriate html tag based on content type */}
            {message.contentType === "text" && <p>{message.content}</p>}
            {message.contentType === "image" && <img src={message.content} />}
            <button
                onClick={() =>
                    // ternary sets recipientId for new message to id that doesn't match userId
                    replyToMessage(
                        message.recipientId === userId
                            ? message.senderId
                            : message.recipientId
                    )
                }
            >
                Reply
            </button>
        </div>
    );
}

export default MessageCardView;
