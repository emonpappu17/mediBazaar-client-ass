import { useQuery } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

const fetchMedicines = async () => {
    const { data } = await axiosCommon('/medicines')
    return data;
}

export const useMedicines = () => {
    return useQuery({
        queryKey: ['medicines'],
        queryFn: fetchMedicines,
    })
}

