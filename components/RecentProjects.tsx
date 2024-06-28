import { projects } from '@/data'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
    return (
        <div className='py-20'>
            <h1 className="heading">
                Ma Bolo {' '}
                <span className="text-purple">Them</span>
            </h1>

            {/* div to show our project card */}

            <div className="flex flex-wrap items-center justify-center p-4 gap-16 text-lg">
                {projects.map(({ id, title, des, img, iconLists, link }) => (

                    <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center sm:w-96 w-[80vw]  justify-center">
                        <PinContainer title={title} href={link}>
                            <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10]'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg-image" />

                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0' />

                            </div>

                            <h1 className="font-bold my-3 lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon) => (
                                        <div key={icon} className="border border-white/[10.2] rounded-full">
                                            <img src={icon} alt={icon} classsName="p-2" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </PinContainer>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default RecentProjects
