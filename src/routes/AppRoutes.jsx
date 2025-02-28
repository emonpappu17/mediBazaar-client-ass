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

const AppRoutes = () => {
    // const location = useLocation();
    // console.log('location', location);

    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route element={<Layout />}> {/* ✅ Wrap pages inside Layout */}
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/category/:category" element={<CategoryDetails />}></Route>
                </Route>
                {/* Public Routes */}
                {/* <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}></Route> */}

                {/* Private Routes */}
                {/* <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route> */}

                {/* Authentication */}
                {/* <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> */}


                {/* Checkout Page (without Navbar/Footer) */}
                <Route path="/checkout" element={<Checkout />} />

                {/* Error Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer></Footer> */}
        </BrowserRouter>
    );
};

export default AppRoutes;