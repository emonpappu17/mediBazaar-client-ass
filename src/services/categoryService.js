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


// Category Medicines 
const fetchCategoryMedicines = async (category) => {
    // console.log('category', category);

    const { data } = await axiosCommon(`/medicines/category/${category}`);
    console.log('fetchCategoryMedicines', data);
    return data;
}

export const useCategoryMedicines = (category) => {
    // console.log('category', category);
    return useQuery({
        queryKey: ['categoryMedicines', category],
        queryFn: () => fetchCategoryMedicines(category),
        enabled: !!category, // Fetch only if category exists
    })
}


// const fetchCategoryMedicines = async (category) => {
//     console.log(category);
    
//     const { data } = await axiosCommon.get(`/medicines/category/${category}`);
//     return data;
// };

// export const useCategoryMedicines = (category) => {
//     return useQuery({
//         queryKey: ["categoryMedicines", category],
//         queryFn: () => fetchCategoryMedicines(category),
//         enabled: !!category, // Fetch only if category exists
//     });
// };