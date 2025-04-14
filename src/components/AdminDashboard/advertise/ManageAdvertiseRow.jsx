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
        <>
            <tr className="hover:bg-base-200">
                {/* Image */}
                <td className="py-3 px-4">
                    <div className="flex items-center justify-center size-16">
                        <img
                            className="size-full rounded-md object-cover"
                            src={ad?.image}
                            alt={ad.name}
                        />
                    </div>
                </td>

                {/* Name */}
                <td className="py-3 px-4 text-sm font-medium text-base-content">
                    {ad.name}
                </td>

                {/* Description */}
                <td className="py-3 px-4 text-sm text-base-content/90">
                    {ad.description}
                </td>

                {/* Seller Email */}
                <td className="py-3 px-4 text-sm text-base-content">
                    {ad.sellerEmail ? ad.sellerEmail : 'limon345@gmail.com'}
                </td>

                {/* Date */}
                <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                    {ad.createdAt ? format(new Date(ad.createdAt), 'MMM dd, yyyy') : "Mar 12, 2025"}
                </td>

                {/* Status */}
                <td className="py-3 px-4">
                    <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${ad.status === "Pending"
                            ? "bg-amber-100 text-amber-800"
                            : ad.status === "Approved"
                                ? "bg-success/10 text-success"
                                : "bg-error/10 text-error"
                            }`}
                    >
                        {ad.status}
                    </span>
                </td>

                {/* Actions */}
                <td className="py-3 px-4">
                    <div className="flex  gap-2">
                        <button
                            onClick={() => {
                                if (protectedAds.includes(ad.name)) {
                                    toast.error("This advertisement cannot be updated as it is for demo purposes.");
                                    return;
                                }
                                openActionModal(ad)
                            }}
                            className="
                            p-2 rounded-full transition-all duration-300
                            bg-[#0D6FEC]/10 hover:bg-[#0D6FEC]
                            text-[#0D6FEC] hover:text-white
                            shadow-sm hover:shadow-md
                          "
                            aria-label="Update advertisement"
                        >
                            <FaExchangeAlt className="text-base" />
                        </button>
                    </div>
                </td>
            </tr>
        </>
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