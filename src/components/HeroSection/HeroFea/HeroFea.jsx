

export const HeroFea = ({ title }) => {
    return (
        <div className="card bg-white w-11/12 border-2 border-gray-200 rounded-xl py-5 px-4 md:w-1/4">
            <div className="flex justify-between items-center">
                <p className="font-medium">{title}</p>
                <div className="h-8 w-8 rounded-lg bg-gradient-to-bl from-blue-400 to-blue-400"></div>
            </div>
            <p className="mt-2 font-light text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna.</p>
        </div>
    )
}
