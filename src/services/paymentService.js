import { useMutation, useQuery } from "@tanstack/react-query"
import useAxiosInstance from "./axiosInstance"
import useAuth from "../hooks/useAuth"

export const useSavePayment = () => {
    const axiosInstance = useAxiosInstance()
    return useMutation({
        mutationFn: async (payment) => {
            console.log('payment', payment);

            const { data } = await axiosInstance.post('/payments', payment)
            console.log('useSavePayment', data);

            return data
        }
    })
}


export const usePayment = (id) => {
    const axiosInstance = useAxiosInstance();
    console.log('usePayment', id);

    return useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            console.log('id', id);

            const { data } = await axiosInstance(`/payments/${id}`)
            return data
        },
        // enabled: !!user?.email && tokenStored,
    })
}
