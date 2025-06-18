import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: true
                    }));
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Smooth scroll utility function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />
                <div className="relative container mx-auto px-6 py-20">
                    <div
                        id="hero-title"
                        data-animate
                        className={`transition-all duration-1000 transform ${isVisible['hero-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-6">
                            Technology
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-[#432c87]'>
                                Recent advancements in Artificial Intelligence (AI) and Machine Learning (ML) over the past years
                                have revolutionised the technology landscape. Generative AI is emerging as a transformative
                                force and is fundamentally different from the previous waves of technology disruption.
                            </p>
                        </div>
                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('key')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] m-semi-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Key Developments
                            </button>
                            <button
                                onClick={() => scrollToSection('products')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] m-semi-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Innovative Products, Harnessing Green Chemistry
                            </button>
                            <button
                                onClick={() => scrollToSection('way')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] m-semi-bold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Way Forward
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className='mt-5'>
                            <p className='text-xl'>
                                Tata Chemicals is leveraging advanced AI/
                                ML technologies to drive tangible value
                                across operations, with a strong focus on
                                process optimisation, equipment reliability
                                and data-driven decision-making.
                                <br />
                                <br />
                                We apply AI/ML-powered process
                                optimisation models that deliver
                                measurable operational efficiencies—
                                enhancing quality, increasing throughput
                                and reducing process variability in key
                                production systems. These intelligent
                                systems act as virtual process twins,
                                enabling more precise control and
                                continuous improvement.
                                <br />
                                <br />
                                In the domain of asset reliability
                                and operational resilience, we have
                                implemented AI-enabled health
                                monitoring solutions. These help in
                                anticipating and mitigating equipment
                                failures, thereby improving uptime and
                                operational continuity. This approach
                                integrates automated threat detection,
                                real-time intelligence and advanced
                                security controls to safeguard digital assets
                                and ensure business continuity.
                                <br />
                                <br />
                                Recognising that AI performance depends
                                on data maturity, we have adopted a
                                structured framework to align our data
                                strategy with business outcomes. This
                                includes improved data governance, real-time analytics and the development
                                of high-quality data pipelines to support
                                faster decision-making and responsiveness
                                to market dynamics.
                                <br />
                                <br />
                                In FY25, we initiated the establishment
                                of a Centre of Excellence (CoE) for AI and
                                Digital, with a planned launch in FY26. The
                                CoE will focus on capability development,
                                innovation and internal talent
                                enhancement, supporting the scalability of
                                technology-led initiatives. It will also drive
                                the adoption of Digital Value Acceleration
                                (DVA) programmes and integrate advanced
                                capabilities such as tri-axial vibration
                                analytics to strengthen predictive insights
                                and operational efficiency.
                            </p>
                        </div>
                        <motion.div className='bg-[#dbe9fe] p-3 rounded-tr-[60px] mt-10'
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <img src="Function/Technology/India15.webp" alt=""
                                className='rounded-tr-[50px]' />
                        </motion.div>
                        <div className='mt-10'>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] text-center">
                                Our security strategy
                            </h1>
                            <img src="Function/Technology/42.webp" alt="" className='mt-5' />
                        </div>
                        <div className='mt-10'>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] text-center">
                                Adopting Advanced Technologies
                            </h1>
                            <img src="Function/Technology/41 copy.webp" alt="" className='mt-5'/>
                        </div>
                        <div className='mt-10'>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] text-center">
                                Operational Benefits
                            </h1>
                            <img src="Function/Technology/Operational_Benefits.webp" alt="" className='mt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;