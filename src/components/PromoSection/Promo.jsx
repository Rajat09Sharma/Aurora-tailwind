
import { PromoFea } from "./PromoFea/PromoFea";

import { ImPower } from "react-icons/im";
import { FiShield } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { Wideget } from "./Wideget/Wideget";


export const Promo = () => {
    return (
        <div className="flex flex-col justify-center py-6 md:mt-14 md:mx-16 md:flex-row md:justify-between">
            <div className="left py-3 px-5 md:w-2/3">
                <h2 className="font-bold text-2xl md:text-4xl">Everything you need to ship faster</h2>
                <p className="mt-3 text-gray-600 md:w-3/4">Practice building a real layout with semantic sections, utility classes, and responsive tweaks.</p>

                <div className="promo-fea mt-7 space-y-2.5">
                    <PromoFea icon={<ImPower />} title={"Lightning fast"} description={"Optimize spacing & sizing using Tailwind scale."} />
                    <PromoFea icon={<FiShield />} title={"Secure by default"} description={"Experiment with borders, rings, and focus states."} />
                    <PromoFea icon={<FaRegStar />} title={"Polished UI"} description={"Play with rounded, shadows, and hover transitions."} />
                </div>
            </div>

            <div className="widget-container right py-5 px-3 mx-5 mt-8 bg-white border border-gray-300 rounded-lg space-y-3 shadow-lg shadow-gray-400 md:w-3/7 md:items-center md:mt-0 ">
                <Wideget />
                <Wideget />
                <Wideget />
            </div>

        </div>
    )
}
