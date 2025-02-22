import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';


const MedicineModal = ({ isOpen, closeModal, medicine }) => {
    const [quantity, setQuantity] = useState(1);

    if (!medicine) return null; // Prevent rendering if no medicine is selected



    return (
        // <Transition appear={true} show={isOpen} as={Fragment}>
        //     <Dialog as="div" className="relative z-50" onClose={closeModal}>
        //         <div className="fixed inset-0 bg-black opacity-50" />

        //         <div className="fixed inset-0 flex items-center justify-center p-4 border-red-600 border">
        //             <TransitionChild
        //                 as={Fragment}
        //                 enter="ease-out duration-1000"
        //                 enterFrom="opacity-0 scale-95"
        //                 // enterTo="opacity-100 scale-100"
        //                 // leave="ease-in duration-200"
        //                 // leaveFrom="opacity-100 scale-100"
        //                 // leaveTo="opacity-0 scale-95"
        //             >
        //                 <DialogPanel className="w-full max-w-lg bg-base-100 rounded-lg shadow-lg p-6">
        //                     <DialogTitle className="text-xl font-bold text-gray-800 dark:text-white">
        //                         {medicine.name}
        //                     </DialogTitle>

        //                     <div className="mt-4">
        //                         <img
        //                             src={medicine.image}
        //                             alt={medicine.name}
        //                             className="w-full h-64 object-cover rounded-lg"
        //                         />
        //                     </div>

        //                     <div className="mt-4">
        //                         <p className="text-gray-600 dark:text-gray-300"><strong>Category:</strong> {medicine.category}</p>
        //                         <p className="text-gray-600 dark:text-gray-300"><strong>Company:</strong> {medicine.company}</p>
        //                         <p className="text-gray-600 dark:text-gray-300"><strong>Dosage:</strong> {medicine.massUnit}</p>
        //                         <p className="text-gray-600 dark:text-gray-300"><strong>Price:</strong> <span className="text-primary font-bold">${medicine.price}</span></p>
        //                         <p className="text-gray-600 dark:text-gray-300"><strong>Stock:</strong> {medicine.stock}</p>
        //                         <p className="text-gray-600 dark:text-gray-300"><strong>Description:</strong> {medicine.description}</p>
        //                     </div>

        //                     <div className="mt-6 flex justify-end gap-3">
        //                         <Button className="px-6 py-2 rounded-lg" text="Select" />
        //                         <Button className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600" text="Close" onclick={closeModal} />
        //                     </div>
        //                 </DialogPanel>
        //             </TransitionChild>
        //         </div>
        //     </Dialog>
        // </Transition>

        // <Transition appear show={isOpen} as={Fragment}>
        //     <Dialog as="div" className="relative z-50" onClose={closeModal}>
        //         {/* Background Overlay
        //         <TransitionChild
        //             as={Fragment}
        //             enter="ease-out duration-300"
        //             enterFrom="opacity-90"
        //             enterTo="opacity-100"
        //             leave="ease-in duration-200"
        //             leaveFrom="opacity-100"
        //             leaveTo="opacity-0"
        //         >
        //             <div className="fixed inset-0  opacity-50 backdrop-blur-md" />
        //         </TransitionChild> */}

        //         <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-md" />
        //         {/* Modal Content */}
        //         <div className="fixed inset-0 flex items-center justify-center p-4">
        //             <TransitionChild
        //                 as={Fragment}
        //                 enter="ease-out duration-300"
        //                 enterFrom="opacity-0 scale-95"
        //                 enterTo="opacity-100 scale-100"
        //                 leave="ease-in duration-200"
        //                 leaveFrom="opacity-100 scale-100"
        //                 leaveTo="opacity-0 scale-95"
        //             >
        //                 <DialogPanel className="w-full max-w-lg bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        //                     {/* Animated Container */}
        //                     <motion.div
        //                         initial={{ opacity: 0, y: -50 }}
        //                         animate={{ opacity: 1, y: 0 }}
        //                         exit={{ opacity: 0, y: 50 }}
        //                         transition={{ duration: 0.4, ease: "easeOut" }}
        //                         className="p-6"
        //                     >
        //                         {/* Title */}
        //                         <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white text-center">
        //                             {medicine.name}
        //                         </DialogTitle>

        //                         {/* Image */}
        //                         <div className="mt-4 flex justify-center">
        //                             <motion.img
        //                                 src={medicine.image}
        //                                 alt={medicine.name}
        //                                 className="w-full h-64 object-cover rounded-lg shadow-lg"
        //                                 initial={{ scale: 0.8 }}
        //                                 animate={{ scale: 1 }}
        //                                 transition={{ duration: 0.3 }}
        //                             />
        //                         </div>

        //                         {/* Medicine Details */}
        //                         <div className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
        //                             <p><strong>Category:</strong> {medicine.category}</p>
        //                             <p><strong>Company:</strong> {medicine.company}</p>
        //                             <p><strong>Dosage:</strong> {medicine.massUnit}</p>
        //                             <p><strong>Price:</strong> <span className="text-primary font-bold">${medicine.price}</span></p>
        //                             <p><strong>Stock:</strong> {medicine.stock}</p>
        //                             <p><strong>Description:</strong> {medicine.description}</p>
        //                         </div>

        //                         {/* Buttons */}
        //                         <div className="mt-6 flex justify-between">
        //                             <Button className="px-6 py-2 rounded-lg w-1/2 mr-2" text="Select" />
        //                             <Button className="px-6 py-2 rounded-lg w-1/2 bg-red-500 hover:bg-red-600" text="Close" onclick={closeModal} />
        //                         </div>
        //                     </motion.div>
        //                 </DialogPanel>
        //             </TransitionChild>
        //         </div>
        //     </Dialog>
        // </Transition>

        // final look
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">

            <div className="fixed inset-0 bg-black opacity-50" />

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">

                <DialogPanel className="max-w-[1000px]  bg-base-100 md:p-10 p-5 overflow-y-auto rounded-2xl  max-h-[90vh]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="md:flex gap-5 "
                    >
                        {/* Image side */}
                        <div>
                            <img src={medicine.image} alt={medicine.name} className='md:size-80 max-h-[300px] w-full object-cover rounded-lg' />
                        </div>

                        {/* Content side */}
                        <div className='space-y-4 mt-3 md:mt-0'>
                            <DialogTitle className=" text-4xl ">{medicine.name}</DialogTitle>

                            <div className="divider"></div>

                            <p className="text-[#0D6FEC] font-extrabold text-3xl">${medicine.price}</p>

                            <Description className={'text-gray-400'}>{medicine.description}</Description>

                            {/* Quantity and Add to Cart */}
                            <div className="flex gap-3 items-center">
                                <div className='flex'>

                                    {/* Decrease Button */}
                                    <div
                                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                        className={`select-none px-4 py-2 border-gray-300 border w-fit cursor-pointer font-bold ${quantity === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#35C7DF] hover:text-white'}`}
                                    >
                                        -
                                    </div>
                                    <div className='px-4 py-2  w-fit border-gray-300 border-y font-bold'>
                                        {quantity}
                                    </div>

                                    {/* Increase Button */}
                                    <div
                                        onClick={() => quantity <= medicine.stock && setQuantity(quantity + 1)}
                                        className={`select-none px-4 py-2 border-gray-300 border w-fit cursor-pointer font-bold ${quantity <= medicine.stock ? 'hover:bg-[#35C7DF] hover:text-white' : 'cursor-not-allowed opacity-50'} `}
                                    >
                                        +
                                    </div>
                                </div>

                                <div>
                                    <Button text='Add to cart' className='px-4 py-[10px] rounded-[5px]'></Button>
                                </div>
                            </div>

                            {/* Medicine Info */}
                            <div>
                                <p className="text-gray-400 "><strong>Category:</strong> {medicine.category}</p>
                                <p className="text-gray-400 "><strong>Company:</strong> {medicine.company}</p>
                                <p className="text-gray-400 "><strong>Dosage:</strong> {medicine.massUnit}</p>
                                <p className="text-gray-400 "><strong>Stock:</strong> {medicine.stock === 0 ? 'Unavailable' : medicine.stock}</p>
                                <p className="text-gray-400 "><strong>Discount:</strong> {medicine.discount}</p>
                            </div>
                            <div className='flex justify-end'>
                                <button onClick={closeModal} className='text-3xl cursor-pointer hover:text-red-600'><RxCross1 /></button>
                            </div>
                        </div>
                    </motion.div>
                </DialogPanel>
            </div>
        </Dialog >


        // <Transition appear show={isOpen} as={Fragment}>
        //     <Dialog as="div" className="relative z-50" onClose={closeModal}>
        //         {/* Background Overlay */}
        //         {/* <TransitionChild
        //             as={Fragment}
        //             enter="ease-out duration-300"
        //             enterFrom="opacity-0"
        //             enterTo="opacity-100"
        //             leave="ease-in duration-300"
        //             leaveFrom="opacity-100"
        //             leaveTo="opacity-0"
        //         >
        //             <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-md" />
        //         </TransitionChild> */}
        //         <div className="fixed inset-0 bg-black opacity-50" />

        //         {/* Modal Content */}
        //         <div className="fixed inset-0 flex items-center justify-center p-4">
        //             <TransitionChild
        //                 as={Fragment}
        //                 enter="ease-out duration-500"
        //                 enterFrom="opacity-0 scale-95"
        //                 enterTo="opacity-100 scale-100"
        //                 leave="ease-in duration-300"
        //                 leaveFrom="opacity-100 scale-100"
        //                 leaveTo="opacity-0 scale-95"
        //             >
        //                 <DialogPanel className="max-w-[1000px] bg-base-100 p-6 md:p-12 rounded-2xl max-h-[90vh] overflow-y-auto">
        //                     {/* Animated Container */}
        //                     <motion.div
        //                         initial={{ opacity: 0, scale: 0.9 }}
        //                         animate={{ opacity: 1, scale: 1 }}
        //                         exit={{ opacity: 0, scale: 0.9 }}
        //                         transition={{ duration: 0.4, ease: "easeOut" }}
        //                         className="md:flex gap-4"
        //                     >
        //                         {/* Image side */}
        //                         <div>
        //                             <img src={medicine.image} alt={medicine.name} className="size-80 object-cover rounded-lg" />
        //                         </div>

        //                         {/* Content side */}
        //                         <div className="space-y-4">
        //                             <DialogTitle className="text-4xl">{medicine.name}</DialogTitle>
        //                             <p className="text-[#0D6FEC] font-extrabold text-3xl">${medicine.price}</p>
        //                             <Description className="text-gray-400">{medicine.description}</Description>

        //                             {/* Quantity and Add to Cart */}
        //                             <div className="flex gap-3 items-center">
        //                                 <div className="flex">
        //                                     <div className="px-4 py-2 group hover:bg-[#35C7DF] border-gray-300 border w-fit cursor-pointer font-bold">
        //                                         <p className="group-hover:text-white">-</p>
        //                                     </div>
        //                                     <div className="px-4 py-2 w-fit border-gray-300 border-y font-bold">1</div>
        //                                     <div className="px-4 py-2 group hover:bg-[#35C7DF] border-gray-300 border w-fit cursor-pointer font-bold">
        //                                         <p className="group-hover:text-white">+</p>
        //                                     </div>
        //                                 </div>
        //                                 <Button text="Add to cart" className="px-4 py-[10px] rounded-[5px]" />
        //                             </div>

        //                             {/* Medicine Info */}
        //                             <div>
        //                                 <p className="text-gray-400"><strong>Category:</strong> {medicine.category}</p>
        //                                 <p className="text-gray-400"><strong>Company:</strong> {medicine.company}</p>
        //                                 <p className="text-gray-400"><strong>Dosage:</strong> {medicine.massUnit}</p>
        //                                 <p className="text-gray-400"><strong>Stock:</strong> {medicine.stock}</p>
        //                             </div>

        //                             {/* Close Button */}
        //                             <div className="flex justify-end">
        //                                 <Button text="Close" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md" onclick={closeModal} />
        //                             </div>
        //                         </div>
        //                     </motion.div>
        //                 </DialogPanel>
        //             </TransitionChild>
        //         </div>
        //     </Dialog>
        // </Transition>

    );
};

MedicineModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    medicine: PropTypes.object,
};

export default MedicineModal;
