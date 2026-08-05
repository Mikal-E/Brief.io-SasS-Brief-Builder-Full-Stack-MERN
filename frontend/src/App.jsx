import { Routes, Route, useLocation } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Pricing from "./pages/Pricing/Pricing"
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"

/* Utilized useLocation, const location, const hideNavFooter  */

function App() {

  const location = useLocation()
  const hideNavFooter = ["/login", "/register"].includes(location.pathname)

  return (

    <>

      {!hideNavFooter && <Nav />}

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/pricing" element={ <Pricing /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Registration /> } />

      </Routes>

      {!hideNavFooter && <Footer />}

    </>

  )

}

export default App