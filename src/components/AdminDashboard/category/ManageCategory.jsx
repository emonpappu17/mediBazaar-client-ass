import clsx from "clsx";
import { MdDelete, MdEdit, MdMoreVert } from "react-icons/md";
import avatarImg from '../../../assets/placeholder.jpg';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../common/Button";
import { useCategories } from "../../../services/categoryService";


const ManageCategory = () => {
    const { data, isLoading, error } = useCategories();
    if (isLoading) return <p>loading...</p>
    if (error) return <p>error</p>
    // Sample data
    // const data = [
    //     { id: 1, name: "Tablets", image: "/api/placeholder/50/50", totalMedicines: 145, createdAt: "2023-07-15" },
    //     { id: 2, name: "Syrups", image: "/api/placeholder/50/50", totalMedicines: 87, createdAt: "2023-08-03" },
    //     { id: 3, name: "Capsules", image: "/api/placeholder/50/50", totalMedicines: 112, createdAt: "2023-09-21" },
    //     { id: 4, name: "Injections", image: "/api/placeholder/50/50", totalMedicines: 65, createdAt: "2023-10-05" },
    //     { id: 5, name: "Topical Medicines", image: "/api/placeholder/50/50", totalMedicines: 53, createdAt: "2023-11-12" },
    //     { id: 6, name: "Drops", image: "/api/placeholder/50/50", totalMedicines: 38, createdAt: "2023-12-19" },
    //     { id: 7, name: "Inhalers", image: "/api/placeholder/50/50", totalMedicines: 24, createdAt: "2024-01-08" },
    //     { id: 8, name: "Others", image: "/api/placeholder/50/50", totalMedicines: 91, createdAt: "2024-02-14" },
    // ];

    return (
        <div className="drop-shadow-md lg:mx-16">
            <div className="flex justify-end items-center">
                <Button
                    text=" + Add Category"
                    className="rounded-lg py-2 px-3 mb-4"
                >
                </Button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-base-100 rounded-lg ">
                    <thead className="bg-base-200">
                        <tr className="border-b border-base-300">
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">	Category Name</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Total Medicines</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Created At</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-300">
                        {data?.map((category) => (
                            <tr key={category._id} className="hover:bg-base-200">
                                <td className="py-3 px-4">
                                    <div className="flex items-center">
                                        <img className="size-16 rounded-md object-cover" src={category.categoryImage || avatarImg} alt={`${category.categoryName} avatar`} />
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm text-base-content font-medium">{category.categoryName}</td>
                                <td className="py-3 px-4">

                                    <p className={'bg-blue-50 text-blue-700 border-blue-200  w-fit px-2 py-1 inline-flex text-xs font-semibold rounded-full capitalize'}>
                                        {category.medicineCount} items
                                    </p>
                                </td>

                                <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                                    {/* {category.createdAt} */}
                                    {'2024-02-14'}
                                </td>

                                <td className="py-3 px-4 text-sm text-base-content">
                                    <div className="flex gap-4">
                                        {/* Edit Button */}
                                        <button className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                            <FaEdit className="text-lg" />
                                        </button>

                                        {/* Delete Button */}
                                        <button className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                            <FaTrashAlt className="text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCategory;