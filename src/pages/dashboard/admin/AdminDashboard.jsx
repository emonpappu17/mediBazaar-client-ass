import { FaUsers, FaClipboardList, } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FaChartLine, FaBullhorn } from "react-icons/fa";
import DashboardNav from "../../../components/common/DashboardNav";


const AdminDashboard = () => {
    return (
        <>
            {/* <NavLink to="/dashboard" className="flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                <MdSpaceDashboard /> Dashboard
            </NavLink> */}
            <DashboardNav
                address={'/dashboard'}
                label={'Dashboard'}
                icon={<MdSpaceDashboard />}>
            </DashboardNav>

            <DashboardNav
                address={'users'}
                label={'Manage Users'}
                icon={<FaUsers />}>
            </DashboardNav>

            <DashboardNav
                address={'category'}
                label={'Manage Category'}
                icon={<FaClipboardList />}>
            </DashboardNav>

            <DashboardNav
                address={'payment'}
                label={'Payment Management'}
                icon={<MdPayment />}>
            </DashboardNav>

            <DashboardNav
                address={'sales'}
                label={'Sales Report'}
                icon={<FaChartLine />}>
            </DashboardNav>

            <DashboardNav
                address={'advertise'}
                label={'Manage Advertise'}
                icon={<FaBullhorn />}>
            </DashboardNav>


            {/* <NavLink to="/dashboard/users" className=" flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                <FaUsers /> Manage Users
            </NavLink>
            <NavLink to="/dashboard" className=" flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                <FaClipboardList /> Manage Category
            </NavLink>
            <NavLink to="/dashboard" className=" flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                <MdPayment /> Payment Management
            </NavLink>
            <NavLink to="/dashboard" className=" flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                <FaChartLine /> Sales Report
            </NavLink>
            <NavLink to="/dashboard" className=" flex items-center gap-2 p-3 hover:bg-primary rounded-md">
                <FaBullhorn /> Manage Advertise
            </NavLink> */}
        </>
    );
};

export default AdminDashboard;