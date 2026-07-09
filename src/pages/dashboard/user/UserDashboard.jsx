import { MdSpaceDashboard } from "react-icons/md";
import DashboardNav from "../../../components/common/DashboardNav";
import { FaReceipt } from "react-icons/fa";

const UserDashboard = () => {
    return (
        <>
            <DashboardNav
                address={'/dashboard'}
                label={'Dashboard'}
                icon={<MdSpaceDashboard />}>
            </DashboardNav>

            <DashboardNav
                address={'paymentHistory'}
                label={'Payment History'}
                icon={<FaReceipt />}>
            </DashboardNav>
        </>
    );
};

export default UserDashboard;
