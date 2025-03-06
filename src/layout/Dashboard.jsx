import { Outlet } from "react-router";
// import Sidebar from "../pages/dashboard/Sidebar";
// import AdminSidebar from "../pages/dashboard/admin/AdminSidebar";
// import AdminNavbar from "../pages/dashboard/admin/AdminNavbar";
import Sidebar from "../pages/dashboard/Sidebar";
// import AdminNavbar from "../pages/dashboard/admin/AdminNavbar";
import { useState } from "react";
// import DashboardNav from "../components/common/DashboardNav";
import DashboardNavbar from "../pages/dashboard/DashboardNavbar";

const Dashboard = () => {
    const [isActive, setActive] = useState(true)

    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className="md:flex min-h-screen relative">
            {/* Sidebar */}
            <Sidebar isActive={isActive} handleToggle={handleToggle} />

            {/* Main Content */}
            <div className="flex-1  md:ml-64">
                {/* <AdminNavbar isActive={isActive} handleToggle={handleToggle}></AdminNavbar> */}
                {/* <DashboardNav isActive={isActive} handleToggle={handleToggle}></DashboardNav> */}
                <DashboardNavbar isActive={isActive} handleToggle={handleToggle}></DashboardNavbar>
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div >
    );
};

export default Dashboard;




// import { Outlet } from "react-router";
// import Sidebar from "../pages/dashboard/Sidebar";
// import AdminNavbar from "../pages/dashboard/admin/AdminNavbar";
// import { useState } from "react";

// const Dashboard = () => {
//     const [isActive, setActive] = useState(false);

//     const handleToggle = () => {
//         setActive(!isActive);
//     };

//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar - Hidden by default on small screens, always visible on md+ */}
//             <Sidebar isActive={isActive} handleToggle={handleToggle} />

//             {/* Main Content */}
//             <div className={`flex-1 transition-all duration-300 ${isActive ? "ml-64 md:ml-0" : "ml-0"}`}>
//                 <AdminNavbar handleToggle={handleToggle} />
//                 <div className="p-6 border">
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

