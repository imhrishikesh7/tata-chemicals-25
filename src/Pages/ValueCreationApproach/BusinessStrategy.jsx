import React, { useState, useEffect, useCallback } from 'react';
import TopSection from '../../Components/TopSection';

const BusinessStrategy = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    const [activeTab, setActiveTab] = useState('excel');

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

    const scrollToSection = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
            });
        }
    }, []);

    const handleCardClick = useCallback((strategyId) => {
        // First, update the active tab
        setActiveTab(strategyId);
        
        // Then, use requestAnimationFrame to ensure the state update is processed
        // before scrolling, preventing timing conflicts
        requestAnimationFrame(() => {
            scrollToSection('strategy-section');
        });
    }, [scrollToSection]);

    const strategyData = [
        {
            id: 'excel',
            number: '01',
            title: 'Excel',
            icon: (
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-2">
                    <img src="ValueCreationApproach/BusinessStategy/20-Page-IMG-3.webp" alt="" />
                </div>
            ),
            content: (
                <div>
                    <img src="ValueCreationApproach/BusinessStategy/Excel.webp" alt="" />
                    <img src="ValueCreationApproach/BusinessStategy/21-Page-IMG.webp" alt="" className='mt-10' />
                    <img src="ValueCreationApproach/BusinessStategy/21-Page-IMG-2.webp" alt="" className='mt-10' />
                    <img src="ValueCreationApproach/BusinessStategy/People.webp" alt="" className='mt-10' />
                </div>
            )
        },
        {
            id: 'embed',
            number: '02',
            title: 'Embed',
            icon: (
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-1">
                    <img src="ValueCreationApproach/BusinessStategy/22-Page-IMG-3.webp" alt="" />
                </div>
            ),
            content: (
                <div>
                    <img src="ValueCreationApproach/BusinessStategy/22-Page-IMG-2.webp" alt="" />
                </div>
            )
        },
        {
            id: 'expand',
            number: '03',
            title: 'Expand',
            icon: (
                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center p-2">
                    <img src="ValueCreationApproach/BusinessStategy/23-Page-IMG-3.webp" alt="" />
                </div>
            ),
            content: (
                <div>
                    <img src="ValueCreationApproach/BusinessStategy/23-Page-IMG.webp" alt="" />
                    <img src="ValueCreationApproach/BusinessStategy/23-Page-IMG-2.webp" alt="" className='mt-10' />
                </div>
            )
        }
    ];

    const activeStrategyData = strategyData.find(strategy => strategy.id === activeTab);

    const getButtonColor = (id) => {
        switch (id) {
            case 'excel': return 'bg-[#1368b4]';
            case 'embed': return 'bg-[#40b2a2]';
            case 'expand': return 'bg-[#a088ad]';
            default: return 'bg-[#1368b4]';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
            <TopSection
                title="Business Strategy"
                subtitle="Leading through Sustainability, Customer Centricity and Operational Excellence"
                description="The integration of sustainable practices and operational excellence forms a robust foundation that allows Tata Chemicals to consistently provide high-quality products and services to customers, minimise operational expenses and maintain resilience through functional excellence."
            />

            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div className="text-center mt-8 mb-12">
                    <div className="inline-block bg-[#432c87] text-white px-8 py-3 rounded-xl text-lg font-semibold mb-2">
                        Strategy – Chemistry of Sustainable Growth
                    </div>
                    <div className="px-8 py-4 text-gray-700 text-lg m-semi-bold max-w-4xl mx-auto">
                        Leading through Sustainability, Customer Centricity and Operational Excellence
                    </div>
                </div>

                {/* Strategy Cards */}
                <div className="flex justify-center mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full px-4">
                        {strategyData.map((strategy) => (
                            <button
                                key={strategy.id}
                                onClick={() => handleCardClick(strategy.id)}
                                className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 h-48 w-full bg-gradient-to-r ${getButtonColor(strategy.id)} text-white shadow-xl ${
                                    activeTab === strategy.id ? 'ring-4 ring-white ring-opacity-50 scale-105' : ''
                                }`}
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div className="flex items-start justify-between">
                                        <div className="text-4xl font-bold opacity-60">
                                            {strategy.number}
                                        </div>
                                        <div className="flex-shrink-0">
                                            {strategy.icon}
                                        </div>
                                    </div>
                                    <div className="text-left flex-1 flex flex-col justify-center">
                                        <h3 className="text-2xl font-bold mb-3">{strategy.title}</h3>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Strategy Content Section */}
                <div
                    id="strategy-section"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['strategy-section']
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="min-h-[500px] transition-all duration-500">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className={`text-6xl font-bold bg-gradient-to-r ${getButtonColor(activeTab)} bg-clip-text text-transparent`}>
                                    {activeStrategyData?.number}
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-[#1368b4] mb-2">
                                        {activeStrategyData?.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="opacity-100 transition-opacity duration-300">
                                {activeStrategyData?.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessStrategy;