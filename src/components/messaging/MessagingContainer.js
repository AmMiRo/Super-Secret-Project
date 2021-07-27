import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/user/userActions";
import { getMessages } from "../../redux/messaging/messagingActions";
import MessagingView from "./MessagingView";

function MessagingContainer() {
    const dispatch = useDispatch();

    const messages = useSelector((state) => state.messageing.messages);
    const users = useSelector((state) => state.user.users);
    const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getMessages(userId));
    }, []);

    return <MessagingView messages={messages} users={users} />;
}

export default MessagingContainer;
