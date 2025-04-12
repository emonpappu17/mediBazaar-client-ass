import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosInstance from "../../services/axiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";
import { useSavePayment } from "../../services/paymentService";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const PaymentForm = ({ amount, cartData, name, address }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosInstance();
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    // API Calls
    const { mutate: savePayment } = useSavePayment();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name.length || !address.length) {
            return toast.error('Name and Address field are required')
        }

        if (!stripe || !elements) return;

        setLoading(true);

        try {
            // Create Payment Intent
            const { data } = await axiosSecure.post("/create-payment-intent", { amount });
            const clientSecret = data.clientSecret;

            if (!clientSecret) {
                throw new Error("Failed to fetch client secret");
            }

            // Confirm Payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName
                    }
                },
            });

            if (result.error) {
                throw new Error(result.error.message);
            }

            if (result.paymentIntent.status === "succeeded") {

                // Saving payment data to DB
                const payment = {
                    useName: name,
                    userEmail: user?.email,
                    address: address,
                    items: cartData.items,
                    totalAmount: cartData.totalPrice,
                    transactionId: result.paymentIntent.id
                }

                // API Call
                savePayment(payment, {
                    onSuccess: () => {

                        // navigating to invoice page
                        navigate(`/invoice/${result.paymentIntent.id}`)
                        toast.success("Payment Successful!");
                    },
                    onError: () => {
                        toast.error("Failed to save db");
                    }
                })
            }
        } catch (error) {
            console.error("Payment Error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-base-content mb-2">
                Payment
            </label>
            <div className="border border-base-300 p-4 rounded-md">
                {/* p-2 bg-base-200 rounded-md */}
                <CardElement />
            </div>
            <Button
                text={`Pay $${amount.toFixed(2)}`}
                type="submit"
                spinner={loading}
                disabled={loading || cartData?.totalPrice === 0}
                className="w-full px-4  rounded-md h-10"
            ></Button>
        </form>
    );
};

PaymentForm.propTypes = {
    amount: PropTypes.number.isRequired,
    cartData: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                // Define the shape of each item in the cart
                // For example:
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                quantity: PropTypes.number.isRequired,
            })
        ).isRequired,
        totalPrice: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
};

export default PaymentForm;




