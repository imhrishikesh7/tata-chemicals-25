import React, { useState, useEffect } from 'react';

const Safety = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    const steps = [
        "Digital boards and signages",
        "Gemba walk",
        "Marked pedestrian and vehicle zones through circulation plan",
        "Fire safety upgrades: hydrant lines, sprinklers, ERTs",
        "AI based traffic and vehicle Management System",
        "'My Area My Machine' ownership programme"
    ];

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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-6">
                            Safety at the Core
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>

                        {/* Smooth scroll navigation */}
                        <div className="flex justify-center mt-12 space-x-4">
                            <button
                                onClick={() => scrollToSection('overview')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => scrollToSection('key-initiatives')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Key Initiatives
                            </button>
                            <button
                                onClick={() => scrollToSection('psi-section')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                PSI Performance
                            </button>
                            <button
                                onClick={() => scrollToSection('process-safety')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Process Safety
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20">

                {/* Overview Section */}
                <div
                    id="overview"
                    data-animate
                    className={`scroll-mt-40 transition-all duration-1000 delay-200 transform ${isVisible['overview'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="flex flex-row gap-12 items-stretch mt-5">
                        {/* Left Block */}
                        <div className="w-1/2 space-y-6 flex flex-col order-2">
                            <div className="flex-1 p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20">
                                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                                    Tata Chemicals priortises achieving ‘Zero Harm’ by promoting a robust safety culture and
                                    systematic safety management systems. Health, safety and environmental practices are
                                    governed through ISO 45001, ISO 14001 and Responsible Care Certifications.
                                </p>
                            </div>
                        </div>

                        {/* Right Block */}
                        <div className="relative w-1/2 flex flex-col">
                            <div className="absolute -inset-4 rounded-3xl blur-xl"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30 flex-1 flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1368b4] text-center mb-6">
                                    EHS Governance Framework
                                </h2>
                                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 flex-1">
                                    <div className="h-60 bg-white/50 rounded-lg flex items-center justify-center">
                                        <img src="CorporateOverview/Saftey/09-Page-IMG.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div
                    id="key-initiatives"
                    data-animate
                    className={`scroll-mt-40 transition-all duration-1000 delay-100 transform ${isVisible['psi-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    {/* Left Side */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#ed1a3b] mb-6">
                            Key Initiatives
                        </h2>
                        <ul className='list-disc list-inside marker:text-blue-600'>
                            <li className='mb-3 text-xl'>
                                Integrated safety leading indicators into
                                SHES Board and management reviews.
                            </li>
                            <li className='mb-3 text-xl'>
                                Restructured MD Safety Global Review
                                Forum based on DSS+ insights to focus
                                on leadership and high-risk areas.
                            </li>
                            <li className='mb-3 text-xl'>
                                Conducted Safety Felt Leadership
                                workshops for 600+ senior and line
                                managers and 100+ business partners.
                            </li>
                            <li className='mb-3 text-xl'>
                                Rolled out a month-long Executive
                                Safety Leadership Programme for
                                selected line managers with hands-on
                                exposure to safety operations.
                            </li>
                            <li className='mb-3 text-xl'>
                                Participated in the Group-wide Fire
                                Prevention and Preparedness Week
                                with 1,400+ employees and partners.
                            </li>
                        </ul>

                    </div>
                </div>

                {/* PSI Section */}
                <div
                    id="psi-section"
                    data-animate
                    className={`scroll-mt-40 transition-all duration-1000 delay-100 transform ${isVisible['psi-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                        {/* Left Side */}
                        <div className="flex flex-col h-full">
                            <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1368b4] mb-6">
                                    Ensuring Safety Every Step of the Way
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                                    We have deployed the Progressive Safety
                                    Index (PSI) across all our manufacturing
                                    sites to track leadership engagement,
                                    workplace safety practices employee
                                    competency, behaviour-based safety
                                    and review systems.
                                </p>

                                {/* Stats Cards */}
                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gradient-to-br from-[#ed1a3b]/10 to-[#ed1a3b]/5 rounded-xl p-6 border border-[#ed1a3b]/20">
                                        <h3 className="text-xl font-semibold text-[#ed1a3b] mb-2">PSI Implementation Status</h3>
                                        <div className="text-4xl font-bold text-[#432c87] mb-2">100%</div>
                                        <p className="text-sm text-gray-600">of manufacturing sites have adopted PSI</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#432c87]/10 to-[#432c87]/5 rounded-xl p-6 border border-[#432c87]/20">
                                        <div className="text-4xl font-bold text-[#432c87] mb-2">85%</div>
                                        <p className="text-sm text-gray-600">of the enterprise-wide target has been achieved</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-lg leading-relaxed text-gray-700">
                                        We build capability among our employees
                                        and business partners through Safety Felt
                                        Leadership programmes and targeted skill
                                        development initiatives. We also strengthen
                                        engagement with contractors and partners
                                        through activities such as safety toolbox
                                        talks, monthly compliance review and
                                        trade validations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col h-full">
                            <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1368b4] text-center mb-8">
                                    Safety Performance
                                    <span className="block text-lg font-normal text-gray-600">(Consolidated)</span>
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-3">
                                        <div className="bg-white/50 rounded-lg flex items-start justify-start p-3">
                                            <img src="CorporateOverview/Saftey/09-Page-IMG-1.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl p-3">
                                        <div className="bg-white/50 rounded-lg flex items-center justify-center p-3">
                                            <img src="CorporateOverview/Saftey/09-Page-IMG-2.webp" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Process Safety & Workplace Enhancements */}
                <div
                    id="process-safety"
                    data-animate
                    className={`scroll-mt-40 transition-all duration-1000 delay-400 transform ${isVisible['process-safety'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            {/* Process Safety */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1368b4] mb-6">
                                    Process Safety and Risk Management
                                </h2>
                                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                                    <p>Process Safety and Risk Management (PSRM) has
                                        been implemented at our manufacturing sites
                                        in India. The adoption of Hazard and Operability
                                        Study (HAZOP) study recommendations and
                                        Normalisation of Deviation (NoD) procedures
                                        has strengthened our risk-based decisionmaking model at critical sites, leading to better
                                        identification and mitigation of process risks,
                                        particularly in the storage and handling of
                                        hazardous chemicals. We do not have any tier 1
                                        process safety incidents in the past 5 years.
                                    </p>
                                </div>
                            </div>

                            {/* Occupational Health */}
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1368b4] mb-6">
                                    Occupational Health Measures
                                </h2>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    Occupational health is supported
                                    through initiatives such as regular health
                                    checkups that are performed to assess
                                    employee well-being. Further, industrial
                                    hygiene evaluations are conducted to
                                    evaluate exposure to physical, chemical
                                    and biological risks, with necessary
                                    corrective and preventive measures
                                    implemented as required.
                                </p>
                            </div>
                        </div>

                        {/* Workplace Enhancements */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1368b4] text-center mb-8">
                                Workplace Enhancements
                            </h2>
                            <div className="space-y-9">
                                {steps.map((text, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start gap-6 transform transition-all duration-700 delay-${(index + 1) * 100} ${isVisible['process-safety'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                            }`}
                                    >
                                        <div className="relative flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-lg">{index + 1}</span>
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className="absolute top-12 left-1/2 w-0.5 h-8 bg-gradient-to-b from-[#ed1a3b]/50 to-transparent transform -translate-x-1/2"></div>
                                            )}
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <p className="text-gray-700 text-lg leading-relaxed font-medium">
                                                {text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Safety;