import React, { useState, useEffect } from 'react';
import HeadingWRedCorner from '../../Components/HeadingWRedCorner';

const SpecialtyProducts = () => {
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-6">
                            Specialty Products Business
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-[#ed1a3b] to-[#ff4757] mx-auto rounded-full"></div>
                        <div className='text-center mt-5'>
                            <p className='text-2xl text-[#432c87]'>With sustained performance in Agri-business, Specialty Silica and Prebiotics, the Speciality
                                Products division kept growing. To handle shifting market dynamics, strategy is centred on
                                innovation, sustainability and operational efficacy. We increased capacity, bolstered worldwide
                                footprint and launched new sustainable product lines during the year.</p>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center mt-12 space-x-4 flex-wrap gap-2">
                            <button
                                onClick={() => scrollToSection('agri-business')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Agri-business
                            </button>
                            <button
                                onClick={() => scrollToSection('specialty-silica')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Specialty Silica
                            </button>
                            <button
                                onClick={() => scrollToSection('prebiotics')}
                                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-[#1368b4] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                            >
                                Prebiotics
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                {/* Introduction Section */}
                <div
                    id="intro-section"
                    data-animate
                    className={`transition-all duration-1000 delay-100 transform ${isVisible['intro-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-[#eaf3f2] backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className='bg-[#eaf3f2]  rounded-br-[50px]'>
                            <p className='text-xl mb-5'>In FY25, Tata Chemicals made steady
                                progress in Specialty Products. Capacity
                                expansions, efficiency improvements and
                                deeper market engagement shaped our
                                growth both domestically and globally.
                                In Agriculture, Rallis strengthened
                                its offerings through new product
                                introductions across Crop Protection,
                                Mambattu Lab
                                Biologicals and Seeds. Within Specialty
                                Silica, production was scaled up with
                                the launch of new grades like TREADSIL®
                                115 and continued strides in green silica
                                development aligned with sustainability
                                targets for the tyre industry. The rollout of
                                silica coupling agents further supported
                                improved process efficiency and helped
                                reduce emissions for customers.
                                FOS portfolio gained momentum,
                                backed by new client acquisitions,
                                expanded applications in food
                                and nutrition through stronger
                                international distribution. Reframing
                                it as a fibre ingredient enabled wider
                                acceptance across segments.</p>
                            <div className="w-full bg-gray-200 rounded-br-[50px] flex items-center justify-center">
                                <div className='bg-[#dbe9fe] p-3 rounded-br-[40px]'>
                                    <img src="OurBusiness/SpecialityProducts.jsx/India12.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Agri-business Section */}
                <div
                    id="agri-business"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-200 transform ${isVisible['agri-business'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="flex items-center mb-8">
                            <HeadingWRedCorner title='Agri-business' />
                        </div>

                        <p className='text-xl mb-5 text-[#4d4d4f]'>Rallis India Limited, our subsidiary, operates in the agricultural inputs sector with over 77 years of experience. We offer products and services
                            for agriculture, such as Crop Protection, Biologicals, Specialty Solutions and Seeds. Distribution network of Rallis India touches 80% of India’s
                            districts as well as 70+ countries worldwide. Rallis produce support agriculture and sell them through dealer and distributor networks.</p>

                        <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">
                            {/* Column 1 */}
                            <div className="w-full md:w-1/3">
                                <h3 className='font-semibold text-2xl text-[#1368b4] mb-3'>Crop Care</h3>
                                <p className="text-xl">Crop Care business offers products such
                                    as herbicides, insecticides, fungicides, biofertilisers, bio-stimulants, micronutrients,
                                    organic fertilisers, water-soluble fertilisers
                                    and bio-pesticides. Crop Protection
                                    segment serves both domestic and
                                    international markets, while Biologicals
                                    and Specialty solutions mainly serve
                                    domestic markets. We also collaborate
                                    with global partners for Custom Synthesis
                                    Manufacturing (CSM) and product exports</p>

                                <h3 className="font-semibold text-2xl text-[#1368b4] mt-5">Trends</h3>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Focused portfolio in high-value
                                        hybrid seeds and differentiated crop
                                        protection solutions tailored to Indian
                                        farming conditions.</li>
                                    <li>Strength in Custom Synthesis
                                        Manufacturing (CSM) with flexible,
                                        multi-purpose production facilities
                                        for global clients.</li>
                                    <li>Advancing biologicals and
                                        specialty nutrition aligned with
                                        the shift to sustainable and
                                        regenerative agriculture.</li>
                                    <li>Strong R&D capabilities in both
                                        chemistry and biotech, supported
                                        by dedicated innovation centres and
                                        research stations.</li>
                                    <li>Digital integration in seed production
                                        and farmer engagement, improving
                                        efficiency and product traceability</li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="w-full md:w-1/3 flex flex-col space-y-4">
                                <h3 className="font-semibold text-2xl text-[#1368b4] mt-5">Operational Highlights</h3>

                                {[
                                    "Launch of multiple products in Crop Protection, Biologicals and Specialty solutions and Seeds.",
                                    "Growth in Herbicides and Biologicals segments.",
                                    "Success with Cotton hybrids Diggaz and Aatish.",
                                    "Pilot-scale production of Flavocide® in CSM business.",
                                    "Commissioning of an 8,000 MT automated Water-Soluble Fertiliser plant in Akola.",
                                    "Commercialisation of ‘Metalaxyl-M’ for domestic and export markets."
                                ].map((item, index) => (
                                    <div key={index}>
                                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                        <p className="text-xl mt-2">{item}</p>
                                    </div>
                                ))}

                                <div className="mt-8">
                                    <h3 className='font-semibold text-2xl text-[#1368b4] mb-3'>Seeds</h3>
                                    <p className="text-xl">In our seeds business, we focus on hybrid
                                        seeds for crops such as Cotton, Maize,
                                        Paddy, Millet, Mustard and vegetables.
                                        We respond to changes in cropping
                                        patterns, demand for specialised seeds
                                        and advancements in technology. We work
                                        closely with strategic partners and use R&D
                                        to support farmer productivity.</p>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                                <h3 className="font-semibold text-2xl text-[#1368b4]">Roadmap Ahead</h3>

                                {[
                                    "Improve customer communications and marketing.",
                                    "Expand product portfolio in Herbicides, Plant Health and Seeds.",
                                    "Strengthen R&D to capture market opportunities.",
                                    "Optimise manufacturing by adopting multi-purpose plants.",
                                    "Expand Seed offerings, particularly in maize and paddy.",
                                    "Enhance workforce collaboration for better productivity and environmental sustainability."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                        <p className="text-[#4d4d4f] text-xl">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Case Study */}
                        <div className="bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full mt-10">
                            <div className="bg-gradient-to-r from-[#1368b4] to-transparent p-4 rounded-t-md mb-5">
                                <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 rounded-br-2xl mb-2">
                                    Case Study
                                </div>
                                <h3 className="font-semibold text-2xl sm:text-3xl">Scaling Digital Innovation in Seed Production</h3>
                            </div>

                            <div className="bg-white text-black rounded-br-4xl mt-0 flex flex-col md:flex-row">
                                <div className="w-full p-6 text-[#0057a0] text-lg font-medium leading-7">
                                    With the increasing need for precision farming, Rallis introduced Seedsure, a
                                    mobile-enabled tool to digitalise hybrid seed production. This has resulted
                                    in improved traceability, reduced wastage and better farmer support.
                                    Through this platform, Rallis has enabled real-time monitoring of seed quality,
                                    optimised field operations and improved collaboration with farmers. By
                                    leveraging digital analytics, the Company has ensured better-quality hybrid
                                    seeds, improving yield and farmer incomes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specialty Silica Section */}
                <div
                    id="specialty-silica"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-300 transform ${isVisible['specialty-silica'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="flex items-center mb-8">
                            <HeadingWRedCorner title='Specialty Silica' />
                        </div>

                        <p className='text-xl mb-5 text-[#4d4d4f]'>ialty Silica
                            Specialty Silica business has expanded by leveraging expertise in basic chemistry to develop high-performance products. The focus remains
                            on Highly Dispersible Silica (HDS) for radial tyres and green silica derived from Rice Husk Ash (RHA). </p>

                        <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">
                            {/* Column 1 */}
                            <div className="w-full md:w-1/3">
                                <h3 className="font-semibold text-2xl text-[#1368b4]">Value Proposition</h3>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Enhanced process control
                                        through deployment of advanced
                                        process technologies</li>
                                    <li>Offers customised HDS products for
                                        PCR and TBR applications.</li>
                                    <li>Developing new products for
                                        batteries, defoamers, polymers
                                        and personal care.</li>
                                </ul>

                                <h3 className="font-semibold text-2xl text-[#1368b4] mt-5">Trends</h3>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Increase in sales volume, reflecting
                                        strong market adoption.</li>
                                    <li>Growing demand for green silica
                                        due to sustainability initiatives in
                                        the tyre industry.</li>
                                </ul>

                                <h3 className="font-semibold text-2xl text-[#1368b4] mt-5">Operational Highlights</h3>
                                {[
                                    "Commissioned Line 2, increasing plant capacity for tyre and rubber segments by re-purposing a former food and oral care silica production line.",
                                    "Expanded global market reach by strengthening distribution networks and initiating overseas supplies.",
                                    "Introduced MicroSphere Silica (MS), a non-fluffy, pearl-form silica for improved handling, processability and tyre performance."
                                ].map((item, index) => (
                                    <div key={index} className="mt-4">
                                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                        <p className="text-xl mt-2">{item}</p>
                                    </div>
                                ))}
                                <div className='mt-10'>
                                    <ul className='no-dots'>
                                        <li className='italics'>1 International Organisation for Standardisation</li>
                                        <li>2 Registration, Evaluation, Authorisation and Restriction of Chemicals</li>
                                        <li>3 International Sustainability and Carbon Certification</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className='w-full md:w-1/3'>
                                <div className="bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                                    <h3 className="font-semibold text-2xl text-[#1368b4]">Roadmap Ahead</h3>
                                    {[
                                        "Rice Husk Ash (RHA)-based silica production to support sustainable product development.",
                                        "Launch new grades of Highly Dispersible Silica (HDS) to cater to truck, bus and two-wheeler radial tyre segments.",
                                        "Strengthen global market presence by increasing supplies to overseas customers.",
                                        "Develop further applications for MicroSphere Silica (MS) to enhance processing and handling efficiency.",
                                        "Introduce coupling agents such as silanes.",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                            <p className="text-[#4d4d4f] text-xl">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <h3 className='font-semibold text-2xl text-[#1368b4] mb-3'>World-Class Quality Standards</h3>
                                    <div className="w-full flex items-center justify-center">
                                        <img src="OurBusiness/SpecialityProducts.jsx/16-Page-IMG.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 - Case Study */}
                            <div className="w-full md:w-1/3">
                                <div className="bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full">
                                    <div className="bg-gradient-to-r from-[#1368b4] to-transparent p-4 rounded-t-md mb-5">
                                        <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 rounded-br-2xl mb-2">
                                            Case Study
                                        </div>
                                        <h3 className="font-semibold text-2xl sm:text-3xl">
                                            TREADSIL® 115 for Two-Wheeler Tyres
                                        </h3>
                                    </div>

                                    <div className="bg-white text-black rounded-br-4xl mt-0 flex flex-col divide-y divide-gray-300">
                                        <div className="w-full p-6 text-[#0057a0] text-xl font-medium leading-7">
                                            With rising demand for two-wheeler
                                            tyres, TREADSIL® 115, a highly
                                            dispersible silica tailored for tyre
                                            treads was introduced. This product
                                            was developed in response to
                                            industry demand for improved road
                                            grip, fuel efficiency and durability
                                            under different road conditions.
                                        </div>
                                        <div className="w-full p-6 text-[#4d4d4f] text-xl font-medium leading-7">
                                            R&D efforts were focused on
                                            optimising surface area properties,
                                            ensuring abrasion resistance,
                                            reduced rolling resistance
                                            and increased safety in wet
                                            and dry conditions.
                                            Extensive trials conducted with
                                            leading tyre manufacturers and field
                                            evaluations showed improvements
                                            in tyre performance, including lower
                                            heat build-up and better handling
                                            at high speeds. The successful
                                            validation of TREADSIL® 115 has
                                            opened avenues for application in
                                            tyre sidewalls and automotive goods,
                                            contributing to sustainability targets
                                            by enabling low rolling resistance
                                            and improved fuel efficiency.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Prebiotics Section */}
                <div
                    id="prebiotics"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-400 transform ${isVisible['prebiotics'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <div className="flex items-center mb-8">
                            <HeadingWRedCorner title='Prebiotics' />
                        </div>

                        <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">
                            {/* Column 1 */}
                            <div className="w-full md:w-1/3">
                                <p className="text-xl mt-5">
                                    Tata Chemicals expanded global footprint
                                    through distributor appointments in
                                    USA and Europe, while strengthening
                                    sales in Asian markets such as
                                    Vietnam and South Korea.
                                    In FY2024-25, we have successfully
                                    dispatched around 3000 MT of
                                    Fructooligosaccharide (FOS), reflecting the
                                    growing demand and trust in our offerings.
                                </p>

                                <h3 className="font-semibold text-2xl text-[#1368b4] mt-5">Value Proposition</h3>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Repositioned from a sugar replacer to
                                        a fibre ingredient, increasing customer
                                        acceptance in the domestic market.</li>
                                    <li>Expanded reach by targeting
                                        broader applications in food and
                                        nutrition segments.</li>
                                    <li>Continued focus on customer service
                                        and strategic market expansion.</li>
                                </ul>

                                <h3 className="font-semibold text-2xl text-[#1368b4] mt-5">Trends</h3>
                                <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                                    <li>Increased customer adoption in pet
                                        nutrition and dietary supplements.</li>
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="w-full md:w-1/3 flex flex-col space-y-4">
                                <h3 className="font-semibold text-2xl text-[#1368b4] mt-5">Operational Highlights</h3>

                                {[
                                    "Appointed new distributors in USA and Europe, strengthening market presence.",
                                    "Completed customs registration in China, enabling exports to a key global market.",
                                    "Secured several major key accounts in baby food, cakes and gummies in the domestic market",
                                    "Advanced sugar replacement formulations with successful trials in gummies, cakes and biscuits.",
                                    "Strengthened presence in pet nutrition and animal feed.",
                                    "Expanded P95, L95 and L55 offerings across Australia and Thailand."
                                ].map((item, index) => (
                                    <div key={index}>
                                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                                        <p className="text-xl mt-2">{item}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Column 3 */}
                            <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                                <h3 className="font-semibold text-2xl text-[#1368b4]">Roadmap Ahead</h3>

                                {[
                                    "Expand presence in the USA, Europe, China and Southeast Asia through new distributor appointments.",
                                    "Strengthen end-customer engagement and longterm relationships.",
                                    "Focus on increasing L95 sales in Europe markets.",
                                    "Expand L55 production",
                                    "Enhance product quality and process efficiencies through benchmarking and industry collaborations."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                        <p className="text-[#4d4d4f] text-xl">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Final Case Study */}
                        <div className="bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full mt-10">
                            <div className="bg-gradient-to-r from-[#1368b4] to-transparent p-4 rounded-t-md mb-5">
                                <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 rounded-br-2xl mb-2">
                                    Case Study
                                </div>
                                <h3 className="font-semibold text-2xl sm:text-4xl">No Added Sugar</h3>
                            </div>

                            <div className="bg-white text-black rounded-br-4xl mt-0 flex flex-col md:flex-row divide-x-[1px] divide-gray-300">
                                <div className="w-full md:w-1/3 p-6 text-[#0057a0] text-xl font-medium leading-7">
                                    Fructooligosaccharides (FOS) has been
                                    strongly incorporated into biscuits,
                                    cookies, Indian confectionery, drinks,
                                    morning meal cereals, sustenance
                                    bars and frozen dairy desserts. FOS
                                    L95 was recently used to enhance the
                                    taste, mouthfeel and functionality of a
                                    beloved, familiar treat category, cake.
                                </div>
                                <div className="w-full md:w-2/3 p-6 text-[#4d4d4f] text-xl font-medium leading-7">
                                    The client, a market leader in the cake
                                    segment, was working on a new cake formulation. The biggest challenge was
                                    to accept an ingredient, which would
                                    increase material cost. The venture
                                    began with evidence of concept via a
                                    myriad of to-be-determined iterated
                                    experiments and lab trials, with results
                                    being positive. The client’s R&D team
                                    was convinced that FOS L95 could
                                    enhance product quality without
                                    compromising its essential attributes. Our client’s product development
                                    team was pleased with the results
                                    and the trials strengthened the belief
                                    that FOS could definitely help take
                                    indulgence level in cakes one notch
                                    higher. We conducted months of
                                    testing, conducted conversations and
                                    assessments and eventually a decision
                                    was made to use FOS L95 cakes
                                    in their products. The change was
                                    officially implemented, setting a new
                                    industry benchmark.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialtyProducts;