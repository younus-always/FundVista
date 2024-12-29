import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

const Heading = ({ title, subtitle }) => {
      const { dark } = useContext(ThemeContext)
      useEffect(() => {
            AOS.init({
                  delay: 100,
                  duration: 700,
            });
            AOS.refresh();
      }, []);

      return (
            <div className={`mb-8 text-slate-50 ${dark ? 'bg-[#161616]' : 'bg-black/90'}`}>
                  <div className="w-11/12 mx-auto px-4 py-8 text-center ">
                        <h1 data-aos='fade-right' className="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary pb-3">{title}</h1>
                        <p data-aos='fade-left' className="text-sm lg:text-lg text-gray-300">{subtitle}</p>
                  </div>
            </div>
      )
}

export default Heading