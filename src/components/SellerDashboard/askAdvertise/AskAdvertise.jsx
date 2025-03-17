// import { Dialog, Transition } from "@headlessui/react";
// import React, { Fragment, useState } from "react";
// import { FaCheck, FaEdit, FaEye, FaPlus, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";

// import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import Swal from "sweetalert2";



// const AskAdvertise = () => {
//     // Sample data for demonstration
//     const [advertisements, setAdvertisements] = useState([
//         {
//             id: '1',
//             medicineName: 'Paracetamol 500mg',
//             medicineImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//             description: 'Fast relief for headaches and fever. Most prescribed pain reliever.',
//             status: true, // true means it's being used in slider
//             submittedDate: '2025-03-10'
//         },
//         {
//             id: '2',
//             medicineName: 'Amoxicillin 250mg',
//             medicineImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//             description: 'Broad-spectrum antibiotic effective against many bacterial infections.',
//             status: false,
//             submittedDate: '2025-03-12'
//         },
//         {
//             id: '3',
//             medicineName: 'Vitamin C 1000mg',
//             medicineImage: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
//             description: 'Boosts immunity and promotes skin health. Essential daily supplement.',
//             status: true,
//             submittedDate: '2025-03-14'
//         },
//     ]);

//     // State for modal
//     const [isOpen, setIsOpen] = useState(false);
//     const [formData, setFormData] = useState({
//         medicineName: '',
//         medicineImage: '',
//         description: ''
//     });

//     // Handle form input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Create a new advertisement with demo data
//         const newAdvertisement = {
//             id: (advertisements.length + 1).toString(),
//             ...formData,
//             status: false,
//             submittedDate: new Date().toISOString().split('T')[0]
//         };

//         // Add to the state
//         setAdvertisements([...advertisements, newAdvertisement]);

//         // Close modal and reset form
//         closeModal();
//     };

//     // Open modal
//     const openModal = () => {
//         setIsOpen(true);
//     };

//     // Close modal
//     const closeModal = () => {
//         setIsOpen(false);
//         setFormData({
//             medicineName: '',
//             medicineImage: '',
//             description: ''
//         });
//     };
//     return (
//         <div className="p-4">
//             {/* <Helmet>
//           <title>Ask For Advertisement | Seller Dashboard</title>
//         </Helmet> */}

//             <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-2xl font-bold text-primary">Ask For Advertisement</h2>
//                 <button
//                     onClick={openModal}
//                     className="btn btn-primary flex items-center gap-2"
//                 >
//                     <FaPlus /> Add Advertise
//                 </button>
//             </div>

//             {/* Status summary */}
//             <div className="stats shadow w-full mb-6">
//                 <div className="stat">
//                     <div className="stat-title">Total Advertisements</div>
//                     <div className="stat-value">{advertisements.length}</div>
//                 </div>
//                 <div className="stat">
//                     <div className="stat-title">Active in Slider</div>
//                     <div className="stat-value">{advertisements.filter(ad => ad.status).length}</div>
//                 </div>
//                 <div className="stat">
//                     <div className="stat-title">Pending Approval</div>
//                     <div className="stat-value">{advertisements.filter(ad => !ad.status).length}</div>
//                 </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Medicine Name</th>
//                             <th>Description</th>
//                             <th>Submitted Date</th>
//                             <th>Status</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {advertisements.map((ad) => (
//                             <tr key={ad.id} className="hover">
//                                 <td>
//                                     <div className="avatar">
//                                         <div className="mask mask-squircle w-12 h-12">
//                                             <img src={ad.medicineImage} alt={ad.medicineName} />
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>{ad.medicineName}</td>
//                                 <td className="max-w-xs truncate">{ad.description}</td>
//                                 <td>{ad.submittedDate}</td>
//                                 <td>
//                                     {ad.status ? (
//                                         <span className="badge badge-success gap-2">
//                                             <FaCheck size={12} /> Active
//                                         </span>
//                                     ) : (
//                                         <span className="badge badge-warning gap-2">
//                                             <FaTimes size={12} /> Pending
//                                         </span>
//                                     )}
//                                 </td>
//                                 <td>
//                                     <div className="flex gap-2">
//                                         <button className="btn btn-sm btn-info">
//                                             <FaEdit />
//                                         </button>
//                                         <button className="btn btn-sm btn-error">
//                                             <FaTrash />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Empty state */}
//             {advertisements.length === 0 && (
//                 <div className="flex flex-col items-center justify-center p-12 bg-base-200 rounded-lg">
//                     <img
//                         src="/api/placeholder/120/120"
//                         alt="No advertisements"
//                         className="w-24 h-24 mb-4 opacity-50"
//                     />
//                     <h3 className="text-xl font-semibold mb-2">No advertisements yet</h3>
//                     <p className="text-center mb-4">You haven't submitted any medicine advertisements yet.</p>
//                     <button
//                         onClick={openModal}
//                         className="btn btn-primary"
//                     >
//                         Create Your First Advertisement
//                     </button>
//                 </div>
//             )}

