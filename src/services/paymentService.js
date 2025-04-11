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
            const { data } = await axiosInstance.patch(`/seller-payment/${id}`)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['sellerPayments'])
        }
    })
}

// All payments for admin
export const useAllPayment = (startDate, endDate) => {
    const axiosInstance = useAxiosInstance();
    return useQuery({
        queryKey: ['allPayment', startDate?.getTime(), endDate?.getTime()],
        queryFn: async () => {
            const params = {}; //query search or parameter pathanor best way axios provide kore

            if (
                startDate && endDate
                // startDate instanceof Date && !isNaN(startDate) &&
                // endDate instanceof Date && !isNaN(endDate)
            ) {
                console.log('hello');

                params.startDate = startDate.getTime();
                params.endDate = endDate.getTime();
            }
            // if (startDate) params.startDate = startDate.toISOString();
            // if (endDate) params.endDate = endDate.toISOString();



            console.log('params', params);

            const { data } = await axiosInstance(`/admin-payment-management`, { params })
            return data
        },
    })
}

// Update admin accepted
export const useAdminApproval = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosInstance.patch(`/admin-payment-management/${id}`)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['allPayment'])
        }
    })
}