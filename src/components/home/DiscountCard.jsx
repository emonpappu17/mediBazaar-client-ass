import PropTypes from "prop-types";
import { Link } from "react-router";

const DiscountCard = ({ medicine }) => {

    return (
        <Link to={'/shop'}>
            <div className="rounded-xl overflow-hidden drop-shadow-md bg-base-100 m-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="relative">
                    {/* Medicine Image */}
                    <img
                        src={medicine.medicineImage || 'https://via.placeholder.com/300x200'}
                        alt={medicine.medicineName}
                        className="w-full h-48 object-cover"
                    />
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-[#35C7DF] text-white font-semibold px-4 py-1.5 rounded-full shadow-md">
                        {medicine.discountPercentage}% OFF
                    </div>
                </div>
                <div className="p-5">
                    {/* Medicine Name */}
                    <h2 className="text-xl font-bold truncate text-base-content tracking-tight">
                        {medicine.medicineName}
                    </h2>

                    {/* Price Information */}
                    <div className="flex items-center gap-3 mt-3">
                        <span className="text-2xl font-semibold text-[#35C7DF]">
                            ${medicine.discountPrice.toFixed(2)}
                        </span>
                        <span className="text-lg line-through text-base-content/50">
                            ${medicine.originalPrice.toFixed(2)}
                        </span>
                    </div>

                    {/* Savings */}
                    <p className="text-sm mt-2 text-base-content/70 italic">
                        Save ${(medicine.originalPrice - medicine.discountPrice).toFixed(2)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

DiscountCard.propTypes = {
    medicine: PropTypes.shape({
        medicineImage: PropTypes.string.isRequired,
        medicineName: PropTypes.string.isRequired,
        originalPrice: PropTypes.number.isRequired,
        discountPrice: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired,
    }).isRequired,
};

export default DiscountCard;

