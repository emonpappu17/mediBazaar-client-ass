import PropTypes from "prop-types";

const DiscountCard = ({ medicine }) => {

    return (
        <div className="relative group overflow-hidden rounded-xl hover:shadow-2xl transition duration-500 bg-base-200 p-4 border cursor-pointer border-base-300">
            <img
                src={medicine.medicineImage
                }
                alt={medicine.medicineName}
                className="w-full h-full object-cover rounded-lg transform group-hover:scale-110 transition duration-500"
                loading="lazy"
            />

            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
                {medicine.discountPercentage}% OFF
            </div>

            <div className="my-4 text-center ">
                <h3 className="text-lg font-semibold text-base-content">{medicine.medicineName}</h3>
                <p className="text-sm text-gray-500">
                    <span className="line-through">${medicine.originalPrice}</span>
                    <span className="text-primary font-bold ml-2">${medicine.discountPrice}</span>
                </p>
            </div>
        </div>
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

