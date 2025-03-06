import PropTypes from "prop-types";
import { FaAlignJustify } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../../hooks/useAuth";
import avatarImg from '../../assets/placeholder.jpg'
import { useRole } from "../../services/userService";

const DashboardNavbar = ({ isActive, handleToggle }) => {
    const { user } = useAuth();
    const [role] = useRole();
    // console.log('DashboardNavbar', role);

    return (
        <div className="  py-2 px-6 flex justify-between items-center ">
            <h2 className="text-xl font-bold"> Dashboard</h2>
            <div className="flex items-center gap-4 ">
                <div>
                    <p className="text-sm  capitalize">{user?.displayName}</p>
                    <p className="text-sm bg-[#35C7DF] w-fit ml-auto px-2 rounded-2xl text-white capitalize drop-shadow-lg">{role}</p>
                </div>

                <div className="size-12 rounded-full  overflow-hidden">
                    <img
                        src={user && user?.photoURL ? user?.photoURL : avatarImg}
                        alt="profile"
                        referrerPolicy='no-referrer' />
                </div>
                <button onClick={handleToggle} className="md:hidden cursor-pointer  hover:text-[#0D6FEC] text-2xl">
                    {isActive ? <FaAlignJustify /> : <RxCross1 />}
                </button>
            </div>
        </div>
    );
};


DashboardNavbar.propTypes = {
    isActive: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default DashboardNavbar;