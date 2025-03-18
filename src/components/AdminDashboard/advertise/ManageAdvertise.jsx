import { useState } from "react";
import { useBanners, useDeleteAdvertise } from "../../../services/bannerService";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrashAlt } from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const ManageAdvertise = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAdvertise, setSelectedAdvertise] = useState(null);
    const [actionType, setActionType] = useState(null); // "approve" or "reject"


    // API Calls
    const { data: advertises, refetch } = useBanners();

    // Open modal for approve/reject
    const openActionModal = (advertise, type) => {
        setSelectedAdvertise(advertise);
        setActionType(type);
        setIsModalOpen(true);
    };

    // Handle approve/reject action
    const handleAction = () => {
        if (!selectedAdvertise || !actionType) return;

        const newStatus = actionType === "approve" ? "Approved" : "Rejected";
        // updateAdvertiseStatus(
        //     { id: selectedAdvertise._id, status: newStatus },
        //     {
        //         onSuccess: () => {
        //             toast.success(`Advertisement ${newStatus.toLowerCase()} successfully!`);
        //             refetch();
        //             setIsModalOpen(false); // Close modal after action
        //         },
        //         onError: () => {
        //             toast.error("Failed to update advertisement status.");
        //         },
        //     }
        // );
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
    // const handleDelete = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             deleteAdvertise(id, {
    //                 onSuccess: () => {
    //                     Swal.fire("Deleted!", "Advertisement has been deleted.", "success");
    //                     refetch();
    //                 },
    //                 onError: () => {
    //                     Swal.fire("Error!", "Failed to delete advertisement.", "error");
    //                 },
    //             });
    //         }
    //     });
    // };
    return (
        //deepSeek 

        // <div className="drop-shadow-md lg:mx-16">

        //     <div className="overflow-x-auto">
        //         <table className="min-w-full bg-base-100 rounded-lg">
        //             <thead className="bg-base-200">
        //                 <tr className="border-b border-base-300">
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Name</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Description</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Seller Email</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Submitted Date</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Status</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody className="divide-y divide-base-300">
        //                 {advertises?.map((ad) => (
        //                     <tr key={ad._id} className="hover:bg-base-200">
        //                         <td className="py-3 px-4">
        //                             <div className="flex items-center">
        //                                 <img className="size-16 rounded-md object-cover" src={ad?.image} alt={ad.name} />
        //                             </div>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-base-content font-medium">{ad.name}</td>
        //                         <td className="py-3 px-4 text-sm text-base-content">{ad.description}</td>
        //                         <td className="py-3 px-4 text-sm text-base-content">{ad.sellerEmail ? ad.sellerEmail : 'limon345@gmail.com'}</td>
        //                         <td className="py-3 px-4 text-sm text-base-content text-nowrap">
        //                             {ad.createdAt ? format(new Date(ad.createdAt), "yyyy-MM-dd") : "N/A"}
        //                         </td>
        //                         <td className="py-3 px-4">
        //                             <span
        //                                 className={`px-3 py-1 text-sm font-semibold rounded-full ${ad.status === "Pending"
        //                                     ? "bg-yellow-100 text-yellow-800"
        //                                     : ad.status === "Approved"
        //                                         ? "bg-green-100 text-green-800"
        //                                         : "bg-red-100 text-red-800"
        //                                     }`}
        //                             >
        //                                 {ad.status}
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-4 text-sm text-base-content">
        //                             <div className="flex gap-4">

        //                                 {ad.status === "Pending" && (
        //                                     <>
        //                                         <button
        //                                             // onClick={() => handleStatusChange(ad._id, "Approved")}
        //                                             className="p-2 rounded-full transition-all duration-300 bg-green-100 hover:bg-green-500 text-green-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
        //                                         >
        //                                             Approve
        //                                         </button>
        //                                         <button
        //                                             // onClick={() => handleStatusChange(ad._id, "Rejected")}
        //                                             className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
        //                                         >
        //                                             Reject
        //                                         </button>
        //                                     </>
        //                                 )}


        //                                 <button
        //                                     // onClick={() => handleDelete(ad._id)}
        //                                     className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
        //                                 >
        //                                     <FaTrashAlt className="text-lg" />
        //                                 </button>
        //                             </div>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>

        //deepSeek 2
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
                                <td className="py-3 px-4 text-sm text-base-content">{ad.sellerEmail}</td>
                                <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                                    {ad.createdAt ? format(new Date(ad.createdAt), "yyyy-MM-dd") : "N/A"}
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
                                        {/* Approve/Reject Buttons */}
                                        {ad.status === "Pending" && (
                                            <>
                                                <button
                                                    onClick={() => openActionModal(ad, "approve")}
                                                    className="p-2 rounded-full transition-all duration-300 bg-green-100 hover:bg-green-500 text-green-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => openActionModal(ad, "reject")}
                                                    className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        )}

                                        {/* Delete Button */}
                                        <button
                                            // onClick={() => handleDelete(ad._id)}
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

            {/* Modal for Approve/Reject */}
            <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel className="w-full max-w-md bg-base-100 rounded-lg shadow-xl p-6">
                        <DialogTitle className="text-lg font-medium text-base-content">
                            {actionType === "approve" ? "Approve Advertisement" : "Reject Advertisement"}
                        </DialogTitle>
                        <p className="mt-2 text-sm text-base-content/70">
                            Are you sure you want to {actionType} this advertisement?
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
                                className={`btn ${actionType === "approve"
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-red-500 hover:bg-red-600"
                                    } text-white`}
                            >
                                {actionType === "approve" ? "Approve" : "Reject"}
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>

        //gpt
        // <div className="container mx-auto px-4 py-8 max-w-[1100px]">
        //     <h2 className="text-3xl font-bold text-center mb-8 text-base-content">
        //         Manage Banner Advertisements
        //     </h2>

        //     {/* Advertisements Table */}
        //     <div className="overflow-x-auto bg-base-100 p-6 rounded-lg border border-base-300">
        //         <table className="min-w-full">
        //             <thead className="bg-base-200">
        //                 <tr>
        //                     <th className="py-3 px-4 text-left">Image</th>
        //                     <th className="py-3 px-4 text-left">Name</th>
        //                     <th className="py-3 px-4 text-left">Description</th>
        //                     <th className="py-3 px-4 text-left">Submitted Date</th>
        //                     <th className="py-3 px-4 text-left">Status</th>
        //                     <th className="py-3 px-4 text-left">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody className="divide-y divide-base-300">
        //                 {advertises?.map((ad) => (
        //                     <tr key={ad._id} className="hover:bg-base-200">
        //                         <td className="py-3 px-4">
        //                             <img src={ad.image} alt={ad.name} className="size-16 object-cover rounded-md" />
        //                         </td>
        //                         <td className="py-3 px-4">{ad.name}</td>
        //                         <td className="py-3 px-4">{ad.description}</td>
        //                         <td className="py-3 px-4">
        //                             {ad.createdAt ? format(new Date(ad.createdAt), "yyyy-MM-dd") : "N/A"}
        //                         </td>
        //                         <td className="py-3 px-4">
        //                             <span className={`px-3 py-1 text-sm font-semibold rounded-full
        //                     ${ad.status === "Pending" ? "bg-yellow-100 text-yellow-800"
        //                                     : ad.status === "Approved" ? "bg-green-100 text-green-800"
        //                                         : "bg-red-100 text-red-800"}
        //                 `}>
        //                                 {ad.status}
        //                             </span>
        //                         </td>
        //                         <td className="py-3 px-4 flex gap-3">
        //                             {ad.status === "Pending" && (
        //                                 <button
        //                                     // onClick={() => handleApprove(ad._id)}
        //                                     className="p-2 bg-green-100 hover:bg-green-500 text-green-500 hover:text-white rounded-full shadow-md transition-all duration-300">
        //                                     <FaCheck />
        //                                 </button>
        //                             )}
        //                             {ad.status === "Pending" && (
        //                                 <button
        //                                     //  onClick={() => handleReject(ad._id)}
        //                                     className="p-2 bg-yellow-100 hover:bg-yellow-500 text-yellow-500 hover:text-white rounded-full shadow-md transition-all duration-300">
        //                                     <FaTimes />
        //                                 </button>
        //                             )}
        //                             <button
        //                                 // onClick={() => handleDelete(ad._id)}
        //                                 className="p-2 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-full shadow-md transition-all duration-300">
        //                                 <FaTrashAlt />
        //                             </button>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>

        //cluade
        // <div className="container mx-auto p-4">
        //     <div className="bg-white rounded-lg shadow-lg p-6">
        //         <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Banner Advertisements</h1>

        //         {/* Search and filter */}
        //         <div className="mb-6">
        //             <input
        //                 type="text"
        //                 placeholder="Search by name, description or seller email..."
        //                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        //                 value={'search me'}
        //             // value={searchQuery}
        //             // onChange={handleSearch}
        //             />
        //         </div>


        //         <>
        //             {/* Table */}
        //             <div className="overflow-x-auto">
        //                 <table className="min-w-full bg-white rounded-lg overflow-hidden">
        //                     <thead className="bg-gray-100">
        //                         <tr>
        //                             <th className="py-3 px-4 text-left">Image</th>
        //                             <th
        //                                 className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
        //                             // onClick={() => handleSort("name")}
        //                             >
        //                                 Medicine Name

        //                                 <span className="ml-1">
        //                                     {"▼"}
        //                                 </span>

        //                             </th>
        //                             <th className="py-3 px-4 text-left">Description</th>
        //                             <th
        //                                 className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
        //                             // onClick={() => handleSort("sellerEmail")}
        //                             >
        //                                 Seller

        //                                 <span className="ml-1">
        //                                     {"▲"}
        //                                 </span>

        //                             </th>
        //                             <th
        //                                 className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
        //                             // onClick={() => handleSort("createdAt")}
        //                             >
        //                                 Request Date

        //                                 <span className="ml-1">
        //                                     {"▼"}
        //                                 </span>

        //                             </th>
        //                             <th
        //                                 className="py-3 px-4 text-left cursor-pointer hover:bg-gray-200"
        //                             // onClick={() => handleSort("status")}
        //                             >
        //                                 Status
        //                                 {/* {sortField === "status" && (
        //                                         <span className="ml-1">
        //                                             {sortDirection === "asc" ? "▲" : "▼"}
        //                                         </span>
        //                                     )} */}
        //                             </th>
        //                             <th className="py-3 px-4 text-left">Action</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody className="divide-y divide-gray-200">
        //                         {advertises.length > 0 ? (
        //                             advertises.map((ad) => (
        //                                 <tr key={ad._id} className="hover:bg-gray-50">
        //                                     <td className="py-3 px-4">
        //                                         <img
        //                                             src={ad.image}
        //                                             alt={ad.name}
        //                                             className="h-16 w-16 object-cover rounded-md"
        //                                         />
        //                                     </td>
        //                                     <td className="py-3 px-4 font-medium">{ad.name}</td>
        //                                     <td className="py-3 px-4">
        //                                         <div className="max-w-xs overflow-hidden text-ellipsis">
        //                                             {ad.description}
        //                                         </div>
        //                                     </td>
        //                                     <td className="py-3 px-4">{ad.sellerEmail}</td>
        //                                     <td className="py-3 px-4">
        //                                         {ad.createdAt ? format(new Date(ad.createdAt), "yyyy-MM-dd") : '2025-03-15'}
        //                                     </td>
        //                                     <td className="py-3 px-4">
        //                                         <span
        //                                             className={`px-3 py-1 text-sm font-semibold rounded-full ${ad.status === "Pending"
        //                                                 ? "bg-yellow-100 text-yellow-800"
        //                                                 : ad.status === "Approved"
        //                                                     ? "bg-green-100 text-green-800"
        //                                                     : "bg-red-100 text-red-800"
        //                                                 }`}
        //                                         >
        //                                             {ad.status}
        //                                         </span>
        //                                     </td>
        //                                     <td className="py-3 px-4">
        //                                         <button
        //                                             // onClick={() => handleToggleStatus(ad._id, ad.status)}
        //                                             className="flex items-center justify-center p-2 rounded-full transition-all duration-300"
        //                                         >
        //                                             {ad.status === "Approved" ? (
        //                                                 <FaToggleOn className="text-2xl text-green-500 hover:text-green-600" />
        //                                             ) : (
        //                                                 <FaToggleOff className="text-2xl text-gray-400 hover:text-gray-500" />
        //                                             )}
        //                                         </button>
        //                                     </td>
        //                                 </tr>
        //                             ))
        //                         ) : (
        //                             <tr>
        //                                 <td colSpan="7" className="py-6 text-center text-gray-500">
        //                                     {"No matching advertisements found"}
        //                                 </td>
        //                             </tr>
        //                         )}
        //                     </tbody>
        //                 </table>
        //             </div>

        //             {/* Pagination */}

        //             {/* <div className="flex justify-center mt-6">
        //                         <div className="flex space-x-1">
        //                             <button
        //                                 // onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        //                                 // disabled={currentPage === 1}
        //                                 className={`px-4 py-2 border rounded  "bg-gray-100 text-gray-400 cursor-not-allowed"
        //                                    `}
        //                             >
        //                                 Previous
        //                             </button>

        //                             {[...Array(totalPages)].map((_, i) => (
        //                                 <button
        //                                     key={i + 1}
        //                                     onClick={() => setCurrentPage(i + 1)}
        //                                     className={`px-4 py-2 border rounded ${currentPage === i + 1
        //                                         ? "bg-blue-500 text-white"
        //                                         : "bg-white text-blue-500 hover:bg-blue-50"
        //                                         }`}
        //                                 >
        //                                     {i + 1}
        //                                 </button>
        //                             ))}

        //                             <button
        //                                 onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        //                                 disabled={currentPage === totalPages}
        //                                 className={`px-4 py-2 border rounded ${currentPage === totalPages
        //                                     ? "bg-gray-100 text-gray-400 cursor-not-allowed"
        //                                     : "bg-white text-blue-500 hover:bg-blue-50"
        //                                     }`}
        //                             >
        //                                 Next
        //                             </button>
        //                         </div>
        //                     </div> */}

        //         </>

        //     </div>
        // </div>


        //grok
        // <div className="drop-shadow-md lg:mx-16">
        //     <h2 className="text-2xl font-semibold text-base-content mb-6">Manage Banner Advertisements</h2>

        //     {/* Table for banner advertisements */}
        //     <div className="overflow-x-auto">
        //         <table className="min-w-full bg-base-100 rounded-lg">
        //             <thead className="bg-base-200">
        //                 <tr className="border-b border-base-300">
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Medicine Name</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Description</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Seller Email</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Submitted Date</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Status</th>
        //                     <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Action</th>
        //                 </tr>
        //             </thead>
        //             <tbody className="divide-y divide-base-300">
        //                 {advertises?.length > 0 ? (
        //                     advertises.map((banner) => (
        //                         <tr key={banner._id} className="hover:bg-base-200">
        //                             <td className="py-3 px-4">
        //                                 <div className="flex items-center">
        //                                     <img
        //                                         className="size-16 rounded-md object-cover"
        //                                         src={banner?.image}
        //                                         alt={`${banner.name}`}
        //                                     />
        //                                 </div>
        //                             </td>
        //                             <td className="py-3 px-4 text-sm text-base-content font-medium">{banner.name}</td>
        //                             <td className="py-3 px-4 text-sm text-base-content">{banner.description}</td>
        //                             <td className="py-3 px-4 text-sm text-base-content">{banner.sellerEmail}</td>
        //                             <td className="py-3 px-4 text-sm text-base-content text-nowrap">
        //                                 {banner.createdAt ? format(new Date(banner.createdAt), "yyyy-MM-dd") : "N/A"}
        //                             </td>
        //                             <td className="py-3 px-4">
        //                                 <span
        //                                     className={`px-3 py-1 text-sm font-semibold rounded-full ${banner.status === "Pending"
        //                                         ? "bg-yellow-100 text-yellow-800"
        //                                         : banner.status === "Approved"
        //                                             ? "bg-green-100 text-green-800"
        //                                             : "bg-red-100 text-red-800"
        //                                         }`}
        //                                 >
        //                                     {banner.status}
        //                                 </span>
        //                             </td>
        //                             <td className="py-3 px-4 text-sm text-base-content">
        //                                 <div className="flex gap-4">
        //                                     {/* Toggle Button */}
        //                                     <button
        //                                         // onClick={() => handleToggleStatus(banner._id, banner.status)}
        //                                         // disabled={isLoading || banner.status === "Pending"}
        //                                         className={`p-2 rounded-full transition-all duration-300 shadow-md hover:shadow-lg ${banner.status === "Approved"
        //                                             ? "bg-red-100 text-red-500 hover:bg-red-500 hover:text-white"
        //                                             : "bg-green-100 text-green-500 hover:bg-green-500 hover:text-white"
        //                                             }`}
        //                                     >
        //                                         {banner.status === "Approved" ? "Remove" : "Add"}
        //                                     </button>
        //                                 </div>
        //                             </td>
        //                         </tr>
        //                     ))
        //                 ) : (
        //                     <tr>
        //                         <td colSpan="7" className="py-4 text-center text-base-content/70">
        //                             No banner advertisements found.
        //                         </td>
        //                     </tr>
        //                 )}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
};

export default ManageAdvertise;