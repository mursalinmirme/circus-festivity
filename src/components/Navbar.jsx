import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useLocation } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";

const Navbar = () => {

    const {user, signOutUser} = useContext(authContext);

    // user sign out
    const handleSignOut = () => {
        signOutUser()
        .then(() => {
          toast.success('Your are Loged out');
        })
        .catch(err => {
          toast.error(err.message);
        })
    }



    const navItem = <>

        <li>
        <NavLink id="RouterNavLink" to="/">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Home</span>
                  )}
                   </NavLink>
                     </li>
        <li>
        <NavLink id="RouterNavLink" to="/tasks">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Services</span>
                  )}
                   </NavLink>
                     </li>
        <li>
        <NavLink id="RouterNavLink" to="/signin">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Signin</span>
                  )}
                   </NavLink>
                     </li>
        <li>
        <NavLink id="RouterNavLink" to="/signup">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Signup</span>
                  )}
                   </NavLink>
                     </li>
    </>
    const {pathname} = useLocation();
    let headerColor = null;
    let navbarBorder = null;
    if(pathname != "/"){
      headerColor = "#000000";
      navbarBorder = "1px solid #80808096";
    }else{
      headerColor = "#FFFFFF";
      navbarBorder = "0px solid #80808096";
    }
    return (
        <div className="absolute z-50 w-full">
          <div className="max-w-screen-2xl">
          <div style={{color: `${headerColor}`, borderBottom: `${navbarBorder}`}} className="navbar w-11/12 px-0 py-5 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <a className="normal-case font-bold font-L text-2xl">CircusFestivity</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-2 px-1 text-lg font-medium">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="flex items-center gap-3">
             <p className="font-medium">{user?.displayName}</p>
             <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
             <a onClick={handleSignOut} className="btn font-semibold">Logout</a>
             </div> :
             <div>
               <Link to={'/signin'}><a className="btn font-semibold">Sign in</a></Link>
             </div>
    }
    
  </div>
          </div>
          </div>
        </div>
    );
};
export default Navbar;