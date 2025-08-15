import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { HerroSection } from "./components/HeroSection/HerroSection"
import { NavBar } from "./components/Navbar/NavBar"
import { Price } from "./components/PriceSection/Price"
import { Promo } from "./components/PromoSection/Promo"
import { Testimonial } from "./components/Testimonial/Testimonial"


function App() {

  return (
    <>
      <NavBar />
      <div className="bg-[#f9fafc]">
        <HerroSection />
        <Promo />
        <Price />
        <Testimonial />
        <Faq />
      </div>
      <Footer />
    </>
  )
}

export default App
