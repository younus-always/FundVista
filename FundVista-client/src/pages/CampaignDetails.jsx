import { useContext, useEffect, useState } from "react"
import { BiDollarCircle } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { UserContext } from "../provider/UserProvider";

const CampaignDetails = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState({});
  const [donatedData, setDonatedData] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { _id, name, thumbnail, title, type, deadline, amount, description } = campaign || {};

  // All campaigns fetch and find by id to show details..
  useEffect(() => {
    fetch("https://fund-vista-server.vercel.app/campaigns")
      .then(res => res.json())
      .then(data => {
        const singleCampaign = data.find(d => d._id === id)
        setCampaign(singleCampaign)
      })
  }, [id])

  // All Donations campaign fetch..
  useEffect(() => {
    fetch('https://fund-vista-server.vercel.app/donateCampaign')
      .then(res => res.json())
      .then(data => setDonatedData(data))
  }, [])

  // Donate function..
  const handleDonate = async () => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline);

    // If user authorized this campaign
    if (campaign.email !== user.email) {
      return toast.error(`You are not authorized to donate to this campaign!`, { duration: 2000 })
    }

    //  If already campaign exist in donation
    const checkByUserCampaign = donatedData.find(d => d._id === _id);
    if (checkByUserCampaign) {
      return toast.error(`This campaign has already received a donation.`, { duration: 2000 })
    }

    // Check if the current date exceeds the deadline
    if (currentDate > deadlineDate) {
      Swal.fire({
        icon: "error",
        title: "Campaign Closed",
        html: `
        <p style="color: red; font-size: 16px; font-weight: bold; margin-bottom: 4px">
            Donations cannot be made to campaigns with today's deadline or past deadlines.
          </p>
        <p style="color: #4b5563  ; font-size: 14px;">
            Please check other active campaigns and try again.
          </p>
  `,
      });
      return;
    }

    // Add the campaign to the database
    fetch('https://fund-vista-server.vercel.app/donateCampaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaign),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success(`Thank you for your Generosity! 
            Your donation was successful!`, { duration: 2000 });
          setTimeout(() => {
            navigate('/allcampaign')
          }, 2000);
        }
      })
  };



  return (
    <section className="pb-10">
      <Helmet>
        <title>Details | FundVista</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Heading title={'Explore the Campaign'} subtitle={'Here’s all the information about this campaign'} />
      <div className="card w-11/12 md:w-10/12 lg:w-8/12 mx-auto bg-base-100 shadow-xl">
        {/* Campaign Thumbnail */}
        <figure className="p-6 pb-0">
          <img
            src={thumbnail}
            alt={title}
            className="h-96 w-full rounded-lg object-cover"
          />
        </figure>
        {/* Card Body */}
        <div className="card-body">
          {/* Campaign Title */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5">
            <div className="card-title text-black">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{title}</h2>
            </div>
            {/* Campaign Type */}
            <div className="w-fit">
              <p className="badge badge-secondary bg-secondary text-slate-50 border-none">{type}</p>
            </div>
          </div>
          {/* Author */}
          <p className="text-black">{name}</p>
          {/* Deadline */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaRegCalendarAlt className="text-primary" size={20} /> <span>{deadline}</span>
          </div>
          {/* Donation Amount */}
          <div className="flex items-center gap-2 text-gray-500">
            <BiDollarCircle className="text-primary" size={20} /> <span>${amount}</span>
          </div>
          {/* Description */}
          <p className="text-gray-800">{description}</p>
          {/* See More Button */}
          <button type="button" onClick={handleDonate} className="py-3 px-4 rounded-lg bg-primary text-slate-50 font-bold active:scale-95 transition-all ease-in my-2">Donate</button>
        </div>
      </div>
    </section>
  )
}

export default CampaignDetails