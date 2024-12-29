import { useLoaderData } from "react-router-dom"
import Heading from "../components/Heading"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../provider/UserProvider"
import Swal from "sweetalert2"
import Modal from 'react-modal';
import DatePicker from "react-datepicker"
import toast from "react-hot-toast"
import { Helmet } from "react-helmet"
import { ThemeContext } from "../provider/ThemeProvider"
import { MdDeleteForever } from "react-icons/md"
import { RiEdit2Fill } from "react-icons/ri"


const MyCampaign = () => {
  const { dark } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const data = useLoaderData();
  const [campaigns, setCampaigns] = useState(data);
  const [startDate, setStartDate] = useState(new Date());
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const { _id, name, email, title, type, thumbnail, description, amount, deadline } = modalData || {};

  // Modal all functions...
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // Run this effect only once, after the component mounts
  useEffect(() => {
    // Filter all campaigns to created by current user 
    const isSameData = data.filter(c => c.email === user.email);
    setCampaigns(isSameData);
  }, [data, user, setCampaigns])

  // Deleted campaign function
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://fund-vista-server.vercel.app/campaigns/${id}`, {
            method: "DELETE"
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your campaign data has been deleted.",
                  icon: "success"
                });
                const newData = campaigns.filter(campaign => id !== campaign._id);
                setCampaigns(newData)
              }
            });
        }
      });
  }

  const updateBtn = id => {
    const result = campaigns.find((c) => c._id === id)
    setModalData(result)
  }

  // Update Modal button function..
  const updateCampaign = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const email = form.get('email');
    const title = form.get('title');
    const thumbnail = form.get('thumbnail');
    const type = form.get('select-type');
    const amount = form.get('amount');
    const deadline = form.get('deadline');
    const description = form.get('description');
    const campaign = { name, email, title, thumbnail, type, amount, deadline, description };

    // Check If Donation Amount less then 100
    if (amount < 100) {
      return Swal.fire({
        title: 'Your donation must be $100 or more!',
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
        }
      });
    };

    // Check Deadline less than CurrentDate
    if (new Date(deadline) < new Date()) {
      return Swal.fire({
        icon: 'warning',
        title: "The deadline has already passed. Please select a future date!",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
        }
      });
    };

    // Campaign update on put method to store database
    fetch(`https://fund-vista-server.vercel.app/campaigns/${_id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campaign)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.modifiedCount) {
          return toast.loading('Please update your data before proceeding!', { duration: 3000 });
        }
        if (data.modifiedCount) {
          closeModal();
          Swal.fire({
            title: `${title}`,
            icon: "success",
            text: "Data updated successfully!"
          });
          setCampaigns(prevCampaigns =>
            prevCampaigns.map(c => (c._id === _id ? { ...c, ...campaign } : c))
          );
        }
      })
      .catch(error => console.error('Error updating campaign:', error));

  }


  return (
    <section className="pb-12">
      <Helmet>
        <title>My Campaigns | FundVista</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Heading title={'Manage Your Campaigns'} subtitle={'Track, edit, and update your campaigns with ease to maximize your fundraising success.'} />

      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr className={`${dark && 'text-slate-300'}`}>
              <th>Column</th>
              <th className="hidden sm:block">Type</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.length === 0
              ? <p className="w-11/12 mx-auto text-center font-semibold text-red-500 lg:text-xl pt-5">Your Campaign Not Found !</p>
              : campaigns.map((campaign, idx) =>
                <tr key={campaign._id} className={`${dark ? 'hover:bg-slate-50/20' : 'hover'}`}>
                  <th>{idx + 1}</th>
                  <td className="hidden sm:flex sm:items-start sm:justify-start">{campaign.type}</td>
                  <td>{campaign.title}</td>
                  <td>{
                    campaign.description.length > 50
                      ? `${campaign.description.slice(0, 50)}...`
                      : campaign.description
                  }</td>
                  <td className="flex flex-col sm:flex-row items-center gap-2">
                    <button onClick={() => {
                      updateBtn(campaign._id);
                      openModal();
                    }} className="btn btn-sm bg-base-300">
                      <RiEdit2Fill size={22} className="text-primary" />
                    </button>
                    <button onClick={() => handleDelete(campaign._id)} className="btn btn-sm bg-base-300">
                      <MdDeleteForever size={22} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

      {/*Update Campaign Modal */}
      <div className="flex items-center justify-center">
        <Modal
          isOpen={modalIsOpen}
          className="bg-white rounded-lg w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 mx-auto p-6 shadow-2xl top-1/2 max-h-screen h-fit overflow-y-auto"
        >
            <div className="text-center text-xl font-bold pb-3 text-black">Update Your Campaign</div>
            <form onSubmit={updateCampaign} className="space-y-2 md:space-y-3" >
              {/* row 1 */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="form-control flex-1">
                  <label className="label" htmlFor="name">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" id="name" value={name} className="input input-bordered" placeholder="your name" required />
                </div>
                <div className="form-control flex-1">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" id="email" value={email} className="input input-bordered" placeholder="your email" required />
                </div>
              </div>
              {/* row 2 */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="form-control flex-1">
                  <label className="label" htmlFor="title">
                    <span className="label-text">Campaign title</span>
                  </label>
                  <input type="text" name="title" id="title" defaultValue={title} className="input input-bordered" placeholder="campaign title" required />
                </div>
                <div className="form-control flex-1">
                  <label className="label" htmlFor="thumbnail">
                    <span className="label-text">Campaign thumbnail</span>
                  </label>
                  <input type="text" name="thumbnail" id="thumbnail" defaultValue={thumbnail} className="input input-bordered" placeholder="campaign thumbnail url" required />
                </div>
              </div>
              {/* row 3 */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="form-control flex-1">
                  <label className="label" htmlFor="select-type">
                    <span className="label-text">Campaign type</span>
                  </label>
                  <select name="select-type" id="select-type" defaultValue={type} className="select input input-bordered" required>
                    <option defaultValue="" disabled>Select campaign type</option>
                    <option value="Personal Issue">Personal Issue</option>
                    <option value="Startup">Startup</option>
                    <option value="Business">Business</option>
                    <option value="Creative Ideas">Creative Ideas</option>
                  </select>
                </div>
                <div className="form-control flex-1">
                  <label className="label" htmlFor="amount">
                    <span className="label-text">Donation amount</span>
                  </label>
                  <input type="number" name="amount" id="amount" defaultValue={amount} className="input input-bordered" placeholder="minimum donation amount" required />
                </div>
              </div>
              {/* row 4 */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="form-control flex-1">
                  <label className="label" htmlFor="deadline">
                    <span className="label-text">Deadline</span>
                  </label>
                  <DatePicker
                    id="deadline"
                    name="deadline"
                    defaultValue={deadline}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label" htmlFor="description">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea name="description" id="description" defaultValue={description} className="input input-bordered max-h-40 py-2" placeholder="description" required></textarea>
                </div>
              </div>
              {/* update button */}
              <div className="pt-2">
                <button type="submit" className="w-full p-3 font-bold bg-primary rounded-lg hover:bg-[#f59210e6] transition-all ease-out active:scale-95 text-slate-50">Update</button>
              </div>
            </form>
        </Modal>
      </div>
    </section >
  )
}

export default MyCampaign