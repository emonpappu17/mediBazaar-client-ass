import avatarImg from '../../../assets/placeholder.jpg';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Button from "../../common/Button";
import { useCategories } from "../../../services/categoryService";
import { Dialog, DialogPanel, DialogTitle, } from "@headlessui/react";
import { useState } from "react";
import { useForm } from 'react-hook-form';


const ManageCategory = () => {
    // const [isOpen, setIsOpen] = (false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // experiment
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const [previewImage, setPreviewImage] = useState(null);

    // API Call
    const { data, isLoading, error } = useCategories();
    if (isLoading) return <p>loading...</p>
    if (error) return <p>error</p>


    // experiment
    // Watch for image URL input
    const imageUrl = watch("categoryImage");


    // Handle file upload and convert to URL
    const handleImageUpload = (event) => {
 

        const file = event.target.files[0];
        // console.log('file', file);

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            // console.log('imageUrl', imageUrl);

            setPreviewImage(imageUrl); // Show preview
            setValue("categoryImage", file); // Store file in form state
        }
    };

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };
    console.log('watch imageUrl', imageUrl);
    console.log('imageUrl || previewImage', imageUrl, previewImage);

    return (
        <div className="drop-shadow-md lg:mx-16">

            {/* Add Category */}
            <div className="flex justify-end items-center">
                <Button
                    onclick={() => setIsModalOpen(true)}
                    text=" + Add Category"
                    className="rounded-lg py-2 px-3 mb-4"
                >
                </Button>
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
                        {/* <div className="grid gap-4 mt-4">

                            <div className="grid gap-2 ">
                                <label htmlFor="categoryName" className="text-sm font-medium text-base-content">Category Name</label>
                                <input
                                    id="categoryName"
                                    type="text"
                                    placeholder="Enter category name"
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>


                            <div className="grid gap-2">
                                <label
                                    // htmlFor="categoryImage" 
                                    className="text-sm font-medium text-base-content ">Category Image</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        // id="categoryImage"
                                        type="file"

                                        placeholder="Image URL"
                                        className="w-full rounded-md bg-base-200 p-2 text-sm border-0 outline-base-content focus:outline-1"
                                    />
                                    <span className="text-gray-500">or</span>
                                    <button className="rounded-md btn">
                                        <label>
                                            <input
                                                className='border text-sm cursor-pointer w-36 hidden'
                                                type='file'
                                                name='image'
                                                id='image'
                                                accept='image/*'
                                                hidden
                                            />
                                            <div className=''>
                                                Upload
                                            </div>
                                        </label>
                                    </button>
                                </div>
                            </div>


                            <div className="grid gap-2">
                                <label htmlFor="description" className="text-sm font-medium text-base-content">Description (Optional)</label>
                                <textarea
                                    id="description"
                                    placeholder="Brief description of this category"
                                    className="min-h-20 w-full rounded-md t p-2 text-sm  bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                            </div>
                        </div> */}


                        {/* experiment */}
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-4">
                            {/* Category Name */}
                            <div className="grid gap-2">
                                <label htmlFor="categoryName" className="text-sm font-medium text-base-content">
                                    Category Name
                                </label>
                                <input
                                    id="categoryName"
                                    type="text"
                                    placeholder="Enter category name"
                                    {...register("categoryName", { required: "Category Name is required" })}
                                    className="w-full rounded-md text-sm p-2 bg-base-200 border-0 outline-base-content focus:outline-1"
                                />
                                {errors.categoryName && <p className="text-red-500 text-xs">{errors.categoryName.message}</p>}
                            </div>

                            {/* Category Image (URL or Upload) */}
                            <div className="grid gap-2">
                                <label className="text-sm font-medium text-base-content">
                                    Category Image (URL or Upload)
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="url"
                                        placeholder="Image URL"
                                        {...register("categoryImage")}
                                      
                                        // onChange lagano lagbe
                                        className="w-full rounded-md bg-base-200 p-2 text-sm border-0 outline-base-content focus:outline-1"
                                    />
                                    <span className="text-gray-500">or</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="fileUpload"
                                    />
                                    <label htmlFor="fileUpload" className="btn cursor-pointer">
                                        Upload
                                    </label>
                                </div>
                                {/* Preview Image */}
                                {(imageUrl || previewImage) && (
                                    <img
                                        src={previewImage || imageUrl}
                                        alt="Preview"
                                        className="mt-2 w-32 h-32 object-cover rounded-md"
                                    />
                                )}
                            </div>

                            {/* Submit Button */}
                            {/* <button type="submit" className="px-4 py-2 bg-primary text-primary-content rounded-md hover:bg-primary-focus transition-colors">
                                Add Category
                            </button> */}

                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-base-300  text-base-content rounded-md hover:bg-base-400 transition-colors cursor-pointer"
                                >
                                    Cancel
                                </button>

                                <Button
                                    type='submit'
                                    text='Add Category'
                                    className='px-4 py-2 rounded-md'
                                />
                            </div>
                        </form>




                        {/* Footer Buttons */}
                        {/* <div className="mt-6 flex justify-end gap-3">
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-base-300  text-base-content rounded-md hover:bg-base-400 transition-colors cursor-pointer">
                                Cancel
                            </button>

                            <Button text='Add Category'
                                className='px-4 py-2 rounded-md'
                            ></Button>
                        </div> */}
                    </DialogPanel>
                </div>
            </Dialog>

        </div>
    );
};

export default ManageCategory;