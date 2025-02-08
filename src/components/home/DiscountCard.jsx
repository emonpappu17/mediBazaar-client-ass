// import PropTypes from "prop-types";
// import { motion } from "framer-motion";

// const DiscountCard = ({ product }) => {
//     return (
//         <motion.div
//             className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500"
//             whileHover={{ scale: 1.05 }}
//         >
//             <img
//                 src={product.productImage}
//                 alt={product.productName}
//                 className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
//                 loading="lazy"
//             />

//             {/* Discount Badge */}
//             <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
//                 {product.discountPercentage}% OFF
//             </div>

//             <div className="p-4">
//                 <h3 className="text-lg font-semibold">{product.productName}</h3>
//                 <p className="text-sm text-gray-500">
//                     <span className="line-through">${product.originalPrice}</span>
//                     <span className="text-primary font-bold ml-2">${product.discountPrice}</span>
//                 </p>
//             </div>
//         </motion.div>
//     );
// };

// DiscountCard.propTypes = {
//     product: PropTypes.shape({
//         productImage: PropTypes.string.isRequired,
//         productName: PropTypes.string.isRequired,
//         originalPrice: PropTypes.number.isRequired,
//         discountPrice: PropTypes.number.isRequired,
//         discountPercentage: PropTypes.number.isRequired,
//     }).isRequired,
// };

// export default DiscountCard;




import PropTypes from "prop-types";
import { motion } from "framer-motion";

const DiscountCard = ({ product }) => {
    console.log(product);

    return (
        <motion.div
            className="relative group overflow-hidden rounded-xl hover:shadow-2xl transition duration-500 bg-base-200 p-4"
            whileHover={{ scale: 1.05 }}
        >
            <img
                src={product.medicineImage
                }
                alt={product.medicineName}
                className="w-full h-40 object-cover rounded-lg transform group-hover:scale-110 transition duration-500"
                loading="lazy"
            />

            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded">
                {product.discountPercentage}% OFF
            </div>

            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-base-content">{product.medicineName}</h3>
                <p className="text-sm text-gray-500">
                    <span className="line-through">${product.originalPrice}</span>
                    <span className="text-primary font-bold ml-2">${product.discountPrice}</span>
                </p>
            </div>
        </motion.div>
    );
};

DiscountCard.propTypes = {
    product: PropTypes.shape({
        medicineImage: PropTypes.string.isRequired,
        medicineName: PropTypes.string.isRequired,
        originalPrice: PropTypes.number.isRequired,
        discountPrice: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired,
    }).isRequired,
};

export default DiscountCard;

