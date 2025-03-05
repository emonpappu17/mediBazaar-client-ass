import { Outlet } from "react-router";
// import Sidebar from "../pages/dashboard/Sidebar";
// import AdminSidebar from "../pages/dashboard/admin/AdminSidebar";
// import AdminNavbar from "../pages/dashboard/admin/AdminNavbar";
import Sidebar from "../pages/dashboard/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                <Outlet /> {/* Loads the nested dashboard pages */}
            </div>
        </div>


        // <div className="flex h-screen">
        //     {/* Sidebar */}
        //     <AdminSidebar />

        //     {/* Main Content */}
        //     <div className="flex-1 flex flex-col">
        //         <AdminNavbar />
        //         <div className="p-6">
        //             <Outlet /> {/* Renders nested routes like Dashboard Home */}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Dashboard;
