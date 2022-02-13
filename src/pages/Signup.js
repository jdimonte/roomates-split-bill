import { Link } from "react-router-dom";

function Signup() {
    return (
        <div>
            <p>Username, Password</p>
            <Link to="/items">
                <button variant="outlined">
                    Get Started!
                </button>
            </Link>
        </div>
    );
}

export default Signup;