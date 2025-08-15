

import { PricePack } from "./PricePack/PricePack";

export const Price = () => {
    return (
        <>
            <div className='mt-8 py-16 px-5 text-center md:mt-14 md:mx-16'>
                <h2 className='text-2xl font-bold md:text-4xl'>Simple, transparent pricing</h2>
                <p className='mt-2.5 text-gray-600'>Pick a card to practice hover, focus, and ring utilities.</p>
                <div className='flex flex-col justify-center space-y-8  mt-10 text-left md:flex-row md:justify-between md:space-y-0 md:gap-14'>
                    <PricePack title="Starter" price="$0" contnent={["1 project", "Community support", "Basic analytics"]} />
                    <PricePack title={"Pro"} price={"$19"} contnent={["Unlimited projects", "Priority support", "Advanced analytics"]} active={" border-indigo-300 bg-indigo-50/50"} />
                    <PricePack title={"Team"} price={"$49"} contnent={["Up to 10 seats", "SAML SSO", "Audit logs"]} />
                </div>
            </div>
        </>
    )
}
