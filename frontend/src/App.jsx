import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Pricing from "./pages/Pricing/Pricing"
import Contact from "./pages/Contact/Contact"


function App() {

  return (

    <>

      <Nav />

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/pricing" element={ <Pricing /> } />
        <Route path="/contact" element={ <Contact /> } />

      </Routes>

      <Footer />

    </>

  )

}

export default App