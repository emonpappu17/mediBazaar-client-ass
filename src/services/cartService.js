import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"

export const addToCart = async (cartData) => {
    const { data } = await axiosCommon.post('/cart', cartData);
    console.log(data);
    return data;
}

export const useAddToCart = () => {
    // const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addToCart,  //Passes a function reference. The function runs only when .mutate(cartData) is called. thats why we do not provide like this addToCart(cartData)
        onSuccess: () => {
            // queryClient.invalidateQueries(['cart']);
            console.log('added successfully');
        }
    })
}



const fetchCart = async (email) => {
    const { data } = await axiosCommon(`/cart:${email}`)
    console.log('cart all data', data);

    return data;
}

export const useCart = (email) => {
    return useQuery({
        queryKey: ["cart", email],
        queryFn: () => fetchCart(email),
        enabled: !!email,
    })
}