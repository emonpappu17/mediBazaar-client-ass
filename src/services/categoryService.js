import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";

const fetchCategories = async () => {
    const res = await axiosPublic('/categories')
    return res.data;
}

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })
}

// Category Medicines 
const fetchCategoryMedicines = async (category, sortBy, search) => {
    // console.log('category', category);
    const { data } = await axiosPublic(`/medicines/category/${category}?sortBy=${sortBy}&search=${search}`);
    console.log('fetchCategoryMedicines', data);
    return data;
}

export const useCategoryMedicines = (category, sortBy, search) => {
    console.log('category', category, sortBy, search);
    return useQuery({
        queryKey: ['categoryMedicines', category, sortBy, search],
        queryFn: () => fetchCategoryMedicines(category, sortBy, search),
        enabled: !!category, // Fetch only if category exists
    })
}
