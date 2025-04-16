import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AskAdvertiseRow = ({ add, deleteAdvertise }) => {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be able to revert this again`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                deleteAdvertise(add._id, {
                    onSuccess: () => {
                        Swal.fire({
                            title: "Deleted!",
                            text: `Category has been removed successfully.`,
                            icon: "success"
                        });
                    },
                    onError: () => {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete category. Please try again.",
                            icon: "error"
                        });
                    }
                });
            }
        });
    }
    return (
        // <tr
        //     className="hover:bg-base-200">
        //     <td className="py-3 px-4">
        //         <div className="flex items-center">
        //             <img className="size-16 rounded-md object-cover" src={add?.image} alt={`${add.name}`} />
        //         </div>
        //     </td>
        //     <td className="py-3 px-4 text-sm text-base-content font-medium">{add.name}</td>
        //     <td className="py-3 px-4">
        //         <p className={' inline-flex text-xs font-semibold  capitalize'}>
        //             {add.description}
        //         </p>
        //     </td>
        //     <td className="py-3 px-4 text-sm text-base-content text-nowrap">
        //         {add.createdAt ? format(new Date(add.createdAt), "yyyy-MM-dd") : '2025-03-15'}
        //     </td>
        //     <td className="py-3 px-4">
        //         <span
        //             className={`px-3 py-1 text-sm font-semibold rounded-full ${add.status === "Pending"
        //                 ? "bg-yellow-100 text-yellow-800"
        //                 : add.status === "Approved"
        //                     ? "bg-green-100 text-green-800"
        //                     : "bg-red-100 text-red-800"
        //                 }`}
        //         >
        //             {add.status}
        //         </span>
        //     </td>
        //     <td className="py-3 px-4 text-sm text-base-content">
        //         <div className="flex gap-4">

        //             <button
        //                 onClick={() => {
        //                     Swal.fire({
        //                         title: "Are you sure?",
        //                         text: `You won't be able to revert this again`,
        //                         icon: "warning",
        //                         showCancelButton: true,
        //                         confirmButtonColor: "#3085d6",
        //                         cancelButtonColor: "#d33",
        //                         confirmButtonText: "Yes, delete it!"
        //                     }).then(async (result) => {
        //                         if (result.isConfirmed) {
        //                             deleteAdvertise(add._id, {
        //                                 onSuccess: () => {
        //                                     Swal.fire({
        //                                         title: "Deleted!",
        //                                         text: `Category has been removed successfully.`,
        //                                         icon: "success"
        //                                     });
        //                                 },
        //                                 onError: () => {
        //                                     Swal.fire({
        //                                         title: "Error!",
        //                                         text: "Failed to delete category. Please try again.",
        //                                         icon: "error"
        //                                     });
        //                                 }
        //                             });
        //                         }
        //                     });
        //                 }}

        //                 className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
        //                 <FaTrashAlt className="text-lg"
        //                 />
        //             </button>
        //         </div>
        //     </td>
        // </tr>

        <tr className="hover:bg-base-200">
            {/* Image */}
            <td className="py-3 px-4 ">
                <div className="flex items-center">
                    <img
                        className="size-16 rounded-md object-cover"
                        src={add?.image}
                        alt={add.name}
                        loading="lazy"
                    />
                </div>
            </td>

            {/* Name */}
            <td className="py-3 px-4 text-sm font-medium text-base-content">
                {add.name}
            </td>

            {/* Description */}
            <td className="py-3 px-4 text-sm text-base-content/90  max-w-[200px] overflow-auto">
                {add.description}
            </td>
           
            {/* Submitted Date */}
            <td className="py-3 px-4 text-sm text-base-content/80 text-nowrap">
                {add.createdAt ? format(new Date(add.createdAt), "yyyy-MM-dd") : '2025-03-15'}
            </td>

            {/* Status */}
            <td className="py-3 px-4">
                <span className={`
                px-3 py-1 inline-flex items-center text-xs font-semibold rounded-full
                ${add.status === "Pending" ? "bg-amber-100 text-amber-800" : ""}
                ${add.status === "Approved" ? "bg-green-100 text-green-800" : ""}
                ${add.status === "Rejected" ? "bg-red-100 text-red-800" : ""}
            `}>
                    {add.status}
                </span>
            </td>

            {/* Actions */}
            <td className="py-3 px-4">
                <button
                    onClick={handleDelete}
                    className="
                    p-2 rounded-full transition-all duration-300
                    bg-error/10 hover:bg-error
                    text-error hover:text-white
                    shadow-sm hover:shadow-md
                    focus:outline-none focus:ring-2 focus:ring-error/50
                "
                    aria-label={`Delete ${add.name}`}
                >
                    <FaTrashAlt className="text-base" />
                </button>
            </td>
        </tr>
    );
};

// Prop Validation
AskAdvertiseRow.propTypes = {
    add: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        status: PropTypes.oneOf(["Pending", "Approved", "Rejected"]).isRequired,
    }).isRequired,
    deleteAdvertise: PropTypes.func.isRequired,
};

export default AskAdvertiseRow;