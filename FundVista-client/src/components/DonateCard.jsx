import { FaCalendarAlt, FaDollarSign, FaEnvelope } from "react-icons/fa";

const DonateCard = ({ donateData }) => {
      const { name, email, title, thumbnail, type, amount, deadline, description } = donateData || {};

      return (
            <div className="card bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden">
                  <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
                  <div className="p-4 space-y-3">
                        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                        <p className="text-sm text-gray-600">
                              <span className="font-semibold">By:</span> {name}
                        </p>
                        <p className="flex items-center text-sm text-gray-600">
                              <FaEnvelope className="mr-2 text-primary" /> {email}
                        </p>
                        <p className="text-sm text-gray-600">
                              <span className="font-semibold">Type:</span> {type}
                        </p>
                        <p className="flex items-center text-sm text-gray-600">
                              <FaDollarSign className="mr-2 text-primary" /> {amount} USD
                        </p>
                        <p className="flex items-center text-sm text-gray-600">
                              <FaCalendarAlt className="mr-2 text-primary" /> {deadline}
                        </p>
                        <p className="text-sm text-gray-600">
                              <span className="font-semibold">Description:</span> {description}
                        </p>
                  </div>
            </div>
      )
};

export default DonateCard;