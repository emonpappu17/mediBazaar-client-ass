import { motion } from 'framer-motion';
import { FaCartPlus, FaEye } from 'react-icons/fa';

const MedicineCard = ({ medicine, layout }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }} // Add hover effect
            className={`card bg-base-100 shadow-xl ${layout === 'grid' ? 'w-full' : 'w-96'
                }`}
        >
            <figure className="px-4 pt-4">
                <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="rounded-xl h-48 w-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{medicine.name}</h2>
                <p className="text-sm text-gray-500">{medicine.genericName}</p>
                <p className="text-lg font-bold">${medicine.price}</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">
                        <FaCartPlus className="mr-2" /> Add to Cart
                    </button>
                    <button className="btn btn-secondary">
                        <FaEye className="mr-2" /> View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default MedicineCard;