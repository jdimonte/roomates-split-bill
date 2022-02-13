import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Summary() {
    let [users, setUsers] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("users");
        const initialValue = JSON.parse(saved);
        return initialValue || "[]";
    });

    function removeUser(index) {
        console.log("Removing User")
        user = JSON.parse(localStorage.getItem("users") || "[]");
        localStorage.removeItem(user);
        console.log(index)
    }

    const [user, setUser] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || "a User";
    });

    return (
        <div>
            <table className="users">
                <tbody>
                    {/* {users.map((element, index) =>
                        <tr className="entry" key={element.name}>
                            <td>{`${index + 1}.`}</td>
                            <td className="name">{`${element.name} `}</td>
                            <buttton onClick={removeUser(index)} >[x]</buttton>
                        </tr>
                    )} */}
                </tbody>
            </table>
            <Link to="/">
                <button variant="outlined">
                    Done
                </button>
            </Link>
        </div>
    );
}

export default Summary;