import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Users() {
    let [users, setUsers] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("users");
        const initialValue = JSON.parse(saved);
        return initialValue || "[]";
    });

    let [items, setItem] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || "[]";
    });

    const [name, setName] = useState("")

    const [user, setUser] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || "a User";
    });

    function handleClick() {
        console.log("Submit button clicked!");
        users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push({ name })
        localStorage.setItem("users", JSON.stringify(users));
    }

    function removeUser(index) {
        console.log("Removing User")
        user = JSON.parse(localStorage.getItem("users") || "[]");
        localStorage.removeItem(user);
        console.log(index)
    }

    function clearUsers() {
        //users = []
        //localStorage.setItem("users", JSON.stringify(users));
    }

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);

    return (
        <div>
            <p>Add Users</p>
            <form >
                <label>
                    Name:
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        aria-label="fullname" />
                </label>
                <input type="submit" value="Add User" onClick={handleClick} />
            </form>
            <br></br>
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
            <button variant="outlined" onClick={clearUsers()}>
                Clear Users
            </button>
            <p> Select Items for {user}</p>
            <table className="items">
                <tbody>
                    {items.map((element, index) =>
                        <tr className="entry" key={element.name}>
                            <td>{`${index + 1}.`}</td>
                            <td className="name">{`${element.name} `}</td>
                            <td className="cost">{`${element.cost} `}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Link to="/summary">
                <button variant="outlined">
                    Costs
                </button>
            </Link>
        </div>
    );
}
/*

Notes

*/

export default Users;