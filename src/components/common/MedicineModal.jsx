import { Description, Dialog, DialogPanel, DialogTitle, } from '@headlessui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import { motion } from 'framer-motion';
import { RxCross1 } from 'react-icons/rx';
import { useAddToCart } from '../../services/cartService';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const MedicineModal = ({ isOpen, closeModal, medicine }) => {
    const { user } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const { mutate: addToCart, } = useAddToCart();
    const navigate = useNavigate();

    // Determine if the product has a discount
    const hasDiscount = medicine.discount > 0;
    const originalPrice = medicine.price;
    const discountPrice = originalPrice - (originalPrice * (medicine.discount / 100))

    // if (!medicine) return null; // Prevent rendering if no medicine is selected

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                email: user.email,
                medicineId: medicine._id,
                name: medicine.name,
                image: medicine.image,
                price: medicine.price,
                discount: medicine.discount,
                quantity,
            }

            //adding to db
            addToCart(cartItem, {
                onSuccess: () => {
                    console.log('i am in onSuccess');
                    toast.success("Item added to cart!");
                    closeModal();
                },
                onError: () => {
                    toast.error("Failed to add item to cart.");
                    console.log('i am in onError');
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
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">

            <div className="fixed inset-0 bg-black opacity-50" />

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">

                <DialogPanel className="max-w-[1000px]  bg-base-100 md:p-10 p-5 overflow-y-auto rounded-2xl  max-h-[90vh]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="md:flex gap-5 "
                    >
                        {/* Image side */}
                        <div>
                            <img src={medicine.image} alt={medicine.name} className='md:size-80 max-h-[300px] w-full object-cover rounded-lg' />
                        </div>

                        {/* Content side */}
                        <div className='space-y-4 mt-3 md:mt-0'>
                            <DialogTitle className=" text-4xl ">{medicine.name}</DialogTitle>

                            <div className="divider"></div>

                            {/* Price Information */}
                            {hasDiscount ? (
                                <div>
                                    <div className={`flex items-center  gap-2`}>
                                        <span className="text-3xl font-extrabold text-[#0D6FEC]">
                                            ${discountPrice.toFixed(2)}
                                        </span>
                                        <span className="text-xl line-through text-base-content/50">
                                            ${originalPrice.toFixed(2)}
                                        </span>

                                    </div>
                                </div>
                            ) : (
                                <p className="text-[#0D6FEC] font-extrabold text-3xl">${medicine.price}</p>
                            )}

                            <Description className={'text-gray-400'}>{medicine.description}</Description>

                            {/* Quantity and Add to Cart */}
                            <div className="flex gap-3 items-center">
                                <div className='flex'>

                                    {/* Decrease Button */}
                                    <div
                                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                        className={`select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold ${quantity === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#35C7DF] hover:text-white'}`}
                                    >
                                        -
                                    </div>
                                    <div className='px-4 py-2  w-fit border-base-300 border-y font-bold'>
                                        {quantity}
                                    </div>

                                    {/* Increase Button */}
                                    <div
                                        onClick={() => quantity <= medicine.stock && setQuantity(quantity + 1)}
                                        className={`select-none px-4 py-2 border-base-300 border w-fit cursor-pointer font-bold ${quantity <= medicine.stock ? 'hover:bg-[#35C7DF] hover:text-white' : 'cursor-not-allowed opacity-50'} `}
                                    >
                                        +
                                    </div>
                                </div>

                                <div>
                                    <Button onclick={handleAddToCart} text='Add to cart' className='px-4 py-[10px] rounded-[5px]'></Button>
                                </div>
                            </div>

                            {/* Medicine Info */}
                            <div>
                                <p className="text-gray-400 "><strong>Category:</strong> {medicine.category}</p>
                                <p className="text-gray-400 "><strong>Company:</strong> {medicine.company}</p>
                                <p className="text-gray-400 "><strong>Dosage:</strong> {medicine.massUnit}</p>
                                <p className="text-gray-400 "><strong>Stock:</strong> {medicine.stock === 0 ? 'Unavailable' : medicine.stock}</p>
                                <p className="text-gray-400 "><strong>Discount:</strong> {medicine.discount}%</p>
                            </div>
                            <div className='flex justify-end'>
                                <button
                                    onClick={closeModal}
                                    className="p-2 rounded-full transition-all duration-300 bg-red-100 hover:bg-red-500 text-red-500 hover:text-white shadow-md hover:shadow-lg cursor-pointer"
                                >
                                    <RxCross1 className='text-lg'></RxCross1>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </DialogPanel>
            </div>
        </Dialog >
    );
};

MedicineModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    medicine: PropTypes.object,
};

export default MedicineModal;
