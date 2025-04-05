import { format, } from "date-fns";
import PropTypes from "prop-types";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const ManagePaymentRow = ({ payment, handleAcceptPayment }) => {
    return (
        <tr
            key={payment._id}
            className="hover:bg-base-200">
            <td className="py-3 px-4">
                <div className="flex flex-col">
                    <span className="font-medium text-base-content">{payment.useName || 'Ronaldo'}</span>
                    <span className="text-sm text-base-content/70">{payment.userEmail}</span>
                </div>
            </td>
            <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">{payment.transactionId}</td>
            <td className="py-3 px-4 text-sm text-base-content font-medium  font-mono  truncate max-w-xs">{payment.items.length} items</td>

            <td className="py-3 px-4 text-sm text-base-content/80">
                {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
            </td>
            <td className="py-3 px-4 font-medium">${payment.totalAmount.toFixed(2)}</td>
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
            <td className="py-3 px-4">
                {
                    payment.paymentStatus === 'Paid' ?
                        <span className="text-success font-medium">
                            {/* flex items-center gap-1 */}
                            {/* <FaCheckCircle /> */}
                            Accepted
                        </span>
                        :
                        <button
                            onClick={() => handleAcceptPayment(payment._id)}
                            className="p-2 rounded-full transition-all duration-300 bg-success/20 hover:bg-success text-success hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                        >
                            <FaCheckCircle className="text-lg" />
                        </button>
                }
            </td>
        </tr>
    );
};

ManagePaymentRow.propTypes = {
    payment: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        useName: PropTypes.string,
        userEmail: PropTypes.string.isRequired,
        transactionId: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired,
        createdAt: PropTypes.string.isRequired,
        totalAmount: PropTypes.number.isRequired,
        paymentStatus: PropTypes.oneOf(['Pending', 'Paid']).isRequired,
    }).isRequired,
    handleAcceptPayment: PropTypes.func.isRequired,
};

export default ManagePaymentRow;