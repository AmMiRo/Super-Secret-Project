import React from "react";

function UserCard(props) {
    const { user, selectRecipient } = props;
    return (
        <div>
            {/* text for userName */}
            <p>{user.userName}</p>
            {/* button selects user as message recipient*/}
            <button onClick={selectRecipient(user.id)}>Select Recipient</button>
        </div>
    );
}

export default UserCard;
