import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>~~~</p>
            <h>Hi! Welcome to THE APP</h>
            <p>~~~</p>
            <Link to="/signup">
                <button variant="outlined">
                    Sign up
                </button>
            </Link>
        </div>
    );
}

export default Home;