import { FaHome, FaUsers, FaShoppingCart, FaChartPie } from "react-icons/fa";
import { Link } from "react-router";

const AdminSidebar = () => {
    return (
        <div className="w-64 h-screen bg-base-200 shadow-lg flex flex-col p-6">
            <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
            <ul className="space-y-4">
                <li>
                    <Link to="/admin" className="flex items-center gap-2 text-lg text-base-content hover:text-primary">
                        <FaHome /> Dashboard Home
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/users" className="flex items-center gap-2 text-lg text-base-content hover:text-primary">
                        <FaUsers /> Manage Users
                    </Link>
                </li>
                <li>
                    <Link to="/admin/orders" className="flex items-center gap-2 text-lg text-base-content hover:text-primary">
                        <FaShoppingCart /> Manage Orders
                    </Link>
                </li>
                <li>
                    <Link to="/admin/reports" className="flex items-center gap-2 text-lg text-base-content hover:text-primary">
                        <FaChartPie /> Reports & Analytics
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
