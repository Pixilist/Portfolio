import { useEffect, useRef } from 'react'
import { PROFILE } from '../constants'
import { RiArrowRightUpLine } from '@remixicon/react'
import nic from "../assets/Nic.jpg"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out", duration: 0.6},
            });

            tl.from(".hero-title", {
                opacity: 0,
                y: -50,
                scale: 0.95,
                duration: 0.5,
                stagger: 0.15,
            })
            .from(
               ".hero-subheading",{
                y: 50,
                scale: 0.95,
                duration: 0.9,

               },
               "-= 0.4", 
            )
            .from(
                ".hero-text",{
                    opacity: 0,
                    y: 30,
                    duration: 0.7,

                },
                "-=0.4",
            )
            .from(
                ".hero-btn",{
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.7,
                },
                "-=0.3",
            )
            .from(
                ".hero-img",{
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    duration: 0.8,
                    stagger: 0.2,
                },
                "-=0.5",
            )
            .from(
                ".about-title",{
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    duration: 0.5,
                    delay: 0,
                },
            )
            .from(
                ".about-text",{
                    opacity: 0,
                    y: 100,
                    scale: 0.9,
                    duration: 0.5,
                    delay: 0,
                }
            );
        
        }, heroRef)

        return () => ctx.revert()
    }, [])


  return (
    <section className="flex-col lg:flex-row items-center justify-center gap-1 lg:gap-1 max-w-screen-lg mx-auto " ref={heroRef}>
        <div className="lg:flex-row flex flex-col items-center justify-between gap-4 mt-12">
            {/* Text container */}
            <div className="flex flex-col mt-8 lg:mt-20">
                <h1 className="hero-title text-5xl lg:text-7xl mt-10 text-left px-8">{PROFILE.name}</h1>
                <h2 className="hero-title text-1xl lg:text-2xl mt text-left px-8">{PROFILE.igname}</h2>
                <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-pnurple-300 bg-clip-text text-left text-xl lg:text-3xl tracking-tighter text-transparent px-8">{PROFILE.role}</h2>
                
                {/* Subheading below the titles */}
                <p className="hero-text max-w-3xl p-2 text-xl text-md tracking-tighter lg:text-xl mt-4 px-8 font-thin">{PROFILE.subheading}</p>

                {/* Resume Button */}
                <div className="flex justify-center mt-2">
                <a href='/Nic_Resume.pdf' target='_blank' rel="noopener norefferrer" download className='hero-btn mb flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter'>
                    Download Resume
                    <RiArrowRightUpLine />
                </a>
                </div>
            </div>

            {/* Image to the right */}
            <div className="hero-img mt-6 px-2">
                <img src={nic} alt={PROFILE.name} className="w-80 h-80 rounded-3xl border border-purple-300/20 p-1 object-cover mt-12" />
            </div>
    </div>

    </section>
  )
}

export default Hero