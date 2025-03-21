import { FaChevronDown, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useSellerMedicines } from "../../../services/medicineService";
import Button from "../../common/Button";
import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogPanel, DialogTitle, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { MdCheck } from "react-icons/md";
import ImageUpload from "../../common/ImageUpload";


const ManageMedicines = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [imageText, setImageText] = useState('Upload image');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [controller, setController] = useState(null);
    const { register, handleSubmit, setValue, reset } = useForm();

    // API Calls
    const { data: medicines } = useSellerMedicines();

    // Handle Image
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageText(file.name);
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
            setValue("categoryImage", file);
        }
    };

    // Open modal for adding new category
    const openAddModal = () => {
        resetForm();
        setEditMode(false);
        setCurrentCategory(null);
        setIsModalOpen(true);
    };

    // Open modal for editing a category
    // const openEditModal = (category) => {
    //     resetForm();
    //     setEditMode(true);
    //     setCurrentCategory(category);

    //     // Set form values
    //     setValue("categoryName", category.categoryName);

    //     // Set preview image if available
    //     if (category.categoryImage) {
    //         setPreviewImage(category.categoryImage);
    //         setImageText("Current Image");
    //     }
    //     setIsModalOpen(true);
    // };

    // Reset form and state
    const resetForm = () => {
        reset();
        setPreviewImage(null);
        setImageText('Upload image');
    };

    // Submitting form
    // const onSubmit = async (data) => {
    //     try {
    //         setIsSubmitting(true);
    //         let imageUrl = data.categoryImage;
    //         let formData = {};

    //         // for cancel api execution
    //         const newController = new AbortController();
    //         setController(newController)

    //         // If in edit mode and no new image is uploaded, use the existing image
    //         if (editMode && !data.categoryImage && currentCategory.categoryImage) {
    //             formData = {
    //                 categoryName: data.categoryName,
    //                 categoryImage: currentCategory.categoryImage,
    //             };
    //         } else {
    //             // Upload Image if new image is selected
    //             if (data.categoryImage instanceof File) {
    //                 imageUrl = await uploadImageToImgBB(data.categoryImage, newController);
    //             } else if (!imageUrl && !editMode) {
    //                 toast.error('Please upload a category image.');
    //                 setIsSubmitting(false);
    //                 return;
    //             }

    //             formData = {
    //                 categoryName: data.categoryName,
    //                 categoryImage: imageUrl,
    //             };
    //         }

    //         // let result;
    //         if (editMode) {
    //             const result = await updateCategory({ id: currentCategory._id, data: formData, controller: newController })
    //             if (result.modifiedCount > 0) {
    //                 toast.success('Category updated successfully!');
    //             }
    //             else { toast.success(result.message); }
    //         } else {
    //             const result = await addCategory({ formData, controller: newController });
    //             if (result.message) {
    //                 toast.error(result.message);
    //             } else {
    //                 toast.success('Category added successfully!');
    //             }
    //         }

    //         // Reset form and state
    //         resetForm();
    //         refetch();

    //         // Close Modal
    //         setIsModalOpen(false);
    //     } catch (err) {
    //         console.log(err.message);
    //         toast.error(`Failed to ${editMode ? 'update' : 'add'} category. Please try again.`);
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleCloseModal = () => {
        // if (controller) {
        //     controller.abort();
        //     console.log("API requests aborted");
        // }
        // if (isSubmitting) {
        //     setIsSubmitting(false);
        // }
        // Reset form 
        resetForm();
        setEditMode(false);
        setCurrentCategory(null);
        setIsModalOpen(false);
        setController(null)
    };
    return (
        // <div className="container mx-auto px-4 py-8 max-w-[1100px]">
        //     <div className="flex justify-between items-center mb-6">
        //         <h2 className="text-3xl font-bold text-base-content">Manage Medicines</h2>
        //         <Button
        //             text="Add New Medicine"
        //             className="px-4 py-2 flex items-center gap-2"
        //         // icon={<FaPlus />}
        //         />
        //     </div>

        //     <div className="overflow-x-auto bg-base-100 p-6 rounded-lg border border-base-300">
        //         <table className="min-w-full">
        //             <thead className="bg-base-200">
        //                 <tr>
        //                     <th className="py-3 px-4 text-left">Image</th>
        //                     <th className="py-3 px-4 text-left">Name</th>
        //                     <th className="py-3 px-4 text-left">Stock</th>
        //                     <th className="py-3 px-4 text-left">Price</th>
        //                     <th className="py-3 px-4 text-left">Discount</th>
        //                     <th className="py-3 px-4 text-left">Added Date</th>
        //                     <th className="py-3 px-4 text-left">Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody className="divide-y divide-base-300">
        //                 {medicines?.map((medicine) => (
        //                     <tr key={medicine._id} className="hover:bg-base-200">
        //                         <td className="py-3 px-4">
        //                             <img src={medicine.image} alt={medicine.name} className="size-16 object-cover rounded-md" />
        //                         </td>
        //                         <td className="py-3 px-4">{medicine.name}</td>
        //                         <td className="py-3 px-4">{medicine.stock} units</td>
        //                         <td className="py-3 px-4">${medicine.price.toFixed(2)}</td>
        //                         <td className="py-3 px-4">{medicine.discount}%</td>
        //                         <td className="py-3 px-4">
        //                             {medicine.createdAt ? format(new Date(medicine.createdAt), "yyyy-MM-dd") : "N/A"}
        //                         </td>
        //                         <td className="py-3 px-4 flex gap-3">
        //                             <button
        //                                 className="p-2 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white rounded-full shadow-md transition-all duration-300"
        //                             >
        //                                 <FaEdit />
        //                             </button>
        //                             <button
        //                                 // onClick={() => handleDelete(medicine._id)}
        //                                 className="p-2 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white rounded-full shadow-md transition-all duration-300"
        //                             >
        //                                 <FaTrashAlt />
        //                             </button>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>

        <div className="drop-shadow-md lg:mx-16">

            {/* Add Category */}
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl font-semibold'>Total Medicine: {medicines?.length}</h1>
                <Button
                    onclick={openAddModal}
                    text="+ Add Medicine"
                    className="rounded-lg py-2 px-3"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-base-100 rounded-lg">
                    <thead className="bg-base-200">
                        <tr className="border-b border-base-300">
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Name</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Stock</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Price</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Discount</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Added Date</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-300">
                        {medicines?.map((medicine) => (
                            <tr
                                key={medicine._id}
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
                                            // onClick={() => {
                                            //     if (protectedCategories.includes(category.categoryName)) {
                                            //         toast.error("This category cannot be updated as it is for demo purposes.");
                                            //         return;
                                            //     }
                                            //     openEditModal(category)
                                            // }}
                                            className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                            <FaEdit className="text-lg" />
                                        </button>

                                        {/* Delete Button */}
                                        <button
                                            // onClick={() => {
                                            //     if (protectedCategories.includes(category.categoryName)) {
                                            //         toast.error("This category cannot be deleted as it is for demo purposes.");
                                            //         return;
                                            //     }
                                            //     Swal.fire({
                                            //         title: "Are you sure?",
                                            //         text: `You won't be able to revert this again`,
                                            //         icon: "warning",
                                            //         showCancelButton: true,
                                            //         confirmButtonColor: "#3085d6",
                                            //         cancelButtonColor: "#d33",
                                            //         confirmButtonText: "Yes, delete it!"
                                            //     }).then(async (result) => {
                                            //         if (result.isConfirmed) {
                                            //             deleteCategory(category._id, {
                                            //                 onSuccess: () => {
                                            //                     Swal.fire({
                                            //                         title: "Deleted!",
                                            //                         text: `Category has been removed successfully.`,
                                            //                         icon: "success"
                                            //                     });
                                            //                     refetch();
                                            //                 },
                                            //                 onError: () => {
                                            //                     Swal.fire({
                                            //                         title: "Error!",
                                            //                         text: "Failed to delete category. Please try again.",
                                            //                         icon: "error"
                                            //                     });
                                            //                 }
                                            //             });
                                            //         }
                                            //     });
                                            // }}
                                            className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                            <FaTrashAlt className="text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Category Modal (Add/Edit) */}
            <Dialog
                open={isModalOpen}
                as="div"
                onClose={handleCloseModal}
                className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-md bg-base-100 rounded-lg shadow-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                        <DialogTitle className="text-lg font-medium text-base-content">
                            {editMode ? "Update Medicine" : "Add New Medicine"}
                        </DialogTitle>
                        <p className="mt-2 text-sm text-base-content/70">
                            {editMode
                                ? "Update the details below to modify this medicine."
                                : "Enter the details below to add a new medicine."}
                        </p>

                        {/* Form */}
                        <form
                            //  onSubmit={handleSubmit(onSubmit)} 
                            className="grid gap-4 mt-4">

                            {/* Medicine Name */}
                            <div className="grid gap-2">
                                <label htmlFor="medicineName" className="text-sm font-medium text-base-content">Medicine Name</label>
                                <input
                                    id="medicineName"
                                    type="text"
                                    placeholder="Enter medicine name"
                                    required
                                    {...register("medicineName")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Generic Name */}
                            <div className="grid gap-2">
                                <label htmlFor="genericName" className="text-sm font-medium text-base-content">Generic Name</label>
                                <input
                                    id="genericName"
                                    type="text"
                                    placeholder="Enter generic name"
                                    required
                                    {...register("genericName")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Category Dropdown */}
                            {/* <div className="grid gap-2">
                                <label className="text-sm font-medium text-base-content">Select Category</label>
                                <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                                    <div className="relative">
                                        <ListboxButton className="w-full bg-base-200 text-base-content rounded-md py-2 px-3 flex justify-between items-center border border-base-300">
                                            <p>{selectedCategory || "Choose a Category"}</p>
                                            <FaChevronDown className="text-sm opacity-60" />
                                        </ListboxButton>
                                        <ListboxOptions className="absolute mt-1 w-full bg-base-100 rounded-md shadow-lg max-h-60 overflow-auto border border-base-300">
                                            {categories?.length > 0 ? (
                                                categories.map((category) => (
                                                    <ListboxOption
                                                        key={category._id}
                                                        value={category.categoryName}
                                                        className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                                    >
                                                        {({ selected }) => (
                                                            <>
                                                                <p className={selected ? "font-semibold" : "font-normal"}>
                                                                    {category.categoryName}
                                                                </p>
                                                                {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                                            </>
                                                        )}
                                                    </ListboxOption>
                                                ))
                                            ) : (
                                                <p className="py-2 px-4 text-gray-400">No categories available</p>
                                            )}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div> */}

                            {/* Company Name */}
                            <div className="grid gap-2">
                                <label htmlFor="company" className="text-sm font-medium text-base-content">Company Name</label>
                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Enter company name"
                                    required
                                    {...register("company")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Dosage (Mass Unit) */}
                            <div className="grid gap-2">
                                <label htmlFor="massUnit" className="text-sm font-medium text-base-content">Dosage (Mass Unit)</label>
                                <input
                                    id="massUnit"
                                    type="text"
                                    placeholder="E.g., 500mg, 10ml"
                                    required
                                    {...register("massUnit")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Price */}
                            <div className="grid gap-2">
                                <label htmlFor="price" className="text-sm font-medium text-base-content">Price ($)</label>
                                <input
                                    id="price"
                                    type="number"
                                    placeholder="Enter price"
                                    required
                                    {...register("price")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Discount */}
                            <div className="grid gap-2">
                                <label htmlFor="discount" className="text-sm font-medium text-base-content">Discount (%)</label>
                                <input
                                    id="discount"
                                    type="number"
                                    placeholder="Enter discount percentage"
                                    required
                                    {...register("discount")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Stock */}
                            <div className="grid gap-2">
                                <label htmlFor="stock" className="text-sm font-medium text-base-content">Stock Quantity</label>
                                <input
                                    id="stock"
                                    type="number"
                                    placeholder="Enter stock quantity"
                                    required
                                    {...register("stock")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Image Upload */}
                            <ImageUpload
                                handleImageUpload={handleImageUpload}
                                imageText={imageText}
                                previewImage={previewImage}
                                editMode={editMode}
                                title={"Medicine Image Upload"}
                            />

                            {/* Submit & Cancel Buttons */}
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={handleCloseModal} className="btn">Cancel</button>
                                <Button disabled={isSubmitting} spinner={isSubmitting} type="submit" text={editMode ? "Update Medicine" : "Add Medicine"} className="px-4 py-2 rounded-md w-40" />
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>

        </div >
    );
};

export default ManageMedicines;