import { Link } from "react-router";

const Login = () => {
    return (
        <div>
            i am login
            <Link to={'/register'}> sign Up</Link>
        </div>
    );
};

export default Login;