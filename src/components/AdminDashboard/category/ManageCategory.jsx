import avatarImg from '../../../assets/placeholder.jpg';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../common/Button";
import { useAddCategory, useCategories, useDeleteCategory } from "../../../services/categoryService";
import { Dialog, DialogPanel, DialogTitle, } from "@headlessui/react";
import { useState } from "react";
import { set, useForm } from 'react-hook-form';
import uploadImageToImgBB from '../../../services/imgbbService';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

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

const ManageCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [imageText, setImageText] = useState('Upload image')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [editMode, setEditMode] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const { register, handleSubmit, setValue, reset } = useForm();

    // API Calls
    const { data, isLoading, error, refetch } = useCategories();
    const { mutateAsync } = useAddCategory();
    const { mutate } = useDeleteCategory()

    // Handle Image
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageText(file.name)
            const imageUrl = URL.createObjectURL(file)
            setPreviewImage(imageUrl)
            setValue("categoryImage", file);
        }
    }

    // Open modal for adding new category
    const openAddModal = () => {
        resetForm();
        setEditMode(false);
        setCurrentCategory(null);
        setIsModalOpen(true);
    };

    // Open modal for editing a category
    const openEditModal = (category) => {
        resetForm();
        setEditMode(true);
        setCurrentCategory(category);

        // Set form values
        setValue("categoryName", category.categoryName);

        // Set preview image if available
        if (category.categoryImage) {
            setPreviewImage(category.categoryImage);
            setImageText("Current Image");
        }

        setIsModalOpen(true);
    };

    // Reset form and state
    const resetForm = () => {
        reset();
        setPreviewImage(null);
        setImageText('Upload image')
    }

    // Submitting form
    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);
            let imageUrl = data.categoryImage;
            let formData = {};

            // If in edit mode and no new image is uploaded, use the existing image
            if (editMode && !data.categoryImage && currentCategory.categoryImage) {
                formData = {
                    categoryName: data.categoryName,
                    categoryImage: currentCategory.categoryImage,
                };
            } else {

                // Upload Image if new image is selected
                if (data.categoryImage instanceof File) {
                    imageUrl = await uploadImageToImgBB(data.categoryImage);
                } else if (!imageUrl && !editMode) {
                    toast.error('Please upload a category image.');
                    setIsSubmitting(false);
                    return;
                }

                formData = {
                    categoryName: data.categoryName,
                    categoryImage: imageUrl,
                };
            }



            let result;
            if (editMode) {
                // result = await updateCategory({ id: currentCategory._id, data: formData });
                console.log('update data', formData);

                toast.success('Category updated successfully!');
            } else {
                result = await mutateAsync(formData);
                // result = await addCategory(formData);
                if (result.message) {
                    toast.error(result.message);
                } else {
                    toast.success('Category added successfully!');
                }
            }

            // Reset form and state
            resetForm();
            refetch();

            // Close Modal
            setIsModalOpen(false);
        } catch (err) {
            console.log(err);
            toast.error(`Failed to ${editMode ? 'update' : 'add'} category. Please try again.`);
        } finally {
            setIsSubmitting(false);
        }
    };


    // Submitting form
    // const onSubmit = async (data) => {
    //     if (!data.categoryImage) {
    //         toast.error('Please upload a category image.');
    //         return;
    //     }
    //     try {
    //         setIsSubmitting(true)

    //         // Upload Image
    //         const imageUrl = data.categoryImage
    //         const image = await uploadImageToImgBB(imageUrl)
    //         console.log('waiting');


    //         // Prepare data to send
    //         const formData = {
    //             categoryName: data.categoryName,
    //             categoryImage: image
    //         }

    //         // Send Data
    //         const result = await mutateAsync(formData)
    //         console.log(result);

    //         if (result.message) {
    //             toast.error(result.message)
    //         } else {
    //             toast.success('Category added successfully!');
    //         }

    //         // Reset form
    //         reset()
    //         setPreviewImage(null)
    //         setImageText('Upload image')

    //         // Close Modal
    //         setIsModalOpen(false)
    //     } catch (err) {
    //         console.log(err);
    //         toast.error('Failed to add category. Please try again.');
    //     } finally {
    //         setIsSubmitting(false)
    //     }
    // }


    if (isLoading) return <p>loading...</p>
    if (error) return <p>error</p>

    return (
        <div className="drop-shadow-md lg:mx-16">

            {/* Add Category */}
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl font-semibold'>Total Category:{data.length}</h1>
                <Button
                    onclick={openAddModal}
                    // onclick={() => setIsModalOpen(true)}
                    text="+ Add Category"
                    className="rounded-lg py-2 px-3"
                />
            </div>

            {/* Table */}
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
                                    {format(new Date(category.createdAt), "yyyy-MM-dd")}
                                </td>
                                <td className="py-3 px-4 text-sm text-base-content">
                                    <div className="flex gap-4">
                                        {/* Edit Button */}
                                        <button
                                            // onClick={() => setIsModalOpen(true)}
                                            // onClick={() => openModal(category)}
                                            onClick={() => openEditModal(category)}
                                            className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                            <FaEdit className="text-lg" />
                                        </button>

                                        {/* Delete Button */}
                                        <button
                                            onClick={
                                                () => {
                                                    if (protectedCategories.includes(category.categoryName)) {
                                                        toast.error("This category cannot be deleted as it is for demo purposes.");
                                                        return;
                                                    }
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: `You won't be able to revert this again `,
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor: "#3085d6",
                                                        cancelButtonColor: "#d33",
                                                        confirmButtonText: "Yes, clear it!"
                                                    }).then(async (result) => {
                                                        if (result.isConfirmed) {
                                                            mutate(category._id, {
                                                                onSuccess: () => {
                                                                    Swal.fire({
                                                                        title: "Deleted!",
                                                                        text: `Category have been removed successfully.`,
                                                                        icon: "success"
                                                                    });
                                                                    refetch()
                                                                },
                                                                onError: () => {
                                                                    Swal.fire({
                                                                        title: "Error!",
                                                                        text: "Failed to delete category. Please try again.",
                                                                        icon: "error"
                                                                    });
                                                                }
                                                            })
                                                        }
                                                    });
                                                }
                                            }
                                            className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer ">
                                            <FaTrashAlt className="text-lg" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Category Modal */}
            <Dialog open={isModalOpen} as="div" onClose={() => setIsModalOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-full max-w-sm bg-base-100  rounded-lg shadow-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                        <DialogTitle className="text-lg font-medium text-base-content">Add New Category</DialogTitle>
                        <p className="mt-2 text-sm text-base-content/70">Enter the details below to create a new category.</p>

                        {/* Name and Image */}
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-4">

                            {/* Name */}
                            <div className="grid gap-2 ">
                                <label htmlFor="categoryName" className="text-sm font-medium text-base-content">Category Name</label>
                                <input
                                    id="categoryName"
                                    type="text"
                                    placeholder="Enter category name"
                                    required
                                    {...register("categoryName")}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            {/* Image */}
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-base-content">Category Image  Upload</label>
                                <div className="flex items-center justify-between gap-2 ">
                                    <div className=' px-5 py-3  border-4 border-dotted border-base-300 rounded-lg'>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            id="fileUpload"
                                            onChange={handleImageUpload}
                                        />
                                        <label htmlFor="fileUpload" className="btn cursor-pointer">
                                            {/* Image Text */}
                                            {imageText.length > 20 ? imageText.split('.')[0].slice(0, 15) + '....' + imageText.split('.')[1].slice(0, 3) : imageText}
                                        </label>
                                    </div>
                                    {previewImage && (
                                        <img
                                            src={previewImage}
                                            alt="Preview"
                                            className="size-20 object-cover rounded-md"
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="grid gap-2">
                                <label htmlFor="description" className="text-sm font-medium text-base-content">Description (Optional)</label>
                                <textarea
                                    id="description"
                                    placeholder="Brief description of this category"
                                    className="min-h-20 w-full rounded-md t p-2 text-sm  bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>

                            <div className=" flex justify-end gap-3">
                                <button type='button' onClick={() => setIsModalOpen(false)} className='btn'>Cancel</button>
                                <Button
                                    disabled={isSubmitting}
                                    spinner={isSubmitting}
                                    type='submit'
                                    text='Add Category'
                                    className='px-4 py-2 rounded-md w-40'
                                />
                            </div>
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default ManageCategory;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import avatarImg from '../../../assets/placeholder.jpg';
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import Button from "../../common/Button";
// import { Dialog, DialogPanel, DialogTitle, } from "@headlessui/react";
// import { useState } from "react";
// import { useForm } from 'react-hook-form';
// import uploadImageToImgBB from '../../../services/imgbbService';
// import toast from 'react-hot-toast';
// import Swal from 'sweetalert2';
// import { format } from 'date-fns';
// import { useAddCategory, useCategories, useDeleteCategory } from '../../../services/categoryService';

// const protectedCategories = [
//     "Tablet",
//     "Capsule",
//     "Syrup",
//     "Injection",
//     "Inhaler",
//     "Ointment",
//     "Powder",
//     "Other",
//     "Drops",
// ];

// const ManageCategory = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [previewImage, setPreviewImage] = useState(null);
//     const [imageText, setImageText] = useState('Upload image');
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [editMode, setEditMode] = useState(false);
//     const [currentCategory, setCurrentCategory] = useState(null);
//     const { register, handleSubmit, setValue, reset } = useForm();

//     // API Calls
//     const { data, isLoading, error, refetch } = useCategories();
//     const { mutateAsync: addCategory } = useAddCategory();
//     // const { mutateAsync: updateCategory } = useUpdateCategory();
//     const { mutate: deleteCategory } = useDeleteCategory();

//     // Handle Image
//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImageText(file.name);
//             const imageUrl = URL.createObjectURL(file);
//             setPreviewImage(imageUrl);
//             setValue("categoryImage", file);
//         }
//     };

//     // Open modal for adding new category
//     const openAddModal = () => {
//         resetForm();
//         setEditMode(false);
//         setCurrentCategory(null);
//         setIsModalOpen(true);
//     };

//     // Open modal for editing a category
//     const openEditModal = (category) => {
//         resetForm();
//         setEditMode(true);
//         setCurrentCategory(category);

//         // Set form values
//         setValue("categoryName", category.categoryName);
//         setValue("description", category.description || "");

//         // Set preview image if available
//         if (category.categoryImage) {
//             setPreviewImage(category.categoryImage);
//             setImageText("Current Image");
//         }

//         setIsModalOpen(true);
//     };

//     // Reset form and state
//     const resetForm = () => {
//         reset();
//         setPreviewImage(null);
//         setImageText('Upload image');
//     };

//     // Submitting form
//     const onSubmit = async (data) => {
//         try {
//             setIsSubmitting(true);
//             let imageUrl = data.categoryImage;
//             let formData = {};

//             // If in edit mode and no new image is uploaded, use the existing image
//             if (editMode && !data.categoryImage && currentCategory.categoryImage) {
//                 formData = {
//                     categoryName: data.categoryName,
//                     categoryImage: currentCategory.categoryImage,
//                     description: data.description
//                 };
//             } else {
//                 // Upload Image if new image is selected
//                 if (data.categoryImage instanceof File) {
//                     imageUrl = await uploadImageToImgBB(data.categoryImage);
//                 } else if (!imageUrl && !editMode) {
//                     toast.error('Please upload a category image.');
//                     setIsSubmitting(false);
//                     return;
//                 }

//                 formData = {
//                     categoryName: data.categoryName,
//                     categoryImage: imageUrl,
//                     description: data.description
//                 };
//             }

//             let result;
//             if (editMode) {
//                 // result = await updateCategory({ id: currentCategory._id, data: formData });
//                 toast.success('Category updated successfully!');
//             } else {
//                 result = await addCategory(formData);
//                 if (result.message) {
//                     toast.error(result.message);
//                 } else {
//                     toast.success('Category added successfully!');
//                 }
//             }

//             // Reset form and state
//             resetForm();
//             refetch();

//             // Close Modal
//             setIsModalOpen(false);
//         } catch (err) {
//             console.log(err);
//             toast.error(`Failed to ${editMode ? 'update' : 'add'} category. Please try again.`);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (isLoading) return <p>loading...</p>;
//     if (error) return <p>error</p>;

//     return (
//         <div className="drop-shadow-md lg:mx-16">

//             {/* Add Category */}
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className='text-2xl font-semibold'>Total Category: {data.length}</h1>
//                 <Button
//                     onclick={openAddModal}
//                     text="+ Add Category"
//                     className="rounded-lg py-2 px-3"
//                 />
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-base-100 rounded-lg">
//                     <thead className="bg-base-200">
//                         <tr className="border-b border-base-300">
//                             <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
//                             <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Category Name</th>
//                             <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Total Medicines</th>
//                             <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Created At</th>
//                             <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-base-300">
//                         {data?.map((category) => (
//                             <tr key={category._id} className="hover:bg-base-200">
//                                 <td className="py-3 px-4">
//                                     <div className="flex items-center">
//                                         <img className="size-16 rounded-md object-cover" src={category.categoryImage || avatarImg} alt={`${category.categoryName} avatar`} />
//                                     </div>
//                                 </td>
//                                 <td className="py-3 px-4 text-sm text-base-content font-medium">{category.categoryName}</td>
//                                 <td className="py-3 px-4">
//                                     <p className={'bg-blue-50 text-blue-700 border-blue-200 w-fit px-2 py-1 inline-flex text-xs font-semibold rounded-full capitalize'}>
//                                         {category.medicineCount} items
//                                     </p>
//                                 </td>
//                                 <td className="py-3 px-4 text-sm text-base-content text-nowrap">
//                                     {format(new Date(category.createdAt), "yyyy-MM-dd")}
//                                 </td>
//                                 <td className="py-3 px-4 text-sm text-base-content">
//                                     <div className="flex gap-4">
//                                         {/* Edit Button */}
//                                         <button
//                                             onClick={() => openEditModal(category)}
//                                             className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
//                                             <FaEdit className="text-lg" />
//                                         </button>

//                                         {/* Delete Button */}
//                                         <button
//                                             onClick={() => {
//                                                 if (protectedCategories.includes(category.categoryName)) {
//                                                     toast.error("This category cannot be deleted as it is for demo purposes.");
//                                                     return;
//                                                 }
//                                                 Swal.fire({
//                                                     title: "Are you sure?",
//                                                     text: `You won't be able to revert this again`,
//                                                     icon: "warning",
//                                                     showCancelButton: true,
//                                                     confirmButtonColor: "#3085d6",
//                                                     cancelButtonColor: "#d33",
//                                                     confirmButtonText: "Yes, delete it!"
//                                                 }).then(async (result) => {
//                                                     if (result.isConfirmed) {
//                                                         deleteCategory(category._id, {
//                                                             onSuccess: () => {
//                                                                 Swal.fire({
//                                                                     title: "Deleted!",
//                                                                     text: `Category has been removed successfully.`,
//                                                                     icon: "success"
//                                                                 });
//                                                                 refetch();
//                                                             },
//                                                             onError: () => {
//                                                                 Swal.fire({
//                                                                     title: "Error!",
//                                                                     text: "Failed to delete category. Please try again.",
//                                                                     icon: "error"
//                                                                 });
//                                                             }
//                                                         });
//                                                     }
//                                                 });
//                                             }}
//                                             className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
//                                             <FaTrashAlt className="text-lg" />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Category Modal (Add/Edit) */}
//             <Dialog open={isModalOpen} as="div" onClose={() => setIsModalOpen(false)} className="relative z-50">
//                 <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//                 <div className="fixed inset-0 flex items-center justify-center p-4">
//                     <DialogPanel
//                         transition
//                         className="w-full max-w-sm bg-base-100 rounded-lg shadow-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
//                         <DialogTitle className="text-lg font-medium text-base-content">
//                             {editMode ? 'Update Category' : 'Add New Category'}
//                         </DialogTitle>
//                         <p className="mt-2 text-sm text-base-content/70">
//                             {editMode
//                                 ? 'Update the details below to modify this category.'
//                                 : 'Enter the details below to create a new category.'}
//                         </p>

//                         {/* Form */}
//                         <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-4">

//                             {/* Name */}
//                             <div className="grid gap-2">
//                                 <label htmlFor="categoryName" className="text-sm font-medium text-base-content">Category Name</label>
//                                 <input
//                                     id="categoryName"
//                                     type="text"
//                                     placeholder="Enter category name"
//                                     required
//                                     {...register("categoryName")}
//                                     className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
//                                 />
//                             </div>

//                             {/* Image */}
//                             <div className="grid gap-2">
//                                 <label className="text-sm font-medium text-base-content">Category Image Upload</label>
//                                 <div className="flex items-center justify-between gap-2">
//                                     <div className='px-5 py-3 border-4 border-dotted border-base-300 rounded-lg'>
//                                         <input
//                                             type="file"
//                                             accept="image/*"
//                                             className="hidden"
//                                             id="fileUpload"
//                                             onChange={handleImageUpload}
//                                         />
//                                         <label htmlFor="fileUpload" className="btn cursor-pointer">
//                                             {/* Image Text */}
//                                             {imageText.length > 20 ? imageText.split('.')[0].slice(0, 15) + '....' + (imageText.split('.')[1]?.slice(0, 3) || '') : imageText}
//                                         </label>
//                                     </div>
//                                     {previewImage && (
//                                         <img
//                                             src={previewImage}
//                                             alt="Preview"
//                                             className="size-20 object-cover rounded-md"
//                                         />
//                                     )}
//                                 </div>
//                                 {editMode && (
//                                     <p className="text-xs text-base-content/70">
//                                         Leave blank to keep the current image
//                                     </p>
//                                 )}
//                             </div>

//                             {/* Description */}
//                             <div className="grid gap-2">
//                                 <label htmlFor="description" className="text-sm font-medium text-base-content">Description (Optional)</label>
//                                 <textarea
//                                     id="description"
//                                     placeholder="Brief description of this category"
//                                     {...register("description")}
//                                     className="min-h-20 w-full rounded-md p-2 text-sm bg-base-200 border-0 outline-base-content focus:outline-1"
//                                 />
//                             </div>

//                             <div className="flex justify-end gap-3">
//                                 <button
//                                     type='button'
//                                     onClick={() => setIsModalOpen(false)}
//                                     className='btn'
//                                 >
//                                     Cancel
//                                 </button>
//                                 <Button
//                                     disabled={isSubmitting}
//                                     spinner={isSubmitting}
//                                     type='submit'
//                                     text={editMode ? 'Update Category' : 'Add Category'}
//                                     className='px-4 py-2 rounded-md w-40'
//                                 />
//                             </div>
//                         </form>
//                     </DialogPanel>
//                 </div>
//             </Dialog>
//         </div>
//     );
// };

// export default ManageCategory;





