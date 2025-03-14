import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import useAxiosInstance from "./axiosInstance";

const fetchCategories = async () => {
    const res = await axiosPublic('/categories')
    return res.data;
}

// Getting all Category 
export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })
}

// Adding category
export const useAddCategory = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async (category) => {
            const data = await axiosInstance.post('/categories', category)
            return data.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['categories'])
        }
    })
}


// Deleting Category
const deleteCategory = async ({ id, axiosInstance }) => {
    await axiosInstance.delete(`/categories/${id}`)
}

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: (id) => {
            deleteCategory({ id, axiosInstance })
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['categories']);
        }
    })
}


// Category Medicines Filter
const fetchCategoryMedicines = async (category, sortBy, search) => {
    const { data } = await axiosPublic(`/medicines/category/${category}?sortBy=${sortBy}&search=${search}`);
    // console.log('fetchCategoryMedicines', data);
    return data;
}

export const useCategoryMedicines = (category, sortBy, search) => {
    // console.log('category', category, sortBy, search);
    return useQuery({
        queryKey: ['categoryMedicines', category, sortBy, search],
        queryFn: () => fetchCategoryMedicines(category, sortBy, search),
        enabled: !!category, // Fetch only if category exists
    })
}
