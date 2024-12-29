import { Helmet } from "react-helmet"
import Heading from "../components/Heading"
import { useLoaderData } from "react-router-dom"
import DonateCard from "../components/DonateCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/UserProvider";

const MyDonations = () => {
  const { user } = useContext(UserContext)
  const data = useLoaderData();
  const [donations, setDonations] = useState([])

  useEffect(() => {
    const isYourDonation = data.filter(d => d.email == user.email)
    setDonations(isYourDonation)
  }, [data, user])

  return (
    <section className="pb-12">
      <Helmet>
        <title>My Donations | FundVista</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Heading title={'Track Your Donations'} subtitle={'View your donation history, manage your contributions, and stay updated on the causes you support.'} />
      {
        donations.length === 0 && <p className="w-11/12 mx-auto text-center font-semibold text-red-500 lg:text-xl pt-5">No Donation Data Found</p>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-6">
        {
          donations.map((donateData) => <DonateCard key={donateData._id} donateData={donateData} />)
        }
      </div>
    </section>
  )
}

export default MyDonations