import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchMedicines = async ({ queryKey }) => {
    const [_, page, limit, sortBy, category, search] = queryKey;
    console.log('got the query key', queryKey);

    const { data } = await axiosCommon(`/medicines?page=${page}&limit=${limit}&sortBy=${sortBy}&category=${category}&search=${search}`)
    console.log(data);

    return data;
}

export const useMedicines = (page = 1, limit = 6, sortBy, category, search) => {
    return useQuery({
        queryKey: ['medicines', page, limit, sortBy, category, search],
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

