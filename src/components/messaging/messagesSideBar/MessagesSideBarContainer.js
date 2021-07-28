import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from "../../redux/messaging/messagingActions";

function MessagesSideBarContainer() {
    const dispatch = useDispatch();

    const messages = useSelector((state) => state.messageing.messages);
    const userId = useSelector((state) => state.auth.userId);

    useEffect(() => {
        dispatch(getMessages(userId));
    }, []);

    return <div></div>;
}

export default MessagesSideBarContainer;
