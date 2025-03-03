import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";

const fetchDiscountMedicine = async () => {
    const { data } = await axiosPublic('/discount-medicines');
    return data;
}

export const useDiscountMedicine = () => {
    return useQuery({
        queryKey: ['discountMedicine'],
        queryFn: fetchDiscountMedicine,
    })
}