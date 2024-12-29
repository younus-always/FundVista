import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from 'react-icons/io';
import { TbEyeClosed } from 'react-icons/tb';
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";


const Signin = () => {
  const { signin, googleSignIn, setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const [databaseUser, setDatabaseUser] = useState([])

  useEffect(() => {
    fetch("https://fund-vista-server.vercel.app/users")
      .then(res => res.json())
      .then(data => setDatabaseUser(data))
  }, [setDatabaseUser])

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password')

    // Firebase Signin
    signin(email, password)
      .then(result => {
        const userInfo = result.user;
        setUser(userInfo);
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.log(error)
        toast.error('Email or password does not match our records. Please try again!', { duration: 2000 })
      })
  }

  // Firebase Google Login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);

        // Check if user information already store in database
        const isUserinfoStore = databaseUser.find(d => d.email == userInfo.email);
        if (isUserinfoStore) {
          return navigate(location?.state ? location.state : '/')
        }
        // User Information store Database..
        fetch('https://fund-vista-server.vercel.app/users', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userInfo)
        })
          .then(res => res.json())
          .then(() => {
            navigate(location?.state ? location.state : '/')
          })
      })
      .then((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Helmet>
        <title>Login | FundVista</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="h-screen text-black">
        <div className="flex items-center justify-center w-11/12 mx-auto h-full">
          <div className="card bg-base-100 w-full max-w-md shadow-2xl">
            <form onSubmit={handleLogin} className="card-body pb-6">
              <div className="form-control text-center gap-1 pb-2">
                <h3 className="font-bold text-2xl">Welcome</h3>
                <p className="font-semibold text-gray-600">Sign in to Funding-Donation to keep going!</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                <button onClick={() => setShowPassword(!showPassword)} data-tooltip-id="my-tooltip-2"
                  data-tooltip-content={showPassword
                    ? "Hide"
                    : "Show"}
                  className="absolute right-3 top-[44%] bg-secondary text-slate-50 rounded-full p-1">
                  {showPassword
                    ? <IoMdEye />
                    : <TbEyeClosed />
                  }
                </button>
                <Tooltip id="my-tooltip-2" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="px-8 pb-6">
              <div className="relative">
                <p className="border flex items-center justify-center mb-6"></p>
                <span className="absolute -top-3 left-[46%] bg-base-100 font-semibold text-gray-500 px-2">OR</span>
              </div>
              <div>
                <div onClick={handleGoogleLogin} className="w-full flex items-center justify-center cursor-pointer bg-base-300 gap-3 py-2 px-4 rounded-lg">
                  <FcGoogle size={20} />
                  <span className="font-semibold">Sign in with Google</span>
                </div>

              </div>
              <div className="flex items-center justify-center mt-3">
                <p className="font-semibold text-gray-500">
                  Don&apos;t have an account?
                  <Link to='/signUp' className="text-blue-500 ml-1 font-bold">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin