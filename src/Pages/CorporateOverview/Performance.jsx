import React, { useState, useEffect } from 'react'
import Awards from '../../Components/Awards'
import TopSection from '../../Components/TopSection';

const Performance = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
        const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

      const tabs = [
        {
            id: 'performance-overview',
            title: 'Overview',
            label: 'Overview'
        },
        {
            id: 'awards-section',
            title: 'Awards',
            label: 'Awards'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
            {/* Hero Section */}
              <TopSection
                            title="Performance Review"
                            tabs={tabs}
                            activeTab={activeTab}
                            onTabClick={scrollToSection}
                            isVisible={isVisible}
                        />


            <div className='marginal'>
                {/* Performance Overview */}
                <div
                    id="performance-overview"
                    data-animate
                    className={`scroll-mt-12 mb-12 transition-all duration-1000 delay-100 transform ${isVisible['performance-overview'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 overflow-hidden">
                        <div className="relative rounded-2xl overflow-hidden p-5">
                            <img
                                src="CorporateOverview/AboutChemicals/07-Page-IMG.webp"
                                alt="Performance Review"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Awards Section */}
                <div
                    id="awards-section"
                    data-animate
                    className={`scroll-mt-40 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 transition-all duration-1000 delay-500 transform ${isVisible['awards-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="m-semi-bold text-[#1368b4] text-3xl mb-8 text-center">
                        Awards and Recognitions
                    </h2>
                    <Awards />
                </div>
            </div>
        </div>
    )
}

export default Performance