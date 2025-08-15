
import { GrFormCheckmark } from "react-icons/gr";


export const PricePack = ({ title, price, contnent, active }) => {

    let css = "price-pack py-8 px-6 border border-gray-400 space-y-4 rounded-xl shadow-lg shadow-gray-600 md:w-1/3 ";
    let btn = "mt-3 py-2 px-12 border border-gray-400 font-medium w-full rounded-xl ";
    if (active) {
        css += active;
        btn += " bg-indigo-600 text-white";
    } else {
        css += " bg-white"
    }

    return (
        <>
            <div className={css}>
                <div className="flex justify-between items-center">
                    <p className='font-medium text-lg'>{title}</p>
                    {active && <span className="text-white rounded-xl py-1 px-3 text-xs bg-indigo-600">Popular</span>}
                </div>
                <h2 className='font-bold text-2xl'>{price}<span className='font-semibold text-[16px] text-gray-600'>/mo</span></h2>
                <ul className="space-y-2">
                    {contnent.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center gap-2"><span><GrFormCheckmark /></span>{item}</li>
                        )
                    })}
                </ul>
                <button className={btn}>Choose Starter</button>
            </div>
        </>
    )
}
