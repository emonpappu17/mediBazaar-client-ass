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
        <tr
            className="hover:bg-base-200">
            <td className="py-3 px-4">
                <div className="flex items-center">
                    <img className="size-16 rounded-md object-cover" src={category?.categoryImage} alt={`${category.categoryName} avatar`} />
                </div>
            </td>
            <td className="py-3 px-4 text-sm text-base-content font-medium">{category.categoryName}</td>
            <td className="py-3 px-4">
                <p className={'bg-blue-50 text-blue-700 border-blue-200 w-fit px-2 py-1 inline-flex text-xs font-semibold rounded-full capitalize'}>
                    {category.medicineCount} items
                </p>
            </td>
            <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                {format(new Date(category.createdAt), "yyyy-MM-dd")}
            </td>
            <td className="py-3 px-4 text-sm text-base-content">
                <div className="flex gap-4">
                    {/* Edit Button */}
                    <button
                        onClick={() => {
                            if (protectedCategories.includes(category.categoryName)) {
                                toast.error("This category cannot be updated as it is for demo purposes.");
                                return;
                            }
                            openEditModal(category)
                        }}
                        className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                        <FaEdit className="text-lg" />
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
                                text: `You won't be able to revert this again`,
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
                                                text: `Category has been removed successfully.`,
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
                        className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                        <FaTrashAlt className="text-lg" />
                    </button>
                </div>
            </td>
        </tr>
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