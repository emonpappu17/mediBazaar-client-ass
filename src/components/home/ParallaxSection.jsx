import Button from "../common/Button";

const ParallaxSection = () => {
    return (
        <div className="relative h-[500px] flex items-center justify-center text-center">
            {/* Fixed Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-fixed bg-center"
                style={{ backgroundImage: "url('https://i.ibb.co.com/wF6dJhsK/pexels-photo-3652097.jpg')" }}
            ></div>

            {/* Overlay for Better Readability */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Content Above the Image */}
            <div className="relative  text-white px-4">
                <h2 className="text-4xl font-extrabold mb-4">Welcome to MediBazaar</h2>
                <p className="text-lg max-w-2xl mx-auto">
                    Your one-stop solution for authentic medicines, health products, and expert advice. Trust us for your healthcare needs.
                </p>
                <Button text={"Learn More"} className=" md:px-4  px-3 py-2 rounded-3xl mt-6"></Button>
            </div>
        </div>
    );
};

export default ParallaxSection;
