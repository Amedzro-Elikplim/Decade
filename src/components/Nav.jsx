import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const navigate = useNavigate();

    return (
        <nav className="d-flex nav space-between w-100 align-items-center"> 
            <h1>Decade</h1>
            <ul className="list-style-none d-flex g-10">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>
                    <button onClick={() => navigate("/login")} >Try Demo</button>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;