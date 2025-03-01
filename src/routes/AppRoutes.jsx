import { BrowserRouter, Route, Routes, } from "react-router";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Layout from "../components/layout/Layout ";
import CategoryDetails from "../pages/category/CategoryDetails";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}> {/* ✅ Wrap pages inside Layout */}
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/category/:category" element={<CategoryDetails />}></Route>
                </Route>

                {/* Checkout Page (without Navbar/Footer) */}
                <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />

                {/* Error Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;