import { format } from "date-fns";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageMedicinesRow = ({ medicine, deleteMedicine, openEditModal }) => {
    const protectedMedicines = [
        'Paracetamol',
        'Amoxicillin',
        'Omeprazole',
        'Eye Drops',
        'Antibiotic Drops',
        'Multivitamin',
        'Fish Oil Capsules'
    ]
    return (
        <tr
            className="hover:bg-base-200">
            <td className="py-3 px-4">
                <div className="flex items-center">
                    <img className="size-16 rounded-md object-cover" src={medicine?.image} alt={`${medicine.name}`} />
                </div>
            </td>
            <td className="py-3 px-4 text-sm text-base-content font-medium">{medicine.name}</td>
            <td className="py-3 px-4">
                <p className={'bg-blue-50 text-blue-700 border-blue-200 w-fit px-2 py-1 inline-flex text-xs font-semibold rounded-full capitalize'}>
                    {medicine.stock} units
                </p>
            </td>
            <td className="py-3 px-4 text-sm text-base-content">${medicine.price.toFixed(2)}</td>
            <td className="py-3 px-4 text-sm text-base-content">{medicine.discount}%</td>
            <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                {format(new Date(medicine.createdAt), "yyyy-MM-dd")}

            </td>
            <td className="py-3 px-4 text-sm text-base-content">
                <div className="flex gap-4">
                    {/* Edit Button */}
                    <button
                        onClick={() => {
                            if (protectedMedicines.includes(medicine.name)) {
                                toast.error("This medicine cannot be updated as it is for demo purposes.");
                                return;
                            }
                            openEditModal(medicine)
                        }}
                        className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                        <FaEdit className="text-lg" />
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => {
                            if (protectedMedicines.includes(medicine.name)) {
                                toast.error("This medicine cannot be deleted as it is for demo purposes.");
                                return;
                            }
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
                                    deleteMedicine(medicine._id, {
                                        onSuccess: () => {
                                            Swal.fire({
                                                title: "Deleted!",
                                                text: `Medicine has been removed successfully.`,
                                                icon: "success"
                                            });
                                        },
                                        onError: () => {
                                            Swal.fire({
                                                title: "Error!",
                                                text: "Failed to delete medicine. Please try again.",
                                                icon: "error"
                                            });
                                        }
                                    });
                                }
                            });
                        }}
                        className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                        <FaTrashAlt className="text-lg" />
                    </button>
                </div>
            </td>
        </tr>
    );
};

//  PropTypes for validation
ManageMedicinesRow.propTypes = {
    medicine: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
    deleteMedicine: PropTypes.func.isRequired,
    openEditModal: PropTypes.func.isRequired
};

export default ManageMedicinesRow;