//             {/* Add Advertisement Modal */}
//             <Transition show={isOpen} as={React.Fragment}>
//                 <Dialog
//                     as="div"
//                     className="fixed inset-0 z-50 overflow-y-auto"
//                     onClose={closeModal}
//                 >
//                     <div className="min-h-screen px-4 text-center">
//                         <Transition.Child
//                             as={React.Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0"
//                             enterTo="opacity-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100"
//                             leaveTo="opacity-0"
//                         >
//                             <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
//                         </Transition.Child>

//                         {/* Modal content */}
//                         <span className="inline-block h-screen align-middle" aria-hidden="true">
//                             &#8203;
//                         </span>
//                         <Transition.Child
//                             as={React.Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-base-100 shadow-xl rounded-2xl">
//                                 <Dialog.Title
//                                     as="h3"
//                                     className="text-lg font-medium leading-6 text-primary mb-4"
//                                 >
//                                     Add New Advertisement
//                                 </Dialog.Title>

//                                 <form onSubmit={handleSubmit} className="space-y-4">
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Medicine Name</span>
//                                         </label>
//                                         <select
//                                             name="medicineName"
//                                             value={formData.medicineName}
//                                             onChange={handleChange}
//                                             className="select select-bordered w-full"
//                                             required
//                                         >
//                                             <option value="" disabled>Select your medicine</option>
//                                             <option value="Paracetamol 500mg">Paracetamol 500mg</option>
//                                             <option value="Amoxicillin 250mg">Amoxicillin 250mg</option>
//                                             <option value="Vitamin C 1000mg">Vitamin C 1000mg</option>
//                                             <option value="Ibuprofen 400mg">Ibuprofen 400mg</option>
//                                             <option value="Metformin 500mg">Metformin 500mg</option>
//                                         </select>
//                                     </div>

//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Medicine Image URL</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="medicineImage"
//                                             value={formData.medicineImage}
//                                             onChange={handleChange}
//                                             placeholder="https://example.com/image.jpg"
//                                             className="input input-bordered w-full"
//                                             required
//                                         />
//                                     </div>

//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Advertisement Description</span>
//                                         </label>
//                                         <textarea
//                                             name="description"
//                                             value={formData.description}
//                                             onChange={handleChange}
//                                             className="textarea textarea-bordered h-24"
//                                             placeholder="Write a compelling description for your advertisement"
//                                             required
//                                         ></textarea>
//                                     </div>

//                                     <div className="flex justify-end gap-3 pt-4">
//                                         <button
//                                             type="button"
//                                             className="btn btn-outline"
//                                             onClick={closeModal}
//                                         >
//                                             Cancel
//                                         </button>
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary"
//                                         >
//                                             Submit Advertisement
//                                         </button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </Transition.Child>
//                     </div>
//                 </Dialog>
//             </Transition>
//         </div>
//     );
// };

// export default AskAdvertise;


/////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////

