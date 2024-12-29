import { useContext} from "react"
import { UserContext } from "../provider/UserProvider"
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
      const { user, loading } = useContext(UserContext);
      const location = useLocation();

      if (loading) {
            return <Loading />
      }
      if (user && user.email) {
            return children
      }
      return <Navigate state={location.pathname} to='/signIn' />
}

export default Private