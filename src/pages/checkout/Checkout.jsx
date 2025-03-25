import { useCart } from "../../services/cartService";
import Button from "../../components/common/Button";
import PaymentForm from "./PaymentForm";

const Checkout = () => {

    // API Calls
    const { data: cartData } = useCart();

    const totalAmount = cartData?.totalPrice || 0;

    return (
        <div className="min-h-screen base-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-base-content tracking-tight nunito-font">
                        Complete Your Purchase
                    </h1>
                    <p className="mt-3 text-lg text-base-content/70">
                        Review your order and proceed to payment
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Order Summary */}
                    <div className="lg:col-span-3 bg-base-100 rounded-lg border border-base-300 p-6">
                        <h2 className="text-2xl font-semibold text-base-content mb-6">Order Summary</h2>
                        <div className="space-y-6">
                            {cartData?.items?.map((item, index) => {
                                const hasDiscount = item.discount !== 0;
                                // const discountPercentage = hasDiscount
                                //     ? Math.round(((item.price - item.finalPrice) / item.price) * 100)
                                //     : 0;
                                // if (hasDiscount) {
                                // }
                                const itemTotal = item.finalPrice * item.quantity

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center border-b border-base-300 pb-4"
                                    >
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="size-24 object-cover rounded"
                                            />
                                            <div>
                                                <h3 className="text-lg font-medium text-base-content">{item.name}</h3>
                                                {/* <p className="text-sm text-base-content/70">{item.company}</p> */}
                                                <p className="text-sm text-base-content/70">Qty: {item.quantity}</p>
                                                {hasDiscount ? (
                                                    <div className="mt-1">
                                                        <span className="text-sm text-base-content/50 line-through">
                                                            ${item.price.toFixed(2)}
                                                        </span>
                                                        <span className="text-sm text-[#35C7DF] ml-2">
                                                            ${item.finalPrice.toFixed(2)}
                                                        </span>
                                                        <span className="badge bg-[#35C7DF] badge-sm ml-2 text-white">
                                                            {item.discount}% OFF
                                                            {/* {discountPercentage}% OFF */}
                                                        </span>
                                                    </div>
                                                ) :
                                                    (
                                                        <div className="mt-1">
                                                            <span className="text-sm text-base-content/50">
                                                                ${item.price.toFixed(2)}
                                                            </span>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <span className="text-base-content font-semibold">
                                            ${itemTotal.toFixed(2)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 pt-6 border-t border-base-200">
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold text-base-content">Grand Total</span>
                                <span className="text-2xl font-bold text-[#0D6FEC]">
                                    ${cartData?.totalPrice.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="lg:col-span-2 bg-base-100 rounded-lg border border-base-300 p-6">
                        <h2 className="text-2xl font-semibold text-base-content mb-6">Payment Information</h2>
                        {/* <div className="space-y-6 border border-amber-300">
                      
                            <div>
                                <label className="block text-sm font-medium text-base-content mb-2">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    // className="input input-bordered w-full focus:input-primary transition-all"
                                    className=" p-3 w-full  rounded border border-base-300 outline-base-content focus:outline-1"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-base-content mb-2">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        // className="input input-bordered w-full focus:input-primary transition-all"
                                        className=" p-3 w-full  rounded border border-base-300 outline-base-content focus:outline-1"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-base-content mb-2">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        // className="input input-bordered w-full focus:input-primary transition-all"
                                        className=" p-3 w-full  rounded border border-base-300 outline-base-content focus:outline-1"
                                    />
                                </div>
                            </div>

                      
                            <Button
                                text={`Pay $${cartData?.totalPrice.toFixed(2)}`}
                                // onClick={handlePayment}
                                // disabled={loading}
                                className={`p-3 rounded-[10px] w-full`}
                            >
                            </Button>
                        </div> */}
                        
                        <PaymentForm amount={totalAmount}></PaymentForm>
                    </div>
                </div>

                {/* Security & Trust Badges */}
                <div className="mt-12 bg-base-100 rounded-lg border border-base-300 p-6">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-6 h-6 text-[#0D6FEC]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2c0 .737.402 1.376 1 1.723V17a1 1 0 002 0v-4.277c.598-.347 1-.986 1-1.723zm7-2h-2v8h2V9zm-9 0H8v8h2V9zm5 0h-2v8h2V9z"
                                />
                            </svg>
                            <span className="text-base-content/70 font-medium">Secure Payments</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-6 h-6 text-[#0D6FEC]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-base-content/70 font-medium">Verified Merchants</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-6 h-6 text-[#0D6FEC]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-base-content/70 font-medium">Fast Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
