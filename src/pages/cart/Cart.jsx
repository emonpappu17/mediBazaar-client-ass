import useAuth from "../../hooks/useAuth";
import { useCart } from "../../services/cartService";

const Cart = () => {
    const { user } = useAuth();
    const { data, isLoading, error } = useCart(user?.email);


    if (isLoading) return <p>Loading cart...</p>;
    if (error) return <p className="text-red-500">Failed to load cart</p>;
    return (
        <div>
            <h1>i am cart page</h1>
        </div>
    );
};

export default Cart;