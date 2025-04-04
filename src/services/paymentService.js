import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import useAxiosInstance from "./axiosInstance"
import useAuth from "../hooks/useAuth"

// Saving payment to db
export const useSavePayment = () => {
    const axiosInstance = useAxiosInstance()
    return useMutation({
        mutationFn: async (payment) => {
            const { data } = await axiosInstance.post('/payments', payment)
            return data
        }
    })
}

// Get payment for invoice
export const usePayment = (id) => {
    const axiosInstance = useAxiosInstance();

    return useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const { data } = await axiosInstance(`/payments/${id}`)
            return data
        },
    })
}

// Get payment history for seller
export const useSellerPayments = () => {
    const { user } = useAuth();
    const axiosInstance = useAxiosInstance();

    return useQuery({
        queryKey: ['sellerPayments'],
        queryFn: async () => {
            const { data } = await axiosInstance(`/seller-payment/${user?.email}`)
            return data
        },
        enabled: !!user?.email
    })
}

// Update seller received
export const useSellerReceived = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async (id) => {
            console.log('role form useSellerReceived', id);
            const { data } = await axiosInstance.patch(`/seller-payment/${id}`)
            console.log('useUpdateUserRole', data);
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['sellerPayments'])
        }
    })
}
