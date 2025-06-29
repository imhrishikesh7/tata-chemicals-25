import React, { useState, useEffect } from 'react';
import TopSection from '../../Components/TopSection';

const Governance = () => {
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
                            title="Governance"
                            subtitle="We understand that good governance practices and ethical conduct are essential to drive growth and improve efficiency. Therefore, we at Tata Chemicals embrace a robust governance infrastructure that aligns with stakeholder expectations and regulations. We prioritise transparency, accountability and sustainability to strengthen business resilience and keep integrity at the centre of all operations."
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
                        <div className='mb-6'>
                            <img src="./ESG/52-IMG-3.webp" alt="" />
                        </div>
                        <div className=''>
                            <img src="./ESG/53-IMG-1.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Governance;
