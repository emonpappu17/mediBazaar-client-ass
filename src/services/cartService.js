import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosInstance from "./axiosInstance";

export const addToCart = async ({ cartData, axiosInstance }) => {
    const { data } = await axiosInstance.post('/cart', cartData);
    // console.log(data);
    return data;
}

export const useAddToCart = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();

    return useMutation({
        mutationFn: (cartData) => addToCart({ cartData, axiosInstance }),  //Passes a function reference. The function runs only when .mutate(cartData) is called. thats why we do not provide like this addToCart(cartData)
        onSuccess: () => {
            queryClient.invalidateQueries(['cart']);
            console.log('added successfully');
        }
    })
}


const fetchCart = async ({ email, axiosInstance }) => {
    console.log('fetchCart 2nd');

    const { data } = await axiosInstance(`/cart/${email}`)
    // console.log('cart all data', data);
    return data;
}

// Get all cart
export const useCart = () => {
    const { user, tokenStored } = useAuth();
    const axiosInstance = useAxiosInstance();
    // console.log('useCart 1st');

    return useQuery({
        queryKey: ["cart", user?.email],
        queryFn: () => fetchCart({ email: user?.email, axiosInstance }),
        enabled: !!user?.email && tokenStored,
    })
}

// Update Cart Quantity
const updateCartItem = async ({ email, medicineId, quantity, axiosInstance }) => {
    await axiosInstance.patch(`/cart/${email}`, { medicineId, quantity });
};

export const useUpdateCart = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();

    return useMutation({
        mutationFn: (data) => updateCartItem({ ...data, axiosInstance }),
        onSuccess: (_, data) => {
            console.log('useUpdateCart', _, data);
            queryClient.invalidateQueries(["cart", data.email])
        }
    })
}

// Remove Cart Item
const removeCartItem = async ({ email, medicineId, axiosInstance }) => {
    // console.log(email, medicineId);

    const result = await axiosInstance.delete(`/cart/${email}/${medicineId}`)
    console.log('remove result', result);

}

export const useRemoveCartItem = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance(); 

    return useMutation({
        mutationFn: (data) => removeCartItem({ ...data, axiosInstance }),
        onSuccess: (_, data) => {
            queryClient.invalidateQueries(["cart"])
            console.log(data);
        }
    })
}

// Clear Cart
const clearCart = async ({ email, axiosInstance }) => {
    // console.log(email);

    await axiosInstance.delete(`/cart/${email}`)
}

export const useClearCart = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();

    return useMutation({
        mutationFn: (email) => clearCart({ email, axiosInstance }),
        onSuccess: () => {
            queryClient.invalidateQueries(['cart']);
        }
    })
}