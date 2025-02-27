// import { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { useCart } from "../../services/cartService";
// import Button from "../../components/common/Button";

import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useCart } from "../../services/cartService";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router";

const Checkout = () => {
    // const { user } = useAuth();
    // const { data: cartData, isLoading, error } = useCart();
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState("");

    // // console.log('cartData', cartData);


    // if (isLoading) return <p>Loading checkout...</p>;
    // if (error) return <p className="text-red-500">Failed to load cart</p>;


    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Sample cart data - replace with your actual cart data
    const cartItems = [
        { id: 1, name: 'Paracetamol', company: 'MediCorp', price: 5.99, quantity: 2 },
        { id: 2, name: 'Ibuprofen', company: 'HealthPlus', price: 8.49, quantity: 1 },
    ];

    const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handlePayment = () => {
        setLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            navigate('/invoice', { state: { cartItems, grandTotal } });
        }, 1500);
    };

    return (
        // <div className="container mx-auto px-4 py-8 max-w-[1100px]">
        //     <h2 className="text-4xl font-bold text-center mb-8 text-base-content nunito-font">
        //         Checkout
        //     </h2>
        //     <div className="grid md:grid-cols-2 gap-8">
        //         {/* Order Summary */}
        //         <div className="bg-base-100 p-6 rounded-lg border border-base-300">
        //             <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
        //             <div className="space-y-4">
        //                 {cartData?.items?.map((item) => (
        //                     <div key={item.medicineId} className="flex items-center gap-4 border-b pb-3">
        //                         <img src={item.image} alt={item.name} className="size-24 object-cover rounded" />
        //                         <div>
        //                             <h3 className="text-lg font-semibold">{item.name}</h3>
        //                             <p className="text-gray-600">Price: ${item.finalPrice.toFixed(2)}</p>
        //                             <p className="text-gray-500">Quantity: {item.quantity}</p>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //             <p className="text-xl font-bold mt-4">Total: ${cartData?.totalPrice?.toFixed(2)}</p>
        //         </div>

        //         {/* Payment & Shipping Details */}
        //         <div className="bg-base-100 p-6 rounded-lg border border-base-300">
        //             <h3 className="text-2xl font-semibold mb-4">Payment & Shipping Details</h3>
        //             <form>
        //                 <div className="mb-4">
        //                     <label className="block text-gray-600">Full Name</label>
        //                     <input type="text" value={user?.displayName || ""} disabled className="input input-bordered w-full" />
        //                 </div>
        //                 <div className="mb-4">
        //                     <label className="block text-gray-600">Email</label>
        //                     <input type="email" value={user?.email || ""} disabled className="input input-bordered w-full" />
        //                 </div>
        //                 <div className="mb-4">
        //                     <label className="block text-gray-600">Phone Number</label>
        //                     <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="input input-bordered w-full" />
        //                 </div>
        //                 <div className="mb-4">
        //                     <label className="block text-gray-600">Shipping Address</label>
        //                     <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="textarea textarea-bordered w-full"></textarea>
        //                 </div>
        //                 <div className="mt-6">
        //                     <Button text="Proceed to Payment" className="w-full py-3 rounded-lg" />
        //                 </div>
        //                 {/* <PaymentForm></PaymentForm> */}


        //                 {/* ✅ Wrap PaymentForm inside <Elements> */}

        //                 {/* <PaymentForm /> */}

        //             </form>
        //         </div>
        //     </div>
        // </div>



        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Complete Your Purchase
                    </h1>
                    <p className="mt-3 text-lg text-gray-600">
                        Review your order and proceed to payment
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Order Summary */}
                    <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b border-gray-200 pb-4"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <span className="text-gray-500 text-xl font-medium">
                                                {item.name[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                                            <p className="text-sm text-gray-600">{item.company}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <span className="text-gray-800 font-semibold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-semibold text-gray-800">Grand Total</span>
                                <span className="text-2xl font-bold text-blue-600">
                                    ${grandTotal.toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Section */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Information</h2>
                        <div className="space-y-6">
                            {/* Card Information */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="1234 5678 9012 3456"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="123"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Pay Button */}
                            <button
                                onClick={handlePayment}
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    `Pay $${grandTotal.toFixed(2)}`
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Security & Trust Badges */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-6 h-6 text-blue-600"
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
                            <span className="text-gray-600 font-medium">Secure Payments</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-6 h-6 text-blue-600"
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
                            <span className="text-gray-600 font-medium">Verified Merchants</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-6 h-6 text-blue-600"
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
                            <span className="text-gray-600 font-medium">Fast Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
