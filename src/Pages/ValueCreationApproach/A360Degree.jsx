import React, { useState, useEffect } from 'react';
import HeaderWRedBottom from '../../Components/HeaderWRedBottom';
import TopSection from '../../Components/TopSection';

const A360Degree = () => {
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
        setActiveTab(sectionId);
        const element = document.getElementById('message-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Tab data for TopSection
    const tabs = [
        {
            id: 'digital-transformation',
            title: 'Embracing AI and Digital Transformation',
            label: 'Embracing AI and Digital Transformation'
        },
        {
            id: 'supply-chain',
            title: 'Supply Chain Resilience',
            label: 'Supply Chain Resilience'
        },
        {
            id: 'green-chemistry',
            title: 'Shift towards Low Carbon Technologies and Green Chemistry',
            label: 'Shift towards Low Carbon Technologies and Green Chemistry'
        },
        {
            id: 'innovation',
            title: 'Operational Efficiencies and Asset Realisation',
            label: 'Operational Efficiencies and Asset Realisation'
        }
    ];

    // Tab data with content
    const tabsData = [
        {
            id: 'green-chemistry',
            title: 'Shift towards Low Carbon Technologies and Green Chemistry',
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                            The chemical industry is
                            integral to the manufacturing
                            ecosystem. Between 2018
                            and 2022, greenhouse
                            gas intensity decreased
                            by 7.4% and energy
                            efficiency improved by 6.9%.
                            Scope 1 and 2 emissions
                            reporting increased by 46%,
                            while scope 3 emissions
                            reporting rose by 83%.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-gray-700">
                                Differences in regulatory frameworks
                                between US and Europe create challenges,
                                raising production costs and driving up
                                consumer prices. Investment patterns
                                are shifting towards focused low-carbon
                                technologies due to regulatory support,
                                technological progress, market demand
                                and risk management.
                                <br />
                                <br />
                                Global investments in low-carbon energy
                                transition technologies grew by 11%
                                annually, reaching $2.1 trillion in 2024.
                                Investment in renewables, energy storage,
                                electric vehicles and power grids grew
                                14.7%, totalling $1.93 trillion. However,
                                investment in emerging technologies like
                                electrified heat, hydrogen and carbon
                                capture and storage (CCS) dropped by
                                23% to $155 billion.
                            </p>
                        </div>

                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-gray-700">
                                Approximately 20-25% of the chemical
                                industry's capital expenditure is directed
                                towards green chemistry, growing at ~5%
                                CAGR. Tata Chemicals dedicates 100% of its
                                R&D expenditure to green chemistry.
                                <br />
                                <br />
                                The global investment in biochemicals was
                                $933 million in 2024, projected to grow at
                                a CAGR of 16.2% over the next five years.
                                The transition towards Electric Vehicles
                                (EVs) and carbon-neutral fuels is reshaping
                                global energy markets, promoting
                                sustainability and resilience while reducing
                                environmental impact.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h4 className="text-xl m-semi-bold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-[#40b2a2] text-white text-lg m-semi-bold">
                                SP 1
                            </span>
                            <span className="px-3 py-1 bg-[#a088ad] text-white text-lg m-semi-bold">
                                SP 3
                            </span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'digital-transformation',
            title: 'Embracing AI and Digital Transformation',
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                            Automation, digitisation,
                            analytics and AI/ML are
                            extensively used in the
                            industry, enhancing operational
                            efficiency with increase in
                            productivity, improving safety
                            through video analytics and
                            PSRM and optimising CRM for
                            seamless customer experience.
                            Approximately 40% of companies
                            utilise AI, with 42% exploring
                            its adoption. In the supply
                            chain, businesses achieve better
                            integration across multi-modal
                            logistics and demand forecasting.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-gray-700">
                                A survey from 2024 shows that 77% of
                                global manufacturers have implemented
                                AI solutions, up from 70% in 2023. These
                                solutions span production (31%), inventory
                                management (28%) and customer
                                service (28%), demonstrating AI's role in
                                optimising operations.
                                <br />
                                <br />
                                Over the next five years, chemical
                                companies are projected to invest about
                                5% of their annual revenue in digital
                                operations solutions, aiming for efficiency
                                improvements. Recent reports indicate that
                                these digital initiatives have resulted in
                                efficiency gains of 10-12%.
                            </p>
                        </div>
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-gray-700">
                                As of 2023, approximately 36% of manufacturing
                                companies are investing in AI and digital initiatives
                                to enhance plant safety. Some of these initiatives are
                                predictive analytics, digital twin models, AI powered
                                computer vision systems for safety protocols
                                etc. The usage of AI in plant safety has also seen
                                significant growth over the past five years. From
                                2018 to 2023, the adoption of AI technologies in
                                plant safety has increased by approximately 25%.
                                This growth is driven by the need for improved
                                safety measures, predictive maintenance and
                                operational efficiency in manufacturing plants.
                                <br />
                                <br />
                                Tata Chemicals, for instance, has allocated a specific
                                budget for digital initiatives. This has translated into
                                substantial savings of INR 50 crore.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-xl m-semi-bold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-[#432c87] text-white text-lg m-semi-bold">
                                SP 1
                            </span>
                            <span className="px-3 py-1 bg-[#40b2a2] text-white text-lg m-semi-bold">
                                SP 2
                            </span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'supply-chain',
            title: 'Supply Chain Resilience',
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                            In the evolving global supply
                            chain landscape, chemical
                            companies face significant
                            challenges and opportunities.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">

                            <p className="text-gray-700">
                                The US-China trade conflict affects 20-25%
                                of bilateral trade agreements globally, shifting
                                trade patterns and allowing other countries
                                to fill gaps left by reduced US-China trade.
                                <br />
                                <br />
                                About 30-35% of global chemical
                                trade occurs through Free Trade
                                Agreements (FTAs). The number of FTAs
                                has grown 53% in the past five years,
                                driven by countries seeking to enhance
                                trade relationships, reduce tariffs
                                and open new markets.
                            </p>
                        </div>
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-gray-700">
                                Businesses are diversifying sourcing strategies,
                                shifting production closer to home or to geopolitical
                                allies. According to a Gartner survey, 73% of
                                companies have changed their supply chain networks
                                in the past two years, adding or removing production
                                locations to mitigate risks and improve performance.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-lg m-semi-bold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-[#432c87] text-white text-lg  m-semi-bold">
                                SP 1
                            </span>
                            <span className="px-3 py-1 bg-[#aeb936] text-white text-lg m-semi-bold">
                                SP 4
                            </span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'innovation',
            title: 'Operational Efficiencies and Asset Realisation',
            content: (
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-gray-700">
                                The chemical industry's focus on resilience
                                has evolved, with cost management
                                remaining crucial, especially in areas with
                                higher energy prices. Many companies are
                                extending cost-reduction programmes
                                through 2025, emphasising operational
                                efficiency and market-aligned spending.
                                Around 18% prioritise capital investments
                                in efficiency, while 26% focus on plant and
                                equipment upgrades.
                                <br />
                                <br />
                                Technology-enabled improvements such
                                as advanced analytics and predictive
                                maintenance, have boosted productivity
                                by 5-10% in many facilities. Asset
                                optimisation has been a key strategy,
                                with 30-40% of companies engaging in
                                it over the past three years, expected to
                                continue through 2025.
                            </p>
                        </div>
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-gray-700">
                                Mergers and acquisitions are anticipated
                                to rise in coming years as interest rates
                                moderate, with companies seeking growth
                                and portfolio reconfiguration
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-lg m-semi-bold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-[#432c87] text-white text-lg  m-semi-bold">
                                SP 1
                            </span>
                            <span className="px-3 py-1 bg-[#aeb936] text-white text-lg m-semi-bold">
                                SP 4
                            </span>
                            <span className='px-3 py-1 bg-[#06aeef] text-white text-lg m-semi-bold'>
                                SP 5
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const activeTabData = tabsData.find(tab => tab.id === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
            {/* Top Section */}
            <TopSection
                title="A 360-degree View of Operating Landscape"
                description="Our operating environment is increasingly becoming more complex posing varied challenges and opportunities. Having Manufacturing operations across four continents increase exposure to global geopolitical developments and economic cyclicality. Being a chemicals manufacturing company, the business is influenced by stringent environmental regulations and heightened social sensitivities. We are conscious of the influence of these mega trends and events on our business and have structured approaches like materiality assessment, risk and mitigation frameworks among others to identify and assess these trends."
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={scrollToSection}
                isVisible={isVisible}
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                {/* Message Section */}
                <div
                    id="message-section"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['message-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        {/* Content Display */}
                        <div className="min-h-[400px] transition-all duration-500">
                            <h2 className="text-3xl font-bold text-[#1368b4] mb-6">
                                {activeTabData?.title}
                            </h2>
                            <HeaderWRedBottom />
                            <div className="opacity-100 transition-opacity duration-300 mt-5">
                                {activeTabData?.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default A360Degree;