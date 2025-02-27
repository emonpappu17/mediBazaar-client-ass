import Swal from "sweetalert2";
import Button from "../common/Button";
import { Link } from "react-router";
import PropTypes from "prop-types";

const CartFooter = ({ totalPrice, itemsLength, email, clearCart }) => {
    return (
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center ">
            <p className="text-xl font-bold sm:text-center">
                Total: ${totalPrice?.toFixed(2)}
                {/* Total: ${data?.totalPrice?.toFixed(2)} */}
            </p>
            <div>
                <button
                    disabled={itemsLength === 0}
                    // disabled={data.length === 0 || data.items.length === 0}
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
                    disabled={itemsLength === 0}
                    text="Proceed to Checkout"
                    className="py-2 px-3 rounded-[10px]"
                /></Link>
            </div>
        </div>
    );
};

CartFooter.propTypes = {
    totalPrice: PropTypes.number, // Not required because it can be undefined initially
    itemsLength: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    clearCart: PropTypes.shape({
        mutate: PropTypes.func.isRequired,
    }).isRequired,
};

export default CartFooter;