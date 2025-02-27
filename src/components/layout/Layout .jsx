import { Outlet,  } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    // const location = useLocation();
    // const hideLayout = location.pathname === "/checkout"; // Hide on Checkout Page
    // console.log('location', location);

    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>{/* This renders the page content */}
            <Footer />
        </>
    );
};

export default Layout;