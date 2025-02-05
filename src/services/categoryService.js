import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchCategories = async () => {
    const res = await axiosCommon('/categories')
    return res.data;
}

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })
}