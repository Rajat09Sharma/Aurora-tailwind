

export const Footer = () => {
    return (
        <div className="py-8 mt-8 mx-5 space-y-8 bg-white md:mx-16">
            <div className="space-y-8  md:flex md:justify-between md:mx-16">
                <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                        <div className="logo h-8 w-8 rounded-lg bg-gradient-to-bl from-blue-400 via-purple-600 to-blue-400"></div>
                        <p className="font-bold text-lg cursor-pointer">Aurora</p>
                    </div>
                    <p>A clone-ready Tailwind template.</p>
                </div>

                <div className="space-y-2">
                    <h4 className="font-medium text-lg">Product</h4>
                    <p className="text-sm text-gray-600 transition duration-75 ease-out hover:underline hover:text-gray-400 cursor-pointer"> Features</p>
                    <p className="text-sm text-gray-600 transition duration-75 ease-out hover:underline hover:text-gray-400 cursor-pointer">Pricing</p>
                </div>

                <div className="space-y-2">
                    <h4 className="font-medium text-lg">Company</h4>
                    <p className="text-sm text-gray-600 transition duration-75 ease-out hover:underline hover:text-gray-400 cursor-pointer"> About</p>
                    <p className="text-sm text-gray-600 transition duration-75 ease-out hover:underline hover:text-gray-400 cursor-pointer">Careers</p>
                </div>

                <div className="space-y-2">
                    <h4 className="font-medium text-lg">Legal</h4>
                    <p className="text-sm text-gray-600 transition duration-75 ease-out hover:underline hover:text-gray-400 cursor-pointer"> Privacy</p>
                    <p className="text-sm text-gray-600 transition duration-75 ease-out hover:underline hover:text-gray-400 cursor-pointer">Terms</p>
                </div>

            </div>
            <p className="font-light text-gray-600 md:text-center">© {new Date().getFullYear()} Aurora -by RAJAT</p>
        </div>
    )
}
