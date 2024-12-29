import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../provider/ThemeProvider";

const CampaignCard = ({ campaign, idx }) => {
      const { dark } = useContext(ThemeContext)
      const { _id, title, type, amount, description } = campaign || {};
      return (
            <>
                  <tr className={`${dark ? 'hover:bg-slate-50/20' : 'hover'}`}>
                        <th>{idx + 1}</th>
                        <td className="hidden sm:block">{type}</td>
                        <td>{title}</td>
                        <td className="desc">{
                              description.length > 55
                                    ? `${description.slice(0, 55)}...`
                                    : description
                        }</td>
                        <td>{amount}</td>
                        <td>
                              <Link to={`/campaign/${_id}`} className="btn border-none bg-primary text-slate-50 hover:bg-[#f59210e4] btn-sm">
                                    See More
                              </Link>
                        </td>
                  </tr>
            </>

      )
}

export default CampaignCard