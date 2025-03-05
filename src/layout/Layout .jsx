import { Outlet,  } from "react-router";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

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