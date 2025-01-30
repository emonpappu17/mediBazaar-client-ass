import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />

                {/* Authentication */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Error Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default AppRoutes;