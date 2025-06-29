import React, { useState, useEffect } from 'react';
import TopSection from '../../Components/TopSection';

const Community = () => {
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
                title="Community"
                subtitle="At Tata Chemicals, sustainable growth is much more than a strategic business agenda. We have defined it as an inclusive growth charter, with continuous focus on the upliftment and empowerment of the communities we serve. This is imperative because this aligns with our Group’s ethos of giving back to the society. Our programme framework is aligned to the United Nations Sustainable Development Goals (UN SDGs) and in line with the key community requirements. We have set up self-sustaining enterprises for ensuring continuity of our community development programmes"
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
                        <div className='mb-8'>
                            <img src="./ESG/50-IMG-1.webp" alt="" />
                        </div>
                        <div className=''>
                            <img src="./ESG/50-IMG-2.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
