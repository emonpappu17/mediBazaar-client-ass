import { format } from "date-fns";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const CategoryRow = ({ category, openEditModal, deleteCategory, refetch }) => {
    const protectedCategories = [
        "Tablet",
        "Capsule",
        "Syrup",
        "Injection",
        "Inhaler",
        "Ointment",
        "Powder",
        "Other",
        "Drops",
    ];
    return (
        <>
            <tr className="hover:bg-base-200">
                {/* Image */}
                <td className="py-3 px-4">
                    <div className="flex items-center justify-center size-16">
                        <img
                            className="size-full rounded-md object-cover"
                            src={category?.categoryImage}
                            alt={`${category.categoryName} avatar`}
                        />
                    </div>
                </td>

                {/* Category Name */}
                <td className="py-3 px-4 text-sm font-medium text-base-content">
                    {category.categoryName}
                </td>

                {/* Medicine Count */}
                <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0D6FEC]/10 text-[#0D6FEC]">
                        {category.medicineCount} {category.medicineCount === 1 ? 'item' : 'items'}
                    </span>
                </td>

                {/* Created At */}
                <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                    {format(new Date(category.createdAt), 'MMM dd, yyyy')}
                </td>

                {/* Actions */}
                <td className="py-3 px-4">
                    <div className="flex  gap-2">
                        {/* Edit Button */}
                        <button
                            onClick={() => {
                                if (protectedCategories.includes(category.categoryName)) {
                                    toast.error("This category cannot be updated as it is for demo purposes.");
                                    return;
                                }
                                openEditModal(category);
                            }}
                            className="
                            p-2 rounded-full transition-all duration-300
                            bg-[#0D6FEC]/10 hover:bg-[#0D6FEC]
                            text-[#0D6FEC] hover:text-white
                            shadow-sm hover:shadow-md
                          "
                            aria-label="Edit category"
                        >
                            <FaEdit className="text-base" />
                        </button>

                        {/* Delete Button */}
                        <button
                            onClick={() => {
                                if (protectedCategories.includes(category.categoryName)) {
                                    toast.error("This category cannot be deleted as it is for demo purposes.");
                                    return;
                                }
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this again",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!"
                                }).then(async (result) => {
                                    if (result.isConfirmed) {
                                        deleteCategory(category._id, {
                                            onSuccess: () => {
                                                Swal.fire({
                                                    title: "Deleted!",
                                                    text: "Category has been removed successfully.",
                                                    icon: "success"
                                                });
                                                refetch();
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
                            }}
                            className="
                            p-2 rounded-full transition-all duration-300
                            bg-red-500/10 hover:bg-red-500
                            text-red-500 hover:text-white
                            shadow-sm hover:shadow-md
                          "
                            aria-label="Delete category"
                        >
                            <FaTrashAlt className="text-base" />
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};

CategoryRow.propTypes = {
    category: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        categoryImage: PropTypes.string,
        categoryName: PropTypes.string.isRequired,
        medicineCount: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
    openEditModal: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    refetch: PropTypes.func.isRequired,
};

export default CategoryRow;