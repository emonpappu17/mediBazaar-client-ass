import { motion } from 'framer-motion';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import Button from '../common/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MedicineModal from '../common/MedicineModal';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

const MedicineCard = ({ medicine, layout, }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
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
                            // onClick={() => setIsOpen(true)}
                            onclick={() => setIsModalOpen(true)}
                        >
                        </Button>
                    </div>
                </div>
            </motion.div>


            {/* <Dialog open={isModalOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsModalOpen(false)}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                Payment successful
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-white/50">
                                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                                order.
                            </p>
                            <div className="mt-4">
                                <Button text='modal' onclick={() => setIsModalOpen(false)}></Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog> */}



            {/* <motion.div
                className={`bg-base-100 p-4 rounded-lg shadow-lg transition duration-200 overflow-hidden ${layout === "list" ? "flex items-center gap-4" : ""}`}
                whileHover={{ scale: 1.05 }}
            >
                <img
                    src={medicine.image}
                    alt={medicine.name}
                    className={layout === "grid" ? "w-full h-48 object-cover rounded-lg" : "md:size-40 size-32 object-cover rounded-lg"}
                />
                <div className={layout === "list" ? "flex-1" : "text-center mt-2"}>
                    <h3 className="text-lg font-semibold">{medicine.name}</h3>
                    <p className="text-gray-600">{medicine.category}</p>
                    <p className="text-[#0D6FEC] font-bold mt-1">${medicine.price.toFixed(2)}</p>
                    <div className="flex gap-2 mt-3">
                        <Button className="flex-1 rounded-[10px] relative group py-6" text="Select" hoverIcon={FaCartPlus} />
                        <Button className="flex-1 rounded-[10px] relative group" doubleBtn={true} text="View" hoverIcon={FaSearch} onclick={() => setIsModalOpen(true)} />
                    </div>
                </div>
            </motion.div> */}

            {/* Medicine Modal */}
            <MedicineModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} medicine={medicine} />
        </>
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
};

export default MedicineCard;