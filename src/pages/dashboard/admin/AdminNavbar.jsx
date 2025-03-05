// import useAuth from "../../hooks/useAuth";

import { FaAlignJustify } from "react-icons/fa";

const AdminNavbar = ({ isActive, handleToggle }) => {
    // const { user, logOut } = useAuth();

    return (
        // <div className="bg-base-100 shadow-md py-4 px-6 flex justify-between items-center">
        //     <h2 className="text-xl font-bold">Admin Dashboard</h2>
        //     <div className="flex items-center gap-4">
        //         <p className="text-lg">Emon howlader</p>
        //         <button className="btn btn-sm btn-outline" >
        //             Logout
        //         </button>
        //     </div>
        // </div>
        <div className="navbar bg-base-100 shadow-sm">

            <button onClick={handleToggle} className="flex-1 ">
                <FaAlignJustify />
            </button>
            <div className="flex gap-2 ">
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
        </div>
    );
};

export default AdminNavbar;
