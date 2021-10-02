import React from "react";

function SignUpView(props) {
    const { authTypes, setAuthType, userInfo, handleChanges, handleSubmit } =
        props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">enter username:</label>
                <input
                    id="username"
                    type="text"
                    placeholder=""
                    name="username"
                    value={userInfo.username}
                    onChange={handleChanges}
                />
                <label htmlFor="password">enter password:</label>
                <input
                    id="password"
                    type="text"
                    placeholder=""
                    name="password"
                    value={userInfo.password}
                    onChange={handleChanges}
                />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            <p>If you are already a user, click here to sign in:</p>
            <button onClick={() => setAuthType(authTypes.signIn)}></button>
        </div>
    );
}

export default SignUpView;
