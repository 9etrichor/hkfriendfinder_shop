//import components
import HeaderNav from "./components/HeaderNav"
import Footer from "./components/Footer"
import AboutProduct from "./pages/AboutProduct"
import PaymentDetail from "./pages/PaymentDetail"


//import pages
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import CommonQA from "./pages/CommonQA"
import Payment from "./pages/Payment"

import { Routes, Route } from "react-router"

function App() {
  return (
    <div className="px-0 pt-20  box-border">
      <HeaderNav />
      <Routes className="w-full">
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="commonqa" element={<CommonQA />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment/:paymethod" element={<PaymentDetail />} />
        <Route path="product/:pname" element={<AboutProduct />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
