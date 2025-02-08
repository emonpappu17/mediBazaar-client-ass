import { Parallax } from "react-scroll-parallax";

const WhyChooseUs = () => {
    return (
        <div className="relative py-20 bg-gray-900 text-white">
            {/* Parallax Background */}
            <Parallax speed={-10}>
                <div className="absolute inset-0 bg-[url('https://example.com/why-choose-bg.jpg')] bg-cover bg-fixed opacity-40"></div>
            </Parallax>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-4xl font-extrabold text-center mb-12">Why Choose MediBazaar?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Parallax speed={5}>
                        <div className="p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">💊 Authentic Medicines</h3>
                            <p>We ensure every product is 100% genuine and verified.</p>
                        </div>
                    </Parallax>
                    <Parallax speed={10}>
                        <div className="p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">🚚 Fast Delivery</h3>
                            <p>Get your medicines delivered quickly and safely.</p>
                        </div>
                    </Parallax>
                    <Parallax speed={15}>
                        <div className="p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold mb-2">📞 24/7 Support</h3>
                            <p>Our team is available anytime to assist you.</p>
                        </div>
                    </Parallax>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
