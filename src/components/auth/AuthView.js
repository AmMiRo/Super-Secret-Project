import React from "react";
import LogInView from "./LogInView";
import SignUpView from "./SignUpView";

function AuthView(props) {
    const {
        authTypes,
        authType,
        setAuthType,
        userInfo,
        handleChanges,
        handleSubmit,
    } = props;

    // returns appropriate form based on auth type
    if (authType === authTypes.signIn) {
        return (
            <LogInView
                authTypes={authTypes}
                setAuthType={setAuthType}
                userInfo={userInfo}
                handleChanges={handleChanges}
                handleSubmit={handleSubmit}
            />
        );
    } else if (authType === authTypes.signUp) {
        return (
            <SignUpView
                authTypes={authTypes}
                setAuthType={setAuthType}
                userInfo={userInfo}
                handleChanges={handleChanges}
                handleSubmit={handleSubmit}
            />
        );
    }
}

export default AuthView;
