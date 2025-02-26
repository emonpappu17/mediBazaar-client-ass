import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    const location = useLocation();
    const hideLayout = location.pathname === "/checkout"; // ✅ Hide on Checkout Page
    console.log('location', location);

    return (
        <>
            {!hideLayout && <Navbar></Navbar>}
            <Outlet></Outlet>{/* This renders the page content */}
            {!hideLayout && <Footer />}
        </>
    );
};

export default Layout;