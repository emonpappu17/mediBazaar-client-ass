import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchBanners = async () => {
    const res = await axiosCommon('/advertised-medicines');
    return res.data;
}

export const useBanners = () => {
    return useQuery({
        queryKey: ['Banners'],
        queryFn: fetchBanners,
    })
}