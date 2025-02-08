import Button from "../common/Button";

const ParallaxSection = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover z-0"
                style={{ backgroundImage: "url('https://i.ibb.co.com/wF6dJhsK/pexels-photo-3652097.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 "></div>

            {/* Overlay Content */}
            <div className="relative  text-white md:py-28 py-20  px-4 text-center ">
                <h2 className="text-4xl font-extrabold mb-4 nunito-font">Your Health, Our Priority</h2>
                <p className="text-lg mb-6">
                    At MediBazaar, we provide top-quality medicines and healthcare solutions, ensuring your well-being.
                </p>
                <Button text={"Learn More"} className=" md:px-4  px-3 py-2 rounded-3xl"></Button>
            </div>
        </div>
    );
};

export default ParallaxSection;
