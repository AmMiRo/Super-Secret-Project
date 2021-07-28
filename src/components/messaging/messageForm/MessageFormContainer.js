import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/user/userActions";

function MessageFormContainer() {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.user.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return <div></div>;
}

export default MessageFormContainer;
