import { createContext } from "react";

export const authContext = createContext();
const AuthProvider = () => {
    const authInfo = "Hello World";
    return (
        <authContext.Provider value={authInfo}>
            
        </authContext.Provider>
    );
};

export default AuthProvider;