import { useEffect, useState } from "react"
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { HerroSection } from "./components/HeroSection/HerroSection"
import { NavBar } from "./components/Navbar/NavBar"
import { Price } from "./components/PriceSection/Price"
import { Features } from "./components/PromoSection/Features"

import { Testimonial } from "./components/Testimonial/Testimonial"


function App() {

  const initial = localStorage.getItem("theme") === "true";

  const [dark, setDark] = useState(initial);

  const handleThemeToggle = () => {
    setDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme); // stores "true" or "false" as string
      return newTheme;
    });
  };
  
  useEffect(() => {

    if (dark) {
      document.documentElement.classList.add("dark"); // apply dark mode globally
      document.documentElement.classList.add(
        "bg-gradient-to-b",
        "from-slate-900",
        "to-slate-950"
      );
      document.documentElement.classList.remove("bg-white"); // remove light mode bg if any
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove(
        "bg-gradient-to-b",
        "from-slate-900",
        "to-slate-950"
      );
      document.documentElement.classList.add("bg-white");
    }
  }, [dark]);

  return (
    <div className={dark == "dark" ? "dark " : ""}>
      <NavBar dark={dark == "dark"} onDark={handleThemeToggle} />
      <div className="bg-[#f9fafc] dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 dark:text-white">
        <HerroSection />
        <Features />
        <Price />
        <Testimonial />
        <Faq />
      </div>
      <Footer />
    </div>
  )
}

export default App
