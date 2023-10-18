import { useContext } from "react";
import {  Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const LogIn = () => {
const {logIn,googleLogIn}= useContext(AuthContext)

const handleGoogle =()=>{
  googleLogIn()
}

const handleLogin =(e)=>{
 e.preventDefault()
 console.log(e.currentTarget);
 const form = new FormData (e.currentTarget)
 const email = form.get('email')
const password = form.get('password')
console.log(email,password);
 logIn(email,password)
 .then(result=>{
  console.log(result.user);
  Swal.fire({
    icon: 'success',
    title: 'Done ',
    text: 'successfully login',
  })
 })
 .catch(error=>{
  console.error(error);
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })
 })
}
 return (
 <div>
    <div className="hero min-h-screen bg-base-200">
     <div className="hero-content  w-full  flex-col ">
       <div className="text-center  ">
         <h1 className=" text-2xl md:text-5xl font-bold text-orange-700">Login now!</h1>
       </div>
       <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <form onSubmit={handleLogin} className="card-body  ">
           <div className="form-control">
             <label className="label">
               <span className="label-text text-xl">Email</span>
             </label>
             <input type="email" name="email" placeholder="email" className="input input-bordered text-xl" required />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text text-xl">Password</span>
             </label>
             <input type="password" name="password" placeholder="password" className="input input-bordered text-xl" required />
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button  className="btn btn-info">Login</button>
           </div>
         </form>
         <div className="py-4 text-center"><button onClick={handleGoogle} className="btn  btn-outline btn-warning ">
           Google Login</button></div>
         <p className="text-center pb-5 text-lg font-medium">New ? Please
         <Link className="text-blue-500  p-2 font-bold" to='/register'>
          Register</Link></p>
       </div>
     </div>
   </div>                                                                                    
 </div>
 );
};

export default LogIn;