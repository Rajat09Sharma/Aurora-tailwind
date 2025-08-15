
import { PiStarFour } from "react-icons/pi";
import { BsArrowRightShort } from "react-icons/bs";
import { HeroFea } from "./HeroFea/HeroFea";

export const HerroSection = () => {
    return (
        <div className="mt-12 py-10 md:mt-4">
            <div className="main-head flex flex-col items-center py-16 px-6 space-y-4 md:space-y-6  ">
                <p className="border border-gray-200 rounded-2xl text-sm py-1 px-3 flex gap-2 items-center font-light md:text-md">
                    <PiStarFour />New: AI automations
                </p>

                <h1 className="text-3xl w-10/12 text-center font-bold md:text-6xl md:font-extrabold">Design faster with <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">Tailwind UI</span></h1>

                <p className="text-center text-gray-600">A beautiful, modern SaaS template. Perfect for practicing Tailwind spacing, grid, dark mode, and subtle animations.</p>

                <div className="actions flex  justify-between gap-3.5 mt-2.5">
                    <button className="flex items-center justify-between border border-gray-300 rounded-2xl py-3 px-5 cursor-pointer bg-indigo-600 text-white font-extralight transition duration-150 ease-in hover:bg-indigo-700 ">Start free <BsArrowRightShort size={20} /></button>
                    <button className=" border border-gray-300 rounded-2xl py-3 px-5 cursor-pointer font-extralight transition duration-150 ease-in hover:bg-gray-200 hover:text-black">See features</button>
                </div>
            </div>

            <div className="flex justify-center flex-col items-center my-3 space-y-3 md:flex-row md:mx-20 md:justify-arround md:items-center md:space-x-5 md:space-y-0">
                <HeroFea title={"Analytics"} />
                <HeroFea title={"Automations"} />
                <HeroFea title={"Security"} />
            </div>

        </div>
    )
}
