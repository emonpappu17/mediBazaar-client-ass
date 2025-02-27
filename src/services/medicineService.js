import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchMedicines = async ({ queryKey }) => {
    const [, page, limit, sortBy, category, search] = queryKey;

    const { data } = await axiosCommon(`/medicines?page=${page}&limit=${limit}&sortBy=${sortBy}&category=${category}&search=${search}`)

    // console.log('all medicine', data);

    return data;
}

export const useMedicines = (page = 1, limit = 6, sortBy = "", category = "", search = "") => {
    return useQuery({
        queryKey: ['medicines', page, limit, sortBy, category, search],
        queryFn: fetchMedicines,
        // keepPreviousData: true,
    })
}
