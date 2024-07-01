import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCard'
import { companies, testimonials } from '@/data'

const Customers = () => {
    return (
        <div className='py-20' id="projects">
            <h1 className="heading">
                Kind words  {' '}
                <span className="text-purple">From our students</span>
            </h1>

            {/* div to show our project card */}

            <div className="flex flex-col items-center lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'

                />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mx-lg:mt-10">
                {companies.map(({ id, img, name, nameImg }) => (
                    <div key={id} className="flex md:max-w-60 max-32 gap-2">
                        <img src={img} alt={img} className='md:w-10 w-5' />
                        <img src={nameImg} alt={name} className='md:w-24 w-28' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Customers
