import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/cart" element={<Cart />}></Route>

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