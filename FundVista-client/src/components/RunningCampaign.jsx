import { useLoaderData, useNavigate } from "react-router-dom";

const RunningCampaign = () => {
      const data = useLoaderData();
      const navigate = useNavigate();

      return (
            <section className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pt-6 pb-16">
                  <div className="text-center pb-6">
                        <h1 data-aos='fade-right' className="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary pb-3">Support Ongoing Campaigns</h1>
                        <p data-aos='fade-left' className="lg:text-lg text-gray-500">Discover active campaigns that need your contribution. Together, <br /> we can make a difference before the deadlines expire.</p>
                  </div>
                  {
                        data.length === 0
                              ? <h3 className="text-xl lg:text-2xl font-semibold text-center text-red-500">There are no ongoing campaigns at the moment.</h3>
                              : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {
                                          data.slice(0, 6).map(running => <div
                                                key={running._id}
                                                data-aos='fade-up'
                                                className="bg-white shadow-lg rounded-lg overflow-hidden p-4 group"
                                          >
                                                <figure className="overflow-hidden rounded-lg">
                                                      <img
                                                            src={running.thumbnail}
                                                            alt={running.title}
                                                            className="w-full h-56 md:h-40 object-cover group-hover:scale-105 transition-all ease-in-out duration-300"
                                                      />
                                                </figure>
                                                <div className="p-4">
                                                      <h3 className="text-xl font-bold mb-2">{running.title}</h3>
                                                      <p className="text-gray-600">
                                                            <strong>Type:</strong> {running.type}
                                                      </p>
                                                      <p className="text-gray-600">
                                                            <strong>Amount:</strong> ${running.amount}
                                                      </p>
                                                      <p className="text-gray-600">
                                                            <strong>Deadline:</strong> {new Date(running.deadline).toLocaleDateString()}
                                                      </p>
                                                      <button
                                                            onClick={() => navigate(`/campaign/${running._id}`)}
                                                            className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
                                                      >
                                                            See More
                                                      </button>
                                                </div>
                                          </div>)
                                    }
                              </div>}
            </section>
      )
}

export default RunningCampaign