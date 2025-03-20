import { Dialog, DialogPanel, DialogTitle, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

const ManageAdvertiseModal = ({ isModalOpen, setSelectedAction, setIsModalOpen, selectedAdvertise, selectedAction, handleAction }) => {
    return (
        <Dialog open={isModalOpen} onClose={() => { setSelectedAction(null), setIsModalOpen(false) }} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel transition className="w-full max-w-md bg-base-100 rounded-lg shadow-xl p-6   duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                    <DialogTitle className="text-lg font-medium text-base-content">
                        Update Advertisement Status
                    </DialogTitle>
                    <p className="mt-2 text-sm text-base-content/70">
                        {/* Select an action for this advertisement. */}
                        Approve advertisement will be shown in the banner
                    </p>

                    {/* Advertisement Details */}
                    {selectedAdvertise && (
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-4">
                                <img
                                    src={selectedAdvertise.image}
                                    alt={selectedAdvertise.name}
                                    className="size-16 rounded-md object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium text-base-content">{selectedAdvertise.name}</p>
                                    <p className="text-sm text-base-content/70">{selectedAdvertise.description}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Dropdown for Approve/Reject */}
                    <div className="mt-4">
                        <label className="text-sm font-medium text-base-content">Select Action</label>
                        <Listbox value={selectedAction} onChange={setSelectedAction}>
                            <div className="relative mt-1">
                                <ListboxButton className="w-full bg-base-200 text-base-content rounded-md py-2 px-3 flex justify-between items-center border border-base-300">
                                    <p>{selectedAction ? selectedAction : "Choose an action"}</p>
                                    <FaChevronDown className="text-sm opacity-60" />
                                </ListboxButton>
                                <ListboxOptions className="absolute mt-1 w-full bg-base-100 rounded-md shadow-lg max-h-60 overflow-auto border border-base-300">
                                    <ListboxOption
                                        value={'Approve'}
                                        className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                    >
                                        {({ selected }) => (
                                            <>
                                                <p className={selected ? "font-semibold" : "font-normal"}>
                                                    {'Approve'}
                                                </p>
                                                {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                            </>
                                        )}
                                    </ListboxOption>
                                    <ListboxOption
                                        value={'Reject'}
                                        className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                    >
                                        {({ selected }) => (
                                            <>
                                                <p className={selected ? "font-semibold" : "font-normal"}>
                                                    {'Reject'}
                                                </p>
                                                {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                            </>
                                        )}
                                    </ListboxOption>
                                </ListboxOptions>
                            </div>
                        </Listbox>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => { setSelectedAction(null), setIsModalOpen(false) }}
                            className="btn"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleAction}
                            className={`btn ${selectedAction === "Approve"
                                ? "bg-green-500 hover:bg-green-600"
                                : selectedAction === "Reject" ? "bg-red-500 hover:bg-red-600" : 'bg-[#0D6FEC] hover:bg-[#35C7DF]'
                                } text-white`}
                        >
                            {selectedAction === "Approve" ? "Approve" : selectedAction === "Reject" ? "Reject" : 'Update'}
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

ManageAdvertiseModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    setSelectedAction: PropTypes.func.isRequired,
    selectedAdvertise: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
    }),
    selectedAction: PropTypes.oneOf(["Approve", "Reject", null]),
    handleAction: PropTypes.func.isRequired,
};

export default ManageAdvertiseModal;