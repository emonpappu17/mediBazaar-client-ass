import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchMedicines = async ({ queryKey }) => {
    const [, page, limit, sortBy, category, search] = queryKey;
    console.log('got the query key', queryKey);

    const { data } = await axiosCommon(`/medicines?page=${page}&limit=${limit}&sortBy=${sortBy}&category=${category}&search=${search}`)

    console.log(data);

    return data;
}

export const useMedicines = (page = 1, limit = 6, sortBy = "", category = "", search = "") => {
    return useQuery({
        queryKey: ['medicines', page, limit, sortBy, category, search],
        queryFn: fetchMedicines,
        keepPreviousData: true,
    })
}



// const fetchMedicines = async ({ queryKey }) => {
//     const [, page, limit, sortBy, category, search] = queryKey; // Skipped unused `_`
//     console.log('Got the query key:', queryKey);

//     // Construct URL with only defined parameters
//     const params = new URLSearchParams();
//     params.append("page", page);
//     params.append("limit", limit);
//     if (sortBy) params.append("sortBy", sortBy);
//     if (category) params.append("category", category);
//     if (search) params.append("search", encodeURIComponent(search));

//     const { data } = await axiosCommon(`/medicines?${params.toString()}`);

//     console.log('Fetched medicines:', data);
//     return data;
// };

// export const useMedicines = (page = 1, limit = 6, sortBy = "", category = "", search = "") => {
//     return useQuery({
//         queryKey: ['medicines', page, limit, sortBy, category, search],
//         queryFn: fetchMedicines,
//         keepPreviousData: true, // Keeps previous data while fetching new
//     });
// };




// export const useMedicines = (page = 1, limit = 6, sortBy, category, search) => {
//     return useQuery({
//         queryKey: ['medicines', page, limit, sortBy, category, search],
//         queryFn: fetchMedicines,
//         keepPreviousData: true,
//     })
// }




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

