import React from 'react'
import { Review } from './Review/Review'

export const Testimonial = () => {
    return (
        <>
            <div id='Stories' className='py-8 mt-8 text-center md:scroll-mt-28 md:mx-16 md:mt-14'>
                <h2 className='font-bold text-2xl md:text-4xl'>Loved by builders</h2>
                <p className='mt-2.5 text-gray-600 dark:text-gray-400'>Recreate card layouts and avatar rows.</p>
                <div className='mt-10 text-left flex flex-col justify-center space-y-8 md:space-y-0 md:flex-row'>
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
        </>
    )
}
