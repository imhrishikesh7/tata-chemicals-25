import Title from '../Title'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KnowMore from '../KnowMore';


const Message = () => {
    gsap.registerPlugin(ScrollTrigger);
    const messageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(messageRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: messageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        }, messageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className='marginal'>
            <div className='text-center my-6'>
                <Title text="CEO's Message" />
                <div className='flex md:flex-row items-stretch flex-col md:justify-center gap-10'>
                    <div className='md:w-[30%] rounded-4xl  overflow-hidden'>
                        <img src="/home/ceo.webp" className='border' alt="" />
                    </div>
                    <div
                        ref={messageRef}
                        className="md:w-[60%] border rounded-4xl p-8 text-left text-3xl relative overflow-hidden text-white"
                        style={{
                            background: `linear-gradient(135deg, #1e3c72, #2a5298)`,
                        }}
                    >
                        <p className="mb-8 leading-snug">
                            Safety remains our first priority and our efforts are to create a zero harm work
                            place. Our focus on operational efficiencies and newly commissioned capacities is
                            expected to contribute towards improved performance as well as delivering safe and
                            sustainable growth.
                        </p>
                        <div className="w-full flex md:flex-row flex-col gap-10 items-center">
                            <div>
                                <p className="text-lg font-bold">R. Mukundan</p>
                                <p className="text-lg">Managing Director & CEO</p>
                            </div>
                            <KnowMore
                            text="Read More"
                            link="/ceos_message"
                        />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Message