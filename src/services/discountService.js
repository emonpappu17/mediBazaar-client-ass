import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchDiscountMedicine = async () => {
    const { data } = await axiosCommon('/discount-medicines');
    return data;
}

export const useDiscountMedicine = () => {
    return useQuery({
        queryKey: ['discountMedicine'],
        queryFn: fetchDiscountMedicine,
    })
}