import { RiLinkedinBoxFill, RiTwitterFill } from '@remixicon/react'
import { RiGithubFill } from '@remixicon/react'
import { RiYoutubeFill } from '@remixicon/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from "gsap"
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)
console.log("here")
const Contact = () => {
    const contactRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-text", {
                opacity: 1, 
                y: 30,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                    once: false,

                }
            })
            gsap.from(".contact-icon", {
                opacity: 1, 
                y: 20,
                duration: 1,
                ease: "power3.out",
                stagger: 0.4,
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    once: false,

                }
            })
        }, contactRef)

        return () => ctx.revert()
    }, [])
  return (
    <section id='contact' className='py-16' ref={contactRef}>
        <div className='px-4 text-center'>
            <h2 className='contact-text mb-8 text-3xl font-medium lg:text-4xl'>Contact Me</h2>
            <p className='contact-text mb-4 text-lg lg:text-xl py-4'>
                (508)-530-1951
            </p>
            <p className='mb-4 text-lg lg:text-xl'>
                Email: {" "}
                <a href="mailto:ndesprez@umassd.edu" className='border-b'>
                    ndesprez@umassd.edu
                </a>
            </p>
            <div className='mt-8 flex justify-center space-x-6'>
                <a href="https://linkedin.com/in/nicolas-desprez-629782249" target="_blank" rel='noopener noreferrer' className='contact-icon' aria-label='Visit my LinkedIn profile'>
                    <RiLinkedinBoxFill className='text-3xl'/>
                </a>
                {/* <a href="" target="_blank" rel='noopener noreferrer' className='contact-icon' aria-label='Visit my Github'>
                    <RiGithubFill className='text-3xl'/>
                </a> */}
                <a href="https://x.com/PixilVal" target="_blank" rel='noopener noreferrer' className='contact-icon' aria-label='Visit my X/Twitter profile'>
                    <RiTwitterFill className='text-3xl'/>
                </a>
                <a href="https://www.youtube.com/@NicDPixilist" target="_blank" rel='noopener noreferrer' className='contact-icon' aria-label='Visit my Youtube profile'>
                    <RiYoutubeFill className='text-3xl'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Contact