import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import useAxiosInstance from "./axiosInstance";

const fetchCategories = async () => {
    const res = await axiosPublic('/categories')
    console.log(res.data);

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
            console.log('useAddCategory category', category);

            const data = await axiosInstance.post('/categories', category)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['categories'])
        }
    })
}


// Deleting Category
const deleteCategory = async ({ id, axiosInstance }) => {
    // console.log(email);
    console.log('id paisi deleteCategory theke?', id);
    await axiosInstance.delete(`/categories/${id}`)
}

export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();

    return useMutation({
        mutationFn: (id) => {
            console.log('id paisi?', id);
            deleteCategory({ id, axiosInstance })
        },
        onSuccess: () => {
            console.log('touched');

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
    console.log('category', category, sortBy, search);
    return useQuery({
        queryKey: ['categoryMedicines', category, sortBy, search],
        queryFn: () => fetchCategoryMedicines(category, sortBy, search),
        enabled: !!category, // Fetch only if category exists
    })
}
