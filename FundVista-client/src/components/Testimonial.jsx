import { MdStarBorder } from 'react-icons/md'
import client from '../assets/client.jpg'
import Slider from 'react-slick'
import ceoImg from '../assets/ceo.jpg'
import managerImg from '../assets/manager.jpg'
import financeManagerImg from '../assets/finance-manager.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Testimonial = () => {

      useEffect(() => {
            AOS.init({
                  delay: 100,
                  duration: 700,
            });
            AOS.refresh();
      }, []);

      var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 4000,
            pauseOnHover: false
      };

      return (
            <section className="bg-testi bg-no-repeat bg-cover bg-center w-full my-16 relative before:contents-['*'] before:bg-slate-50/90 before:absolute before:w-full before:h-full before:z-0">
                  <div className="flex items-center justify-center relative z-10 py-24">
                        <div className='w-11/12mx-auto flex flex-col lg:flex-row items-center gap-6'>

                              <div data-aos='fade-right' className='rounded-xl shadow bg-white p-10 sm:p-16 md:p-20 lg:pr-44'>
                                    <div className='w-[310px] md:w-[400px]'>
                                          <h3 className='text-primary font-semibold flex items-center gap-2'>
                                                <span className='border-2 w-10 border-primary'></span>
                                                <span className='uppercase'>Testimonials</span>
                                          </h3>
                                          <h2 className="text-3xl font-bold capitalize py-4 font-[Helvetica]">What our clients say</h2>

                                          <div className="slider-container">
                                                <Slider {...settings}>
                                                      <div className='p-2 mt-5'>
                                                            <div className='text-primary flex items-center'>
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                            </div>
                                                            <p className='leading-7 text-gray-700 my-5'>Success is no accident. It is hard work, perseverance, <br /> learning, studying, sacrifice and most of all, love</p>
                                                            <div className='flex items-center gap-3'>
                                                                  <img src={ceoImg} className='w-20 h-20 rounded-full' alt="" />
                                                                  <div className='space-y-2'>
                                                                        <h4 className='font-semibold text-xl'>Jhonson</h4>
                                                                        <p className='text-primary font-semibold text-sm'>CEO</p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className='leading-7 text-gray-700 mt-5'>
                                                            <div className='text-primary flex items-center'>
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                            </div>
                                                            <p className='my-5'>Success is no accident. It is hard work, perseverance, <br /> learning, studying, sacrifice and most of all, love</p>
                                                            <div className='flex items-center gap-3'>
                                                                  <img src={managerImg} className='w-20 h-20 rounded-full' alt="" />
                                                                  <div className='space-y-2'>
                                                                        <h4 className='text-xl font-semibold'>Jacklin</h4>
                                                                        <p className='text-primary font-semibold text-sm'>Manager</p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className='leading-7 text-gray-700 mt-5'>
                                                            <div className='text-primary flex items-center'>
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                                  <MdStarBorder size={22} />
                                                            </div>
                                                            <p className='my-5'>Success is no accident. It is hard work, perseverance, <br /> learning, studying, sacrifice and most of all, love</p>
                                                            <div className='flex items-center gap-3'>
                                                                  <img src={financeManagerImg} className='w-20 h-20 rounded-full' alt="" />
                                                                  <div className='space-y-2'>
                                                                        <h4 className='text-xl font-semibold'>Jancy</h4>
                                                                        <p className='font-semibold text-primary text-sm'>Finace manager</p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </Slider>
                                          </div>
                                    </div>
                              </div>

                              <div data-aos='zoom-in' className='overflow-hidden lg:-ml-28'>
                                    <img src={client} className='rounded-lg' alt="" />
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Testimonial