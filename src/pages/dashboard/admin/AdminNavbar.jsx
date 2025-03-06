// import useAuth from "../../hooks/useAuth";

import { FaAlignJustify } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../../../hooks/useAuth";
import avatarImg from '../../../assets/placeholder.jpg'

const AdminNavbar = ({ isActive, handleToggle }) => {
    const { user } = useAuth();
    return (
        <div className="  py-4 px-6 flex justify-between items-center ">
            <h2 className="text-xl font-bold"> Dashboard</h2>
            <div className="flex items-center gap-4 ">
                <div>
                    <p className="">{user?.displayName}</p>
                    <p className="text-right text-base-content/50">  Admin</p>
                </div>


                <div className="w-10 rounded-full  overflow-hidden">
                    {/* <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /> */}


                    <img
                        src={user && user?.photoURL ? user?.photoURL : avatarImg}
                        alt="profile"
                        // className="size-8 rounded-full"
                        referrerPolicy='no-referrer' />
                </div>
                <button onClick={handleToggle} className="md:hidden cursor-pointer  hover:text-[#0D6FEC] text-2xl">
                    {isActive ? <FaAlignJustify /> : <RxCross1 />}
                </button>
            </div>
        </div>
    );
};

export default AdminNavbar;




