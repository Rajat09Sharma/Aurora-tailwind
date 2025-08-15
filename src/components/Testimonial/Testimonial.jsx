import React from 'react'
import { Review } from './Review/Review'

export const Testimonial = () => {
    return (
        <>
            <div className='py-16 mt-8 text-center md:mx-16'>
                <h2 className='font-bold text-2xl md:text-4xl'>Loved by builders</h2>
                <p className='mt-2.5 text-gray-600'>Recreate card layouts and avatar rows.</p>
                <div className='mt-10 text-left flex flex-col justify-center space-y-8 md:space-y-0 md:flex-row'>
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </>
    )
}
