import PropTypes from "prop-types";
import Button from "../common/Button";

const DiscountCard = ({ medicine }) => {

    return (
        // <div className="relative hover:scale-110  overflow-hidden rounded-xl hover:shadow-2xl transition duration-500 bg-base-200 p-4 border cursor-pointer border-base-300">
        //     <img
        //         src={medicine.medicineImage
        //         }
        //         alt={medicine.medicineName}
        //         className="w-full h-full object-cover rounded-lg transform  transition duration-500"
        //         loading="lazy"
        //     />

        //     {/* Discount Badge */}
        //     <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
        //         {medicine.discountPercentage}% OFF
        //     </div>

        //     <div className="my-4 text-center ">
        //         <h3 className="text-lg font-semibold text-base-content">{medicine.medicineName}</h3>
        //         <p className="text-sm text-gray-500">
        //             <span className="line-through">${medicine.originalPrice}</span>
        //             <span className="text-[#0D6FEC] font-bold ml-2">${medicine.discountPrice}</span>
        //         </p>
        //     </div>
        // </div>

        // <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 ">
        //     <figure className="relative">
        //         {/* Medicine Image */}
        //         <img
        //             src={medicine.medicineImage || 'https://via.placeholder.com/300x200'} // Fallback image
        //             alt={medicine.medicineName}
        //             className="w-full h-48 object-cover rounded-t-xl"
        //         />
        //         {/* Discount Badge */}
        //         <div className="absolute top-3 right-3 badge badge-success badge-lg text-white font-semibold px-3 py-3">
        //             {medicine.discountPercentage}% OFF
        //         </div>
        //     </figure>
        //     <div className="card-body p-5">
        //         {/* Medicine Name */}
        //         <h2 className="card-title text-base-content text-xl font-bold line-clamp-1">
        //             {medicine.medicineName}
        //         </h2>

        //         {/* Price Information */}
        //         <div className="flex items-center gap-3 mt-2">
        //             <span className="text-success text-2xl font-semibold">
        //                 ${medicine.discountPrice.toFixed(2)}
        //             </span>
        //             <span className="text-base-content/50 text-lg line-through">
        //                 ${medicine.originalPrice.toFixed(2)}
        //             </span>
        //         </div>

        //         {/* Savings */}
        //         <p className="text-base-content/70 text-sm mt-1">
        //             Save ${(medicine.originalPrice - medicine.discountPrice).toFixed(2)}
        //         </p>

        //         {/* Action Button */}
        //         <div className="card-actions mt-4">
        //             <button className="btn btn-primary w-full">
        //                 Add to Cart
        //             </button>
        //         </div>
        //     </div>
        // </div>


        // <div className=" rounded-xl overflow-hidden drop-shadow-md bg-base-100 m-3">
        //     <div className="relative">
        //         {/* Medicine Image */}
        //         <img
        //             src={medicine.medicineImage || 'https://via.placeholder.com/300x200'}
        //             alt={medicine.medicineName}
        //             className="w-full h-48 object-cover"
        //         />
        //         {/* Discount Badge */}
        //         <div className="absolute top-3 right-3 bg-[#35C7DF] text-white font-semibold px-3 py-1 rounded-full">
        //             {medicine.discountPercentage}% OFF
        //         </div>
        //     </div>
        //     <div className="p-5">
        //         {/* Medicine Name */}
        //         <h2 className="text-xl font-bold truncate text-base-content">
        //             {medicine.medicineName}
        //         </h2>

        //         {/* Price Information */}
        //         <div className="flex items-center gap-3 mt-2">
        //             <span className="text-2xl font-semibold text-[#35C7DF]">
        //                 ${medicine.discountPrice.toFixed(2)}
        //             </span>
        //             <span className="text-lg line-through text-base-content/50">
        //                 ${medicine.originalPrice.toFixed(2)}
        //             </span>
        //         </div>

        //         {/* Savings */}
        //         <p className="text-sm mt-1 text-base-content/70">
        //             Save ${(medicine.originalPrice - medicine.discountPrice).toFixed(2)}
        //         </p>

        //         {/* Action Button */}
        //         <button
        //             className="w-full mt-4 py-2 rounded-lg font-semibold text-white transition-colors duration-300 hover:bg-opacity-90"
        //             style={{ backgroundColor: '#0D6FEC' }} // Your primary color
        //         >
        //             Add to Cart
        //         </button>

        //     </div>
        // </div>



        <div className="rounded-xl overflow-hidden drop-shadow-md bg-base-100 m-3 transform hover:scale-105 transition-transform duration-300">
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

