import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchMedicines = async ({ queryKey }) => {
    const [_, sortBy, category, search] = queryKey;
    console.log('got the query key', queryKey);

    const { data } = await axiosCommon(`/medicines?sortBy=${sortBy}&category=${category}&search=${search}`)
    return data;
}

export const useMedicines = (sortBy, category, search) => {
    return useQuery({
        queryKey: ['medicines', sortBy, category, search],
        queryFn: fetchMedicines,
        keepPreviousData: true,
    })
}




// const fetchMedicines = async () => {
//     const { data } = await axiosCommon('/medicines')
//     return data;
// }

// export const useMedicines = () => {
//     return useQuery({
//         queryKey: ['medicines'],
//         queryFn: fetchMedicines,
//     })
// }

