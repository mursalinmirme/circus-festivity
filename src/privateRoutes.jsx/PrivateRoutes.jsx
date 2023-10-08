import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(authContext);

    const {pathname} = useLocation();
    console.log(pathname);

    if(loading){
        return <div className="text-3xl w-full h-[100vh] bg-white flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={pathname} to="/signin"></Navigate>
};

export default PrivateRoutes;