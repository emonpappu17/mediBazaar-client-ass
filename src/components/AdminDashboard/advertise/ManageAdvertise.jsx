import { useState } from "react";
import { useAllAdvertisement, useUpdateAdvertiseStatus } from "../../../services/bannerService";
import toast from "react-hot-toast";
import AdvertiseStat from "../../common/AdvertiseStat";
import ManageAdvertiseRow from "./ManageAdvertiseRow";
import ManageAdvertiseModal from "./ManageAdvertiseModal";
import TableSkeleton from "../../common/TableSkeleton";

const ManageAdvertise = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAdvertise, setSelectedAdvertise] = useState(null);
    const [selectedAction, setSelectedAction] = useState(null); // "approve" or "reject"

    // API Calls
    const { data: advertises, isLoading, isError } = useAllAdvertisement();
    const { mutate: updateAdvertiseStatus } = useUpdateAdvertiseStatus();

    // Open modal for action (approve/reject)
    const openActionModal = (advertise) => {
        setSelectedAdvertise(advertise);
        setIsModalOpen(true);
    };

    // Handle approve/reject action
    const handleAction = () => {

        if (!selectedAdvertise || !selectedAction) return toast.error("Choose an acton first.");;

        const newStatus = selectedAction === "Approve" ? "Approved" : "Rejected";

        updateAdvertiseStatus(
            { id: selectedAdvertise._id, status: newStatus },
            {
                onSuccess: () => {
                    toast.success(`Advertisement ${newStatus.toLowerCase()} successfully!`);
                    setIsModalOpen(false);
                    setSelectedAction(null)
                },
                onError: () => {
                    toast.error("Failed to update advertisement status.");
                },
            }
        );
    };

    return (
        <div>
            {/* Status count */}
            <AdvertiseStat advertises={advertises} isLoading={isLoading} isError={isError} />
            {
                isLoading ? (
                    <TableSkeleton></TableSkeleton>
                ) : (
                    isError ? (
                        <div className="bg-error/10 text-error p-6 rounded-lg text-center">
                            Failed to load advertise data. Please try again.
                        </div>
                    ) : (
                        advertises.length === 0 ? (
                            <div className="bg-base-200 p-6 rounded-lg text-center">
                                <p className="text-base-content">No advertise records found.</p>
                            </div>
                        ) : (
                            <>
                                {/* Table  */}
                                <div className="overflow-x-auto drop-shadow-md">
                                    <table className="min-w-full bg-base-100 rounded-lg">
                                        <thead className="bg-base-200">
                                            <tr className="border-b border-base-300">
                                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
                                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Name</th>
                                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Description</th>
                                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Seller Email</th>
                                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider truncate">Submitted Date</th>
                                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Status</th>
                                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-base-300">
                                            {advertises?.advertisements?.map((ad) => (
                                                <ManageAdvertiseRow key={ad._id} ad={ad} openActionModal={openActionModal} />
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        )
                    )
                )
            }


            {/* Modal for Action (Approve/Reject) */}
            <ManageAdvertiseModal
                isModalOpen={isModalOpen}
                setSelectedAction={setSelectedAction}
                setIsModalOpen={setIsModalOpen}
                selectedAdvertise={selectedAdvertise}
                selectedAction={selectedAction}
                handleAction={handleAction} />
        </div>
    );
};

export default ManageAdvertise;