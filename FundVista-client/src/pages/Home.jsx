import Banner from "../components/Banner"
import Service from "../components/Service"
import Testimonial from "../components/Testimonial"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import RunningCampaign from "../components/RunningCampaign"
import Contact from "../components/Contact"

const Home = () => {

      useEffect(() => {
            AOS.init({
                  delay: 100,
                  duration: 600,
            });
            AOS.refresh();
      }, []);

      return (
            <>
                  <Helmet>
                        <title>Home | FundVista</title>
                        <meta name="description" content="Helmet application" />
                  </Helmet>
                  {/* Banner Slider */}
                  <Banner />
                  {/* Service section */}
                  <Service />
                  {/* Running Campaigns Section */}
                  <RunningCampaign />
                  {/* Contact Us */}
                  <Contact />
                  {/* Testimonial */}
                  <Testimonial />
            </>
      )
}

export default Home