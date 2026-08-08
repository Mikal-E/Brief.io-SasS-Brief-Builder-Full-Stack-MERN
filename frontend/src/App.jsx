import { Routes, Route, useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Pricing from "./pages/Pricing/Pricing"
import Contact from "./pages/Contact/Contact"
import Login from "./pages/Login/Login"
import Registration from "./pages/Registration/Registration"
import Landing from "./pages/Landing/Landing"
import DashboardLayout from "./pages/Dashboard/DashboardLayout"
import CampaignBriefBuilder from "../../frontend/src/components/CampaignBriefBuilder/CampaignBriefBuilder"
import Briefs from "./pages/Dashboard/Briefs/Briefs"
import Team from "./pages/Dashboard/Team/Team"
import Activities from "./pages/Dashboard/Activities/Activities";
import NotFound from "./pages/NotFound/NotFound"
import ResetToTopOnNavigate from "./components/ResetToTopOnNavigate/ResetToTopOnNavigate"

/* Utilized useLocation, const location, const hideNavFooter  */

function App() {

  const location = useLocation()
  const isNotFound = !["/", "/pricing", "/contact", "/login", "/register", "/try-brief-builder"].includes(location.pathname) 
  && !location.pathname.startsWith("/dashboard")
  const hideNavFooter = ["/login", "/register", "/try-brief-builder"].includes(location.pathname) || location.pathname.startsWith("/dashboard")

  return (

    <>

      <ResetToTopOnNavigate />
      
      {!hideNavFooter && <Nav solidBackground={isNotFound} />}


      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/pricing" element={ <Pricing /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Registration /> } />
        <Route path="/try-brief-builder" element={ <Landing /> } />
        
        <Route path="/dashboard" element={ <DashboardLayout /> }>

            <Route index element={<Navigate to="briefs" replace />} />
            <Route path="briefs" element={ <Briefs /> } />
            <Route path="team" element={ <Team /> } />
            <Route path="activities" element={<Activities />} />
            <Route path="brief-builder" element={ <CampaignBriefBuilder /> } />

        </Route>

      <Route path="*" element={ <NotFound /> } />
      </Routes>

      {!hideNavFooter && <Footer />}

    </>

  )

}

export default App