import React from "react";
import UserCard from "./UserCard";

function UserSearchView(props) {
    const { users, selectRecipient, handleChanges, filter } = props;
    return (
        <div>
            {/* form input to enter search string */}
            <form>
                <label htmlFor="filter">search user:</label>
                <input
                    id="filter"
                    type="text"
                    placeholder=""
                    name="filter"
                    value={filter}
                    onChange={handleChanges}
                />
            </form>
            {/* list of UserCard for each user */}
            <div>
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        selectRecipient={selectRecipient}
                    />
                ))}
            </div>
        </div>
    );
}

export default UserSearchView;
