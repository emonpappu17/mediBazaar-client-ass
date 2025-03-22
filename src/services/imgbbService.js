import axios from "axios";

const uploadImageToImgBB = async (imageFile, controller) => {
    const formData = new FormData();
    formData.append("image", imageFile);
    try {
        //  1. Upload Image and Get Image Url
        const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData, { signal: controller?.signal })
        if (response.data.success) {
            return response.data.data.display_url
        }
        else {
            throw new Error('Image upload failed')
        }
    } catch (error) {
        if (axios.isCancel(error)) {
            console.log("Image upload canceled");
        } else {
            console.error("Error uploading image:", error);
        }
        throw error;

        // console.error("Error uploading image:", error);
        // throw error;

    }
}

export default uploadImageToImgBB;
