import { motion } from 'framer-motion';
import { FaCartPlus, FaEye, FaSearch } from 'react-icons/fa';
import Button from '../common/Button';

const MedicineCard = ({ medicine, layout }) => {


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
            // key={index}
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
                    {/* <button className="btn btn-primary flex-1">Select</button> */}
                    {/* <button className="btn btn-primary flex-1">Select</button> */}
                    <Button className='flex-1 rounded-[10px] py-3 mr-3' text='Select'></Button>
                    <Button className='flex-1 rounded-[10px] relative' doubleBtn={true} text='View' hoverIcon={FaSearch}></Button>
                    {/* <Button className='flex-1 rounded-[10px] relative' doubleBtn={true} text='View'></Button> */}



                    {/* <button className="relative w-32 h-12 bg-blue-600 text-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-blue-700 group">
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:-translate-y-2">
                            Select
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-1/2 top-3 opacity-0 w-6 h-6 text-white transition-all duration-300 group-hover:opacity-100 group-hover:top-1/2 -translate-x-1/2 -translate-y-1/2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </button> */}
                    {/* <button className="btn btn-outline flex-1">View</button> */}
                </div>
            </div>
        </motion.div>
    );
};

export default MedicineCard;