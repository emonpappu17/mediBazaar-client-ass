import { format } from "date-fns";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FaExchangeAlt } from "react-icons/fa";

const ManageAdvertiseRow = ({ ad, openActionModal }) => {
    const protectedAds = [
        'Antibiotic Amoxicillin 250mg',
        'Vitamin C Gummies',
        'Insulin Injection'
    ]
    return (
        <tr
            className="hover:bg-base-200">
            <td className="py-3 px-4">
                <div className="flex items-center">
                    <img className="size-16 rounded-md object-cover" src={ad?.image} alt={ad.name} />
                </div>
            </td>
            <td className="py-3 px-4 text-sm text-base-content font-medium">{ad.name}</td>
            <td className="py-3 px-4 text-sm text-base-content">{ad.description}</td>
            <td className="py-3 px-4 text-sm text-base-content">{ad.sellerEmail ? ad.sellerEmail : 'limon345@gmail.com'}</td>
            <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                {ad.createdAt ? format(new Date(ad.createdAt), "yyyy-MM-dd") : "2025-03-15"}
            </td>
            <td className="py-3 px-4">
                <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${ad.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : ad.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                >
                    {ad.status}
                </span>
            </td>
            <td className="py-3 px-4 text-sm text-base-content">
                <div className="flex gap-4">
                    {/* Action Button */}
                    <button
                        onClick={() => {
                            if (protectedAds.includes(ad.name)) {
                                toast.error("This advertisement cannot be updated as it is for demo purposes.");
                                return;
                            }
                            openActionModal(ad)
                        }}
                        className="p-2 rounded-full transition-all duration-300 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                    >
                        <FaExchangeAlt className="text-lg" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

ManageAdvertiseRow.propTypes = {
    ad: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        sellerEmail: PropTypes.string,
        createdAt: PropTypes.string,
        status: PropTypes.oneOf(["Pending", "Approved", "Rejected"]).isRequired,
    }).isRequired,
    openActionModal: PropTypes.func.isRequired,
};

export default ManageAdvertiseRow;