// import Lottie from "lottie-react";
// import Button from "../../components/common/Button";
// import useAuth from "../../hooks/useAuth";
// import { useCart, useUpdateCart } from "../../services/cartService";
// import { FaTrashAlt } from "react-icons/fa";
// import emptyCartAnimation from '../../assets/emptyCart.json'

// const Cart = () => {
//     const { user } = useAuth();
//     const email = user?.email
//     const { data = [], isLoading, error } = useCart();
//     const updateCart = useUpdateCart();
//     console.log(updateCart);

//     // const { data = [], isLoading, error } = useCart(user?.email);


//     // if (isLoading) return <p>Loading cart...</p>;
//     console.log('cart data', data);

//     if (error) return <p className="text-red-500">Failed to load cart</p>;
//     return (
//         <div className="container mx-auto px-4 py-8 max-w-[1100px]">
//             {/* <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Your Cart</h2> */}
//             <h2 className="text-4xl font-bold text-center mb-8 text-base-content  nunito-font">
//                 Your Cart
//             </h2>

//             {data?.length === 0 || data?.items?.length == 0 ? (
//                 // <p className="text-center text-gray-500">Your cart is empty.</p>
//                 <div className="w-90 mx-auto">
//                     {/* No match found */}
//                     <Lottie animationData={emptyCartAnimation} loop={false}></Lottie>
//                 </div>
//             ) : (
//                 <div className="bg-base-100 p-6 rounded-lg  border border-base-300">
//                     <div className="space-y-4">
//                         {data?.items?.map((item) => (
//                             <div
//                                 key={item.medicineId}
//                                 className="flex items-center gap-4 border-base-300 border-b pb-3"
//                             >
//                                 <img src={item.image} alt={item.name} className="size-24 object-cover rounded" />
//                                 <div className="flex-1">
//                                     <h3 className="text-lg font-semibold">{item.name}</h3>
//                                     <p className="text-gray-600">Price: <span className="font-bold text-[#0D6FEC]">${item.finalPrice.toFixed(2)}</span></p>
//                                     <p className="text-gray-500">Discount: {item.discount}%</p>

//                                     {/* Quantity and Add to Cart */}
//                                     <div className='flex mt-2'>

//                                         {/* Decrease Button */}
//                                         <button
//                                             onClick={() => updateCart.mutate({ email, medicineId: item.medicineId, quantity: item.quantity - 1 })}
//                                             disabled={item.quantity <= 1}
//                                             className={`select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold  hover:bg-[#35C7DF] hover:text-white`}
//                                         >
//                                             -
//                                         </button>
//                                         <div className='px-4 py-2  w-fit border-base-300 border-y font-bold'>
//                                             {item.quantity}
//                                         </div>

//                                         {/* Increase Button */}
//                                         <button
//                                             onClick={() => updateCart.mutate({ email, medicineId: item.medicineId, quantity: item.quantity + 1 })}
//                                             className={`select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold hover:bg-[#35C7DF] hover:text-white `}
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>

//                                 <button
//                                     className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
//                                 // onClick={() => removeItem.mutate({ userId, medicineId: item.medicineId })}
//                                 >
//                                     <FaTrashAlt className="text-lg" />
//                                 </button>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
//                         <p className="text-xl font-bold sm:text-center">Total: ${data?.totalPrice?.toFixed(2)}</p>
//                         <div >
//                             <button
//                                 className="btn btn-danger mr-2 rounded-[10px]"
//                             // onClick={() => clearCart.mutate(userId)}
//                             >Clear Cart</button>
//                             <Button text="Proceed to Checkout" className="py-2 px-3 rounded-[10px]"></Button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* {!isLoading && data?.items === 0 &&
//                 <div className="w-90 mx-auto">
//                     <Lottie animationData={emptyCartAnimation} loop={false}></Lottie>
//                 </div>} */}
//         </div>
//     );
// };

// export default Cart;




