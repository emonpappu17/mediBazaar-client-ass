import { useMutation, useQuery } from "@tanstack/react-query"
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
