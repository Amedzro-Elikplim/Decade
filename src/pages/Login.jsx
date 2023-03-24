import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/dashboard");
    }

    return (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="login-card d-flex align-items-center justify-content-center">
                <button className="p-10" onClick={() => handleNavigate()}>Login</button>
            </div>
          </div>
    )
};

export default Login;