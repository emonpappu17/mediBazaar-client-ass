import PropTypes from "prop-types";
import { FaCheckCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";

const PaymentHistoryStat = ({ payments, adminPaymentManagement }) => {
    // Total Revenue
    const totalPaid = payments.reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)

    // Total Pending Revenue 
    const pendingTotal = payments.filter(payment => payment.paymentStatus === 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)

    // Total Paid Revenue
    const paidTotal = payments.filter(payment => payment.paymentStatus !== 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)

    return (
        <>
            <div className="bg-base-100 rounded-lg drop-shadow-md p-6 mb-6">
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

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Revenue Card */}
                    <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                                    Total Revenue Possible
                                </p>
                                <p className="text-2xl font-bold text-base-content">
                                    ${totalPaid}
                                </p>
                            </div>
                            <div className="bg-primary/20 p-2.5 rounded-full flex-shrink-0 ml-2">
                                <FaMoneyBillWave className="text-primary text-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Pending Card */}
                    <div className="bg-warning/10 rounded-lg p-4 border-l-4 border-warning shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-medium text-warning uppercase tracking-wider mb-1">
                                    Total Pending
                                </p>
                                <p className="text-2xl font-bold text-base-content">
                                    ${pendingTotal}
                                </p>
                            </div>
                            <div className="bg-warning/20 p-2.5 rounded-full flex-shrink-0 ml-2">
                                <FaClock className="text-warning text-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Paid Card */}
                    <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success shadow-sm">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xs font-medium text-success uppercase tracking-wider mb-1">
                                    Total Paid
                                </p>
                                <p className="text-2xl font-bold text-base-content">
                                    ${paidTotal}
                                </p>
                            </div>
                            <div className="bg-success/20 p-2.5 rounded-full flex-shrink-0 ml-2">
                                <FaCheckCircle className="text-success text-lg" />
                            </div>
                        </div>
                    </div>
                </div>
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