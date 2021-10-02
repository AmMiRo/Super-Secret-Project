import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../../redux/user/userActions";
import { setRecipientId } from "../../../../redux/messaging/messagingActions";
import UserSearchView from "./UserSearchView";

function UserSearchContainer() {
    // string used to search and filter users
    const [filter, setFilter] = useState("");

    // gets users from redux and creates an array of the values
    const users = useSelector((state) => state.user.users);
    const usersArr = getFilteredUsersArr(users, filter);

    const dispatch = useDispatch();
    // sets recipientId to selected recipient in redux
    function selectRecipient(recipientId) {
        dispatch(setRecipientId(recipientId));
    }
    // requests list of users once when components "mount"
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    // handles changes to search filter
    function handleChanges(e) {
        const value = e.target.value;

        setFilter(value);
    }

    return (
        <UserSearchView
            users={usersArr}
            selectRecipient={selectRecipient}
            handleChanges={handleChanges}
            filter={filter}
        />
    );
}

// returns array of users filtered by filterString if filterString.length > 0
function getFilteredUsersArr(users, filterString) {
    const usersArr = Object.values(users);

    if (filterString.length === 0) {
        return usersArr;
    } else if (filterString.length > 0) {
        const filteredUserArr = usersArr.filter((user) =>
            user.userName.toLowerCase().includes(filterString)
        );
        return filteredUserArr;
    }
}

export default UserSearchContainer;
