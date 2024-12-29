import { FaPhoneAlt } from "react-icons/fa"
import medalImg from '../assets/icons/medal.png'

const Contact = () => {
      return (
            <section className="bg-shade bg-no-repeat bg-cover bg-center relative before:contents-['*'] before:bg-black/85 before:absolute before:w-full before:h-full before:top-0 text-slate-50 py-20">
                  <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex flex-col md:flex-row items-center md:justify-between flex-wrap gap-5 relative z-10">
                        <div data-aos='fade-down-right' className="flex items-center gap-4">
                              <img src={medalImg} className="w-14 h-14" alt="" />
                              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Sharing Expertise. <br /> Building Relationships.</h3>
                        </div>
                        <div data-aos='fade-up' className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-primary text-slate-50 flex items-center justify-center"><FaPhoneAlt size={20} /></div>
                              <div className="space-y-2">
                                    <h3 className="font-bold text-lg">Contact Our Experts</h3>
                                    <p className="font-bold">+8801396762573</p>
                              </div>
                        </div>
                        <div className="flex items-center">
                              <button data-aos='fade-up-left' className="btn btn-md rounded-none bg-secondary text-slate-50 font-bold my-btn relative overflow-hidden hover:bg-secondary border-none">
                                    <span className="relative z-10">Contact Us</span>
                              </button>
                        </div>
                  </div>
            </section>
      )
}

export default Contact