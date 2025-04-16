import { format } from "date-fns";
import PropTypes from "prop-types";
import { FaCheckCircle, FaClock, FaEye } from "react-icons/fa";

const PaymentHistoryRow = ({ payment, handleViewDetails }) => {
    return (
        <tr className="hover:bg-base-200">
            {/* Customer */}
            <td className="py-3 px-4">
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-base-content">
                        {payment.useName || 'Ronaldo'}
                    </span>
                    <span className="text-xs text-base-content/70">
                        {payment.userEmail}
                    </span>
                </div>
            </td>

            {/* Transaction ID */}
            <td className="py-3 px-4 text-sm font-medium font-mono text-base-content truncate max-w-xs">
                {payment.transactionId}
            </td>

            {/* Date */}
            <td className="py-3 px-4 text-sm text-base-content/80 truncate">
                {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
            </td>

            {/* Amount */}
            <td className="py-3 px-4 text-sm font-medium text-base-content">
                ${payment.totalAmount.toFixed(2)}
            </td>

            {/* Status */}
            <td className="py-3 px-4">
                {payment.paymentStatus === 'Pending' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        <FaClock className="mr-1 text-amber-500" /> Pending
                    </span>
                ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <FaCheckCircle className="mr-1 text-green-500" /> Paid
                    </span>
                )}
            </td>

            {/* Actions */}
            <td className="py-3 px-4">
                <button
                    onClick={() => handleViewDetails(payment)}
                    className="p-2 rounded-full transition-all duration-300 bg-[#0D6FEC]/10 hover:bg-[#0D6FEC] text-[#0D6FEC] hover:text-white shadow-sm hover:shadow-md"
                    aria-label="View payment details"
                >
                    <FaEye className="text-base" />
                </button>
            </td>
        </tr>
    );
};

PaymentHistoryRow.propTypes = {
    payment: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        transactionId: PropTypes.string.isRequired,
        useName: PropTypes.string, // Can be optional since you provide a fallback ('Ronaldo')
        userEmail: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        totalAmount: PropTypes.number.isRequired,
        paymentStatus: PropTypes.string.isRequired,
    }).isRequired,
    handleViewDetails: PropTypes.func.isRequired,
};

export default PaymentHistoryRow;