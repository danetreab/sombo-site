import { Navigation } from '@/app/components/nav'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex flex-col lg:flex-row gap-10 min-h-screen px-4 mx-auto pb-36 md:py-36">
                <div className='pt-16 lg:pt-0'>
                    <div className='relative max-w-96 sm:w-96 h-96'>
                        <Image className='absolute object-cover top-0 left-0 rounded-lg' fill src='/og.jfif' alt='image of person' />
                    </div>
                </div>
                <div>
                    <h1 className="z-10 text-4xl text-transparent duration-200 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text ">
                        Ban Sambo
                    </h1>
                    <h2 className="text-sm text-zinc-500 ">
                        ...
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default About