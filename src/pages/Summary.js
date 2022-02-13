import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Summary() {
    let [users, setUsers] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("users");
        const initialValue = JSON.parse(saved);
        return initialValue || "[]";
    });

    return (
        <div>
            <table className="users">
                <tbody>
                    {users.map((element, index) =>
                        <tr className="entry" key={element.name}>
                            <td>{`${index + 1}.`}</td>
                            <td className="name">{`${element.name} `}</td>
                            <buttton onClick={removeUser(index)} >[x]</buttton>
                        </tr>
                    )}
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