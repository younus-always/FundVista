import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import { useContext, useState } from "react";
import { BiError } from "react-icons/bi";
import { IoMdEye } from 'react-icons/io';
import { TbEyeClosed } from 'react-icons/tb';
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const { signup, setUser, updateUserProfile, Logout } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const [databaseUser, setDatabaseUser] = useState([])


  useEffect(() => {
    fetch("https://fund-vista-server.vercel.app/users")
      .then(res => res.json())
      .then(data => setDatabaseUser(data))
  }, [setDatabaseUser])


  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photo');
    const password = form.get('password')

    // Password validation
    const lowerCase = /^(?=.*[a-z]).*$/;
    const upperCase = /^(?=.*[A-Z]).*$/;
    setErr(null)
    if (password.length < 6) {
      return setErr('Password must be at least 6 characters long!')
    }
    if (!lowerCase.test(password)) {
      return setErr('Password must contain at least 1 lowercase letter!')
    }
    if (!upperCase.test(password)) {
      return setErr('Password must contain at least 1 uppercase letter!')
    }

    // Check if user information already Signup
    const isUserinfoStore = databaseUser.find(d => d.email == email);
    if (isUserinfoStore) {
      return toast.error(`You already have an account! 
                  Please log in to access your account.`, { duration: 3000 })
    }

    // Firebase Signup 
    signup(email, password)
      .then(result => {
        const userInfo = result.user;
        setUser(userInfo);
        Logout();
        updateUserProfile(name, photo)
          .then(() => {

            // Check if user information already store in database
            const isUserinfoStore = databaseUser.find(d => d.email == userInfo.email);
            if (isUserinfoStore) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration successful! Log in now to access your account.",
                showConfirmButton: false,
                timer: 2000
              });
              navigate('/signIn');
              return;
            }

            // User Information store Database..
            fetch('https://fund-vista-server.vercel.app/users', {
              method: 'POST',
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(userInfo)
            })
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration successful! Log in now to access your account.",
              showConfirmButton: false,
              timer: 2000
            });
            navigate('/signIn')
          })
      })
      .catch(erro => {
        console.log(erro.code)
      })
  }

  return (
    <>

      <Helmet>
        <title>Register | FundVista</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="h-screen text-black">
        <div className="flex items-center justify-center w-11/12 mx-auto h-full">
          <div className="card bg-base-100 w-full max-w-md shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control text-center gap-1 pb-2">
                <h3 className="font-bold text-2xl">Welcome</h3>
                <p className="font-semibold text-gray-600">Register now to unlock full access to FundVista!</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" name="photo" placeholder="photourl" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />
                  <button onClick={() => setShowPassword(!showPassword)} data-tooltip-id="my-tooltip-2"
                    data-tooltip-content={showPassword
                      ? "Hide"
                      : "Show"}
                    className="absolute right-3 top-[25%] bg-secondary text-slate-50 rounded-full p-1">
                    {showPassword
                      ? <IoMdEye />
                      : <TbEyeClosed />
                    }
                  </button>
                  <Tooltip id="my-tooltip-2" />
                </div>
                {
                  err && <label className="label">
                    <p className="text-red-500 flex items-center gap-1 text-sm font-semibold">
                      <BiError />
                      {err}</p>
                  </label>
                }
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="flex items-center justify-center">
                <p className="font-semibold text-gray-400 text-center">
                  Already have an account?
                  <Link to='/signIn' className="text-blue-500 ml-1 font-bold">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp