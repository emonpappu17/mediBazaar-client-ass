import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <div>
            <AuthContext value={{ user, }}>
                {children}
            </AuthContext>
        </div>
    );
}

AuthProvider.propTypes = {
    // Array of children.
    children: PropTypes.array,
}

export default AuthProvider;
