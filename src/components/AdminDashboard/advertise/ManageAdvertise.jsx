import { useState } from "react";
import { useAllAdvertisement, useBanners, useDeleteAdvertise, useUpdateAdvertiseStatus } from "../../../services/bannerService";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { FaCheck, FaChevronDown, FaExchangeAlt, FaTimes, FaToggleOff, FaToggleOn, FaTrashAlt } from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { MdCheck } from "react-icons/md";

const ManageAdvertise = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAdvertise, setSelectedAdvertise] = useState(null);
    const [selectedAction, setSelectedAction] = useState(null); // "approve" or "reject"
    // const [selectedAction, setSelectedAction] = useState(selectedAdvertise?.status); // "approve" or "reject"

    console.log(selectedAdvertise);


    // API Calls
    const { data: advertises } = useAllAdvertisement();
    const { mutate: deleteAdvertise } = useDeleteAdvertise();
    const { mutate: updateAdvertiseStatus } = useUpdateAdvertiseStatus();

    // const { data: advertises, refetch } = useBanners();

    // Open modal for approve/reject
    // const openActionModal = (advertise, type) => {
    //     setSelectedAdvertise(advertise);
    //     setActionType(type);
    //     setIsModalOpen(true);
    // };

    // Open modal for action (approve/reject)
    const openActionModal = (advertise) => {

        setSelectedAdvertise(advertise);
        setSelectedAction(advertise.status)
        setIsModalOpen(true);
    };

    // Handle approve/reject action
    const handleAction = () => {
        console.log('hi');

        if (!selectedAdvertise || !selectedAction) return;
        console.log('good bye');


        const newStatus = selectedAction === "approve" ? "Approved" : "Rejected";
        updateAdvertiseStatus(
            { id: selectedAdvertise._id, status: newStatus },
            {
                onSuccess: () => {
                    toast.success(`Advertisement ${newStatus.toLowerCase()} successfully!`);
                    // refetch();
                    setIsModalOpen(false); // Close modal after action
                },
                onError: () => {
                    toast.error("Failed to update advertisement status.");
                },
            }
        );
    };

    // const { mutate: deleteAdvertise } = useDeleteAdvertise();
    // const { mutate: updateAdvertiseStatus } = useUpdateAdvertiseStatus();

    // Handle status change (Approve/Reject)
    // const handleStatusChange = (id, newStatus) => {
    //     updateAdvertiseStatus(
    //         { id, status: newStatus },
    //         {
    //             onSuccess: () => {
    //                 toast.success(`Advertisement ${newStatus.toLowerCase()} successfully!`);
    //                 refetch();
    //             },
    //             onError: () => {
    //                 toast.error("Failed to update advertisement status.");
    //             },
    //         }
    //     );
    // };

    // Handle delete advertisement
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAdvertise(id, {
                    onSuccess: () => {
                        Swal.fire("Deleted!", "Advertisement has been deleted.", "success");
                        // refetch();
                    },
                    onError: () => {
                        Swal.fire("Error!", "Failed to delete advertisement.", "error");
                    },
                });
            }
        });
    };
    return (
        // deepSeek 
        <div className="drop-shadow-md lg:mx-16">
            {/* Table for existing advertisement requests */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-base-100 rounded-lg">
                    <thead className="bg-base-200">
                        <tr className="border-b border-base-300">
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Name</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Description</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Seller Email</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Submitted Date</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Status</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-300">
                        {advertises?.map((ad) => (
                            <tr key={ad._id} className="hover:bg-base-200">
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        <img className="size-16 rounded-md object-cover" src={ad?.image} alt={ad.name} />
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-base-content font-medium">{ad.name}</td>
                                <td className="py-3 px-4 text-sm text-base-content">{ad.description}</td>
                                <td className="py-3 px-4 text-sm text-base-content">{ad.sellerEmail ? ad.sellerEmail : 'limon345@gmail.com'}</td>
                                <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                                    {ad.createdAt ? format(new Date(ad.createdAt), "yyyy-MM-dd") : "2025-03-15"}
                                </td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-3 py-1 text-sm font-semibold rounded-full ${ad.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : ad.status === "Approved"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {ad.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-base-content">
                                    <div className="flex gap-4">
                                        {/* Action Button */}
                                        {/* <button
                                            onClick={() => openActionModal(ad)}
                                            className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                        >
                                            Action
                                        </button> */}

                                        <button
                                            onClick={() => openActionModal(ad)}
                                            className="p-2 rounded-full transition-all duration-300 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                        >
                                            <FaExchangeAlt className="text-lg" />
                                        </button>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(ad._id)}
                                            className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                        >
                                            <FaTrashAlt className="text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Action (Approve/Reject) */}
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md bg-base-100 rounded-lg shadow-xl p-6">
                        <DialogTitle className="text-lg font-medium text-base-content">
                            Update Advertisement Status
                        </DialogTitle>
                        <p className="mt-2 text-sm text-base-content/70">
                            Select an action for this advertisement.
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
                                            value="approve"
                                            className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <p className={selected ? "font-semibold" : "font-normal"}>Approve</p>
                                                    {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                                </>
                                            )}
                                        </ListboxOption>
                                        <ListboxOption
                                            value="reject"
                                            className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <p className={selected ? "font-semibold" : "font-normal"}>Reject</p>
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
                                onClick={() => setIsModalOpen(false)}
                                className="btn"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleAction}
                                className={`btn ${selectedAction === "approve"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-red-500 hover:bg-red-600"
                                    } text-white`}
                            >
                                {selectedAction === "approve" ? "Approve" : "Reject"}
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default ManageAdvertise;