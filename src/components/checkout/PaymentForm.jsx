import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosInstance from "../../services/axiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../common/Button";
import useAuth from "../../hooks/useAuth";
import { useSavePayment } from "../../services/paymentService";
import { useNavigate } from "react-router";

const PaymentForm = ({ amount, cartData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosInstance();
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    // API Calls
    const { mutate: savePayment } = useSavePayment();

    console.log('amount', amount);

    const handleSubmit = async (event) => {
        event.preventDefault();

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
                    userEmail: user?.email,
                    items: cartData.items,
                    totalAmount: cartData.totalPrice,
                    transactionId: result.paymentIntent.id
                }

                // API Call
                savePayment(payment, {
                    onSuccess: () => {

                        // navigating to invoice page
                        navigate('/invoice')
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
            <div className="border border-base-300 p-4 rounded-md">
                {/* <CardElement className="text-white" /> */}
                <CardElement className="p-2 bg-base-200 rounded-md " />
            </div>
            <Button
                text={`Pay $${amount}`}
                type="submit"
                spinner={loading}
                disabled={loading}
                className="w-full px-4  rounded-md h-[37px]"
            ></Button>
        </form>
    );
};

export default PaymentForm;

// =================================================================================================



