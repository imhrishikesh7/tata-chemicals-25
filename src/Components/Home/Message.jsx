import Title from '../Title'
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KnowMore from '../KnowMore';

const Message = () => {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef = useRef(null);
    const messageRef = useRef(null);
    const imageRef = useRef(null);
    const textLinesRef = useRef([]);
    const [isImageHovered, setIsImageHovered] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered text line reveals
            gsap.set(textLinesRef.current, { 
                y: 60, 
                opacity: 0 
            });
            
            gsap.to(textLinesRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: messageRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                },
            });

            // Image container animation
            gsap.from(imageRef.current, {
                x: -80,
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToTextRefs = (el) => {
        if (el && !textLinesRef.current.includes(el)) {
            textLinesRef.current.push(el);
        }
    };

    return (
        <div 
            ref={containerRef}
            className='relative margina h-scree flex py-10 items-center bg-slate-900'
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-slate-800 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-slate-800 to-transparent opacity-30"></div>
            </div>

            <div className='container mx-auto px-8 relative z-10'>
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header */}
                    <div className="mb-16">
                        <Title text="CEO's Message" color='white' />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        
                        {/* CEO Image Section */}
                        <div className="lg:col-span-4">
                            <div 
                                ref={imageRef}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setIsImageHovered(true)}
                                onMouseLeave={() => setIsImageHovered(false)}
                            >
                                {/* Image container */}
                                <div className="relative overflow-hidden rounded-3xl bg-slate-800">
                                    <div className="aspect-[3/4] rounded-3xl relative">
                                        <img 
                                            src="./home/ceo.webp" 
                                            className={`w-full h-full rounded-3xl object-cover transition-all duration-500 ${
                                                isImageHovered ? 'scale-102' : 'scale-100'
                                            }`}
                                            alt="CEO R. Mukundan" 
                                        />
                                        
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                    </div>
                                </div>
                                
                                {/* CEO Info */}
                                <div className="mt-6 pl-4 border-l-2 border-slate-600">
                                    <h3 className="text-white text-xl font-bold mb-1">R. Mukundan</h3>
                                    <p className="text-slate-300 text-sm font-medium uppercase tracking-wide">
                                        Managing Director & CEO
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Message Content */}
                        <div ref={messageRef} className="lg:col-span-8">
                            <div className="space-y-8">
                                
                                {/* Quote */}
                                <div className="relative">
                                    {/* Opening Quote Icon */}
                                    <div className="absolute -top-6 -left-4 w-12 h-12 opacity-80">
                                        <img 
                                            src="./home/qt.webp" 
                                            alt="Quote start" 
                                            className="w-full h-full text-white"
                                        />
                                    </div>

                                    <blockquote className="space-y-6 p-8 ">
                                        <p 
                                            ref={addToTextRefs}
                                            className="text-white text-xl lg:text-2xl leading-relaxed font-light"
                                        >
                                            Safety remains our first priority and our efforts are to create a zero harm work place.
                                        </p>
                                        <p 
                                            ref={addToTextRefs}
                                            className="text-white text-xl lg:text-2xl leading-relaxed font-light"
                                        >
                                            Our focus on operational efficiencies and newly commissioned capacities is expected to contribute towards improved performance as well as delivering safe and sustainable growth.
                                        </p>
                                    </blockquote>

                                    {/* Closing Quote Icon */}
                                    <div className="absolute -bottom-2 -right-4 w-12 h-12 opacity-80">
                                        <img 
                                            src="./home/qt.webp" 
                                            alt="Quote end" 
                                            className="w-full h-full text-white rotate-180"
                                        />
                                    </div>
                                </div>

                                {/* CTA Section */}
                                <div 
                                    ref={addToTextRefs}
                                    className="flex items-center justify-between pt-12 border-t border-slate-700"
                                >
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">
                                            Read Full Message
                                        </p>
                                        <p className="text-white text-lg font-medium">
                                            Complete CEO's Vision & Strategy
                                        </p>
                                    </div>
                                    
                                    <div className="group">
                                        <button className="  px-8 py-4 font-semibold  transition-all duration-300 flex items-center space-x-3 group">
                                            <span>
                                                <KnowMore link={"/ceos_message"}/>
                                            </span>
                                            <svg 
                                                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message