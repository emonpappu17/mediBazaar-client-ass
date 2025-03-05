import { Link } from "react-router";
import AdminDashboard from "./admin/AdminDashboard";
import logo from '../../../public/websiteLogo.png'
import DashboardNav from "../../components/common/DashboardNav";
import { LuLogOut } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

const Sidebar = ({ isActive, handleToggle }) => {

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
            {/* Sidebar */}
            <div className="w-64 bg-base-200 hidden p-5 md:flex flex-col justify-between translate-x-0 overflow-x-hidden">
                <div>
                    {/* Logo & Website Name */}
                    <Link to="/" className="text-base font-bold flex items-center justify-center  mb-5 shadow-lg rounded-2xl bg-base-200">
                        <img src={logo} alt="MediBazaar Logo" className=" size-12 sm:mr-1" />
                        <h1 className="text-[20px] font-extrabold text-base-content">MediBazaar</h1>
                    </Link>
                    <nav className="space-y-2 ">
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
                        className='transition-all duration-300 text-base-content hover:text-white p-2 rounded-[10px] hover:bg-[#0D6FEC]  flex items-center gap-2 cursor-pointer mt-2 w-full'
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
