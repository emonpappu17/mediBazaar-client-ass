import PropTypes from "prop-types";
import { FaCheckCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";
import StatCard from "../../common/StatCard";
import StatsSkeleton from "../../common/StatsSkeleton";

const PaymentHistoryStat = ({ payments, adminPaymentManagement, isError }) => {
    // Total Revenue
    const totalPaid = payments.reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)

    // Total Pending Revenue 
    const pendingTotal = payments.filter(payment => payment.paymentStatus === 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)

    // Total Paid Revenue
    const paidTotal = payments.filter(payment => payment.paymentStatus !== 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)
    const isLoading = true
    return (
        <>
            <div className=" rounded-lg   ">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-base-content mb-1">
                        {adminPaymentManagement ? 'Payment Management' : 'Payment History'}
                    </h1>
                    <p className="text-sm text-base-content/70">
                        {adminPaymentManagement
                            ? 'Track and manage all the medicine sales payments'
                            : 'Track and manage all your medicine sales payments'}
                    </p>
                </div>
                {isLoading ? (
                    <StatsSkeleton count={3} />
                ) : (
                    isError ? (
                        <div className="bg-error/10 text-error p-4 rounded-lg mb-6 text-center">
                            Failed to load statistics
                        </div>
                    ) : (
                        <>
                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                {/* Revenue Card */}
                                <StatCard
                                    title="Total Revenue Possible"
                                    value={`$${totalPaid}`}
                                    icon={<FaMoneyBillWave className="text-primary" />}
                                    color="primary"
                                />

                                {/* Pending Card */}
                                <StatCard
                                    title="Total Pending"
                                    value={`$${pendingTotal}`}
                                    icon={<FaClock className="text-warning" />}
                                    color="warning"
                                />

                                {/* Paid Card */}
                                <StatCard
                                    title=" Total Paid"
                                    value={`$${paidTotal}`}
                                    icon={<FaCheckCircle className="text-success" />}
                                    color="success"
                                />
                            </div>
                        </>
                    )
                )}


            </div>
        </>
    );
};

PaymentHistoryStat.propTypes = {
    payments: PropTypes.arrayOf(
        PropTypes.shape({
            totalAmount: PropTypes.number.isRequired,
            paymentStatus: PropTypes.string.isRequired,
        })
    ).isRequired,
    adminPaymentManagement: PropTypes.bool.isRequired
};

export default PaymentHistoryStat;