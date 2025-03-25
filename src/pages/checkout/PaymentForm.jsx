import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosInstance from "../../services/axiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../components/common/Button";



const PaymentForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosInstance();
    const [loading, setLoading] = useState(false);

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
                },
            });
            console.log('Confirm Payment result', result);

            if (result.error) {
                throw new Error(result.error.message);
            }

            if (result.paymentIntent.status === "succeeded") {
                toast.success("Payment Successful!");
                console.log("Payment Success:", result.paymentIntent);
                // Handle order storage in backend if needed
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
                <CardElement className="text-white" />
                {/* <CardElement className="p-2 bg-base-200 rounded-md " /> */}
            </div>
            <button
                type="submit"
                disabled={loading}
                className="btn w-full bg-[#0D6FEC] hover:bg-[#35C7DF] text-white px-4 py-2 rounded-md"
            >
                {loading ? "Processing..." : `Pay $${amount}`}
            </button>
        </form>
    );
};

export default PaymentForm;

// =================================================================================================



