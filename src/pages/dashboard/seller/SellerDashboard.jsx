import { MdMedication, MdSpaceDashboard } from "react-icons/md";
import DashboardNav from "../../../components/common/DashboardNav";
import { FaBullhorn, FaReceipt } from "react-icons/fa";

const SellerDashboard = () => {
    return (
        <>
            <DashboardNav
                address={'/dashboard'}
                label={'Dashboard'}
                icon={<MdSpaceDashboard />}>
            </DashboardNav>

            <DashboardNav
                address={'medicines'}
                label={'Manage medicines'}
                icon={<MdMedication />}>
            </DashboardNav>

            <DashboardNav
                address={'paymentHistory'}
                label={'Payment History'}
                icon={<FaReceipt />}>
            </DashboardNav>

            <DashboardNav
                address={'askAdvertise'}
                label={'Ask Advertise'}
                icon={<FaBullhorn />}>
            </DashboardNav>
        </>
    );
};

export default SellerDashboard;