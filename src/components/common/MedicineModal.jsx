import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';

const MedicineModal = ({ isOpen, closeModal, medicine }) => {
    if (!medicine) return null; // Prevent rendering if no medicine is selected

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <div className="fixed inset-0 bg-black bg-opacity-50" />

                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-lg bg-base-100 rounded-lg shadow-lg p-6">
                            <Dialog.Title className="text-xl font-bold text-gray-800 dark:text-white">
                                {medicine.name}
                            </Dialog.Title>

                            <div className="mt-4">
                                <img
                                    src={medicine.image}
                                    alt={medicine.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-600 dark:text-gray-300"><strong>Category:</strong> {medicine.category}</p>
                                <p className="text-gray-600 dark:text-gray-300"><strong>Company:</strong> {medicine.company}</p>
                                <p className="text-gray-600 dark:text-gray-300"><strong>Dosage:</strong> {medicine.massUnit}</p>
                                <p className="text-gray-600 dark:text-gray-300"><strong>Price:</strong> <span className="text-primary font-bold">${medicine.price}</span></p>
                                <p className="text-gray-600 dark:text-gray-300"><strong>Stock:</strong> {medicine.stock}</p>
                                <p className="text-gray-600 dark:text-gray-300"><strong>Description:</strong> {medicine.description}</p>
                            </div>

                            <div className="mt-6 flex justify-end gap-3">
                                <Button className="px-6 py-2 rounded-lg" text="Select" />
                                <Button className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600" text="Close" onclick={closeModal} />
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>

    );
};

MedicineModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    medicine: PropTypes.object,
};

export default MedicineModal;
