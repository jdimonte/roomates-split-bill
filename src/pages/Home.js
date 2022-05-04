import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="background">
            <p className="large-text">Split your grocery order with your roommates!</p>
            <Link to="/items">
                <button variant="outlined" className="button-style">
                    Get Started
                </button>
            </Link>
        </div>
    );
}

export default Home;