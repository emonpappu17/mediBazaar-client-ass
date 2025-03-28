import { BrowserRouter, Route, Routes, } from "react-router";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import CategoryDetails from "../pages/category/CategoryDetails";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layout/Layout ";
import Dashboard from "../layout/Dashboard";
import DashboardHome from "../components/AdminDashboard/home/DashboardHome";
import ManageUsers from "../components/AdminDashboard/users/ManageUsers";
import ManageCategory from "../components/AdminDashboard/category/ManageCategory";
import ManagePayment from "../components/AdminDashboard/payment/ManagePayment";
import ManageSales from "../components/AdminDashboard/sales/ManageSales";
import ManageAdvertise from "../components/AdminDashboard/advertise/ManageAdvertise";
import ManageAccount from "../components/AdminDashboard/account/ManageAccount";
import ManageMedicines from "../components/SellerDashboard/medicine/ManageMedicines";
import PaymentHistory from "../components/SellerDashboard/paymentHistory/PaymentHistory";
import AskAdvertise from "../components/SellerDashboard/askAdvertise/AskAdvertise";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Invoice from "../pages/invoice/Invoice";
// import Invoice from "../pages/invoice/Invoice";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/category/:category" element={<CategoryDetails />}></Route>
                </Route>

                {/* Checkout Page (without Navbar/Footer) */}
                <Route path="/checkout" element={<PrivateRoute>
                    <Elements stripe={stripePromise}>
                        <Checkout />
                    </Elements>
                </PrivateRoute>} />

                {/* Invoice Page (without Navbar/Footer) */}
                <Route path="/invoice/:id" element={<PrivateRoute>
                    <Invoice></Invoice>
                </PrivateRoute>} />

                {/* Dashboard Routes */}
                <Route path="/dashboard" element={
                    <PrivateRoute> <Dashboard /></PrivateRoute>
                }>
                    <Route index element={<DashboardHome />}></Route>
                    <Route path="users" element={<ManageUsers />}></Route>
                    <Route path="category" element={<ManageCategory />}></Route>
                    <Route path="payment" element={<ManagePayment />}></Route>
                    <Route path="sales" element={<ManageSales />}></Route>
                    <Route path="advertise" element={<ManageAdvertise />}></Route>
                    <Route path="account" element={<ManageAccount />}></Route>
                    <Route path="medicines" element={<ManageMedicines />}></Route>
                    <Route path="paymentHistory" element={<PaymentHistory />}></Route>
                    <Route path="askAdvertise" element={<AskAdvertise></AskAdvertise>}></Route>
                </Route>

                {/* Error Page */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;