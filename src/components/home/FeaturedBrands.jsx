// // const brands = [
// //     { name: "Pfizer", logo: "https://example.com/pfizer-logo.png" },
// //     { name: "Johnson & Johnson", logo: "https://example.com/jj-logo.png" },
// //     { name: "Bayer", logo: "https://example.com/bayer-logo.png" },
// //     { name: "GSK", logo: "https://example.com/gsk-logo.png" },
// // ];

// // const FeaturedBrands = () => {
// //     return (
// //         <div className="container mx-auto px-4 py-8 max-w-[1300px]">
// //             <h2 className="text-3xl font-bold text-center mb-8 text-base-content nunito-font">
// //                 Featured Brands
// //             </h2>
// //             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
// //                 {brands.map((brand, index) => (
// //                     <div key={index} className="flex flex-col items-center text-center">
// //                         <img
// //                             src={brand.logo}
// //                             alt={brand.name}
// //                             className="w-24 h-24 object-contain rounded-lg shadow-md"
// //                             loading="lazy"
// //                         />
// //                         <p className="mt-2 text-lg font-semibold">{brand.name}</p>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default FeaturedBrands;


import logo from '../../assets/websiteLogo.png'

import { motion } from "framer-motion";

const brands = [
    { name: "Pfizer", logo: "/websiteLogo.png" },
    { name: "Bexico", logo: "/websiteLogo.png" },
    { name: "Bayer", logo: "/websiteLogo.png" },
    { name: "GSK", logo: "/websiteLogo.png" },
    { name: "Novartis", logo: "/websiteLogo.png" },
    { name: "Sanofi", logo: "/websiteLogo.png" },
];

const FeaturedBrands = () => {
    return (
        <div className="container mx-auto px-4 py-12 max-w-[1300px]">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 nunito-font">
                Trusted by the Best in Healthcare
            </h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
            >
                {brands.map((brand, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-24 h-24 object-contain rounded-lg"
                            loading="lazy"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">{brand.name}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default FeaturedBrands;





// import { Parallax } from "react-parallax";
// import { motion } from "framer-motion";

// const brands = [
//     { name: "Pfizer", logo: "https://example.com/pfizer-logo.png" },
//     { name: "Johnson & Johnson", logo: "https://example.com/jj-logo.png" },
//     { name: "Bayer", logo: "https://example.com/bayer-logo.png" },
//     { name: "GSK", logo: "https://example.com/gsk-logo.png" },
//     { name: "Novartis", logo: "https://example.com/novartis-logo.png" },
//     { name: "Sanofi", logo: "https://example.com/sanofi-logo.png" },
// ];

// const FeaturedBrands = () => {
//     return (
//         <Parallax
//             bgImage="https://example.com/medicine-parallax-bg.jpg"
//             strength={300}
//             className="py-16"
//         >
//             <div className="container mx-auto px-4 max-w-[1300px]">
//                 <h2 className="text-4xl font-extrabold text-center mb-12 text-white nunito-font">
//                     Trusted by the Best in Healthcare
//                 </h2>

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center"
//                 >
//                     {brands.map((brand, index) => (
//                         <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.1 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                             className="flex flex-col items-center text-center bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
//                         >
//                             <img
//                                 src={brand.logo}
//                                 alt={brand.name}
//                                 className="w-24 h-24 object-contain rounded-lg"
//                                 loading="lazy"
//                             />
//                             <p className="mt-4 text-lg font-semibold text-gray-700">{brand.name}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </Parallax>
//     );
// };

// export default FeaturedBrands;

