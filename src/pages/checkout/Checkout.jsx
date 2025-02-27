// import { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { useCart } from "../../services/cartService";
// import Button from "../../components/common/Button";

import { useCart } from "../../services/cartService";
import Button from "../../components/common/Button";

const Checkout = () => {
    // const { user } = useAuth();
    const { data: cartData } = useCart();
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState("");

    // console.log('cartData', cartData?.items);
    // console.log('cartData', cartData);


    // if (isLoading) return <p>Loading checkout...</p>;
    // if (error) return <p className="text-red-500">Failed to load cart</p>;

    // const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);

    // // Sample cart data with discount information - replace with your actual cart data
    // const cartItems = [
    //     { id: 1, name: 'Paracetamol', company: 'MediCorp', originalPrice: 7.99, discountedPrice: 5.99, quantity: 2 },
    //     { id: 2, name: 'Ibuprofen', company: 'HealthPlus', originalPrice: 8.49, discountedPrice: null, quantity: 1 },
    // ];

    // // Calculate totals
    // const calculateItemTotal = (item) => {
    //     const price = item.discountedPrice || item.originalPrice;
    //     return price * item.quantity;
    // };

    // const grandTotal = cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);

    // const handlePayment = () => {
    //     setLoading(true);
    //     // Simulate payment processing
    //     setTimeout(() => {
    //         setLoading(false);
    //         navigate('/invoice', { state: { cartItems, grandTotal } });
    //     }, 1500);
    // };

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

        // <div className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
        //     <div className="max-w-5xl mx-auto ">
        //         {/* Header */}
        //         <div className="text-center mb-12">
        //             <h1 className="text-4xl font-bold text-base-content nunito-font">
        //                 Complete Your Purchase
        //             </h1>
        //             <p className="mt-3 text-lg text-base-content/70">
        //                 Review your order and proceed to payment
        //             </p>
        //         </div>

        //         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        //             {/* Order Summary */}
        //             <div className="lg:col-span-3 card bg-base-100 rounded-lg border border-base-300">
        //                 <div className="card-body">
        //                     <h2 className="card-title text-2xl text-base-content">Order Summary</h2>
        //                     <div className="space-y-6">
        //                         {cartItems.map((item) => {
        //                             const hasDiscount = item.discountedPrice !== null;
        //                             const discountPercentage = hasDiscount
        //                                 ? Math.round(((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100)
        //                                 : 0;
        //                             const itemTotal = calculateItemTotal(item);

        //                             return (
        //                                 <div
        //                                     key={item.id}
        //                                     className="flex justify-between items-center border-b border-base-200 pb-4"
        //                                 >
        //                                     <div className="flex items-center space-x-4">
        //                                         <div className="avatar placeholder">
        //                                             <div className="bg-neutral text-neutral-content rounded-lg w-16 h-16 flex items-center justify-center">
        //                                                 <span className="text-xl">{item.name[0]}</span>
        //                                             </div>
        //                                         </div>
        //                                         <div>
        //                                             <h3 className="text-lg font-medium text-base-content">
        //                                                 {item.name}
        //                                             </h3>
        //                                             <p className="text-sm text-base-content/70">{item.company}</p>
        //                                             <p className="text-sm text-base-content/60">
        //                                                 Qty: {item.quantity}
        //                                             </p>
        //                                             {hasDiscount && (
        //                                                 <div className="mt-1">
        //                                                     <span className="text-sm text-base-content/50 line-through">
        //                                                         ${item.originalPrice.toFixed(2)}
        //                                                     </span>
        //                                                     <span className="text-sm text-success ml-2">
        //                                                         ${item.discountedPrice.toFixed(2)}
        //                                                     </span>
        //                                                     <span className="badge badge-success badge-sm ml-2">
        //                                                         {discountPercentage}% OFF
        //                                                     </span>
        //                                                 </div>
        //                                             )}
        //                                         </div>
        //                                     </div>
        //                                     <span className="text-base-content font-semibold">
        //                                         ${itemTotal.toFixed(2)}
        //                                     </span>
        //                                 </div>
        //                             );
        //                         })}
        //                     </div>
        //                     <div className="mt-8 pt-6 border-t border-base-200">
        //                         <div className="flex justify-between items-center">
        //                             <span className="text-xl font-semibold text-base-content">
        //                                 Grand Total
        //                             </span>
        //                             <span className="text-2xl font-bold text-primary">
        //                                 ${grandTotal.toFixed(2)}
        //                             </span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* Payment Section */}
        //             <div className="lg:col-span-2 card bg-base-100 rounded-lg border border-base-300">
        //                 <div className="card-body">
        //                     <h2 className="card-title text-2xl text-base-content">Payment Information</h2>
        //                     <div className="space-y-6">
        //                         {/* Card Information */}
        //                         <div className="form-control">
        //                             <label className="label">
        //                                 <span className="label-text text-base-content">Card Number</span>
        //                             </label>
        //                             <input
        //                                 type="text"
        //                                 placeholder="1234 5678 9012 3456"
        //                                 className="input input-bordered w-full"
        //                             />
        //                         </div>
        //                         <div className="grid grid-cols-2 gap-4">
        //                             <div className="form-control">
        //                                 <label className="label">
        //                                     <span className="label-text text-base-content">Expiry Date</span>
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     placeholder="MM/YY"
        //                                     className="input input-bordered w-full"
        //                                 />
        //                             </div>
        //                             <div className="form-control">
        //                                 <label className="label">
        //                                     <span className="label-text text-base-content">CVV</span>
        //                                 </label>
        //                                 <input
        //                                     type="text"
        //                                     placeholder="123"
        //                                     className="input input-bordered w-full"
        //                                 />
        //                             </div>
        //                         </div>

        //                         {/* Pay Button */}
        //                         <button
        //                             onClick={handlePayment}
        //                             disabled={loading}
        //                             className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
        //                         >
        //                             {loading ? 'Processing...' : `Pay $${grandTotal.toFixed(2)}`}
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Security & Trust Badges */}
        //         <div className="mt-12 card bg-base-100 rounded-lg border border-base-300">
        //             <div className="card-body">
        //                 <div className="flex flex-wrap justify-center gap-8">
        //                     <div className="flex items-center space-x-2">
        //                         <svg
        //                             className="w-6 h-6 text-primary"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2c0 .737.402 1.376 1 1.723V17a1 1 0 002 0v-4.277c.598-.347 1-.986 1-1.723zm7-2h-2v8h2V9zm-9 0H8v8h2V9zm5 0h-2v8h2V9z"
        //                             />
        //                         </svg>
        //                         <span className="text-base-content font-medium">Secure Payments</span>
        //                     </div>
        //                     <div className="flex items-center space-x-2">
        //                         <svg
        //                             className="w-6 h-6 text-primary"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        //                             />
        //                         </svg>
        //                         <span className="text-base-content font-medium">Verified Merchants</span>
        //                     </div>
        //                     <div className="flex items-center space-x-2">
        //                         <svg
        //                             className="w-6 h-6 text-primary"
        //                             fill="none"
        //                             stroke="currentColor"
        //                             viewBox="0 0 24 24"
        //                         >
        //                             <path
        //                                 strokeLinecap="round"
        //                                 strokeLinejoin="round"
        //                                 strokeWidth="2"
        //                                 d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        //                             />
        //                         </svg>
        //                         <span className="text-base-content font-medium">Fast Delivery</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                        <div className="space-y-6">
                            {/* Card Information */}
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

                            {/* Pay Button */}
                            {/* <button
                                onClick={handlePayment}
                                disabled={loading}
                                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                            >
                                {loading ? 'Processing...' : `Pay $${grandTotal.toFixed(2)}`}
                            </button> */}
                            <Button
                                text={`Pay $${cartData?.totalPrice.toFixed(2)}`}
                                // onClick={handlePayment}
                                // disabled={loading}
                                className={`p-3 rounded-[10px] w-full `}
                            >
                            </Button>
                        </div>
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
