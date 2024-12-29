import serviceImg from '../assets/icons/customer-service.png';
import targetImg from '../assets/icons/target.png';
import supportImg from '../assets/icons/support.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"


const Service = () => {

      useEffect(() => {
            AOS.init({
                  delay: 100,
                  duration: 600,
            });
            AOS.refresh();
      }, []);

      return (
            <section className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto mt-14 my-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
                        <div data-aos='fade-up-right' className="px-12 py-16 rounded-xl bg-base-200 text-black">
                              <div className='bg-white shadow-md rounded-lg w-fit p-4 mb-10'>
                                    <img src={serviceImg} className='w-12 h-12' alt="" />
                              </div>
                              <h2 className='text-xl font-bold mb-5'>Service With Love</h2>
                              <p className='leading-8'>We provide every service with dedication, care, and a personal touch to meet your needs.</p>
                        </div>
                        <div data-aos='zoom-out' className="px-12 py-16 rounded-xl bg-primary text-slate-100">
                              <div className='bg-white shadow-md rounded-lg w-fit p-4 mb-10'>
                                    <img src={targetImg} className='w-12 h-12' alt="" />
                              </div>
                              <h2 className='text-xl font-bold mb-5'>Clients Focused</h2>
                              <p className='leading-8'>Your goals and satisfaction are at the heart of everything we create and deliver.</p>
                        </div>
                        <div data-aos='fade-up-left' className="px-12 py-16 rounded-xl bg-base-200 text-black">
                              <div className='bg-white shadow-md rounded-lg w-fit p-4 mb-10'>
                                    <img src={supportImg} className='w-12 h-12' alt="" />
                              </div>
                              <h2 className='text-xl font-bold mb-5'>Awesome Support</h2>
                              <p className='leading-8'>Offering reliable, round-the-clock assistance to ensure your success at every stage.</p>
                        </div>
                  </div>
            </section>
      )
}

export default Service