import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosCommon } from "../hooks/useAxiosCommon"
import useAuth from "../hooks/useAuth";

export const addToCart = async (cartData) => {
    const { data } = await axiosCommon.post('/cart', cartData);
    console.log(data);
    return data;
}

export const useAddToCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addToCart,  //Passes a function reference. The function runs only when .mutate(cartData) is called. thats why we do not provide like this addToCart(cartData)
        onSuccess: () => {
            queryClient.invalidateQueries(['cart']);
            console.log('added successfully');
        }
    })
}


const fetchCart = async (email) => {
    const { data } = await axiosCommon(`/cart/${email}`)
    console.log('cart all data', data);
    return data;
}

// Get all cart
export const useCart = () => {
    const { user } = useAuth();
    return useQuery({
        queryKey: ["cart", user?.email],
        queryFn: () => fetchCart(user?.email),
        enabled: !!user?.email,
    })
}

// Update Cart Quantity
const updateCartItem = async ({ email, medicineId, quantity }) => {
    await axiosCommon.patch(`/cart/${email}`, { medicineId, quantity });
};

export const useUpdateCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateCartItem,
        onSuccess: (_, data) => {
            console.log('useUpdateCart', _, data);
            queryClient.invalidateQueries(["cart", data.email])
        }
    })
}

// Remove Cart Item
const removeCartItem = async ({ email, medicineId }) => {
    console.log(email, medicineId);

    const result = await axiosCommon.delete(`/cart/${email}/${medicineId}`)
    console.log('remove result', result);

}

export const useRemoveCartItem = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: removeCartItem,
        onSuccess: (_, data) => {
            queryClient.invalidateQueries(["cart"])
            console.log(data);
        }
    })
}

// Clear Cart
const clearCart = async (email) => {
    console.log(email);

    await axiosCommon.delete(`/cart/${email}`)
}

export const useClearCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: clearCart,
        onSuccess: () => {
            queryClient.invalidateQueries(['cart']);
        }
    })
}