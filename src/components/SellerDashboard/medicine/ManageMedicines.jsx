import { useAddMedicine, useDeleteMedicine, useSellerMedicines, useUpdateMedicine } from "../../../services/medicineService";
import Button from "../../common/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCategories } from "../../../services/categoryService";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import uploadImageToImgBB from "../../../services/imgbbService";
import ManageMedicinesRow from "./ManageMedicinesRow";
import ManageMedicinesModal from "./ManageMedicinesModal";
import TableSkeleton from "../../common/TableSkeleton";

const ManageMedicines = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [imageText, setImageText] = useState('Upload image');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [currentMedicine, setCurrentMedicine] = useState();
    const [controller, setController] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCompany, setSelectedCompany] = useState(null)
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const { user } = useAuth()

    // API Calls
    const { data: medicines, isLoading, isError } = useSellerMedicines();
    const { data: categories } = useCategories();
    const { mutateAsync: addMedicine } = useAddMedicine()
    const { mutateAsync: updateMedicine } = useUpdateMedicine()
    const { mutateAsync: deleteMedicine } = useDeleteMedicine()

    // Handle Image
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageText(file.name);
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
            setValue("image", file);
        }
    };

    // Open modal for adding new medicine
    const openAddModal = () => {
        resetForm();
        setEditMode(false);
        setCurrentMedicine(null);
        setIsModalOpen(true);
    };

    // Open modal for editing a medicine
    const openEditModal = (medicine) => {
        resetForm();
        setEditMode(true);
        setCurrentMedicine(medicine);

        // Set form values
        setValue("name", medicine.name);
        setValue("category", medicine.category);
        setValue("company", medicine.company);
        setValue("description", medicine.description);
        setValue("discount", medicine.discount);
        setValue("genericName", medicine.genericName);
        setValue("image", medicine.image);
        setValue("massUnit", medicine.massUnit);
        setValue("price", medicine.price);
        setValue("sellerEmail", medicine.sellerEmail);
        setValue("stock", medicine.stock);
        setSelectedCategory(medicine.category)
        setSelectedCompany(medicine.company)

        // Set preview image if available
        if (medicine.image) {
            setPreviewImage(medicine.image);
            setImageText("Current Image");
        }
        setIsModalOpen(true);
    };

    // Reset form and state
    const resetForm = () => {
        reset();
        setSelectedCategory(null)
        setSelectedCompany(null)
        setPreviewImage(null);
        setImageText('Upload image');
    };

    // Submitting form
    const onSubmit = async (data) => {

        if (!selectedCategory || !selectedCompany || !data.image) {
            toast.error("Please select all category, company and image")
            return;
        }
        try {
            setIsSubmitting(true)
            let imageUrl = data.image;

            // for cancel api execution
            const newController = new AbortController();
            setController(newController)

            if (data.image instanceof File) {
                imageUrl = await uploadImageToImgBB(data.image, newController);
            }

            // Merge selected values into the form data
            const medicine = {
                ...data,
                image: imageUrl,
                price: Number(data.price),
                discount: Number(data.discount) || 0,
                stock: Number(data.stock),
                category: selectedCategory,
                company: selectedCompany,
                sellerEmail: user?.email
            };

            if (editMode) {
                //edit api call
                const result = await updateMedicine({ medicine, id: currentMedicine._id, controller: newController })
                if (result.modifiedCount > 0) {
                    toast.success('Medicine updated successfully')
                }
            }
            else {
                const result = await addMedicine({ medicine, controller: newController })
                if (result.insertedId) {
                    toast.success('Medicine added successfully')
                }
                else {
                    toast.error(result.message);
                }
            }

            // reset form and close modal
            resetForm()
            setIsModalOpen(false)
        } catch (err) {
            console.log(err);
            toast.error(`Failed to ${editMode ? 'update' : 'add'} Medicine. Please try again.`);
        } finally {
            setIsSubmitting(false)
        }
    }

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
        setCurrentMedicine(null);
        setIsModalOpen(false);
        setController(null)
    };
    return (
        <div>

            {/* Add Category */}
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-2xl font-semibold'>Total Medicine: {medicines?.length}</h1>
                <Button
                    onclick={openAddModal}
                    text="+ Add Medicine"
                    className="rounded-lg py-2 px-3"
                />
            </div>

            {
                isLoading ? (
                    <TableSkeleton />
                ) : isError ? (
                    <div className="bg-error/10 text-error p-6 rounded-lg text-center">
                        Failed to load medicine data. Please try again.
                    </div>
                ) : medicines?.length === 0 ? (
                    <div className="bg-base-200 p-6 rounded-lg text-center">
                        <p className="text-base-content">No medicine records found.</p>
                    </div>
                ) : (
                    <>
                        {/* Table */}
                        <div className="overflow-x-auto drop-shadow-md">
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
                                        <ManageMedicinesRow
                                            key={medicine._id}
                                            medicine={medicine}
                                            deleteMedicine={deleteMedicine}
                                            openEditModal={openEditModal} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            }

            {/* Medicine Modal (Add/Edit) */}
            <ManageMedicinesModal
                isModalOpen={isModalOpen}
                handleCloseModal={handleCloseModal}
                editMode={editMode}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
                handleImageUpload={handleImageUpload}
                imageText={imageText}
                previewImage={previewImage}
                isSubmitting={isSubmitting}
                errors={errors} />
        </div >
    );
};

export default ManageMedicines;