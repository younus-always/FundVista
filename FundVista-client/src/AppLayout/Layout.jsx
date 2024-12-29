import { Outlet } from "react-router-dom"
import Navber from "../components/Navber"
import Footer from "../components/Footer"
import { useContext } from "react"
import { ThemeContext } from "../provider/ThemeProvider"

const Layout = () => {
      const { themes, dark } = useContext(ThemeContext);

      return (
            <>
                  <Navber/>
                  <main className='min-h-[calc(100vh-616.8px)]' style={{
                        background: dark ? themes.dark.background : themes.dark.color,
                        color: dark ? themes.light.background : themes.light.color
                  }}>
                        <Outlet></Outlet>
                  </main >
                  <Footer />
            </>
      )
}

export default Layout