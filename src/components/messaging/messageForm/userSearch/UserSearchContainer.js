import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../../redux/user/userActions";
import { setRecipientId } from "../../../../redux/messaging/messagingActions";
import UserSearchView from "./UserSearchView";

function UserSearchContainer() {
    // gets users from redux and creates an array of the values
    const users = useSelector((state) => state.user.users);
    const usersArr = Object.values(users);

    const dispatch = useDispatch();

    // sets recipientId to selected recipient in redux
    function selectRecipient(recipientId) {
        dispatch(setRecipientId(recipientId));
    }

    // requests list of users once when components "mount"
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <UserSearchView users={usersArr} selectRecipient={selectRecipient} />
    );
}

export default UserSearchContainer;
