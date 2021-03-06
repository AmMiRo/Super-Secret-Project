import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn, registerUser } from "../../redux/auth/authActions";
import AuthView from "./AuthView";

function AuthContainer() {
    // creates auth types
    const authTypes = {
        signIn: "signIn",
        signUp: "signUp",
    };

    // state for auth type and user info
    const [authType, setAuthType] = useState(authTypes.signIn);
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });

    // handles changes to form
    function handleChanges(e) {
        const value = e.target.value;
        const name = e.target.name;

        setUserInfo({ ...userInfo, [name]: value });
    }

    const dispatch = useDispatch();
    // registers or signs in user
    function handleSubmit(e) {
        preventDefault(e);
        if (userInfo.username.length > 0 && userInfo.password.length > 0) {
            if (authType === authTypes.signIn) {
                dispatch(signIn(userInfo));
            } else if (authType === authTypes.signUp) {
                dispatch(registerUser(userInfo));
            }
        }
    }

    return (
        <AuthView
            authTypes={authTypes}
            authType={authType}
            setAuthType={setAuthType}
            userInfo={userInfo}
            handleChanges={handleChanges}
            handleSubmit={handleSubmit}
        />
    );
}

export default AuthContainer;
