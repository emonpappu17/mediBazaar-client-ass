import { Link } from "react-router";
import Button from "../../components/common/Button";

const NotFound = () => {
    return (
        <div>
            {/* <section className="flex items-center h-full p-16  text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to={'/'}>
                            <Button text="Back to homepage"></Button>
                        </Link>
                    </div>
                </div>
            </section> */}


            <section className="flex items-center h-full p-16 bg-base-100 text-base-content">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-base-content/50">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 text-base-content/70">
                            But do not worry, you can find plenty of other things on our homepage.
                        </p>
                        <Link to={'/'}>
                            <Button text="Back to homepage"></Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;