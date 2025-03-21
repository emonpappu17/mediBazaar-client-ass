import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import useAxiosInstance from "./axiosInstance";
import useAuth from "../hooks/useAuth";

const fetchMedicines = async ({ queryKey }) => {
    const [, page, limit, sortBy, category, search] = queryKey;

    const { data } = await axiosPublic(`/medicines?page=${page}&limit=${limit}&sortBy=${sortBy}&category=${category}&search=${search}`)

    // console.log('all medicine', data);

    return data;
}

export const useMedicines = (page = 1, limit = 6, sortBy = "", category = "", search = "") => {
    return useQuery({
        queryKey: ['medicines', page, limit, sortBy, category, search],
        queryFn: fetchMedicines,
    })
}

// Getting seller added all medicine
export const useSellerMedicines = () => {
    const axiosSecure = useAxiosInstance();
    const { user, tokenStored } = useAuth()
    return useQuery({
        queryKey: ['sellerMedicines', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/sellerAllMedicine/${user?.email}`)
            return data
        },
        enabled: !!user?.email && tokenStored
    })
}
