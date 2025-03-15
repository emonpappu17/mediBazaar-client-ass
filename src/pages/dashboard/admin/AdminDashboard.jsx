import { FaUsers, FaClipboardList, } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FaChartLine, FaBullhorn } from "react-icons/fa";
import DashboardNav from "../../../components/common/DashboardNav";


const AdminDashboard = () => {
    return (
        <>
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
        </>
    );
};

export default AdminDashboard;