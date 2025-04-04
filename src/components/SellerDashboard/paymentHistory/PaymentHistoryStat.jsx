import PropTypes from "prop-types";
import { FaCheckCircle, FaClock, FaMoneyBillWave } from "react-icons/fa";

const PaymentHistoryStat = ({ payments }) => {
    // Total Revenue
    const totalPaid = payments.reduce((sum, payment) => sum + payment.totalAmount, 0).toFixed(2)

    // Total Pending Revenue 
    const pendingTotal = payments.filter(payment => payment.paymentStatus === 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0)

    // Total Paid Revenue
    const paidTotal = payments.filter(payment => payment.paymentStatus !== 'Pending').reduce((sum, payment) => sum + payment.totalAmount, 0)

    return (
        <div className="bg-base-100 rounded-lg drop-shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold text-base-content">Payment History</h1>
            <p className="text-base-content/70">Track and manage all your medicine sales payments</p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-primary font-medium">Total Revenue</p>
                            <p className="text-2xl font-bold text-content">${totalPaid}</p>
                        </div>
                        <div className="bg-primary/20 p-3 rounded-full">
                            <FaMoneyBillWave className="text-primary text-xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-warning/10 rounded-lg p-4 border-l-4 border-warning shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-warning font-medium">Total Pending</p>
                            <p className="text-2xl font-bold text-warning-content">${pendingTotal}</p>
                        </div>
                        <div className="bg-warning/20 p-3 rounded-full">
                            <FaClock className="text-warning text-xl" />
                        </div>
                    </div>
                </div>

                <div className="bg-success/10 rounded-lg p-4 border-l-4 border-success shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-success font-medium">Total Paid</p>
                            <p className="text-2xl font-bold text-success-content">${paidTotal}</p>
                        </div>
                        <div className="bg-success/20 p-3 rounded-full">
                            <FaCheckCircle className="text-success text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PaymentHistoryStat.propTypes = {
    payments: PropTypes.arrayOf(
        PropTypes.shape({
            totalAmount: PropTypes.number.isRequired,
            paymentStatus: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default PaymentHistoryStat;