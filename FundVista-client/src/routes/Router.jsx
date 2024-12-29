import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import AllCampaign from "../pages/AllCampaign";
import Signin from "../pages/Signin";
import SignUp from "../pages/SignUp";
import MyCampaign from "../pages/MyCampaign";
import MyDonations from "../pages/MyDonations";
import AddCampaign from "../pages/AddCampaign";
import Private from "./Private";
import Home from "../pages/Home";
import Layout from "../AppLayout/Layout";
import CampaignDetails from "../pages/CampaignDetails";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Layout />,
            errorElement: <Error />,
            children: [
                  {
                        path: '/',
                        element: <Home />,
                        loader: () => fetch("https://fund-vista-server.vercel.app/campaigns")
                  },
                  {
                        path: '/allcampaign',
                        element: <AllCampaign />,
                        loader: () => fetch('https://fund-vista-server.vercel.app/campaigns')
                  },
                  {
                        path: '/addcampaign',
                        element: <Private>
                              <AddCampaign />
                        </Private>,
                        loader: () => fetch("https://fund-vista-server.vercel.app/users")
                  },
                  {
                        path: '/campaign/:id',
                        element: <Private>
                              <CampaignDetails />
                        </Private>,
                        loader: ({ params }) => fetch(`https://fund-vista-server.vercel.app/campaigns/${params.id}`)
                  },
                  {
                        path: '/mycampaign',
                        element: <Private>
                              <MyCampaign />
                        </Private>,
                        loader: () => fetch("https://fund-vista-server.vercel.app/campaigns")
                  },
                  {
                        path: '/mydonations',
                        element: <Private>
                              <MyDonations />
                        </Private>,
                        loader: () => fetch('https://fund-vista-server.vercel.app/donateCampaign')
                  },
                  {
                        path: '/signUp',
                        element: <SignUp />
                  },
                  {
                        path: '/signIn',
                        element: <Signin />
                  },
            ]
      }
])

export default router