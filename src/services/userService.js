
import axiosPublic from "./axiosPublic";

export const saveUserToDB = async (userData) => {
    try {
        const { data } = await axiosPublic.post(`/users`, userData)
        return data;
    } catch (err) {
        console.log("Error saving user:", err);
    }
}