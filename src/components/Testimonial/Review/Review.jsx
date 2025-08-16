

export const Review = () => {
    return (
        <>
            <div className='review py-8 px-6 mx-5 bg-white border border-gray-300 shadow-sm shadow-gray-300 rounded-xl dark:bg-slate-900 dark:border-gray-400'>
                <div className='flex items-center gap-4'>
                    <div className='size-10 rounded-full bg-gradient-to-bl from-indigo-400 to-blue-400 dark:from-indigo-600'></div>
                    <div>
                        <p className='font-medium'>Alex Johnson</p>
                        <p className='text-sm text-gray-400'>Product Designer</p>
                    </div>
                </div>
                <p className='mt-2.5 text-gray-600 dark:text-gray-400'>“This layout was super fun to clone with Tailwind. Loved practicing responsive grids and subtle shadows.”</p>
            </div>
        </>
    )
}
