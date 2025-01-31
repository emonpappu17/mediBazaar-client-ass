import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../../assets/websiteLogo.png'
const Footer = () => {

    return (
        // <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
        //     <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        //         {/* Logo & Brand Description */}
        //         <div className="flex flex-col items-center md:items-start">
        //             <img src={logo} alt="MediBazaar Logo" className="h-14 mb-2" />
        //             <h2 className="text-2xl font-bold text-white">MediBazaar</h2>
        //             <p className="mt-2 text-sm text-center md:text-left">
        //                 Your trusted multi-vendor medicine marketplace. Quality medicines, seamless shopping.
        //             </p>
        //         </div>

        //         {/* Quick Links */}
        //         <div>
        //             <h3 className="text-lg font-semibold text-white text-center md:text-left">Quick Links</h3>
        //             <ul className="mt-2 space-y-2 text-center md:text-left">
        //                 <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
        //                 <li><Link to="/shop" className="hover:text-blue-400 transition">Shop</Link></li>
        //                 <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
        //                 <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        //             </ul>
        //         </div>

        //         {/* Support */}
        //         <div>
        //             <h3 className="text-lg font-semibold text-white text-center md:text-left">Support</h3>
        //             <ul className="mt-2 space-y-2 text-center md:text-left">
        //                 <li><Link to="/" className="hover:text-blue-400 transition">FAQ</Link></li>
        //                 <li><Link to="/" className="hover:text-blue-400 transition">Help Center</Link></li>
        //                 <li><Link to="/" className="hover:text-blue-400 transition">Terms of Service</Link></li>
        //                 <li><Link to="/" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
        //             </ul>
        //         </div>

        //         {/* Newsletter */}
        //         <div>
        //             <h3 className="text-lg font-semibold text-white text-center md:text-left">Subscribe to Our Newsletter</h3>
        //             <form className="mt-2 flex flex-col ">
        //                 <input
        //                     type="email"
        //                     name="email"
        //                     placeholder="Enter your email"
        //                     className="w-full md:w-auto p-2 text-blue-300 rounded-md outline-none mb-4"
        //                     required
        //                 />
        //                 <button
        //                     type="submit"
        //                     className="mt-2 md:mt-0 md:ml-2  text-white py-2 px-4 rounded-md  bg-[#0D6FEC] hover:bg-[#35C7DF] transition-all duration-500 cursor-pointer">
        //                     Subscribe
        //                 </button>
        //             </form>
        //         </div>
        //     </div>

        //     {/* Social Media */}
        //     <div className="flex justify-center space-x-6 mt-8">
        //         <a href="/" target="_blank" rel="noopener noreferrer">
        //             <FaFacebook className="text-2xl hover:text-blue-500 transition" />
        //         </a>
        //         <a href="/" target="_blank" rel="noopener noreferrer">
        //             <FaTwitter className="text-2xl hover:text-blue-400 transition" />
        //         </a>
        //         <a href="/" target="_blank" rel="noopener noreferrer">
        //             <FaInstagram className="text-2xl hover:text-pink-500 transition" />
        //         </a>
        //     </div>

        //     {/* Copyright */}
        //     <div className="text-center mt-6 text-sm text-gray-500">
        //         &copy; {new Date().getFullYear()} MediBazaar. All Rights Reserved.
        //     </div>
        // </footer>

        <footer className="bg-base-200 text-base-content pt-12 pb-6">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo & Brand Description */}
                <div className="flex flex-col items-center md:items-start">
                    <img src={logo} alt="MediBazaar Logo" className="h-14 mb-2" />
                    <h2 className="text-2xl font-bold">MediBazaar</h2>
                    <p className="mt-2 text-sm text-center md:text-left">
                        Your trusted multi-vendor medicine marketplace. Quality medicines, seamless shopping.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-center md:text-left">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-center md:text-left">
                        <li>
                            <Link to="/" className="hover:text-primary transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/shop" className="hover:text-primary transition">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-primary transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-primary transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold text-center md:text-left">Support</h3>
                    <ul className="mt-2 space-y-2 text-center md:text-left">
                        <li>
                            <Link to="/" className="hover:text-primary transition">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-primary transition">
                                Help Center
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-primary transition">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:text-primary transition">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-center md:text-left">Subscribe to Our Newsletter</h3>
                    <form className="mt-2 flex flex-col">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full md:w-auto p-2 rounded-md outline-none mb-4 bg-base-100"
                            required
                        />
                        <button
                            type="submit"
                            className="mt-2 md:mt-0 md:ml-2 text-white py-2 px-4 rounded-md bg-primary hover:bg-secondary transition-all duration-500 cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6 mt-8">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl hover:text-primary transition" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-2xl hover:text-primary transition" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl hover:text-primary transition" />
                </a>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 text-sm text-base-content/70">
                &copy; {new Date().getFullYear()} MediBazaar. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
