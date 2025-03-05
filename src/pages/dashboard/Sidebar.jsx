

import AdminDashboard from "./admin/AdminDashboard";

const Sidebar = () => {

    return (
        <div className="w-64 bg-blue-50 h-full p-5 flex flex-col border">
            <h2 className="text-xl font-bold text-center mb-5 border">MediBazaar</h2>

            <nav className="space-y-3 ">
                <AdminDashboard></AdminDashboard>
                {/* <Link to="/dashboard" className="flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                    <FaHome /> Dashboard Home
                </Link>

                <Link to="/dashboard/users" className="flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                    <FaUsers /> Manage Users
                </Link>
                <Link to="/dashboard/manage-orders" className="flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                    <FaClipboardList /> Manage Orders
                </Link>
                <Link to="/dashboard/manage-products" className="flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                    <FaBoxOpen /> Manage Products
                </Link> */}
            </nav>
        </div>
    );
};

export default Sidebar;