import { Dialog, DialogPanel, DialogTitle, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";
import { FaChevronDown, FaEdit, FaTrashAlt } from "react-icons/fa";
import { useBanners, useSellerMedicineName } from "../../../services/bannerService";
import { MdCheck } from "react-icons/md";

const AskAdvertise = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
    const [imagePreview, setImagePreview] = useState(null); // State for image preview
    const [imageText, setImageText] = useState("Upload Image"); // State for image upload text
    const [isSubmitting, setIsSubmitting] = useState(false); // State for loading during submission
    const [selectedMedicine, setSelectedMedicine] = useState(null);



    // const fakeMedicineNames = [
    //     "Paracetamol",
    //     "Ibuprofen",
    //     "Amoxicillin",
    //     "Cetirizine",
    //     "Metformin",
    //     "Azithromycin",
    //     "Loratadine",
    //     "Aspirin",
    //     "Ciprofloxacin",
    //     "Doxycycline",
    // ];

    // API Call
    const { data: advertises } = useBanners();
    const { data: sellerMedicine } = useSellerMedicineName();
    console.log('MedicineName', sellerMedicine);
    // console.log(advertises);

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setImageText(file.name);
        }
    };


    return (
        <>
            <div className=" drop-shadow-md lg:mx-16">
                {/* Button to open modal */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 mb-6"
                >
                    Ask Advertisement
                </button>

                {/* Table for existing advertisement requests */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-base-100 rounded-lg">
                        <thead className="bg-base-200">
                            <tr className="border-b border-base-300">
                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Image</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Name</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Description</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider"> Submitted Date</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Status</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-base-content uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-300">
                            {advertises?.map((add) => (
                                <tr
                                    key={add._id}
                                    className="hover:bg-base-200">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center">
                                            <img className="size-16 rounded-md object-cover" src={add?.image} alt={`${add.name}`} />
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-base-content font-medium">{add.name}</td>
                                    <td className="py-3 px-4">
                                        <p className={'bg-blue-50 text-blue-700 border-blue-200 w-fit px-2 py-1 inline-flex text-xs font-semibold rounded-full capitalize'}>
                                            {add.description}
                                        </p>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-base-content text-nowrap">
                                        {/* {format(new Date(add.createdAt), "yyyy-MM-dd")} */}
                                        35-37-4787
                                    </td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-3 py-1 text-sm font-semibold rounded-full ${add.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : add.status === "Approved"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {add.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-base-content">
                                        <div className="flex gap-4">
                                            {/* Edit Button */}
                                            <button
                                                className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                                <FaEdit className="text-lg" />
                                            </button>

                                            {/* Delete Button */}
                                            <button
                                                className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                                <FaTrashAlt className="text-lg"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal for new advertisement request */}
                <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <DialogPanel className="w-full max-w-md bg-base-100 rounded-lg shadow-xl p-6">
                            <DialogTitle className="text-lg font-medium text-base-content">Ask for Advertisement</DialogTitle>
                            <p className="mt-2 text-sm text-base-content/70">
                                Select a medicine, upload an image, and provide a description for your advertisement.
                            </p>
                            {/* Form */}
                            <form className="grid gap-4 mt-4">

                                {/* Medicine Selection Dropdown */}
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-base-content">Select Medicine</label>
                                    <Listbox value={selectedMedicine} onChange={setSelectedMedicine}>
                                        <div className="relative">
                                            <ListboxButton className="w-full bg-base-200 text-base-content rounded-md py-2 px-3 flex justify-between items-center border border-base-300">
                                                <p>{selectedMedicine ? selectedMedicine : "Choose a Medicine"}</p>
                                                <FaChevronDown className="text-sm opacity-60 " />
                                            </ListboxButton>
                                            <ListboxOptions className="absolute mt-1 w-full bg-base-100 rounded-md shadow-lg max-h-60 overflow-auto border border-base-300">
                                                {sellerMedicine?.length > 0 ? (
                                                    sellerMedicine?.map((medicine) => (
                                                        <ListboxOption
                                                            key={medicine._id}
                                                            value={medicine.name}
                                                            className="cursor-pointer select-none py-2 px-4 text-base-content hover:bg-base-200 flex justify-between items-center"
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <p className={selected ? "font-semibold" : "font-normal"}>
                                                                        {medicine.name}
                                                                    </p>
                                                                    {selected && <MdCheck className="h-5 w-5 text-[#0D6FEC]" />}
                                                                </>
                                                            )}
                                                        </ListboxOption>
                                                    ))
                                                ) : (
                                                    <p className="py-2 px-4 text-gray-400">No medicines available</p>
                                                )}
                                            </ListboxOptions>
                                        </div>
                                    </Listbox>
                                </div>

                                {/* Image Upload */}
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-base-content">Advertisement Image</label>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="px-5 py-3 border-4 border-dotted border-base-300 rounded-lg">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                id="fileUpload"
                                                onChange={handleImageUpload}
                                            />
                                            <label htmlFor="fileUpload" className="btn cursor-pointer">
                                                {imageText.length > 20 ? imageText.slice(0, 15) + "..." : imageText}
                                            </label>
                                        </div>
                                        {imagePreview && (
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="size-20 object-cover rounded-md"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-base-content">Advertisement Description</label>
                                    <textarea
                                        placeholder="Write a promotional description..."
                                        className="min-h-20 w-full rounded-md p-2 text-sm bg-base-200 border-0 outline-base-content focus:outline-1"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="btn"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn bg-[#0D6FEC] hover:bg-[#35C7DF] text-white px-4 py-2 rounded-md w-40"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>
            </div>
        </>
    );
};

export default AskAdvertise;



// const AskAdvertise = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
//     const [imagePreview, setImagePreview] = useState(null); // State for image preview
//     const [imageText, setImageText] = useState("Upload Image"); // State for image upload text
//     const [description, setDescription] = useState(""); // State for description
//     const [selectedMedicine, setSelectedMedicine] = useState(""); // State for selected medicine
//     const [discountPercentage, setDiscountPercentage] = useState(0); // State for discount percentage
//     const [isSubmitting, setIsSubmitting] = useState(false); // State for loading during submission
//     const [advertisements, setAdvertisements] = useState([
//         // Demo data for existing advertisement requests
//         {
//             id: 1,
//             image: "https://via.placeholder.com/150",
//             description: "Advertisement for Painkillers",
//             medicine: "Painkillers",
//             discount: 10,
//             status: "Pending",
//         },
//         {
//             id: 2,
//             image: "https://via.placeholder.com/150",
//             description: "Advertisement for Vitamins",
//             medicine: "Vitamins",
//             discount: 0,
//             status: "Approved",
//         },
//         {
//             id: 3,
//             image: "https://via.placeholder.com/150",
//             description: "Advertisement for Cough Syrup",
//             medicine: "Cough Syrup",
//             discount: 5,
//             status: "Rejected",
//         },
//     ]);

//     // Demo medicines for dropdown
//     const medicines = [
//         { id: 1, name: "Painkillers" },
//         { id: 2, name: "Vitamins" },
//         { id: 3, name: "Cough Syrup" },
//         { id: 4, name: "Antibiotics" },
//         { id: 5, name: "Antihistamines" },
//     ];

//     // Handle image upload
//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setImagePreview(reader.result);
//             };
//             reader.readAsDataURL(file);
//             setImageText(file.name);
//         }
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!imagePreview) {
//             toast.error("Please upload an image for the advertisement.");
//             return;
//         }
//         if (!description) {
//             toast.error("Please provide a description for the advertisement.");
//             return;
//         }
//         if (!selectedMedicine) {
//             toast.error("Please select a medicine for the advertisement.");
//             return;
//         }

//         setIsSubmitting(true); // Start loading
//         // Simulate API call
//         setTimeout(() => {
//             const newAd = {
//                 id: advertisements.length + 1,
//                 image: imagePreview,
//                 description,
//                 medicine: selectedMedicine,
//                 discount: discountPercentage,
//                 status: "Pending",
//             };
//             setAdvertisements([...advertisements, newAd]); // Add new advertisement to the list
//             toast.success("Advertisement request submitted successfully!");
//             setIsSubmitting(false); // Stop loading
//             setIsModalOpen(false); // Close modal
//             setImagePreview(null); // Reset image
//             setImageText("Upload Image"); // Reset image text
//             setDescription(""); // Reset description
//             setSelectedMedicine(""); // Reset selected medicine
//             setDiscountPercentage(0); // Reset discount percentage
//         }, 2000);
//     };

//     // Handle delete advertisement
//     const handleDelete = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 setAdvertisements(advertisements.filter((ad) => ad.id !== id)); // Remove advertisement from the list
//                 Swal.fire("Deleted!", "Your advertisement has been deleted.", "success");
//             }
//         });
//     };
//     return (
//         <div className="p-6">
//             {/* Button to open modal */}
//             <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 mb-6"
//             >
//                 Ask for Advertisement
//             </button>

//             {/* Table for existing advertisement requests */}
//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
//                     <thead className="bg-gray-100 dark:bg-gray-700">
//                         <tr>
//                             <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
//                                 Image
//                             </th>
//                             <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
//                                 Description
//                             </th>
//                             <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
//                                 Medicine
//                             </th>
//                             <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
//                                 Discount
//                             </th>
//                             <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
//                                 Status
//                             </th>
//                             <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
//                                 Actions
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
//                         {advertisements.map((ad) => (
//                             <tr key={ad.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
//                                 <td className="py-4 px-4">
//                                     <img
//                                         src={ad.image}
//                                         alt="Advertisement"
//                                         className="w-16 h-16 object-cover rounded-lg"
//                                     />
//                                 </td>
//                                 <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
//                                     {ad.description}
//                                 </td>
//                                 <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
//                                     {ad.medicine}
//                                 </td>
//                                 <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
//                                     {ad.discount}%
//                                 </td>
//                                 <td className="py-4 px-4">
//                                     <span
//                                         className={`px-3 py-1 text-sm font-semibold rounded-full ${ad.status === "Pending"
//                                             ? "bg-yellow-100 text-yellow-800"
//                                             : ad.status === "Approved"
//                                                 ? "bg-green-100 text-green-800"
//                                                 : "bg-red-100 text-red-800"
//                                             }`}
//                                     >
//                                         {ad.status}
//                                     </span>
//                                 </td>
//                                 <td className="py-4 px-4">
//                                     <div className="flex gap-4">
//                                         {/* Edit Button */}
//                                         <button
//                                             onClick={() => toast.error("Edit functionality not implemented yet.")}
//                                             className="p-2 rounded-full transition-all duration-300 bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
//                                         >
//                                             <FaEdit className="text-lg" />
//                                         </button>

//                                         {/* Delete Button */}
//                                         <button
//                                             onClick={() => handleDelete(ad.id)}
//                                             className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
//                                         >
//                                             <FaTrashAlt className="text-lg" />
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//             {/* Modal for new advertisement request */}
//             <Dialog
//                 open={isModalOpen}
//                 as="div"
//                 onClose={() => setIsModalOpen(false)}
//                 className="relative z-50"
//             >
//                 <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//                 <div className="fixed inset-0 flex items-center justify-center p-4">
//                     <DialogPanel
//                         transition
//                         className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
//                     >
//                         <DialogTitle className="text-lg font-medium text-gray-900 dark:text-white">
//                             Ask for Advertisement
//                         </DialogTitle>
//                         <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                             Upload an image and provide details for your advertisement request.
//                         </p>

//                         {/* Form */}
//                         <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
//                             {/* Image Upload Section */}
//                             <div className="grid gap-2">
//                                 <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                                     Advertisement Image
//                                 </label>
//                                 <div className="flex items-center justify-between gap-2">
//                                     <div className="px-5 py-3 border-4 border-dotted border-gray-300 dark:border-gray-600 rounded-lg">
//                                         <input
//                                             type="file"
//                                             accept="image/*"
//                                             className="hidden"
//                                             id="fileUpload"
//                                             onChange={handleImageUpload}
//                                         />
//                                         <label
//                                             htmlFor="fileUpload"
//                                             className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600"
//                                         >
//                                             {/* <HiUpload className="w-5 h-5" /> */}
//                                             <span>
//                                                 {imageText.length > 20
//                                                     ? imageText.split(".")[0].slice(0, 15) + "...." + (imageText.split(".")[1]?.slice(0, 3) || "")
//                                                     : imageText}
//                                             </span>
//                                         </label>
//                                     </div>
//                                     {imagePreview && (
//                                         <img
//                                             src={imagePreview}
//                                             alt="Preview"
//                                             className="size-20 object-cover rounded-md"
//                                         />
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Description Section */}
//                             <div className="grid gap-2">
//                                 <label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                                     Description
//                                 </label>
//                                 <textarea
//                                     id="description"
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     placeholder="Enter a description for your advertisement..."
//                                     className="min-h-20 w-full rounded-md p-2 text-sm bg-gray-100 dark:bg-gray-700 border-0 outline-none focus:ring-2 focus:ring-blue-500"
//                                     required
//                                 />
//                             </div>

//                             {/* Medicine Selection Section */}
//                             <div className="grid gap-2">
//                                 <label htmlFor="medicine" className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                                     Select Medicine
//                                 </label>
//                                 <select
//                                     id="medicine"
//                                     value={selectedMedicine}
//                                     onChange={(e) => setSelectedMedicine(e.target.value)}
//                                     className="w-full rounded-md p-2 text-sm bg-gray-100 dark:bg-gray-700 border-0 outline-none focus:ring-2 focus:ring-blue-500"
//                                     required
//                                 >
//                                     <option value="" disabled>
//                                         Select a medicine
//                                     </option>
//                                     {medicines.map((medicine) => (
//                                         <option key={medicine.id} value={medicine.name}>
//                                             {medicine.name}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             {/* Discount Percentage Section */}
//                             <div className="grid gap-2">
//                                 <label htmlFor="discount" className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                                     Discount Percentage (Optional)
//                                 </label>
//                                 <input
//                                     id="discount"
//                                     type="number"
//                                     value={discountPercentage}
//                                     onChange={(e) => setDiscountPercentage(Number(e.target.value))}
//                                     placeholder="Enter discount percentage"
//                                     className="w-full rounded-md p-2 text-sm bg-gray-100 dark:bg-gray-700 border-0 outline-none focus:ring-2 focus:ring-blue-500"
//                                     min="0"
//                                     max="100"
//                                 />
//                             </div>

//                             {/* Buttons */}
//                             <div className="flex justify-end gap-3">
//                                 <button
//                                     type="button"
//                                     onClick={() => setIsModalOpen(false)}
//                                     className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {isSubmitting ? "Submitting..." : "Submit Request"}
//                                 </button>
//                             </div>
//                         </form>
//                     </DialogPanel>
//                 </div>
//             </Dialog>
//         </div>
//     );
// };

// export default AskAdvertise;



