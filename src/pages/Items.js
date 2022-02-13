import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Items = () => {
    let [items, setItem] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || "[]";
    });

    const [name, setName] = useState("")
    const [cost, setCost] = useState(0)

    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("cost", JSON.stringify(cost));
    }, [name, cost]);

    function addItem() {
        console.log("Submit button clicked!");
        items = JSON.parse(localStorage.getItem("items") || "[]");
        items.push({ name, cost })
        localStorage.setItem("items", JSON.stringify(items));
    }


    return (
        <div>
            <p><h><br></br>Items</h></p>
            <form>
                ---------------------------------------------------------------------
                <br></br>
                <input
                    type="text" name="item" size="20" placeholder="Enter Item Name"
                    onChange={(e) => setName(e.target.value)}
                />
                &emsp;
                <input
                    type="number" name="cost" size="10" placeholder="Enter Cost in $" step="0.01" min="0.01"
                    onChange={(e) => setCost(e.target.value)}
                />
                &emsp;
                <button type="submit" formaction="#"
                    onClick={addItem}
                >
                    Add Item
                </button>
                <br></br>
                ---------------------------------------------------------------------
            </form>

            <br></br>
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
            <br></br>
            <Link to="/users">
                <button variant="outlined">
                    See Users
                </button>
            </Link>
            <br></br>
        </div>
    );
}

export default Items;