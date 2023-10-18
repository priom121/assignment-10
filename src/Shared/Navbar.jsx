import {  NavLink } from "react-router-dom";
import Logo from '../../public/Images/carworld.png';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const handleLogOut =()=>{
    logOut()
  }
const navLinks = <>
<ul className="lg:flex  items-center gap-5 text-xl font-medium">
  <li>
 <NavLink
to="/"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
 Home
</NavLink>
 </li>                    
 <li>
 <NavLink
to="/addProDucts"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
 AddProDucts
</NavLink>
 </li>

 <li>
                                 
 <NavLink
to="/myCart"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600" : ""
}
>
MyCart
</NavLink>
 </li>
                           
 {/* <li>
 <NavLink
to="/login"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600" : ""
 }
>
Login
 </NavLink>
 </li> */}
</ul>
 </>                          
return (
<div>
<div className=" navbar bg-orange-100 p-6 shadow-xl text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content
       mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
<div>
<a className="btn btn-ghost normal-case md:text-3xl ">
     <img className=" w-[50px] h-[50px] md:w-[80px] md:h-[70px] rounded-3xl" src={Logo}></img>
<span className="text-orange-600">CarWorld</span></a>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   <ul>
  <li>
{
  user ? <button className="btn btn-error" onClick={handleLogOut}>Logout</button> 
   :<NavLink
   to="/login"
    className={({ isActive, isPending }) =>
     isPending ? "pending" : isActive ? "text-red-600" : ""
    }
   >
   <div className="text-xl font-semibold">Login</div>
    </NavLink>
}
 </li>
 </ul>
  </div>
</div>                                                                                         
 </div>
);
};

export default Navbar;