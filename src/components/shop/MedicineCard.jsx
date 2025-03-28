import { motion } from 'framer-motion';
import { FaCartPlus, FaSearch } from 'react-icons/fa';
import Button from '../common/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MedicineModal from '../common/MedicineModal';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useAddToCart } from '../../services/cartService';

const MedicineCard = ({ medicine, layout, }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();

    // API Calls
    const { mutate: addToCart } = useAddToCart();


    console.log('medicine', medicine);


    // Determine if the product has a discount
    const hasDiscount = medicine.discount > 0;
    const originalPrice = medicine.price;
    const discountPrice = originalPrice - (originalPrice * (medicine.discount / 100))

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                email: user.email,
                medicineId: medicine._id,
                name: medicine.name,
                image: medicine.image,
                price: medicine.price,
                discount: medicine.discount,
                sellerEmail: medicine.sellerEmail,
                quantity: 1,
            }

            //adding to db
            addToCart(cartItem, {
                onSuccess: () => {
                    toast.success("Item added to cart!");
                },
                onError: () => {
                    toast.error("Failed to add item to cart.");
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {

                    //redirect to login page
                    navigate('/login')
                }
            })
        }
    }

    return (
        <>
            <motion.div
                className={`bg-base-100   p-4 rounded-lg shadow-lg transition duration-200 overflow-hidden ${layout === "list" ? "flex items-center gap-4" : ""
                    }`}
                whileHover={{ scale: 1.05 }}
            >
                <div className="relative">
                    <img
                        src={medicine.image || 'https://via.placeholder.com/300x200'}
                        alt={medicine.name}
                        className={
                            layout === 'grid'
                                ? 'w-full h-48 object-cover rounded-lg'
                                : 'md:size-40 size-32 object-cover rounded-lg'
                        }
                    />
                    {/* Discount Badge (only if discounted) */}
                    {hasDiscount && (
                        <div className="absolute top-2 right-2 bg-[#35C7DF] text-white font-semibold px-3 py-1 rounded-full shadow-sm">
                            {medicine.discount
                            }% OFF
                        </div>
                    )}
                </div>

                <div className={layout === "list" ? "flex-1" : "text-center mt-2 "}>
                    <h3 className="text-lg font-semibold">{medicine.name}</h3>
                    <p className="text-gray-600">{medicine.category}</p>

                    {/* Price Information */}
                    {hasDiscount ? (
                        <div className="mt-1">
                            <div className={`flex items-center  gap-2 ${layout !== "list" && 'justify-center'}`}>
                                <span className="text-xl font-bold text-[#0D6FEC]">
                                    ${discountPrice.toFixed(2)}
                                </span>
                                <span className="text-base line-through text-base-content/50">
                                    ${originalPrice.toFixed(2)}
                                </span>

                            </div>
                        </div>
                    ) : (
                        <p className="text-[#0D6FEC] font-bold mt-1 text-xl">${medicine.price.toFixed(2)}</p>
                    )}

                    <div className="flex gap-2 mt-3">
                        <Button
                            className='flex-1 rounded-[10px] relative group py-6'
                            text='Select'
                            hoverIcon={FaCartPlus}
                            onclick={handleAddToCart}
                        >
                        </Button>
                        <Button
                            className='flex-1 rounded-[10px] relative group'
                            doubleBtn={true}
                            text='View'
                            hoverIcon={FaSearch}
                            // onClick={() => setIsOpen(true)}
                            onclick={() => setIsModalOpen(true)}
                        >
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Medicine Modal */}
            <MedicineModal
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                medicine={medicine}
            />
        </>
    );
};

// Prop Validation
MedicineCard.propTypes = {
    medicine: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
        sellerEmail: PropTypes.string.isRequired
    }).isRequired,
    layout: PropTypes.oneOf(["grid", "list"]).isRequired,
};

export default MedicineCard;




