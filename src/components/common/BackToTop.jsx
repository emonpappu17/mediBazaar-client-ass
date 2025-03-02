import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Button from "./Button";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    // Handle Scroll 
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top Func
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        isVisible && (
            <Button
                icon={FaArrowUp}  // Pass icon to Button component
                onclick={scrollToTop}
                className="fixed bottom-5 right-5  z-10 text-white p-3 rounded-full shadow-lg  opacity-100 transition-all duration-300 "
            />
        )
    );
};

export default BackToTop;
