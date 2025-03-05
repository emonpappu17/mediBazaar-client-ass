import { Outlet } from "react-router";
// import Sidebar from "../pages/dashboard/Sidebar";
// import AdminSidebar from "../pages/dashboard/admin/AdminSidebar";
// import AdminNavbar from "../pages/dashboard/admin/AdminNavbar";
import Sidebar from "../pages/dashboard/Sidebar";
import AdminNavbar from "../pages/dashboard/admin/AdminNavbar";
import { useState } from "react";

const Dashboard = () => {
    const [isActive, setActive] = useState(false)

    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className="md:flex min-h-screen">
            {/* Sidebar */}
            <Sidebar isActive={isActive} handleToggle={handleToggle} />

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                <AdminNavbar isActive={isActive} handleToggle={handleToggle}></AdminNavbar>
                <div className="p-6 border">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
