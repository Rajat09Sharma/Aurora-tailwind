
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const NavLinks = ["Features", "Pricing", "Stories", "FAQ"];

export const NavBar = () => {

    const [showLinks, setShowLinks] = useState(false);

    const handleToggler = () => {
        setShowLinks((prevs) => !prevs);
    }

    return (
        <>
            {/* mobile view */}
            <nav className="navbar flex justify-between items-center py-5 px-4 border-y border-gray-200 bg-white fixed right-0 top-0 left-0">
                <div className="left flex items-center gap-2.5">
                    <div className="logo h-8 w-8 rounded-lg bg-gradient-to-bl from-blue-400 via-purple-600 to-blue-400"></div>
                    <p className="font-bold cursor-pointer">Aurora</p>
                </div>
                <div className="hidden md:flex md:justify-between md:w-1/4">
                    {NavLinks.map((link, index) => <a key={index} href={`#${link}`} className="text-md text-gray-600 hover:text-violet-500" >{link}</a>)}
                </div>
                <div className="right flex justify-between items-center gap-4">
                    <button className="theme text-xs font-bold py-1 px-3 border rounded-2xl border-gray-200 bg-white cursor-pointer">Light</button>

                    <button className="hidden md:flex md:items-center md:gap-1.5 md:bg-indigo-600 md:py-2 md:text-white md:px-4 md:rounded-full md:font-medium md:shadow-md hover:md:shadow-gray-400 md:cursor-pointer">Get started<span><FiArrowRight /></span></button>

                    {showLinks ? <div className="humburger py-3 px-2 text-xl cursor-pointer relative md:hidden" onClick={handleToggler} >
                        <div className="line h-0.5 w-4 bg-black rotate-45 absolute left-0"></div>
                        <div className="line h-0.5 w-4  bg-black -rotate-45 absolute left-0"></div>
                    </div> : <div className="humburger space-y-0.5 py-3 px-2 border border-gray-200 rounded-xl cursor-pointer md:hidden" onClick={handleToggler} >
                        <div className="line h-0.5 w-4 bg-black"></div>
                        <div className="line h-0.5 w-4 bg-black"></div>
                        <div className="line h-0.5 w-4  bg-black"></div>
                    </div>}
                </div>
            </nav>
            {showLinks && <div className="flex flex-col bg-white top-full left-0 mt-24 w-full space-y-5 pt-3 pb-0 px-4 md:hidden">
                {NavLinks.map((link, index) => <a key={index} href={`#${link}`} className="text-md text-gray-600 hover:text-violet-500" >{link}</a>)}
            </div>}

        </>
    )
}
