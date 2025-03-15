import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Button from "../../common/Button";
import PropTypes from "prop-types";

const CategoryModal = ({ isModalOpen, handleCloseModal, editMode, handleSubmit, onSubmit, register, handleImageUpload, imageText, previewImage, isSubmitting }) => {
    return (
        <Dialog
            open={isModalOpen}
            as="div"
            onClose={handleCloseModal}
            className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    transition
                    className="w-full max-w-sm bg-base-100 rounded-lg shadow-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                    <DialogTitle className="text-lg font-medium text-base-content">
                        {editMode ? 'Update Category' : 'Add New Category'}
                    </DialogTitle>
                    <p className="mt-2 text-sm text-base-content/70">
                        {editMode
                            ? 'Update the details below to modify this category.'
                            : 'Enter the details below to create a new category.'}
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-4">

                        {/* Name */}
                        <div className="grid gap-2">
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
                            <label className="text-sm font-medium text-base-content">Category Image Upload</label>
                            <div className="flex items-center justify-between gap-2">
                                <div className='px-5 py-3 border-4 border-dotted border-base-300 rounded-lg'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        id="fileUpload"
                                        onChange={handleImageUpload}
                                    />
                                    <label htmlFor="fileUpload" className="btn cursor-pointer">
                                        {/* Image Text */}
                                        {imageText.length > 20 ? imageText.split('.')[0].slice(0, 15) + '....' + (imageText.split('.')[1]?.slice(0, 3) || '') : imageText}
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
                            {editMode && (
                                <p className="text-xs text-base-content/70">
                                    Leave blank to keep the current image
                                </p>
                            )}
                        </div>

                        {/* Description */}
                        <div className="grid gap-2">
                            <label htmlFor="description" className="text-sm font-medium text-base-content">Description (Optional)</label>
                            <textarea
                                id="description"
                                placeholder="Brief description of this category"
                                className="min-h-20 w-full rounded-md p-2 text-sm bg-base-200 border-0 outline-base-content focus:outline-1"
                            />
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                type='button'
                                onClick={handleCloseModal}
                                className='btn'
                            >
                                Cancel
                            </button>
                            <Button
                                disabled={isSubmitting}
                                spinner={isSubmitting}
                                type='submit'
                                text={editMode ? 'Update Category' : 'Add Category'}
                                className='px-4 py-2 rounded-md w-40'
                            />
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
};

// ✅ Prop Validation
CategoryModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    editMode: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    handleImageUpload: PropTypes.func.isRequired,
    imageText: PropTypes.string,
    previewImage: PropTypes.string,
    isSubmitting: PropTypes.bool
};

export default CategoryModal;