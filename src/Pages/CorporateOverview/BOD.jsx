import React, { useState, useEffect } from 'react';
import BODSlider from '../../Components/BODSlider';
import TopSection from '../../Components/TopSection';

const BOD = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('');

    const bodImages = [
        './home/b1.webp',
        './home/b2.webp',
        './home/b3.webp',
        './home/b4.webp',
        './home/b5.webp',
        './home/b6.webp',
        './home/b7.webp',
        './home/b8.webp',
    ];

    const committees = [
        { letter: 'A', label: 'Audit Committee' },
        { letter: 'B', label: 'Nomination and Remuneration Committee' },
        { letter: 'C', label: 'Stakeholders Relationship Committee' },
        { letter: 'D', label: 'Corporate Social Responsibility Committee' },
        { letter: 'E', label: 'Risk Management Committee' },
        { letter: 'F', label: 'Safety, Health, Environment and Sustainability Committee' },
    ];

    const seniorManagement = [
        { name: "Mr. R. Mukundan", role: "Managing Director and CEO" },
        { name: "Mr. Nandakumar S. Tirumalai", role: "Chief Financial Officer" },
        { name: "Mr. Rajiv Chandan", role: "Chief General Counsel and Company Secretary" },
        { name: "Mr. K. R. Venkatadri", role: "Chief Commercial Officer" },
        { name: "Mr. Alok Chandra", role: "Chief - Health, Safety, Environment and Sustainability Office" },
        { name: "Mr. Subodh Srivastav", role: "Chief Marketing Officer" },
        { name: "Mr. Narashimha V. Kamath", role: "Chief Manufacturing Officer" },
        { name: "Mr. Rino Raj", role: "Vice President and Site Head – Mithapur" },
        { name: "Mr. Rajesh V. Kamat", role: "Vice President - Strategy and Corporate Projects" },
        { name: "Mr. Rahul Pinjarkar", role: "Chief Human Resources Officer" },
    ];

    const financialData = {
        revenue: [
            { year: 'FY25', value: 14887, width: 85, color: 'bg-gradient-to-r from-[#0056a3] to-[#0066b3]' },
            { year: 'FY24', value: 15421, width: 88, color: 'bg-gradient-to-r from-[#2ca9a1] to-[#3cb9b1]' },
            { year: 'FY23', value: 16789, width: 95, color: 'bg-gradient-to-r from-[#7cc3b9] to-[#8cd3c9]' },
            { year: 'FY22', value: 12622, width: 72, color: 'bg-gradient-to-r from-[#add4ce] to-[#bde4de]' },
        ],
        EBITDA: [
            { year: 'FY25', value: 1953, width: 55, color: 'bg-gradient-to-r from-[#0056a3] to-[#0066b3]' },
            { year: 'FY24', value: 2847, width: 80, color: 'bg-gradient-to-r from-[#2ca9a1] to-[#3cb9b1]' },
            { year: 'FY23', value: 3822, width: 95, color: 'bg-gradient-to-r from-[#7cc3b9] to-[#8cd3c9]' },
            { year: 'FY22', value: 2305, width: 60, color: 'bg-gradient-to-r from-[#add4ce] to-[#bde4de]' },
        ],
        PAT: [
            { year: 'FY25', value: 354, width: 25, color: 'bg-gradient-to-r from-[#0056a3] to-[#0066b3]' },
            { year: 'FY24', value: 449, width: 35, color: 'bg-gradient-to-r from-[#2ca9a1] to-[#3cb9b1]' },
            { year: 'FY23', value: 2452, width: 95, color: 'bg-gradient-to-r from-[#7cc3b9] to-[#8cd3c9]' },
            { year: 'FY22', value: 1400, width: 55, color: 'bg-gradient-to-r from-[#add4ce] to-[#bde4de]' },
        ],
        cashFromOperations: [
            { year: 'FY25', value: 1761, width: 55, color: 'bg-gradient-to-r from-[#0056a3] to-[#0066b3]' },
            { year: 'FY24', value: 3016, width: 95, color: 'bg-gradient-to-r from-[#2ca9a1] to-[#3cb9b1]' },
            { year: 'FY23', value: 2971, width: 92, color: 'bg-gradient-to-r from-[#7cc3b9] to-[#8cd3c9]' },
            { year: 'FY22', value: 1645, width: 50, color: 'bg-gradient-to-r from-[#add4ce] to-[#bde4de]' },
        ],
        netWorth: [
            { year: 'FY25', value: 22501, width: 88, color: 'bg-gradient-to-r from-[#0056a3] to-[#0066b3]' },
            { year: 'FY24', value: 23114, width: 92, color: 'bg-gradient-to-r from-[#2ca9a1] to-[#3cb9b1]' },
            { year: 'FY23', value: 20642, width: 80, color: 'bg-gradient-to-r from-[#7cc3b9] to-[#8cd3c9]' },
            { year: 'FY22', value: 19157, width: 72, color: 'bg-gradient-to-r from-[#add4ce] to-[#bde4de]' },
        ],
        netDebtToEquity: [
            { year: 'FY25', value: 0.25, width: 75, color: 'bg-gradient-to-r from-[#0056a3] to-[#0066b3]' },
            { year: 'FY24', value: 0.20, width: 60, color: 'bg-gradient-to-r from-[#2ca9a1] to-[#3cb9b1]' },
            { year: 'FY23', value: 0.22, width: 66, color: 'bg-gradient-to-r from-[#7cc3b9] to-[#8cd3c9]' },
            { year: 'FY22', value: 0.26, width: 78, color: 'bg-gradient-to-r from-[#add4ce] to-[#bde4de]' },
        ],
    };

    // useEffect(() => {
    //     document.documentElement.style.scrollBehavior = 'smooth';

    //     const handleScroll = () => setScrollY(window.scrollY);
    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         document.documentElement.style.scrollBehavior = 'auto';
    //     };
    // }, []);

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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(bodImages.length / 4));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(bodImages.length / 4)) % Math.ceil(bodImages.length / 4));
    };

    const formatTitle = (key) =>
        key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const tabs = [
        {
            id: 'bod',
            title: 'Directors',
            label: 'Directors'
        },
        {
            id: 'senior-management',
            title: 'Senior Management Personnel',
            label: 'Senior Management Personnel'
        },
        {
            id: 'financial-performance',
            title: 'Financial Performance',
            label: 'Financial Performance'
        }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">

            <TopSection
                title="Board of Directors"
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={scrollToSection}
                isVisible={isVisible}
            />

            <div id='bod' className="container mx-auto px-6 space-y-20 mt-10 scroll-mt-30">

                <BODSlider />

                {/* Announcement */}
                <div
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#0b3f7e] to-[#40b2a2] rounded-3xl"></div>
                        <div className="relative bg-gradient-to-r from-[#0b3f7e] to-[#0f4c75] rounded-3xl p-8 text-white ">
                            <div className="flex items-start gap-6">
                                <div className="w-2 bg-gradient-to-b from-[#40b2a2] to-[#2ca9a1] rounded-full flex-shrink-0 h-full min-h-[100px]"></div>
                                <div className="space-y-4">
                                    <p className="text-lg leading-relaxed">
                                        Mr. N. Chandrasekaran stepped down from the position of Director and Chairman of the Board of Directors of the Company
                                        with effect from May 29, 2025. The Board of Directors placed on record their highest appreciation for the guidance, support
                                        and the leadership provided by Mr. N. Chandrasekaran as Chairman of the Company during his tenure. Mr. S. Padmanabhan
                                        has been appointed as the Chairman of the Board with effect from May 30, 2025.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* External Link */}
                <div
                    data-animate
                    className={`transition-all duration-1000 delay-400 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                        <p className="text-lg mb-4">Read the detailed profiles of our Board of Directors at</p>
                        <a
                            href="https://www.tatachemicals.com/about-us/leadership-team/board-of-directors"
                            className="inline-flex items-center gap-2 text-[#1368b4] text-lg font-medium hover:text-[#0f4c75] transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.tatachemicals.com/about-us/leadership-team/board-of-directors
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15,3 21,3 21,9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Committees */}
                <div
                    id="committees"
                    data-animate
                    className={`transition-all duration-1000 delay-500 transform ${isVisible['committees'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                        <h2 className="text-2xl font-bold text-[#1368b4] mb-8 text-center">Committee Structure</h2>

                        {/* Committee items in a single row */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {committees.map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex items-center gap-2 transform transition-all duration-500 delay-${i * 100} ${isVisible['committees'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        }`}
                                >
                                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0b3f7e] to-[#1368b4] flex items-center justify-center text-white text-xs font-bold shadow-md">
                                        {item.letter}
                                    </div>
                                    <span className="text-gray-700 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Simple legend at bottom */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-center gap-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#0b3f7e] to-[#1368b4] shadow-md"></div>
                                    <span className="text-sm font-medium text-gray-600">Chairperson</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#40b2a2] to-[#2ca9a1] shadow-md"></div>
                                    <span className="text-sm font-medium text-gray-600">Member</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Senior Management */}
                <div
                    id="senior-management"
                    data-animate
                    className={`transition-all mt-20 duration-1000 delay-600 transform ${isVisible['senior-management'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#40b2a2]/20 to-[#2ca9a1]/20 rounded-3xl blur-xl"></div>
                        <div className="relative bg-gradient-to-br from-[#eaf4f1] to-[#f0f8f5] rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                            <div className="p-8">
                                <div className="inline-block bg-gradient-to-r from-[#40b2a2] to-[#2ca9a1] text-white font-bold text-xl px-6 py-3 rounded-2xl mb-8 shadow-lg">
                                    Senior Management Personnel*
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {seniorManagement.map((person, i) => (
                                        <div
                                            key={i}
                                            className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 transform transition-all duration-500 delay-${i * 50} hover:scale-105 hover:shadow-xl ${isVisible['senior-management'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                                }`}
                                        >
                                            <h3 className="text-[#432c87] text-base font-bold mb-3 leading-tight">{person.name}</h3>
                                            <p className="text-[#4d4d4f] text-sm leading-relaxed">{person.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg italic mt-4 text-center text-gray-600">*As on June 1, 2025</p>
                </div>

                {/* Financial Performance */}
                <div
                    id="financial-performance"
                    data-animate
                    className={`scroll-mt-33 transition-all duration-1000 delay-700 transform ${isVisible[''] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-4">
                                Financial Performance
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#2ca9a1] to-[#40b2a2] mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Object.entries(financialData).map(([category, values], index) => (
                                <div
                                    key={category}
                                    className={`bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 transform transition-all duration-500 delay-${index * 100} ${isVisible['financial-performance'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        }`}
                                >
                                    <h3 className="text-xl font-bold text-[#1368b4] mb-6 text-center">
                                        {formatTitle(category)}
                                    </h3>
                                    <div className="space-y-4">
                                        {values.map((item, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-medium text-gray-600">{item.year}</span>
                                                    <span className="text-sm font-bold text-gray-800">
                                                        {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
                                                        {category === 'netDebtToEquity' ? '' : ' ₹Cr'}
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                                    <div
                                                        className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                                                        style={{
                                                            width: isVisible['financial-performance'] ? `${item.width}%` : '0%',
                                                            transitionDelay: `${index * 100 + i * 200}ms`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg italic mt-8 text-center text-gray-600">
                            *After Exceptional items of INR 861 crore in FY24 and INR 125 crore in FY25
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BOD;