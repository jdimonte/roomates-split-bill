import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Users() {
    let [users, setUsers] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("users");
        const initialValue = JSON.parse(saved || "[]");
        return initialValue;
    });

    let [items, setItem] = useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved || "[]");
        return initialValue;
    });

    let [selectedUser, setSelectedUser] = useState(() => {
        const saved = localStorage.getItem("selectedUser");
        const initialValue = JSON.parse(saved || "0");
        return initialValue;
    });

    const [name, setName] = useState("")

    let [selectedItems, setSelectedItems] = useState(() => {
        const saved = localStorage.getItem("selectedItems");
        const initialValue = JSON.parse(saved || "[]");
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);

    function addUser() {
        console.log("Submit button clicked!");
        users = JSON.parse(localStorage.getItem("users") || "[]");
        selectedItems = []
        users.push({ name, selectedItems })
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("setSelectedUser", "0");
        setSelectedUser(0);
    }

    function removeUser(index) {
        console.log(index);
        /*
        get array
        remove at index
        update local storage
        */
    }

    function selectUser(index) {
        setSelectedUser(index);
        localStorage.setItem("selectedUser", JSON.stringify(index));
    }

    function selectItem(index) {
        users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.length !== 0) {
            let selectedItems = users[selectedUser]["selectedItems"];
            if (selectedItems.indexOf(index) !== -1) {
                let location = users[selectedUser]["selectedItems"].indexOf(index);
                users[selectedUser]["selectedItems"].splice(location, 1);
            }
            else {
                users[selectedUser]["selectedItems"].push(index);
            }
            localStorage.setItem("users", JSON.stringify(users));
        }
        users = JSON.parse(localStorage.getItem("users") || "[]");
        setUsers(users);
    }


    function clearUsers() {
        console.log(users)
        users = [];
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("selectedItems", JSON.stringify(users));
    }

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
                <input type="submit" value="Add User" onClick={addUser} />
            </form>
            <br></br>
            <table className="users">
                <tbody>
                    {
                        users.map((element, index) =>
                            <tr className="entry" key={element.name}>
                                <td>{`${index + 1}.`}</td>
                                <td className="name">{`${element.name} `}</td>
                                {(selectedUser === index) ? <button className="Selected" onClick={() => selectUser(index)} >User is Selected</button> : <button className="NotSelected" onClick={() => selectUser(index)} >Select User</button>}
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <button variant="outlined" onClick={() => clearUsers()}>
                Clear Users
            </button>
            {users.length === 0 ? <p>Please Add Users</p> : <p> Select Items for User #{selectedUser + 1}</p>}
            <table className="items">
                <tbody>
                    {items.map((element, index) =>
                        <tr className="entry" key={element.name}>
                            <td>{`${index + 1}.`}</td>
                            <td className="name">{`${element.name} `}</td>
                            <td className="cost">${`${element.cost} `}</td>
                            {users.length !== 0 ? (users[selectedUser]["selectedItems"].indexOf(index) === -1) ? <button className="NotSelected" onClick={() => selectItem(index)} >Select Item</button> : <button className="Selected" onClick={() => selectItem(index)} >Item is Selected</button> : <td></td>}
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

export default Users;