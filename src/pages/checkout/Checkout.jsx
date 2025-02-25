// import { useState } from "react";
// import useAuth from "../../hooks/useAuth";
// import { useCart } from "../../services/cartService";
// import Button from "../../components/common/Button";

import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useCart } from "../../services/cartService";
import Button from "../../components/common/Button";

const Checkout = () => {
    const { user } = useAuth();
    const { data: cartData, isLoading, error } = useCart();
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    if (isLoading) return <p>Loading checkout...</p>;
    if (error) return <p className="text-red-500">Failed to load cart</p>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1100px]">
            <h2 className="text-4xl font-bold text-center mb-8 text-base-content nunito-font">
                Checkout
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="bg-base-100 p-6 rounded-lg border border-base-300">
                    <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-4">
                        {cartData?.items?.map((item) => (
                            <div key={item.medicineId} className="flex items-center gap-4 border-b pb-3">
                                <img src={item.image} alt={item.name} className="size-24 object-cover rounded" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">Price: ${item.finalPrice.toFixed(2)}</p>
                                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xl font-bold mt-4">Total: ${cartData?.totalPrice?.toFixed(2)}</p>
                </div>

                {/* Payment & Shipping Details */}
                <div className="bg-base-100 p-6 rounded-lg border border-base-300">
                    <h3 className="text-2xl font-semibold mb-4">Payment & Shipping Details</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-600">Full Name</label>
                            <input type="text" value={user?.displayName || ""} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600">Email</label>
                            <input type="email" value={user?.email || ""} disabled className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600">Phone Number</label>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600">Shipping Address</label>
                            <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="textarea textarea-bordered w-full"></textarea>
                        </div>
                        <div className="mt-6">
                            <Button text="Proceed to Payment" className="w-full py-3 rounded-lg" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
