import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";
import { useCart } from "../../services/cartService";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
    const { user } = useAuth();
    const { data = [], isLoading, error } = useCart(user?.email);


    if (isLoading) return <p>Loading cart...</p>;
    console.log('cart data', data);

    if (error) return <p className="text-red-500">Failed to load cart</p>;
    return (
        <div className="container mx-auto px-4 py-8 max-w-[1300px]">
            {/* <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Your Cart</h2> */}
            <h2 className="text-4xl font-bold text-center mb-8 text-base-content  nunito-font">
                Your Cart
            </h2>

            {data?.length === 0 || data?.items?.length == 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="bg-base-100 p-6 rounded-lg  border border-base-300">
                    <div className="space-y-4">
                        {data?.items?.map((item) => (
                            <div
                                key={item.medicineId}
                                className="flex items-center gap-4 border-base-300 border-b pb-4"

                            >
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">Price: ${item.finalPrice.toFixed(2)}</p>
                                    <p className="text-gray-500">Discount: {item.discount}%</p>

                                    {/* <div className="flex items-center gap-2 mt-2">
                                        <button
                                            className="px-3 py-1 border rounded hover:bg-gray-300"
                                            // onClick={() => updateCart.mutate({ userId, medicineId: item.medicineId, quantity: item.quantity - 1 })}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="px-3 py-1 border rounded hover:bg-gray-300"
                                        // onClick={() => updateCart.mutate({ userId, medicineId: item.medicineId, quantity: item.quantity + 1 })}
                                        >
                                            +
                                        </button>
                                    </div> */}

                                    {/* Quantity and Add to Cart */}
                                    <div className='flex mt-2'>

                                        {/* Decrease Button */}
                                        <div
                                            // onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                            className={`select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold  hover:bg-[#35C7DF] hover:text-white`}
                                        >
                                            -
                                        </div>
                                        <div className='px-4 py-2  w-fit border-base-300 border-y font-bold'>
                                            3
                                        </div>

                                        {/* Increase Button */}
                                        <div
                                            // onClick={() => quantity <= medicine.stock && setQuantity(quantity + 1)}
                                            className={`select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold hover:bg-[#35C7DF] hover:text-white `}
                                        >
                                            +
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="text-red-500 hover:text-red-700"
                                // onClick={() => removeItem.mutate({ userId, medicineId: item.medicineId })}
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-xl font-bold sm:text-center">Total: ${data?.totalPrice?.toFixed(2)}</p>
                        <div >
                            <button
                                className="btn btn-danger mr-2 rounded-[10px]"
                            // onClick={() => clearCart.mutate(userId)}
                            >Clear Cart</button>
                            <Button text="Proceed to Checkout" className="py-2 px-3 rounded-[10px]"></Button>
                        </div>
                    </div>
                </div>
            )}
        </div>


        // <div className="container mx-auto px-4 py-8 max-w-[1300px]">
        //     <h2 className="text-4xl font-bold text-center mb-8 text-base-content nunito-font">
        //         Your Cart
        //     </h2>

        //     {data?.items?.length === 0 ? (
        //         <p className="text-center text-gray-500">Your cart is empty.</p>
        //     ) : (
        //         <div className="bg-base-100 p-6 rounded-lg border border-base-300 shadow-lg">
        //             <div className="space-y-4">
        //                 {data?.items?.map((item) => (
        //                     <div
        //                         key={item.medicineId}
        //                         className="flex items-center gap-4 border-base-300 border-b pb-4"
        //                     >
        //                         <img
        //                             src={item.image}
        //                             alt={item.name}
        //                             className="w-20 h-20 object-cover rounded"
        //                         />
        //                         <div className="flex-1">
        //                             <h3 className="text-lg font-semibold">{item.name}</h3>
        //                             <p className="text-gray-600">
        //                                 Price: <span className="text-primary font-bold">${item.finalPrice.toFixed(2)}</span>
        //                             </p>
        //                             <p className="text-gray-500">Discount: {item.discount}%</p>

        //                             {/* Quantity Control */}
        //                             <div className="flex mt-2 items-center">
        //                                 <button
        //                                     className={`px-3 py-1 border border-base-300 w-fit cursor-pointer font-bold ${item.quantity === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-[#35C7DF] hover:text-white"
        //                                         }`}
        //                                     disabled={item.quantity === 1}
        //                                 // onClick={() => updateCart.mutate({ userId: user.email, medicineId: item.medicineId, quantity: item.quantity - 1 })}
        //                                 >
        //                                     -
        //                                 </button>
        //                                 <div className="px-4 py-2 w-fit border-y border-base-300 font-bold">
        //                                     {item.quantity}
        //                                 </div>
        //                                 <button
        //                                     className="px-3 py-1 border border-base-300 w-fit cursor-pointer font-bold hover:bg-[#35C7DF] hover:text-white"
        //                                 // onClick={() => updateCart.mutate({ userId: user.email, medicineId: item.medicineId, quantity: item.quantity + 1 })}
        //                                 >
        //                                     +
        //                                 </button>
        //                             </div>
        //                         </div>

        //                         {/* Remove Item */}
        //                         <button className="text-red-500 hover:text-red-700">
        //                             <FaTrashAlt />
        //                         </button>
        //                     </div>
        //                 ))}
        //             </div>

        //             {/* Footer Section: Total & Buttons */}
        //             <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
        //                 <p className="text-xl font-bold">Total: ${data?.totalPrice?.toFixed(2)}</p>

        //                 <div className="flex gap-4">
        //                     {/* Clear Cart Button */}
        //                     <button className="btn btn-outline btn-danger">
        //                         Clear Cart
        //                     </button>

        //                     {/* Checkout Button */}
        //                     <button
        //                         className="btn btn-primary px-6 py-2 rounded-lg text-lg font-semibold"
        //                         // onClick={() => navigate("/checkout")}
        //                     >
        //                         Proceed to Checkout
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </div>
    );
};

export default Cart;