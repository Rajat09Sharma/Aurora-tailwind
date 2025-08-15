

export const NavBar = () => {
    return (
        <>
            {/* mobile view */}
            <nav className="navbar flex justify-between items-center py-5 px-4 border-y border-gray-200 bg-white fixed right-0 top-0 left-0">
                <div className="left flex items-center gap-2.5">
                    <div className="logo h-8 w-8 rounded-lg bg-gradient-to-bl from-blue-400 via-purple-600 to-blue-400"></div>
                    <p className="font-bold">Aurora</p>
                </div>
                <div className="right flex justify-between items-center gap-4">
                    <button className="theme text-xs font-bold py-1 px-3 border rounded-2xl border-gray-200 bg-white">Light</button>
                    <div className="humburger space-y-0.5 py-3 px-2 border border-gray-200 rounded-xl">
                        <div className="line h-0.5 w-4 bg-black"></div>
                        <div className="line h-0.5 w-4 bg-black"></div>
                        <div className="line h-0.5 w-4  bg-black"></div>
                    </div>
                </div>

            </nav>
        </>
    )
}
