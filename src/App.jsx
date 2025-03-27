import { Routes,Route } from "react-router-dom"
import Nav from "./components/Navigation/Navs"
import ServiceEsti from "./pages/ServiceEsti/ServiceEsti"
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail"
import Home from "./pages/Home/Home"
import Footer from "./pages/Footer/Footer"
import AboutUS from "./pages/About/AboutUs"
function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/Service" element={<ServiceEsti/>}/>
      <Route path="/ServiceDetail" element={<ServiceDetail/>}/>
    </Routes> 
    <Footer/>
    <AboutUS/>
    </>
  )
}

export default App
