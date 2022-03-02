import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>~~~</p>
            <p>Hi! Welcome to THE APP</p>
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