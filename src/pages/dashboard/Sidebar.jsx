import { Link } from "react-router";
import AdminDashboard from "./admin/AdminDashboard";
import logo from '/websiteLogo.png'
import DashboardNav from "../../components/common/DashboardNav";
import { LuLogOut } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

const Sidebar = ({ isActive }) => {

    return (
        <>
            {/* Mobile view */}
            {/* <div className="navbar bg-base-100 shadow-sm md:hidden">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* -translate-x-full md:translate-x-0  transition duration-200 ease-in-out */}



            {/* w-64 bg-base-200  p-5 flex flex-col justify-between md:translate-x-0 -translate-x-full overflow-x-hidden absolute md:fixed inset-y-0 left-0 */}

            {/* w-64 bg-base-200 p-5 flex flex-col justify-between fixed inset-y-0 left-0 z-50
                md:translate-x-0 transform transition-transform duration-200 ease-in-out
                ${isActive ? 'translate-x-0' : '-translate-x-full'} */}


            {/* Sidebar */}
            <div className={` w-64 bg-base-200  p-5 flex flex-col justify-between md:translate-x-0    fixed inset-y-0 left-0 ${isActive && '-translate-x-full'} transition-all duration-300 z-30 overflow-auto`}>
                <div>
                    {/* Logo & Website Name */}
                    <Link to="/" className="text-base font-bold flex items-center justify-center  mb-5 shadow-lg rounded-2xl bg-base-200">
                        <img src={logo} alt="MediBazaar Logo" className=" size-12 sm:mr-1" />
                        <h1 className="text-[20px] font-extrabold text-base-content">MediBazaar</h1>
                    </Link>
                    <nav className="space-y-2">
                        {/* Dynamic admin layout */}
                        <AdminDashboard></AdminDashboard>
                    </nav>
                </div>

                <div>
                    <div className="divider"></div>
                    <DashboardNav
                        address={'account'}
                        label={'Account'}
                        icon={<FaRegUser />}>
                    </DashboardNav>
                    <button
                        className='transition-all duration-300 text-base-content hover:text-white p-2 rounded-[10px] hover:bg-[#0D6FEC] flex items-center gap-2 cursor-pointer mt-2 w-full'
                    >
                        <LuLogOut />
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;



// import AdminDashboard from "./admin/AdminDashboard";
// import logo from "../../../public/websiteLogo.png";
// import DashboardNav from "../../components/common/DashboardNav";
// import { LuLogOut } from "react-icons/lu";
// import { FaRegUser } from "react-icons/fa";
// import { Link } from "react-router";

// const Sidebar = ({ isActive, handleToggle }) => {
//     return (
//         <>
//             {/* Sidebar */}
//             <div
//                 className={`w-64 bg-base-200 p-5 flex flex-col justify-between fixed inset-y-0 left-0 transition-all duration-300 z-50
//                 ${isActive ? "translate-x-0 shadow-lg" : "-translate-x-full"} md:translate-x-0`}
//             >
//                 <div>
//                     {/* Logo & Website Name */}
//                     <Link
//                         to="/"
//                         className="text-base font-bold flex items-center justify-center mb-5 shadow-lg rounded-2xl bg-base-200"
//                     >
//                         <img src={logo} alt="MediBazaar Logo" className="size-12 sm:mr-1" />
//                         <h1 className="text-[20px] font-extrabold text-base-content">MediBazaar</h1>
//                     </Link>

//                     <nav className="space-y-2">
//                         {/* Dynamic admin layout */}
//                         <AdminDashboard />
//                     </nav>
//                 </div>

//                 {/* Logout & User Account */}
//                 <div>
//                     <div className="divider"></div>
//                     <DashboardNav address={"account"} label={"Account"} icon={<FaRegUser />} />
//                     <button
//                         className="transition-all duration-300 text-base-content hover:text-white p-2 rounded-[10px] hover:bg-[#0D6FEC] flex items-center gap-2 cursor-pointer mt-2 w-full"
//                     >
//                         <LuLogOut />
//                         Logout
//                     </button>
//                 </div>
//             </div>

//             {/* Overlay when sidebar is active on small screens
//             {isActive && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//                     onClick={handleToggle} // Close sidebar when clicking outside
//                 ></div>
//             )} */}
//         </>
//     );
// };

// export default Sidebar;

