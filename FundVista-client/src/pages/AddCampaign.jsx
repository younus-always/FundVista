import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import Heading from "../components/Heading";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../provider/UserProvider";
import { Helmet } from "react-helmet";


const AddCampaign = () => {
  const users = useLoaderData();
  const { user } = useContext(UserContext)
  const [startDate, setStartDate] = useState(new Date());
  const [validUser, setValidUser] = useState({})

  useEffect(() => {
    // Find is user and user campaign same
    const isSameUser = users.find(u => u.email === user.email);
    setValidUser(isSameUser);
  }, [user, users, setValidUser])

  // Add Campaign function
  const handleAdd = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
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
        icon: 'info',
        title: "Your donation must be $100 or more!",
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

    // Added campaign store to database
    fetch('https://fund-vista-server.vercel.app/addCampaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(campaign)
    }).then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          let timerInterval;
          Swal.fire({
            title: "Campaign Add Successfully!",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              timerInterval = setInterval(() => {
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            }
          }).then(() => {
          });
        }
        e.target.reset();
      });
  };


  return (
    <section className="pb-10">
      <Helmet>
        <title>Add Campaign | FundVista</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Heading title={'Add a New Campaign'} subtitle={'Fill out the form below to create a new campaign and start making a difference.'} />
      <div className="w-11/12 mx-auto flex items-center justify-center">

        {/* Add campaign form */}
        <div className="bg-white text-black shadow-lg rounded-lg w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 mx-auto p-6">
          <div className="text-center text-xl font-bold pb-3 text-black">Add Your Campaign</div>
          <form onSubmit={handleAdd} className="space-y-3">
            {/* row-1 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="form-control flex-1">
                <label className="label" htmlFor="name">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" value={validUser?.displayName} id="name" className="input input-bordered" placeholder="your name" required />
              </div>
              <div className="form-control flex-1">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" value={validUser?.email} id="email" className="input input-bordered" placeholder="your email" required />
              </div>
            </div>
            {/* row-2 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="form-control flex-1">
                <label className="label" htmlFor="title">
                  <span className="label-text">Campaign title</span>
                </label>
                <input type="text" name="title" id="title" className="input input-bordered" placeholder="campaign title" required />
              </div>
              <div className="form-control flex-1">
                <label className="label" htmlFor="thumbnail">
                  <span className="label-text">Campaign thumbnail</span>
                </label>
                <input type="text" name="thumbnail" id="thumbnail" className="input input-bordered" placeholder="campaign thumbnail url" required />
              </div>
            </div>
            {/* row-3 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="form-control flex-1">
                <label className="label" htmlFor="select-type">
                  <span className="label-text">Campaign type</span>
                </label>
                <select name="select-type" id="select-type" className="select input input-bordered" required>
                  <option value="" disabled selected>Select campaign type</option>
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
                <input type="number" name="amount" id="amount" className="input input-bordered" placeholder="minimum donation amount" required />
              </div>
            </div>
            {/* row-4 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="form-control flex-1">
                <label className="label" htmlFor="deadline">
                  <span className="label-text">Deadline</span>
                </label>
                <DatePicker
                  id="deadline"
                  name="deadline"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control flex-1">
                <label className="label" htmlFor="description">
                  <span className="label-text">Description</span>
                </label>
                <textarea name="description" id="description" className="input input-bordered max-h-40 py-2" placeholder="description" required></textarea>
              </div>
            </div>

            <div className="pt-3">
              <button type="submit" className="p-3 font-bold bg-primary rounded-lg hover:bg-[#f59210e6] transition-all ease-out active:scale-95 text-slate-50 w-full">Add Campaign</button>
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default AddCampaign