import Lottie from "lottie-react";
import Button from "../../components/common/Button";
import useAuth from "../../hooks/useAuth";
import { useCart, useClearCart, useRemoveCartItem, useUpdateCart } from "../../services/cartService";
import { FaTrashAlt } from "react-icons/fa";
import emptyCartAnimation from "../../assets/emptyCart.json";
import SkeletonCartItem from "../../components/cart/SkeletonCartItem";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Cart = () => {
    const { user, loading } = useAuth();
    const email = user?.email;
    const { data = [], isLoading: cartLoading, error } = useCart();
    const updateCart = useUpdateCart();
    const removeItem = useRemoveCartItem();
    const clearCart = useClearCart();

    // console.log("cart data", data, isLoading, !!email);
    // console.log(loading, cartLoading);


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
                                <div
                                    key={item.medicineId}
                                    className="flex items-center gap-4 border-base-300 border-b pb-3"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="size-24 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-gray-600">
                                            Price:{" "}
                                            <span className="font-bold text-[#0D6FEC]">
                                                ${item.finalPrice.toFixed(2)}
                                            </span>
                                        </p>
                                        <p className="text-gray-500">Discount: {item.discount}%</p>

                                        {/* Quantity Controls */}
                                        <div className="flex mt-2">
                                            <button
                                                onClick={() =>
                                                    updateCart.mutate({
                                                        email,
                                                        medicineId: item.medicineId,
                                                        quantity: item.quantity - 1,
                                                    })
                                                }
                                                disabled={item.quantity <= 1}
                                                className="select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold hover:bg-[#35C7DF] hover:text-white"
                                            >
                                                -
                                            </button>
                                            <div className="px-4 py-2 w-fit border-base-300 border-y font-bold">
                                                {item.quantity}
                                            </div>
                                            <button
                                                onClick={() =>
                                                    updateCart.mutate({
                                                        email,
                                                        medicineId: item.medicineId,
                                                        quantity: item.quantity + 1,
                                                    })
                                                }
                                                className="select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold hover:bg-[#35C7DF] hover:text-white"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={
                                            () => {
                                                Swal.fire({
                                                    title: "Are you sure?",
                                                    text: `You won't be able to revert ${item.name}`,
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "#3085d6",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText: "Yes, remove it!"
                                                }).then(async (result) => {
                                                    if (result.isConfirmed) {
                                                        removeItem.mutate({ email, medicineId: item.medicineId }, {
                                                            onSuccess: () => {
                                                                Swal.fire({
                                                                    title: "Deleted!",
                                                                    text: `${item.name} has been removed from your cart.`,
                                                                    icon: "success"
                                                                });
                                                            },
                                                            onError: () => {
                                                                Swal.fire({
                                                                    title: "Error!",
                                                                    text: "Failed to remove the item. Please try again.",
                                                                    icon: "error"
                                                                });
                                                            }
                                                        })
                                                    }
                                                });
                                            }
                                        }
                                        className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer">
                                        <FaTrashAlt className="text-lg" />
                                    </button>
                                    {/* <button
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: "You won't be able to revert this action!",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Yes, remove it!"
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    removeItem.mutate({ email, medicineId: item.medicineId }, {
                                                        onSuccess: () => {
                                                            Swal.fire({
                                                                title: "Deleted!",
                                                                text: "The item has been removed from your cart.",
                                                                icon: "success"
                                                            });
                                                        },
                                                        onError: () => {
                                                            Swal.fire({
                                                                title: "Error!",
                                                                text: "Failed to remove the item. Please try again.",
                                                                icon: "error"
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }}
                                        className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                    >
                                        <FaTrashAlt className="text-lg" />
                                    </button> */}
                                </div>
                            ))}
                        </div>

                        {/* Total & Checkout Buttons */}
                        <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-xl font-bold sm:text-center">
                                Total: ${data?.totalPrice?.toFixed(2)}
                            </p>
                            <div>
                                <button
                                    disabled={data.length === 0 || data.items.length === 0}
                                    onClick={
                                        () => {
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: `You won't be able to revert this again `,
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Yes, clear it!"
                                            }).then(async (result) => {
                                                if (result.isConfirmed) {
                                                    clearCart.mutate(email, {
                                                        onSuccess: () => {
                                                            Swal.fire({
                                                                title: "Cleared!",
                                                                text: `All the cart have be removed from your cart.`,
                                                                icon: "success"
                                                            });
                                                        },
                                                        onError: () => {
                                                            Swal.fire({
                                                                title: "Error!",
                                                                text: "Failed to clear the cart. Please try again.",
                                                                icon: "error"
                                                            });
                                                        }
                                                    })
                                                }
                                            });
                                        }
                                    }
                                    className="btn btn-danger mr-2 rounded-[10px]">
                                    Clear Cart
                                </button>
                                <Link to={'/checkout'}> <Button
                                    text="Proceed to Checkout"
                                    className="py-2 px-3 rounded-[10px]"
                                /></Link>
                            </div>
                        </div>
                    </div>
                )}

        </div >
    );
};

export default Cart;
