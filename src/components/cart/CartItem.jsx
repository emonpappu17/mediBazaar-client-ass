import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, email, updateCart, removeItem }) => {

    const hasDiscount = item.discount > 0;

    return (
        <div
            className="flex items-center gap-4 border-base-300 border-b pb-3"
        >
            <img
                src={item.image}
                alt={item.name}
                className="size-24 object-cover rounded"
            />
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                {/* Price Information */}
                {hasDiscount ? (
                    <div className=" flex items-center text-gray-600">
                        <h1>Price:</h1>
                        <div className={`flex items-center  gap-2 ml-1`}>
                            <span className=" font-bold text-[#0D6FEC]">
                                ${item.finalPrice.toFixed(2)}
                            </span>
                            <span className="text-base line-through text-base-content/50">
                                ${item.price.toFixed(2)}
                            </span>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-600">
                        Price:{' '}
                        <span className="font-bold text-[#0D6FEC]">
                            ${item.finalPrice.toFixed(2)}
                        </span>
                    </p>
                )}

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
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        medicineId: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        finalPrice: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    updateCart: PropTypes.shape({
        mutate: PropTypes.func.isRequired,
    }).isRequired,
    removeItem: PropTypes.shape({
        mutate: PropTypes.func.isRequired,
    }).isRequired,
};

export default CartItem;