import { Link } from "react-router";

const NotFound = () => {
    return (
        <div>
            i am not found
            <Link to={'/'}>
                <button className="p-10 bg-amber-300 cursor-pointer">go to home</button>
            </Link>
        </div>
    );
};

export default NotFound;