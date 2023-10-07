import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const navItem = <>

        <li>
        <NavLink to="/">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Home</span>
                  )}
                   </NavLink>
                     </li>
        <li>
        <NavLink to="/tasks">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Services</span>
                  )}
                   </NavLink>
                     </li>
        <li>
        <NavLink to="/signin">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Signin</span>
                  )}
                   </NavLink>
                     </li>
        <li>
        <NavLink to="/signup">
           {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Signup</span>
                  )}
                   </NavLink>
                     </li>
    </>
    const {pathname} = useLocation();
    let headerColor = null;
    if(pathname != "/"){
      headerColor = "#000000";
    }else{
      headerColor = "#FFFFFF";
    }
    // const 
    console.log(pathname);
    return (
        <div className="absolute z-50 w-full">
          <div className="max-w-screen-2xl">
          <div style={{color: `${headerColor}`}} className="navbar w-11/12 px-0 py-5 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <a className="normal-case font-bold font-L text-2xl">innoLearn Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-2 px-1 text-lg font-medium">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Logout</a>
  </div>
          </div>
          </div>
        </div>
    );
};
export default Navbar;