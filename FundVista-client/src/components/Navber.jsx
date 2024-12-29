import { useContext, useState } from "react"
import { FaCircleUser } from "react-icons/fa6"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { MdDarkMode, MdLightMode, MdOutlineClose } from "react-icons/md"
import { Link, NavLink } from "react-router-dom"
import { Tooltip } from "react-tooltip"
import 'react-tooltip/dist/react-tooltip.css'
import { UserContext } from "../provider/UserProvider"
import logo from '../assets/icons/logo.png'
import { ThemeContext } from "../provider/ThemeProvider"

const Navber = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const { user, Logout } = useContext(UserContext);
  const [openMenu, setOpenMenu] = useState(false);


  const links = <>
    <li>
      <NavLink className="py-2 px-4 rounded-3xl bg-base-300 hover:bg-base-100 hover:text-primary border hover:border-primary transition-all " to="/">Home</NavLink></li>
    <li>
      <NavLink className="py-2 px-4 rounded-3xl bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all " to="/allcampaign">All Campaign</NavLink>
    </li>
    <li>
      <NavLink className="py-2 px-4 rounded-3xl bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all " to="/addcampaign">Add Campaign</NavLink>
    </li>
    <li>
      <NavLink className="py-2 px-4 rounded-3xl bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all " to="/mycampaign">My Campaign</NavLink>
    </li>
    <li>
      <NavLink className="py-2 px-4 rounded-3xl bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all " to="/mydonations">My Donation</NavLink>
    </li>
  </>

  const mobileMenu = <>
    <li className="w-full">
      <NavLink to='/' className="py-2 block bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all ">Home</NavLink>
    </li>
    <li className="w-full">
      <NavLink to='/allcampaign' className="py-2 block bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all ">All Campaign</NavLink>
    </li>
    <li className="w-full">
      <NavLink to='/addcampaign' className="py-2 block bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all ">Add Campaign</NavLink>
    </li>
    <li className="w-full">
      <NavLink to='/mycampaign' className="py-2 block bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all ">My Campaign</NavLink>
    </li>
    <li className="w-full">
      <NavLink to='/mydonations' className="py-2 block bg-base-300 hover:bg-base-100 hover:border-primary hover:text-primary border transition-all ">My Donation</NavLink>
    </li>
    {/* User login or logout */}
    {
      user && user.email
        ? <button onClick={() => Logout()} className="py-2 px-4 w-full bg-secondary text-slate-50 font-bold relative before:contents-['*'] before:bg-primary before:-right-1 before:h-[100px] before:w-8 before:-top-4 before:rotate-45 before:absolute hover:before:w-full hover:before:rotate-0 hover:before:right-0 hover:before:transition-all hover:before:ease-in-out hover:before:duration-300 hover:before:-top-6 overflow-hidden">
          <span className="relative z-10">Logout</span>
        </button>
        : <Link to="/signIn" className="py-2 px-4 w-full bg-secondary text-slate-50 font-bold relative before:contents-['*'] before:bg-primary before:-right-1 before:h-[100px] before:w-8 before:-top-4 before:rotate-45 before:absolute hover:before:w-full hover:before:rotate-0 hover:before:right-0 hover:before:transition-all hover:before:ease-in-out hover:before:duration-300 hover:before:-top-6 overflow-hidden">
          <span className="relative z-10">Login</span>
        </Link>
    }
  </>


  return (
    <>
      <header className={`${dark ? 'bg-white' : 'bg-white/90'} relative shadow-md`}>
        {/* Mobile menu */}
        {openMenu &&
          <ul className="absolute top-[84px] left-0 w-80 xl:hidden flex flex-col items-center justify-center space-y-2 font-bold p-6 shadow-lg text-center border bg-white z-30">
            {mobileMenu}
          </ul>}

        <nav className="w-11/12 mx-auto py-5 flex items-center justify-between gap-2">
          <div className="flex items-center justify-between xl:justify-center gap-3 sm:w-1/2 xl:w-fit">
            <button onClick={() => setOpenMenu(!openMenu)} className={`xl:hidden py-2 px-3 text-slate-50 bg-secondary ${openMenu ? 'bg-primary' : 'bg-secondary'}`}>
              {openMenu ? <MdOutlineClose size={22} /> : <HiOutlineMenuAlt1 size={22} />}
            </button>
            <h2 className="flex items-center justify-center gap-1">
              <img src={logo} className="w-12 h-12" alt="" />
              <Link to="/" className="text-2xl font-bold ">FundVista</Link>
            </h2>
          </div>
          {/* Desktop menu */}
          <ul className="hidden xl:flex items-center justify-center
          gap-3 font-bold"> {links} </ul>
          {/* User info */}
          <div className="flex items-center gap-3">
            {/* Theme button */}
            <button onClick={() => setDark(!dark)} className={`${dark ? 'bg-secondary' : 'bg-gray-300'} p-1 rounded-full`} data-tooltip-id="my-tooltip" data-tooltip-content={`${dark ? 'Light Mode' : "Dark Mode"}`} >
              {dark ? <MdLightMode className={`text-yellow-400 hover:rotate-180 transition-all duration-300 ease-in`} size={20} /> : <MdDarkMode size={20} className="" />}</button>
            <div className="flex items-center justify-center gap-3">
              <div data-tooltip-id="my-tooltip" >
                <div className="border-2 border-blue-500 p-1 rounded-full cursor-pointer">
                  {user && user.email
                    ? <img src={user.photoURL} className="w-7 h-7 rounded-full object-cover object-top" alt="" />
                    : <FaCircleUser size={28} />}
                </div>
              </div>
              {/* User Tooltip */}
              <Tooltip id="my-tooltip" className="bg-black relative z-10">
                <div className="max-w-md">
                  {
                    user && user.email
                      ? <div>
                        <h3 className="font-semibold text-lg">Name: {user.displayName}</h3>
                        <p className="font-semibold mb-2">{user.email}</p>
                        <div>
                          <img src={user?.photoURL} className="h-28 w-full object-cover object-top" alt="" />
                        </div>
                      </div>
                      : <div>
                        <h3 className="text-red-300 font-semibold text-center">User information empty</h3>
                      </div>
                  }
                </div>
              </Tooltip>

              {/* User login or logout */}
              <div className="hidden sm:flex">
                {
                  user && user.email
                    ? <button onClick={() => Logout()} className="py-2 px-4 bg-secondary text-slate-50 font-bold my-btn relative overflow-hidden">
                      <span className="relative z-10">Logout</span>
                    </button>
                    : <Link to="/signIn" className="py-2 px-4 bg-secondary text-slate-50 font-bold my-btn relative overflow-hidden">
                      <span className="relative z-10">Login</span>
                    </Link>
                }
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}


export default Navber