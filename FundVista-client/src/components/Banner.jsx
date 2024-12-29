import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"


export const Banner = () => {

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
            <div className="">
                  <Slider {...settings}>
                        {/* slider 1 */}
                        <div className="h-[580px] bg-hero1 bg-cover bg-fixed relative before:contents-['*'] before:absolute before:w-full before:h-full before:bg-black/70">
                              <div className="flex items-center h-full relative z-10 text-slate-50 py-24 px-5">
                                    <div className="max-w-lg mx-auto flex flex-col items-center space-y-6">
                                          <div data-aos='fade-down' className="uppercase font-bold bg-primary text-slate-50 py-2 px-3 w-fit">protecting what matters</div>
                                          <h1 data-aos='fade-right' className="capitalize font-bold text-2xl lg:leading-[60px] md:text-4xl lg:text-5xl text-center">start or grow your <br /> own business</h1>
                                          <p data-aos='zoom-in' className="text-center lg:text-lg">Unlock the resources you need to turn your vision into reality and achieve entrepreneurial success.</p>
                                          <button data-aos='fade-up-left' className="py-4 px-6 bg-secondary text-slate-50 font-bold my-btn overflow-hidden">
                                                <span className="relative z-10">Learn More</span>
                                          </button>
                                    </div>
                              </div>
                        </div>
                        {/* slider 2 */}
                        <div className="h-[580px] bg-impact bg-cover bg-fixed relative before:contents-['*'] before:absolute before:w-full before:h-full before:bg-black/70">
                              <div className="flex items-center h-full relative z-10 text-slate-50 py-24 px-5">
                                    <div className="max-w-lg mx-auto flex flex-col items-center space-y-6">
                                          <div data-aos='fade-down' className="uppercase font-bold bg-primary text-slate-50 py-2 px-3 w-fit">protecting what matters</div>
                                          <h1 className="capitalize font-bold text-2xl lg:leading-[60px] md:text-4xl lg:text-5xl text-center">Transform Ideas Into Impact</h1>
                                          <p data-aos='zoom-in' className="text-center lg:text-lg">Support campaigns that create meaningful solutions for real-world challenges.</p>
                                          <button data-aos='fade-up-left' className="py-4 px-6 bg-secondary text-slate-50 font-bold my-btn overflow-hidden">
                                                <span className="relative z-10">Learn More</span>
                                          </button>
                                    </div>
                              </div>
                        </div>
                        {/* slider 3 */}
                        <div className="h-[580px] bg-empower bg-cover bg-fixed relative before:contents-['*'] before:absolute before:w-full before:h-full before:bg-black/70">
                              <div className="flex items-center h-full relative z-10 text-slate-50 py-24 px-5">
                                    <div className="max-w-lg mx-auto flex flex-col items-center space-y-6">
                                          <div data-aos='fade-down' className="uppercase font-bold bg-primary text-slate-50 py-2 px-3 w-fit">protecting what matters</div>
                                          <h1 className="capitalize font-bold text-2xl md:text-4xl lg:text-5xl lg:leading-[60px] text-center">Empower Dreams, Build Futures</h1>
                                          <p data-aos='zoom-in' className="text-center lg:text-lg">Every contribution brings us closer to achieving the extraordinary.</p>
                                          <button data-aos='fade-up-left' className="py-4 px-6 bg-secondary text-slate-50 font-bold my-btn overflow-hidden">
                                                <span className="relative z-10">Learn More</span>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </Slider>
            </div>
      );
}
export default Banner