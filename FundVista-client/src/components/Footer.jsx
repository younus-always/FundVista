import { FaFacebookF, FaPinterestP, FaXTwitter } from "react-icons/fa6"
import { GoArrowUpRight } from "react-icons/go"
import { TfiInstagram } from "react-icons/tfi"
import { Link } from "react-router-dom"
import homeImg from '../assets/homeLoan.jpg'
import educationImg from '../assets/educationLoan.jpg'
import logo from '../assets/icons/logo.png'
import { SlLocationPin } from "react-icons/sl"
import { RiCustomerService2Fill } from "react-icons/ri"
import { Tooltip } from "react-tooltip"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {

  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 700,
    });
    AOS.refresh();
  }, []);


  return (
    <footer className="bg-black text-slate-50">
      {/* Footer top */}
      <div className="bg-[#161616] py-10">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 data-aos='zoom-in' className="flex items-center justify-center gap-2">
              <img src={logo} className="w-16 h-16" alt="" />
              <Link to="/" className="text-3xl font-bold ">FundVista</Link>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p data-aos='fade-left'><SlLocationPin size={34} className="text-primary " /></p>
            <div data-aos='fade-right' className="space-y-3">
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="font-bold lg:text-xl">82-26 Park Rd, Dhaka 1212</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <p data-aos='fade-left'><RiCustomerService2Fill size={34} className="text-primary" /></p>
            <div data-aos='fade-right' className="space-y-3">
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="font-bold lg:text-xl hover:text-primary transition-all ease-in-out">+8801397673992</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* About */}
          <div className="space-y-4">
            <h3 data-aos='zoom-in' className="text-2xl font-bold relative w-fit flex mb-6">About <span className="w-[6px] h-[6px] bg-primary absolute -right-[10px] bottom-[6px]"></span></h3>
            <p data-aos='fade-right' className="text-gray-300 font-semibold">FundVista is a dynamic crowdfunding platform that empowers people to fund innovative ideas and projects.</p>
            <div className="flex items-center gap-2">
              <Link data-aos='fade-up' data-tooltip-id="my-tooltip" data-tooltip-content="Facebook" to='https://www.facebook.com/' target="blank" className="w-8 h-8 rounded-full border border-primary flex items-center justify-center hover:bg-primary transition-all ease-in-out">
                <FaFacebookF size={16} /></Link>
              <Link data-aos='fade-down' data-tooltip-id="my-tooltip" data-tooltip-content="Instagram" to='https://www.instagram.com/' target="blank" className="w-8 h-8 rounded-full border border-primary flex items-center justify-center hover:bg-primary transition-all ease-in-out">
                <TfiInstagram size={16} /></Link>
              <Link data-aos='fade-up' data-tooltip-id="my-tooltip" data-tooltip-content="Twitter" to='https://www.twitter.com/' target="blank" className="w-8 h-8 rounded-full border border-primary flex items-center justify-center hover:bg-primary transition-all ease-in-out">
                <FaXTwitter size={16} /></Link>
              <Link data-aos='fade-down' data-tooltip-id="my-tooltip" data-tooltip-content="Pinterest" to='https://www.pinterest.com/' target="blank" className="w-8 h-8 rounded-full border border-primary flex items-center justify-center hover:bg-primary transition-all ease-in-out">
                <FaPinterestP size={16} /></Link>
              <Tooltip id="my-tooltip" style={{
                background: '#fff',
                color: '#f59118',
                fontWeight: 500
              }} />
            </div>
          </div>
          {/* Quick Links  */}
          <div>
            <h3 data-aos='zoom-in' className="text-2xl font-bold relative w-fit flex mb-6">Quick Links <span className="w-[6px] h-[6px] bg-primary absolute -right-[10px] bottom-[6px]"></span></h3>
            <div data-aos='fade-up' className="flex items-center gap-6">
              <ul className="space-y-3 font-semibold text-gray-300">
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link>About us</Link></li>
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link to='/allCampaign'>All Campaign</Link></li>
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link to='/addCampaign'>Add Campaign</Link></li>
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link to='myCampaign'>My Campaign</Link></li>
              </ul>
              <ul className="space-y-3 font-semibold text-gray-300">
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link>Contact</Link></li>
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link to='myDonations'>My Donations</Link></li>
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link>Terms & Condition</Link></li>
                <li className="flex items-center gap-2 hover:text-primary w-fit transition-all ease-in-out">
                  <GoArrowUpRight className="text-primary" size={22} />
                  <Link>Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          {/* Latest Campaign */}
          <div>
            <h3 data-aos='zoom-in' className="text-2xl font-bold relative w-fit flex mb-6">Latest Campaign <span className="w-[6px] h-[6px] bg-primary absolute -right-[10px] bottom-[6px]"></span></h3>
            <div className="space-y-4">
              <div data-aos='fade-left' data-aos-delay='50' className="flex items-center gap-5">
                <img src={homeImg} className="w-16 h-16 rounded-lg" alt="" />
                <div className="space-y-2">
                  <h4 className="font-bold">Success Stories From Our Past Initiatives.</h4>
                  <p className="text-primary text-sm font-semibold">April 19, 2022</p>
                </div>
              </div>
              <div data-aos='fade-left' data-aos-delay='150' className="flex items-center gap-5">
                <img src={educationImg} className="w-16 h-16 rounded-lg" alt="" />
                <div className="space-y-2">
                  <h4 className="font-bold">Campaigns That Changed Lives.</h4>
                  <p className="text-primary text-sm font-semibold">December 27, 2020</p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs sm:text-sm lg:text-[16px] font-semibold text-center text-gray-400 py-6 border-t border-gray-700">Copyright &copy; {new Date().getFullYear()} All rights reserved by <Link to='/' className="text-primary">FundVista</Link></p>
    </footer>
  )
}

export default Footer