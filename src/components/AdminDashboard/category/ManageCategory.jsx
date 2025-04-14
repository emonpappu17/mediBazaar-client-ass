import Button from "../../common/Button";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import uploadImageToImgBB from '../../../services/imgbbService';
import toast from 'react-hot-toast';
import { useAddCategory, useCategories, useDeleteCategory, useUpdateCategory } from '../../../services/categoryService';
import CategoryRow from './CategoryRow';
import CategoryModal from './CategoryModal ';

const ManageCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [imageText, setImageText] = useState('Upload image');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [controller, setController] = useState(null);
    const { register, handleSubmit, setValue, reset } = useForm();

    // API Calls
    const { data, isLoading, error, refetch } = useCategories();
    const { mutateAsync: addCategory } = useAddCategory();
    const { mutateAsync: updateCategory } = useUpdateCategory();
    const { mutate: deleteCategory } = useDeleteCategory();

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
        setImageText('Upload image');
    };

    // Submitting form
    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);
            let imageUrl = data.categoryImage;
            let formData = {};

            // for cancel api execution
            const newController = new AbortController();
            setController(newController)

            // If in edit mode and no new image is uploaded, use the existing image
            if (editMode && !data.categoryImage && currentCategory.categoryImage) {
                formData = {
                    categoryName: data.categoryName,
                    categoryImage: currentCategory.categoryImage,
                };
            } else {
                // Upload Image if new image is selected
                if (data.categoryImage instanceof File) {
                    imageUrl = await uploadImageToImgBB(data.categoryImage, newController);
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

            // let result;
            if (editMode) {
                const result = await updateCategory({ id: currentCategory._id, data: formData, controller: newController })
                if (result.modifiedCount > 0) {
                    toast.success('Category updated successfully!');
                }
                else { toast.success(result.message); }
            } else {
                const result = await addCategory({ formData, controller: newController });
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
            console.log(err.message);
            toast.error(`Failed to ${editMode ? 'update' : 'add'} category. Please try again.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => {
        if (controller) {
            controller.abort();
            console.log("API requests aborted");
        }
        if (isSubmitting) {
            setIsSubmitting(false);
        }
        // Reset form 
        resetForm();
        setEditMode(false);
        setCurrentCategory(null);
        setIsModalOpen(false);
        setController(null)
    };

    if (isLoading) return <p>loading...</p>;
    if (error) return <p>error</p>;

    return (
        <div className="drop-shadow-md">

            {/* Add Category */}
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl font-semibold'>Total Category: {data.length}</h1>
                <Button
                    onclick={openAddModal}
                    text="+ Add Category"
                    className="rounded-lg py-2 px-3"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-base-100 rounded-lg">
                    <thead className="bg-base-200">
                        <tr className="border-b border-base-300">
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider truncate">Category Name</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider truncate">Total Medicines</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Created At</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-base-300">
                        {data?.map((category) => (
                            <CategoryRow
                                key={category._id}
                                category={category}
                                openEditModal={openEditModal}
                                deleteCategory={deleteCategory}
                                refetch={refetch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Category Modal (Add/Edit) */}
            <CategoryModal
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                editMode={editMode}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                handleImageUpload={handleImageUpload}
                imageText={imageText}
                previewImage={previewImage}
                isSubmitting={isSubmitting} />
        </div >
    );
};

export default ManageCategory;





