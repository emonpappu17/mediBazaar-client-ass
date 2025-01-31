import { useEffect, useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Button from "../common/Button";
import logo from '../../assets/websiteLogo.png'
import ThemeToggle from "../common/ThemeToggle";

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporary state for login status
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive
                    ? "text-primary border-b-primary border-b" // Active state
                    : "text-base-content hover:text-primary border-b-transparent hover:border-b-primary" // Inactive state
            }
        >
            Home
        </NavLink>

        <NavLink
            to="/shop"
            className={({ isActive }) =>
                isActive
                    ? "text-primary border-b-primary border-b" // Active state
                    : "text-base-content hover:text-primary border-b-transparent hover:border-b-primary" // Inactive state
            }
        >
            Shop
        </NavLink>

        <NavLink
            to="/cart"
            className={({ isActive }) =>
                isActive
                    ? "text-primary border-b-primary border-b relative" // Active state
                    : "text-base-content hover:text-primary border-b-transparent hover:border-b-primary relative" // Inactive state
            }
        >
            <FaShoppingCart className="text-xl" />
            <span className="bg-primary text-white text-xs rounded-full px-2 absolute -top-2 -right-4">
                2
            </span>
        </NavLink>
    </>

    return (
        // <nav className={`${scrollY > 0 ? 'bg-white shadow-md border-b' : ''} text-white sticky top-0   z-10`}>
        //     <div className="container mx-auto flex justify-between items-center ">

        //         {/* Logo & Website Name */}
        //         <Link to="/" className="text-base font-bold flex items-center">
        //             <img src={logo} alt="MediBazaar Logo" className="size-20 sm:mr-1 " />
        //             <h1 className="sm:text-3xl text-[20px] font-extrabold text-[#000000]">MediBazaar</h1>
        //         </Link>

        //         {/* Navigation Links */}
        //         <div className="hidden md:flex space-x-6 ">
        //             {navLinks}
        //         </div>

        //         {/* Authentication / User Profile */}
        //         <div className="flex items-center space-x-4  ml-auto md:ml-0">
        //             {!isLoggedIn ? (
        //                 <>
        //                     <Link to="/login" >
        //                         <Button text="Join Us"></Button>
        //                     </Link>
        //                 </>
        //             ) : (
        //                 <div className="relative">
        //                     <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2 cursor-pointer text-black hover:text-[#0D6FEC] border-b-[#0D6FEC]">
        //                         <FaUserCircle className="text-2xl" />
        //                         <span>My Account</span>
        //                     </button>
        //                     {dropdownOpen && (
        //                         <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded ">
        //                             <Link to="/dashboard/user" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#0D6FEC] border-b-[#0D6FEC]">Update Profile</Link>
        //                             <Link to="/dashboard/user" className="block px-4 py-2 hover:bg-gray-200 hover:text-[#0D6FEC] border-b-[#0D6FEC]">Dashboard</Link>
        //                             <button className="block px-4 py-2 w-full text-left hover:bg-gray-200 hover:text-[#0D6FEC] border-b-[#0D6FEC]" onClick={() => setIsLoggedIn(false)}>
        //                                 Logout
        //                             </button>
        //                         </div>
        //                     )}
        //                 </div>
        //             )}
        //         </div>

        //         <div className="drawer  md:hidden w-fit  mx-3  ">
        //             <input id="my-drawer" type="checkbox" onChange={(e) => setIsSideBarOpen(e.target.checked)} className="drawer-toggle" />
        //             <div className="drawer-content">
        //                 {/* Page content here */}
        //                 <label htmlFor="my-drawer" className=" drawer-button md:hidden text-2xl p-4 cursor-pointer text-black">{isSideBarOpen ? <RxCross1 />
        //                     : <FaAlignJustify />}
        //                 </label>
        //             </div>
        //             <div className="drawer-side order">
        //                 <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        //                 <ul className="menu bg-base-200 text-base-content min-h-full w-80 pr-10 pl-4 space-y-3 ">
        //                     {/* Sidebar content here */}
        //                     <label htmlFor="my-drawer" className="drawer-button md:hidden text-2xl ml-auto mt-2 cursor-pointer  transition  duration-300 ease-in-out hover:scale-75">
        //                         <RxCross1 />
        //                     </label>
        //                     {navLinks}
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <nav className={`${scrollY > 0 ? 'bg-base-100 shadow-md ' : ''} sticky top-0 z-10`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo & Website Name */}
                <Link to="/" className="text-base font-bold flex items-center">
                    <img src={logo} alt="MediBazaar Logo" className="size-20 sm:mr-1" />
                    <h1 className="sm:text-3xl text-[20px] font-extrabold text-base-content">MediBazaar</h1>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">{navLinks}</div>

                {/* Authentication / User Profile */}
                <div className="flex items-center space-x-4 ml-auto md:ml-0">
                <ThemeToggle className="mr-0"></ThemeToggle>
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login">
                                <Button text="Join Us" className="md:px-4  px-3 py-2 rounded-3xl"></Button>
                            </Link>
                        </>
                    ) : (
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center space-x-2 cursor-pointer text-base-content hover:text-primary"
                            >
                                <FaUserCircle className="text-2xl" />
                                <span>My Account</span>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-base-100 text-base-content shadow-md rounded">
                                    <Link
                                        to="/dashboard/user"
                                        className="block px-4 py-2 hover:bg-base-200 hover:text-primary"
                                    >
                                        Update Profile
                                    </Link>
                                    <Link
                                        to="/dashboard/user"
                                        className="block px-4 py-2 hover:bg-base-200 hover:text-primary"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        className="block px-4 py-2 w-full text-left hover:bg-base-200 hover:text-primary"
                                        onClick={() => setIsLoggedIn(false)}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                
                {/* Mobile Drawer */}
                <div className="drawer md:hidden w-fit mx-3">
                    <input
                        id="my-drawer"
                        type="checkbox"
                        onChange={(e) => setIsSideBarOpen(e.target.checked)}
                        className="drawer-toggle"
                    />
                    <div className="drawer-content">
                        <label
                            htmlFor="my-drawer"
                            className="drawer-button md:hidden text-2xl p-4 cursor-pointer text-base-content hover:text-primary"
                        >
                            {isSideBarOpen ? <RxCross1 /> : <FaAlignJustify />}
                        </label>
                    </div>
                    <div className="drawer-side order">
                        <label
                            htmlFor="my-drawer"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 pr-10 pl-4 space-y-3">
                            <label
                                htmlFor="my-drawer"
                                className="hover:text-primary drawer-button md:hidden text-2xl ml-auto mt-2 cursor-pointer transition duration-300 ease-in-out hover:scale-75"
                            >
                                <RxCross1 />
                            </label>
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
