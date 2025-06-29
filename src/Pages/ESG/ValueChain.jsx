import React, { useState, useEffect } from 'react';
import TopSection from '../../Components/TopSection';

const ValueChain = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
           const [activeTab, setActiveTab] = useState('');

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
            <TopSection
                title="Value Chain Partners"
                subtitle="Relationships with suppliers, logistics partners and other stakeholders are critical for maintaining a resilient and efficient supply chain. Our Supply chain strategy focuses on procurement optimisation, logistics efficiency, robust supplier relationships, community engagement and sustainability initiatives."
                activeTab={activeTab}
                onTabClick={scrollToSection}
                isVisible={isVisible}
            />


            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    id="message-section"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['message-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className='mb-4 w-fit'>
                            <div>
                                <img src="./ESG/icon_2.webp" alt="" className='w-16 h-16' />
                            </div>
                            <div className='w-full h-[1px] my-4 bg-[#2368b3] relative'>
                                <div className='absolute bg-red-600 h-[3px] w-[80px]'></div>
                            </div>
                            <h3 className='font-[900] text-2xl mb-2 text-[#2368b3]'>
                                Supplier Engagement and
                                Relationship Management
                            </h3>
                            <p className='text-xl mb-4'>
                                Maintaining good relationships with
                                suppliers is vital for a resilient and efficient
                                supply chain. We conduct regular supplier
                                visits and engagement programmes to
                                promote strong partnerships and gain
                                relevant insights into evolving market
                                dynamics. Supplier satisfaction surveys,
                                conducted biennially through third-party
                                agencies, help us assess and strengthen
                                our supplier engagement approach.
                                Structured Supplier Interaction Matrix
                                ensures effective communication at both
                                Senior and Middle Management levels.
                                This covers key raw material suppliers,
                                packaging suppliers, local contractors,
                                Indian railways, freight forwarders and
                                warehouse operators.
                            </p>
                        </div>
                        <div className='mb-4 w-fit'>
                            <div>
                                <img src="./ESG/icon_1.webp" alt="" className='w-16 h-16' />
                            </div>
                            <div className='w-full h-[1px] my-4 bg-[#2368b3] relative'>
                                <div className='absolute bg-red-600 h-[3px] w-[80px]'></div>
                            </div>
                            <h3 className='font-[900] text-2xl mb-2 text-[#2368b3]'>
                                Community and Employment
                                Initiatives
                            </h3>
                            <p className='text-xl mb-4'>
                                We prioritise local employment with
                                contract employees from nearby
                                villages engaged in our daily operations.
                                Our investment in skill development
                                programmes, vocational training and
                                competency assessments helps in
                                building a skilled workforce. Facilities
                                such as the Apprentice Training School,
                                Suraksha Sanskar Kendra and on-site
                                canteens ensure a safe and supportive
                                working environment.
                            </p>
                        </div>
                        <div className='mb-4 w-fit'>
                            <div>
                                <img src="./ESG/icon_3.webp" alt="" className='w-16 h-16' />
                            </div>
                            <div className='w-full h-[1px] my-4 bg-[#2368b3] relative'>
                                <div className='absolute bg-red-600 h-[3px] w-[80px]'></div>
                            </div>
                            <h3 className='font-[900] text-2xl mb-2 text-[#2368b3]'>
                                Sustainability and Ethical
                                Sourcing
                            </h3>
                            <p className='text-xl mb-4'>
                                Our Supplier Code of Conduct ensures
                                compliance with ethical and sustainability
                                standards, promoting responsible
                                business practices. We conduct
                                sustainability audits in collaboration with
                                third parties to assess and enhance our
                                suppliers’ environmental and compliance
                                commitments. Alternative fuels, including
                                biomass and waste plastic, are being
                                integrated into our operations to align
                                with circular economy principles and
                                sustainability goals.
                            </p>
                        </div>
                        <div className='my-8'>
                            <img src="./ESG/49-IMG-1.webp" alt="" />
                        </div>
                        <div className=''>
                            <img src="./ESG/49-Box1-IMG.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueChain;
