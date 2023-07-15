'use client'

import { Navigation } from '@/app/components/nav'
import { Link as LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const initialState = { name: '', from: '', message: '' }


const About = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [mailInfo, setMailInfo] = useState(initialState)
    const [isDisable, setIsDisable] = useState(false)
    const [mailState, setMailState] = useState({ message: '' })

    const postMail = async () => {
        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mailInfo)
        })

        return res.json()
    }

    const handleSubmitMail = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!isDisable) {
            setIsDisable(true)
            setIsLoading(false)
            const res = await postMail()
            setMailState(res)
            setIsLoading(false)
            setTimeout(() => {
                setIsDisable(false);
            }, 5000);
        }
        console.log(mailState)
    }

    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container  min-h-screen mx-auto ">
                <div className='flex flex-col lg:flex-row gap-10 px-4 md:pt-36'>

                    <div className='pt-24 lg:pt-0'>
                        <div className='relative max-w-96 sm:w-96 h-96'>
                            <Image className='absolute object-cover top-0 left-0 rounded-lg border-2 border-white' fill src='/og.jfif' alt='image of person' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className="z-10 text-4xl h-16 md:h-32 text-transparent duration-200 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text ">
                            Ban Sambo
                        </h1>
                        <h2 className="text-sm text-zinc-500 ">
                            Hello, I'm Ban Sambo, currently employed at Acleda Plc Bank in Phnom Penh City. Additionally,
                            I am pursuing a management information system degree at Setec Institute, also located in Phnom Penh.
                            I have a passion for sharing my knowledge in programming, coding, and design, and I'm always available to answer any questions. Please feel free to contact me anytime.
                        </h2>
                        <h2 className="text-2xl italic font-display text-zinc-500 flex flex-row gap-2 items-center my-4 md:mt-auto justify-self-end">
                            <LinkIcon size={18} />
                            <Link
                                href="/contact"
                                className="underline duration-500 hover:text-zinc-300"
                            >
                                contact
                            </Link>
                        </h2>
                    </div>
                </div>
                <div className='px-4 py-10'>
                    <h1 className="z-10 text-4xl h-16 md:h-24 mt-6 md:mt-10 text-transparent duration-200 bg-white cursor-default text-edge-outline font-display md:text-6xl whitespace-nowrap bg-clip-text ">
                        Send a Message
                    </h1>
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleSubmitMail}
                    >
                        <div className="flex gap-6 flex-col md:flex-row">
                            <input
                                onChange={(e) => setMailInfo(prev => ({ ...prev, name: e.target.value }))}
                                placeholder="Your name"
                                value={mailInfo.name}
                                type="text"
                                className="border-2 outline-none text-2xl p-4 font-semibold w-full"
                            />
                            <input
                                onChange={(e) => setMailInfo(prev => ({ ...prev, from: e.target.value }))}
                                placeholder="Email"
                                value={mailInfo.from}
                                type="email"
                                className="border-2 outline-none text-2xl p-4 font-semibold w-full"
                            />
                        </div>
                        <textarea
                            onChange={(e) => setMailInfo(prev => ({ ...prev, message: e.target.value }))}
                            name="message"
                            cols={20}
                            rows={5}
                            placeholder="Message"
                            value={mailInfo.message}
                            className="border-2 outline-none text-2xl p-4 font-semibold w-full resize-none"
                        />
                        <p className='text-sm text-zinc-500'>{isLoading ? 'Sending Mail' : mailState?.message}</p>
                        <div className="flex gap-6">
                            <button className="text-2xl italic font-display text-zinc-500 hover:text-white duration-200" type='submit'>Send</button>
                            <button className="text-2xl italic font-display text-zinc-500 hover:text-white duration-200" onClick={(e) => { e.preventDefault(); setMailInfo({ ...initialState }) }}>Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default About