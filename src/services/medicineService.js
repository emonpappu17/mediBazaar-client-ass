import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

// Adding Medicine
export const useAddMedicine = () => {
    const { user } = useAuth()
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async ({ medicine, controller }) => {
            console.log('medicine', medicine);
            const { data } = await axiosInstance.post('/medicines', medicine, { signal: controller.signal })
            console.log('check', data);

            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['sellerMedicines', user?.email])
        }
    })
}

// Updating medicine
// const updateCategory = async ({ id, data, axiosInstance, controller }) => {
//     const res = await axiosInstance.put(`/categories/${id}`, data, { signal: controller.signal })
//     console.log(res.data);

//     return res.data;
// }


export const useUpdateMedicine = () => {
    const { user } = useAuth();
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async ({ medicine, id, controller }) => {
            console.log(medicine, id);
            const { data } = await axiosInstance.put(`/medicines/${id}`, medicine, { signal: controller.signal })
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['sellerMedicines', user?.email])
        }
    })
}

// Deleting Category
// const deleteCategory = async ({ id, axiosInstance }) => {

// }

export const useDeleteMedicine = () => {
    const { user } = useAuth();
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosInstance.delete(`/medicines/${id}`)
            return data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['sellerMedicines', user?.email])
        }
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
