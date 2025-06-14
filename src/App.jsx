import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import "./App.css"
//Corporate Overview
import BOD from './Pages/CorporateOverview/BOD'
import AboutChemicals from './Pages/CorporateOverview/AboutChemicals'
import Performance from './Pages/CorporateOverview/Performance'
import CEO from './Pages/CorporateOverview/CEO'
import Saftey from './Pages/CorporateOverview/Saftey'
//Our Buisiness
import BasicChemistry from './Pages/OurBusiness/BasicChemistry';
import SpecialtyProducts from './Pages/OurBusiness/SpecialtyProducts';
//Value Creation Approach
import A360Degree from './Pages/ValueCreationApproach/A360Degree';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Corporate Overview */}
            <Route path="/board_of_directors" element={<BOD />} />
            <Route path="/about_tata_chemicals" element={<AboutChemicals />} />
            <Route path="/performance_review" element={<Performance />} />
            <Route path="/ceos_message" element={<CEO />} />
            <Route path="/safety_at_the_core" element={<Saftey />} />
            {/* Our Business */}
            <Route path="/basic_chemistry_business" element={<BasicChemistry />} />
            <Route path="/speciality_product_business" element={<SpecialtyProducts />} />
            {/* Value Creation Approach */}
            <Route path="/" element={<A360Degree />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
