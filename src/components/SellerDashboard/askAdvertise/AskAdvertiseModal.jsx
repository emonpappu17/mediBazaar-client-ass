import Button from '../../common/Button';
import { Dialog, DialogPanel, DialogTitle, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';
import { MdCheck } from 'react-icons/md';
import ImageUpload from '../../common/ImageUpload';

const AskAdvertiseModal = ({ isModalOpen, handleCloseModal, handleSubmit, selectedMedicine, setSelectedMedicine, sellerMedicine, handleImageUpload, imageText, imagePreview, isSubmitting, setDescription }) => {
    return (
        <Dialog
            open={isModalOpen}
            onClose={handleCloseModal}
            className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel transition className="w-full max-w-md bg-base-100 rounded-lg shadow-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                    <DialogTitle className="text-lg font-medium text-base-content">Ask for Advertisement</DialogTitle>
                    <p className="mt-2 text-sm text-base-content/70">
                        Select a medicine, upload an image, and provide a description for your advertisement.
                    </p>
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="grid gap-4 mt-4">

                        {/* Medicine Selection Dropdown */}
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-base-content">Select Medicine</label>
                            <Listbox value={selectedMedicine} onChange={setSelectedMedicine}>
                                <div className="relative">
                                    <ListboxButton className="w-full bg-base-200 text-base-content rounded-md py-2 px-3 flex justify-between items-center border border-base-300">
                                        <p>{selectedMedicine ? selectedMedicine : "Choose a Medicine"}</p>
                                        <FaChevronDown className="text-sm opacity-60 " />
                                    </ListboxButton>
                                    <ListboxOptions className="absolute mt-1 w-full bg-base-100 rounded-md shadow-lg max-h-60 overflow-auto border border-base-300">
                                        {sellerMedicine?.length > 0 ? (
                                            sellerMedicine?.map((medicine) => (
                                                <ListboxOption
                                                    key={medicine._id}
                                                    value={medicine.name}
                                                    className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <p className={selected ? "font-semibold" : "font-normal"}>
                                                                {medicine.name}
                                                            </p>
                                                            {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                                        </>
                                                    )}
                                                </ListboxOption>
                                            ))
                                        ) : (
                                            <p className="py-2 px-4 text-gray-400">No medicines available</p>
                                        )}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
                        </div>

                        {/* Image Upload */}
                        <ImageUpload
                            handleImageUpload={handleImageUpload}
                            imageText={imageText}
                            previewImage={imagePreview}
                            title={'Advertisement Image Upload'}
                        />

                        {/* Description */}
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-base-content">Advertisement Description</label>
                            <textarea
                                required
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Write a beautiful promotional description..."
                                className="min-h-20 w-full rounded-md p-2 text-sm bg-base-200 border-0 outline-base-content focus:outline-1"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className="btn"
                            >
                                Cancel
                            </button>

                            <Button
                                disabled={isSubmitting}
                                spinner={isSubmitting}
                                type='submit'
                                text='Add advertise'
                                className='px-4 py-2 rounded-md w-40'
                            />
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

// Prop Validation
AskAdvertiseModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    selectedMedicine: PropTypes.string,
    setSelectedMedicine: PropTypes.func.isRequired,
    sellerMedicine: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleImageUpload: PropTypes.func.isRequired,
    imageText: PropTypes.string.isRequired,
    imagePreview: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    setDescription: PropTypes.func.isRequired,
};

export default AskAdvertiseModal;