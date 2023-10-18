import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister =(e)=>{
       e.preventDefault()
    }
return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content  w-full  flex-col ">
      <div className="text-center  ">
        <h1 className="text-5xl font-bold text-orange-500">Register!</h1>
      </div>
      <div className="card  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Name</span>
            </label>
            <input type="text" placeholder="name" name="name" className="input input-bordered text-xl" required />
          </div>
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
            <button className="btn btn-info">Register</button>
          </div>
        </form>
        <p className="text-center pb-5 text-lg font-medium">
          Already an account ? Please <Link className="text-blue-500  p-2 font-bold" to='/login'>Log in</Link></p>
      </div>
    </div>
  </div>
);
};

export default Register;