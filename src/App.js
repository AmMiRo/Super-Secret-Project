import React from "react";
import { useSelector } from "react-redux";
import Auth from "./components/auth";
import Messaging from "./components/messaging";

function App() {
    const isAuthorized = useSelector((state) => state.auth.isAuthorized);

    return (
        <div className="App">
            {!isAuthorized && <Auth />}
            {isAuthorized && <Messaging />}
        </div>
    );
}

export default App;
