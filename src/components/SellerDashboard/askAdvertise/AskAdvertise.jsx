import { useState } from "react";
import { useAskAdvertisement, useDeleteAdvertise, useSellerAds, useSellerMedicineName, } from "../../../services/bannerService";
import toast from "react-hot-toast";
import uploadImageToImgBB from "../../../services/imgbbService";
import Button from "../../common/Button";
import useAuth from "../../../hooks/useAuth";

import AdvertiseStat from "../../common/AdvertiseStat";
import AskAdvertiseRow from "./AskAdvertiseRow";
import AskAdvertiseModal from "./AskAdvertiseModal";

const AskAdvertise = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageText, setImageText] = useState("Upload Image");
    const [imageFile, setImageFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const [description, setDescription] = useState("");
    const [controller, setController] = useState(null);

    const { user } = useAuth()

    // API Calls
    const { data: advertises } = useSellerAds();
    const { data: sellerMedicine } = useSellerMedicineName();
    const { mutateAsync: askAdvertise } = useAskAdvertisement();
    const { mutate: deleteAdvertise } = useDeleteAdvertise();

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageText(file.name);
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl)
            setImageFile(file)
        }
    };

    // handleSubmit 
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        try {
            if (!selectedMedicine || !imageFile || !description) {
                setIsSubmitting(false)
                return toast.error('All fields are required!');
            }

            // for cancel api call
            const newController = new AbortController();
            setController(newController)

            // uploading image to imgBB
            const imageUrl = await uploadImageToImgBB(imageFile, newController);

            const formData = {
                name: selectedMedicine,
                image: imageUrl,
                description: description,
                sellerEmail: user?.email,
                status: 'Pending'
            }

            // asking for advertisement
            const data = await askAdvertise({ formData, controller: newController })

            if (data.insertedId) {
                toast.success('Request for advertisement is sent successfully')
            }

            // close modal and reset form
            resetForm();
        } catch (err) {
            toast.error(err.message)
        } finally {
            setIsSubmitting(false);
        }
    }

    // Cancel modal
    const handleCloseModal = () => {
        if (controller) {
            controller.abort();
            console.log("API requests aborted");
        }

        // close modal and reset form
        resetForm()
    }

    // reset form
    const resetForm = () => {
        setSelectedMedicine(null);
        setImagePreview(null)
        setImageText('Upload Image')
        setImageFile(null);
        setDescription('');
        setIsModalOpen(false);
        setIsSubmitting(false);
        setController(null)
    }

    return (
        <>
            <div className=" drop-shadow-md lg:mx-16 ">
                {/* Button to open modal */}
                <Button
                    onclick={() => setIsModalOpen(true)}
                    className="py-2 px-4 mb-6 rounded-lg"
                    text="Ask Advertisement"
                ></Button>

                {/* Status count */}
                <AdvertiseStat advertises={advertises} />

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
                            {advertises?.advertisements?.map((add) => (
                                <AskAdvertiseRow key={add._id} add={add} deleteAdvertise={deleteAdvertise} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal for new advertisement request */}
                <AskAdvertiseModal
                    isModalOpen={isModalOpen}
                    handleCloseModal={handleCloseModal}
                    handleSubmit={handleSubmit}
                    selectedMedicine={selectedMedicine}
                    setSelectedMedicine={setSelectedMedicine}
                    sellerMedicine={sellerMedicine}
                    handleImageUpload={handleImageUpload}
                    imageText={imageText}
                    imagePreview={imagePreview}
                    isSubmitting={isSubmitting}
                    setDescription={setDescription} />
            </div>
        </>
    );
};

export default AskAdvertise;





