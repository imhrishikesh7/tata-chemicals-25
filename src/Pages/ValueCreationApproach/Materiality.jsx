import React, { useState, useEffect } from 'react';
import TopSection from '../../Components/TopSection';

const Materiality = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
        const [activeTab, setActiveTab] = useState('digital-transformation');

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

      const tabs = [
        {
            id: 'The-Assessment-Covers',
            title: 'The Assessment Covers',
            label: 'The Assessment Covers'
        },
        {
            id: 'materiality-matrix',
            title: 'Materiality Matrix',
            label: 'Materiality Matrix'
        },
        {
            id: 'material-topics',
            title: 'Material Topics',
            label: 'Material Topics'
        }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
            {/* Hero Section */}
                <TopSection
                            title="Materiality Assessment"
                            description="Double Materiality enables to identify ESG issues that impact financial outcomes and arise from business operations through an Impact-Risk-Opportunity (IRO) lens to prioritise what matters most."
                            tabs={tabs}
                            activeTab={activeTab}
                            onTabClick={scrollToSection}
                            isVisible={isVisible}
                        />
            


            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    id="The-Assessment-Covers"
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform `}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] text-center">
                                The Assessment Covers
                            </h1>
                            <img src="ValueCreationApproach/Materiality/1.webp" alt="" className='' />
                            <p className='text-lg'>We completed a Double Materiality Assessment to understand how sustainability-relevant drives intersect with our strategy, operations
                                and externalities.
                                Under the IRO framework, ESG issues were evaluated across value chain and established their importance based on feedback from
                                stakeholders, regulatory needs and potential business consequences. The review was in accordance with European Sustainability
                                Reporting Standards (ESRS) and the Global Reporting Initiative (GRI). </p>
                        </div>
                        <div>
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                                Stakeholder Identification Process
                            </h1>
                            <img src="ValueCreationApproach/Materiality/2.webp" alt="" />
                            <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                                Factors to identify, assess and prioritise IROs
                            </h1>
                            <img src="ValueCreationApproach/Materiality/3.webp" alt="" />
                            <p className='text-lg mt-10'>
                                We adopted a data-based approach to our Double Materiality Assessment, in line with ESRS and GRI guidelines. The analysis tested
                                financial materiality by determining how our business performance is impacted by ESG factors and impact materiality by setting out our
                                environmental and social presence in countries where we operate. We engaged with main stakeholders including top-level management,
                                Institutional investors, customers, employees, suppliers in India, UK, Africa and US and with local communities in India whose inputs were
                                incorporated into the prioritisation of ESG issues using the Impact-Risk-Opportunity (IRO) framework.
                            </p>
                            {/* <h1 className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                                Materiality Matrix
                            </h1> */}
                            <div className='my-6' id='materiality-matrix'>
                            <img src="ValueCreationApproach/Materiality/35-Page-IMG.webp"  alt="" />
                            </div>
                            <h1 id='material-topics' className="text-3xl m-semi-bold text-[#1368b4] mb-10 mt-10 text-center">
                            Material Topics
                            </h1>
                            <img src="ValueCreationApproach/Materiality/3a668b86-d7cc-4da0-afda-1a3e04018a80.webp" alt="" />
                            <img src="ValueCreationApproach/Materiality/c01f265a-11f7-49e7-ae0e-ad23488d138d.webp" alt="" />
                            <img src="ValueCreationApproach/Materiality/f1762a2b-eeba-4bf3-b3db-564eeb51b7bb.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materiality;