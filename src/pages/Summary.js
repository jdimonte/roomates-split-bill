import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Summary() {
    let [users, setUsers] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("users");
        const initialValue = JSON.parse(saved);
        return initialValue || "[]";
    });

    let [costs, setCosts] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("costs");
        const initialValue = JSON.parse(saved);
        return initialValue || [0] * users.length;
    });

    const [user, setUser] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || "a User";
    });

    let [items, setItem] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || "[]";
    });

    function removeUser(index) {
        console.log("Removing User")
        users = JSON.parse(localStorage.getItem("users") || "[]");
        localStorage.removeItem(user);
        console.log(index)
    }

    function calculateCosts() {
        users = JSON.parse(localStorage.getItem("users") || "[]");
        console.log(users)
        items = JSON.parse(localStorage.getItem("items") || "[]");
        console.log(items)
        costs = []
        //go through every user
        for (let i = 0; i < users.length; i++) {
            let totalCost = 0
            //go through the user's cart
            for (let j = 0; j < users[i]["selectedItems"].length; j++) {
                //see how many others are paying for this item
                let count = 1
                for (let k = 0; k < users.length; k++) {
                    if (k != i && users[k]["selectedItems"].indexOf(users[i]["selectedItems"][j]) !== -1) {
                        count++;
                    }
                }
                totalCost += (parseFloat(items[users[i]["selectedItems"][j]]["cost"])) / count
            }
            console.log(totalCost)
            costs.push(totalCost)
        }
        console.log(costs);
        localStorage.setItem("costs", JSON.stringify(costs))
        setCosts(costs)
    }


    return (
        <div>
            <button onClick={calculateCosts}>
                Calculate Costs!
            </button>
            <table className="users">
                <tbody>
                    {
                        users.map((element, index) =>
                            <tr className="entry" key={element.name}>
                                <td>{`${index + 1}.`}</td>
                                <td className="name">{`${element.name} `}</td>
                                <td className="totalCost">${costs[index]}</td>
                            </tr>
                        )
                    }
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