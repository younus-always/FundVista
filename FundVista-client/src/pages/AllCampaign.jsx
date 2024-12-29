import { useLoaderData } from "react-router-dom"
import CampaignCard from "../components/CampaignCard";
import { useContext, useEffect, useState } from "react";
import Heading from "../components/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../provider/ThemeProvider";
import { Helmet } from "react-helmet";

const AllCampaign = () => {
      const { dark } = useContext(ThemeContext);
      const data = useLoaderData();
      const [campaigns, setCampaigns] = useState(data);

      useEffect(() => {
            AOS.init();
            AOS.refresh();
      }, []);

      // Sort by Amount
      const sortLow = () => {
            const high = [...campaigns].sort((a, b) => b.amount - a.amount)
            setCampaigns(high)
      }
      const sortHigh = () => {
            const low = [...campaigns].sort((a, b) => a.amount - b.amount)
            setCampaigns(low)
      }

      return (
            <section className="pb-12">
                  <Helmet>
                        <title>All Campaign | FundVista</title>
                        <meta name="description" content="Helmet application" />
                  </Helmet>

                  <Heading title={'All Campaigns'} subtitle={'Explore our wide variety of campaigns and contribute to making a difference.'} />
                  <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex items-center gap-3">
                        <p className="font-bold text-xl md:text-2xl">Sort by Donation Amount:</p>
                        <button onClick={sortHigh} className="btn btn-sm lg:btn-md rounded-none bg-secondary text-slate-50 font-bold my-btn relative overflow-hidden hover:bg-secondary">
                              <span className="relative z-10">Low to High</span>
                        </button>
                        <button onClick={sortLow} className="btn btn-sm lg:btn-md rounded-none bg-secondary text-slate-50 font-bold my-btn relative overflow-hidden hover:bg-secondary">
                              <span className="relative z-10">High to Low</span></button>
                  </div>
                  <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10">

                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr className={`${dark && 'text-slate-300'}`}>
                                          <th>Column</th>
                                          <th className="hidden sm:block">Type</th>
                                          <th>Title</th>
                                          <th className="desc">Description</th>
                                          <th>Amount</th>
                                          <th>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {campaigns.length === 0 ? <p className="text-center font-semibold text-red-500 lg:text-xl pt-5">No Campaign Data Found !</p>
                                          : campaigns.map((campaign, idx) => <CampaignCard key={campaign._id} campaign={campaign} idx={idx} />)
                                    }
                              </tbody>
                        </table>
                  </div>
            </section>
      )
}

export default AllCampaign