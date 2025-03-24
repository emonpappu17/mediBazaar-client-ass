import { MdCheck } from "react-icons/md";
import Button from "../../common/Button";
import ImageUpload from "../../common/ImageUpload";
import { Dialog, DialogPanel, DialogTitle, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";

const ManageMedicinesModal = ({
    isModalOpen,
    handleCloseModal,
    editMode,
    handleSubmit,
    onSubmit,
    register,
    selectedCategory,
    setSelectedCategory,
    categories,
    selectedCompany,
    setSelectedCompany,
    handleImageUpload,
    imageText,
    previewImage,
    isSubmitting,
    errors }) => {
    const companies = [
        'XYZ Pharma',
        'ABC Pharma',
        'DEF Pharma',
        'GHI Pharma',
        'PQR Pharma',
        'STU Pharma',
        'XIZ Pharma'
    ]
    return (
        <Dialog
            open={isModalOpen}
            as="div"
            onClose={handleCloseModal}
            className="relative z-50">

            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-md bg-base-100 rounded-lg shadow-xl px-4 pt-4 sm:pt-6 sm:px-6  max-h-[80vh] overflow-y-auto duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 ">

                    {/* Modal Title */}
                    <DialogTitle className="text-lg font-medium text-base-content">
                        {editMode ? "Update Medicine" : "Add New Medicine"}
                    </DialogTitle>
                    <p className="mt-2 text-sm text-base-content/70">
                        {editMode
                            ? "Update the details below to modify this medicine."
                            : "Enter the details below to add a new medicine."}
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-4">

                        {/* Medicine Name */}
                        <div className="grid gap-2">
                            <label htmlFor="medicineName" className="text-sm font-medium text-base-content">Medicine Name</label>
                            <input
                                id="medicineName"
                                type="text"
                                placeholder="Enter medicine name"
                                required
                                {...register("name")}
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
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-base-content">Select Category</label>
                            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                                <div className="relative">
                                    <ListboxButton className="w-full bg-base-200 text-base-content rounded-md py-2 px-3 flex justify-between items-center">
                                        <p>{selectedCategory || "Choose a Category"}</p>
                                        <FaChevronDown className="text-sm opacity-60" />
                                    </ListboxButton>
                                    <ListboxOptions className="absolute mt-1 w-full bg-base-100 rounded-md shadow-lg max-h-60 overflow-auto border border-base-300 z-20">
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
                        </div>

                        {/* Company Dropdown */}
                        <div className="grid gap-2">
                            <label className="text-sm font-medium text-base-content">Select Company</label>
                            <Listbox value={selectedCompany} onChange={setSelectedCompany}>
                                <div className="relative">
                                    <ListboxButton className="w-full bg-base-200 text-base-content rounded-md py-2 px-3 flex justify-between items-center">
                                        <p>{selectedCompany || "Choose a Company"}</p>
                                        <FaChevronDown className="text-sm opacity-60" />
                                    </ListboxButton>
                                    <ListboxOptions className="absolute mt-1 w-full bg-base-100 rounded-md shadow-lg max-h-60 overflow-auto border border-base-300 z-20">
                                        {companies.map((company, indx) => (
                                            <ListboxOption
                                                key={indx}
                                                value={company}
                                                className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <p className={selected ? "font-semibold" : "font-normal"}>
                                                            {company}
                                                        </p>
                                                        {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                                    </>
                                                )}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </div>
                            </Listbox>
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
                                // {...register("price")}
                                {...register("price", {
                                    min: { value: 0, message: "Price cannot be negative" },
                                    // max: { value: 400, message: "Price cannot exceed $400" }
                                })}
                                className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                            />
                            {errors?.price && <p className="text-red-500 text-xs">{errors?.price?.message}</p>}
                        </div>

                        {/* Discount */}
                        <div className="grid gap-2">
                            <label htmlFor="discount" className="text-sm font-medium text-base-content">Discount (%) (Optional)</label>
                            <input
                                id="discount"
                                type="number"
                                placeholder="Enter discount percentage"
                                // required
                                // {...register("discount")}
                                {...register("discount", {
                                    min: { value: 0, message: "Discount cannot be negative" },
                                    max: { value: 100, message: "Discount cannot exceed 100%" }
                                })}
                                className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                            />
                            {errors?.discount && <p className="text-red-500 text-xs">{errors?.discount?.message}</p>}
                        </div>

                        {/* Stock */}
                        <div className="grid gap-2">
                            <label htmlFor="stock" className="text-sm font-medium text-base-content">Stock Quantity</label>
                            <input
                                id="stock"
                                type="number"
                                placeholder="Enter stock quantity"
                                required
                                {...register("stock", {
                                    min: { value: 0, message: 'Stock quantity cannot be negative' }
                                })}
                                className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                            />
                            {errors?.stock && <p className="text-red-500 text-xs">{errors?.stock?.message}</p>}
                        </div>

                        {/* Description */}
                        <div className="grid gap-2">
                            <label htmlFor="description" className="text-sm font-medium text-base-content">Description</label>
                            <textarea
                                id="description"
                                placeholder="Brief description of this medicine"
                                required
                                {...register("description")}
                                className="min-h-20 w-full rounded-md p-2 text-sm bg-base-200 border-0 outline-base-content focus:outline-1"
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

                        {/* Buttons - Stick to Bottom */}
                        <div className="sticky bottom-0 bg-base-100 py-3 flex justify-end gap-3 z-20 ">
                            <button type="button" onClick={handleCloseModal} className="btn">Cancel</button>
                            <Button
                                disabled={isSubmitting}
                                spinner={isSubmitting}
                                type="submit"
                                text={editMode ? "Update Medicine" : "Add Medicine"}
                                className="px-4 py-2 rounded-md w-40"
                            />
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

// Prop Validation
ManageMedicinesModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    selectedCategory: PropTypes.string,
    setSelectedCategory: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            categoryName: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedCompany: PropTypes.string,
    setSelectedCompany: PropTypes.func.isRequired,
    handleImageUpload: PropTypes.func.isRequired,
    imageText: PropTypes.string.isRequired,
    previewImage: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    errors: PropTypes.object
};


export default ManageMedicinesModal;