// import PropTypes from "prop-types";

// const CategoryCard = ({ category }) => {
//     return (

//         <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
//             <img src={category.categoryImage} alt={category.categoryName
//             } className="w-full h-40 object-cover rounded-md" loading="lazy" />
//             <h3 className="text-lg font-semibold mt-2">{category.categoryName
//             }</h3>
//             <p className="text-sm text-gray-500">{category.medicineCount}</p>
//         </div>

//     );
// };

// CategoryCard.propTypes = {
//     category: PropTypes.shape({
//         categoryImage: PropTypes.string.isRequired,
//         categoryName: PropTypes.string.isRequired,
//         medicineCount: PropTypes.number,
//     }).isRequired,
// };

// export default CategoryCard;




import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaPills, FaSyringe, FaCapsules, FaTint, FaBriefcaseMedical, FaFlask, FaTablets } from "react-icons/fa";

// Icon Mapping for Categories
const categoryIcons = {
    Tablet: <FaTablets className="text-white text-3xl" />,
    Capsule: <FaCapsules className="text-white text-3xl" />,
    Syrup: <FaTint className="text-white text-3xl" />,
    Injection: <FaSyringe className="text-white text-3xl" />,
    Drops: <FaFlask className="text-white text-3xl" />,
    Ointment: <FaBriefcaseMedical className="text-white text-3xl" />,
    Other: <FaPills className="text-white text-3xl" />,
};

const CategoryCard = ({ category }) => {
    return (
        <motion.div
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition duration-500 "
            whileHover={{ scale: 1.05 }} // Framer Motion Animation
        >
            {/* Category Image */}
            <img
                src={category.categoryImage}
                alt={category.categoryName}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition duration-500"></div>

            {/* Icon & Text Content */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 ">
                <div className="bg-primary p-3 rounded-full">{categoryIcons[category.categoryName] || <FaPills className="text-white text-3xl" />}</div>
                <div>
                    <h3 className="text-white text-xl font-bold">{category.categoryName}</h3>
                    <p className="text-gray-300 text-sm">{category.medicineCount} Medicines Available</p>
                </div>
            </div>
        </motion.div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.shape({
        categoryImage: PropTypes.string.isRequired,
        categoryName: PropTypes.string.isRequired,
        medicineCount: PropTypes.number,
    }).isRequired,
};

export default CategoryCard;
