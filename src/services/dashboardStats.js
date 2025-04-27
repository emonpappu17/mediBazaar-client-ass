import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosInstance from "./axiosInstance";


// Getting seller stats
export const useSellerStats = () => {
    const axiosSecure = useAxiosInstance();
    const { user, tokenStored } = useAuth()
    return useQuery({
        queryKey: ['sellerStats', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/sellerStats/${user?.email}`)
            return data
        },
        enabled: !!user?.email && tokenStored
    })
}