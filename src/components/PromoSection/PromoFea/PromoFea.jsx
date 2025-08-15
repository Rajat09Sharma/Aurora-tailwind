import React from 'react'

export const PromoFea = ({icon,title,description}) => {
    return (
        <>
            <div className="flex gap-4">
                <span className="py-2 px-2 bg-violet-200 rounded-xl mt-1 size-fit">{icon}</span>

                <div className="">
                    <h4 className="font-medium">{title}</h4>
                    <p className='text-gray-600'>{description}</p>
                </div>
            </div>
        </>
    )
}
