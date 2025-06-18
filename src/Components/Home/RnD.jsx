import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../Title';
import KnowMore from '../KnowMore';

const RnD = () => {
    gsap.registerPlugin(ScrollTrigger);
    const imageRef = useRef(null);
    const curtainRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Content animation - staggered reveal
            gsap.from(contentRef.current.children, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

            // Curtain reveal animation
            gsap.fromTo(curtainRef.current,
                {
                    scaleX: 1,
                    transformOrigin: 'left center'
                },
                {
                    scaleX: 0,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Image scale animation (subtle zoom in as curtain reveals)
            gsap.fromTo(imageRef.current.querySelector('img'),
                {
                    scale: 1.1
                },
                {
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

        }, imageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='w-full h-screen items-stretch flex md:flex-row flex-col'
        style={{
            background: `radial-gradient(circle at 50% 50%, #5a9bb3, #367a99, #1f5a7d)`,
            perspective: '1000px',
          }}
          
        >
            {/* Left Content Section */}
            <div className='md:w-1/2 flex items-center justify-center px-8 md:px-16'>
                <div ref={contentRef} className='max-w-lg text-center space-y-8'>
                    {/* Title */}
                    <div>
                        <Title text={`Research & \n Development`} color='white' />
                        {/* <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'>
                            Research &<br />Development
                        </h2> */}
                        <div className='w-20 h-1 bg-white/60 mx-auto'></div>
                    </div>
                    
                    {/* Content */}
                    <div>
                        <p className='text-white/90 text-lg md:text-xl leading-relaxed font-light'>
                        R&D focus on developing
green sustainable solutions
through advanced green
chemistry principles and
cutting-edge research...
                        </p>
                    </div>
                    
                    {/* Button */}
                    <div className='bg-white w-fit mx-auto rounded-full'>
                        {/* <button className='bg-white rounded-full text-slate-900 px-8 py-4 font-semibold hover:bg-slate-100 transition-all duration-300 flex items-center space-x-3 mx-auto group'>
                            <span>R Innovation</span>
                            <svg 
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button> */}
                        <KnowMore link='/research_and_development' customColor='black'/>
                    </div>
                </div>
            </div>
            
            {/* Right Image Section with Curtain Animation */}
            <div className='md:w-1/2 relative overflow-hidden'>
                <div ref={imageRef} className='w-full h-full relative'>
                    <img 
                        src="./home/38.webp" 
                        className='w-full h-full object-cover' 
                        alt="Research and Development" 
                    />
                    
                    {/* Curtain overlay */}
                    <div 
                        ref={curtainRef}
                        className='absolute inset-0 bg-slate-900 z-10'
                        style={{
                            transformOrigin: 'left center'
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default RnD