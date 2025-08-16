import React from 'react'

export const PromoFea = ({icon,title,description}) => {
    return (
        <>
            <div className="flex gap-4">
                <span className="py-2 px-2 bg-violet-200 rounded-xl mt-1 size-fit dark:bg-violet-400">{icon}</span>

                <div className="">
                    <h4 className="font-medium">{title}</h4>
                    <p className='text-gray-600 dark:text-gray-400'>{description}</p>
                </div>
            </div>
        </>
    )
}
