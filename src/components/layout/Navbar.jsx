
import { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporary state for login status
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navLinks = <>
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/shop" className="hover:underline">Shop</NavLink>
        <NavLink to="/cart" className="relative flex items-center">
            <FaShoppingCart className="text-xl" />
            <span className="bg-red-500 text-white text-xs rounded-full px-2 absolute -top-2 -right-3">2</span>
        </NavLink>
    </>

    return (
        <nav className="bg-blue-200 text-white  sm:py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo & Website Name */}
                <Link to="/" className="text-base font-bold flex items-center">
                    <img src="https://i.ibb.co.com/3fkBCFJ/18246203-v987-18a-removebg-preview.png" alt="MediBazaar Logo" className="size-16 mr-1 " />
                    MediBazaar
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    {/* <NavLink to="/" className="hover:underline">Home</NavLink>
                    <NavLink to="/shop" className="hover:underline">Shop</NavLink>
                    <NavLink to="/cart" className="relative flex items-center">
                        <FaShoppingCart className="text-xl" />
                        <span className="bg-red-500 text-white text-xs rounded-full px-2 absolute -top-2 -right-3">2</span>
                    </NavLink> */}
                    {navLinks}
                </div>

                {/* Authentication / User Profile */}
                <div className="flex items-center space-x-4  ml-auto md:ml-0">
                    {!isLoggedIn ? (
                        <>
                            <NavLink to="/login" className="hover:underline">Login</NavLink>
                            <NavLink to="/register" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Sign Up</NavLink>
                        </>
                    ) : (
                        <div className="relative">
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2">
                                <FaUserCircle className="text-2xl" />
                                <span>My Account</span>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded">
                                    <Link to="/dashboard/user" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
                                    <button className="block px-4 py-2 w-full text-left hover:bg-gray-200" onClick={() => setIsLoggedIn(false)}>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="drawer  md:hidden w-fit">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className=" drawer-button md:hidden text-2xl p-4">&#9776;</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            {/* <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li> */}
                            {/* <NavLink to="/" className="hover:underline">Home</NavLink>
                            <NavLink to="/shop" className="hover:underline">Shop</NavLink>
                            <NavLink to="/cart" className="relative flex items-center">
                                <FaShoppingCart className="text-xl" />
                                <span className="bg-red-500 text-white text-xs rounded-full px-2 absolute -top-2 -right-3">2</span>
                            </NavLink> */}
                            {navLinks}
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                {/* <button className="md:hidden text-2xl border">&#9776;</button> */}
            </div>
        </nav>
    );
};

export default Navbar;
