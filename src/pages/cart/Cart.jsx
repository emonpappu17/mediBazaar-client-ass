import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import { useCart, useClearCart, useRemoveCartItem, useUpdateCart } from "../../services/cartService";
import emptyCartAnimation from "../../assets/emptyCart.json";
import SkeletonCartItem from "../../components/cart/SkeletonCartItem";
import CartItem from "../../components/cart/CartItem";
import CartFooter from "../../components/cart/CartFooter";

const Cart = () => {
    const { user, loading } = useAuth();
    const email = user?.email;
    const { data = [], isLoading: cartLoading, error } = useCart();
    const updateCart = useUpdateCart();
    const removeItem = useRemoveCartItem();
    const clearCart = useClearCart();

    if (error) return <p className="text-red-500">Failed to load cart</p>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1100px]">
            <h2 className="text-4xl font-bold text-center mb-8 text-base-content nunito-font">
                Your Cart
            </h2>

            {/* If no cart  */}
            {!cartLoading && data?.items?.length === 0 &&
                <div className="w-90 mx-auto mb-10">
                    <Lottie animationData={emptyCartAnimation} loop={true} />
                    <h1 className="text-center text-2xl">Your cart is currently empty.</h1>
                </div>
            }

            {/* Show Skeleton When Loading */}
            {cartLoading ?
                (
                    <div className="bg-base-100 p-6 rounded-lg border border-base-300 space-y-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <SkeletonCartItem key={index} />
                        ))}
                    </div>
                ) : !loading &&
                (
                    <div className="bg-base-100 p-6 rounded-lg border border-base-300">
                        <div className="space-y-4">
                            {data?.items?.map((item) => (
                                <CartItem
                                    key={item.medicineId}
                                    item={item}
                                    email={email}
                                    updateCart={updateCart}
                                    removeItem={removeItem}
                                />
                            ))}
                        </div>

                        {/* Total & Checkout Buttons */}
                        <CartFooter
                            totalPrice={data?.totalPrice}
                            itemsLength={data?.items?.length}
                            email={email}
                            clearCart={clearCart}
                        />
                    </div>
                )}
        </div >
    );
};

export default Cart;
