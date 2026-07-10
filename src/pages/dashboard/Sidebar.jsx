import { Link } from "react-router";
import AdminDashboard from "./admin/AdminDashboard";
import logo from '/websiteLogo.png'
import DashboardNav from "../../components/common/DashboardNav";
import { LuLogOut } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import PropTypes from "prop-types";
import { useRole } from "../../services/userService";
import SellerDashboard from "./seller/SellerDashboard";
import UserDashboard from "./user/UserDashboard";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ isActive }) => {
    const { logOut } = useAuth();

    const [role] = useRole();

    // Logout user
    const handleLogout = async () => {
        try {
            Swal.fire({
                title: "Are you to Logout?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, logout now!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await logOut()
                    Swal.fire({
                        title: "logged out!",
                        text: "Your account has been logged out.",
                        icon: "success"
                    });
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {/* Sidebar */}
            <div className={` w-64 bg-base-200  p-5 flex flex-col justify-between md:translate-x-0 fixed inset-y-0 left-0 ${isActive && '-translate-x-full'} transition-all duration-300 z-30 overflow-auto`}>
                <div>
                    {/* Logo & Website Name */}
                    <Link to="/" className="text-base font-bold flex items-center justify-center  mb-5 shadow-lg rounded-2xl bg-base-200">
                        <img src={logo} alt="MediBazaar Logo" className=" size-12 sm:mr-1" />
                        <h1 className="text-[20px] font-extrabold text-base-content">MediBazaar</h1>
                    </Link>
                    <nav className="space-y-2">
                        {/* Dynamic admin layout */}
                        {role === 'admin' && <AdminDashboard />}
                        {/* {role === 'admin' || role === 'user' && <AdminDashboard />} */}
                        {role === 'seller' && <SellerDashboard />}
                        {role === 'user' && <UserDashboard />}
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
                        onClick={handleLogout}

                    >
                        <LuLogOut />
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};
Sidebar.propTypes = {
    isActive: PropTypes.bool.isRequired
}

export default Sidebar;


