import { useRef } from 'react'
import { TESTIMONIAL } from '../constants'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from "gsap"
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
    const testimonialRef = useRef(null)

    useEffect(() => {
        console.log("here")
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-img", {
                opacity: 0, 
                y: 50,
                duration: 1,
                ease: "power3.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger: testimonialRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",

                }
            })
            gsap.from(".testimonial-quote", {
                opacity: 0, 
                y: 30,
                duration: 1,
                ease: "power3.out",
                delay: 0.4,
                scrollTrigger: {
                    trigger: testimonialRef.current,
                    start: "top 60%",
                    toggleActions: "play none none none",

                }
            })
            gsap.from(".testimonial-info", {
                opacity: 0, 
                y: 20,
                duration: 1,
                ease: "power3.out",
                delay: 0.4,
                scrollTrigger: {
                    trigger: testimonialRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                    once: false,

                }
            })
        }, testimonialRef)

        return () => ctx.revert()
    }, [])
  return (
    <section className='py-16' id='testimonial' ref={testimonialRef}>
        <h2 className='mb-8 text-center text-3xl font-medium lg:text-4xl'>
            Testimonials
        </h2>
        <div className='px-4'>
            <div className='flex flex-col items-center text-center'>
                <img src={TESTIMONIAL.image} alt ={TESTIMONIAL.name} className='testimonial-img mb-6 h-24 w-24 rounded-full border-4 object-cover'/>
                <blockquote className='testimonial-quote max-w-xl text-lg leading-relaxed lg:text-2xl font-thin'>
                    &quot;{TESTIMONIAL.quote}&quot;
                </blockquote>
                <div className='testimonial-info mt-4 text-lg'>
                    <p>{TESTIMONIAL.name}</p>
                    <p className='text-sm'>{TESTIMONIAL.title}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials