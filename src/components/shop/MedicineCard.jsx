import { motion } from 'framer-motion';
import { FaCartPlus, FaSearch } from 'react-icons/fa';


import Button from '../common/Button';
import PropTypes from 'prop-types';
import SkeletonMedicineCard from './SkeletonMedicineCard';

const MedicineCard = ({ medicine, layout, isLoading }) => {
    console.log('medicine loading ', isLoading);


    if (isLoading) {
        return <SkeletonMedicineCard layout={layout} />;
    }
    return (
        // <>
        //     <img
        //         src={medicine.image}
        //         alt={medicine.name}
        //         className={
        //             layout === "grid"
        //                 ? "w-full h-40 object-cover rounded-lg"
        //                 : "md:w-40 md:h-40 size-32 object-cover rounded-lg"
        //         }
        //     />
        //     <div className={layout === "list" ? "flex-1" : "text-center mt-2"}>
        //         <h3 className="text-lg font-semibold">{medicine.name}</h3>
        //         <p className="text-gray-600">{medicine.category}</p>
        //         <p className="text-primary font-bold mt-1">${medicine.price.toFixed(2)}</p>
        //         <div className="flex gap-2 mt-3">
        //             <button className="btn btn-primary flex-1">Select</button>
        //             <button className="btn btn-outline flex-1">View</button>
        //         </div>
        //     </div>
        // </>

        <motion.div
            className={`bg-base-100   p-4 rounded-lg shadow-lg transition duration-200 overflow-hidden ${layout === "list" ? "flex items-center gap-4" : ""
                }`}
            whileHover={{ scale: 1.05 }}
        >
            <img
                src={medicine.image}
                alt={medicine.name}
                className={
                    layout === "grid"
                        ? "w-full h-48 object-cover rounded-lg "
                        : "md:size-40 size-32 object-cover rounded-lg"
                }
            />
            <div className={layout === "list" ? "flex-1" : "text-center mt-2 "}>
                <h3 className="text-lg font-semibold">{medicine.name}</h3>
                <p className="text-gray-600">{medicine.category}</p>
                <p className="text-[#0D6FEC] font-bold mt-1">${medicine.price.toFixed(2)}</p>
                {/* <p className="text-primary font-bold mt-1">${medicine.price.toFixed(2)}</p> */}
                <div className="flex gap-2 mt-3">
                    <Button
                        className='flex-1 rounded-[10px] relative group py-6'
                        text='Select'
                        hoverIcon={FaCartPlus}
                    >
                    </Button>
                    <Button
                        className='flex-1 rounded-[10px] relative group'
                        doubleBtn={true}
                        text='View'
                        hoverIcon={FaSearch}
                    >
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};


// Prop Validation
MedicineCard.propTypes = {
    medicine: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,

    }).isRequired,
    layout: PropTypes.oneOf(["grid", "list"]).isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default MedicineCard;