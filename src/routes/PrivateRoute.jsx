import Lottie from "lottie-react";
import loader from '../assets/loaderAnimation.json'
import { Navigate } from "react-router";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <div className="flex items-center justify-center min-h-screen"><Lottie className="w-20" animationData={loader}></Lottie></div>

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.element,
}

export default PrivateRoute;