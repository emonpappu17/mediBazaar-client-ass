import { format } from "date-fns";
import PropTypes from "prop-types";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const ManageSalesRow = ({ payment }) => {
    return (
        <tr className="hover:bg-base-200">
            {/* Customer Email */}
            <td className="py-3 px-4 text-sm font-medium text-base-content">
                {payment.userEmail}
            </td>

            {/* Transaction ID  */}
            <td className="py-3 px-4 text-sm font-mono font-medium text-base-content truncate max-w-xs">
                {payment.transactionId}
            </td>

            {/* Medicines  */}
            <td className="py-3 px-4 text-sm text-base-content truncate">
                {payment.items.map((medicine, index) => (
                    <div key={index}>
                        <span className="font-semibold">{medicine.name}</span>
                        <span className="text-base-content/80"> (Qty: {medicine.quantity}, Price: ${medicine.finalPrice.toFixed(2)})</span>
                    </div>
                ))}
            </td>

            {/* Seller*/}
            <td className="py-3 px-4 text-sm text-base-content truncate">
                {payment.items.map((medicine, index) => (
                    <div key={index}>
                        <span className="font-semibold">
                            {medicine.name.length >= 4 ? `${medicine.name.slice(0, 4)}...` : medicine.name}
                        </span>
                        <span className="text-base-content/80"> ({medicine.sellerEmail || 'Random'})</span>
                    </div>
                ))}
            </td>

            {/* Date  */}
            <td className="py-3 px-4 text-sm text-base-content/80 truncate">
                {format(new Date(payment.createdAt), 'MMM dd, yyyy')}
            </td>

            {/* Amount  */}
            <td className="py-3 px-4 text-sm font-medium text-base-content">
                ${payment.totalAmount.toFixed(2)}
            </td>

            {/* Status badges */}
            <td className="py-3 px-4">
                {payment.paymentStatus === 'Pending' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                        <FaClock className="mr-1 text-amber-500" /> Pending
                    </span>
                ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <FaCheckCircle className="mr-1 text-green-500" /> Paid
                    </span>
                )}
            </td>
        </tr>
    );
};

ManageSalesRow.propTypes = {
    payment: PropTypes.shape({
        userEmail: PropTypes.string.isRequired,
        transactionId: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        totalAmount: PropTypes.number.isRequired,
        paymentStatus: PropTypes.oneOf(["Pending", "Paid"]).isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                finalPrice: PropTypes.number.isRequired,
                sellerEmail: PropTypes.string,
            })
        ).isRequired,
    }).isRequired,
};

export default ManageSalesRow;