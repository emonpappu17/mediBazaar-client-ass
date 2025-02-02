
import { axiosCommon } from "../hooks/useAxiosCommon";

export const saveUserToDB = async (userData) => {
    try {
        const { data } = await axiosCommon.post(`/users`, userData)
        return data;
    } catch (err) {
        console.log("Error saving user:", err);
    }
}