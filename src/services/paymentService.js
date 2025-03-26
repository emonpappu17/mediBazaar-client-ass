import { useMutation } from "@tanstack/react-query"
import useAxiosInstance from "./axiosInstance"

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