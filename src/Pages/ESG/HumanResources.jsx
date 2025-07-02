import React, { useState, useEffect } from 'react';
import TopSection from '../../Components/TopSection';

const HumanResources = () => {
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
    const tabs = [
        {
            id: 'creating',
            title: 'Creating an Empowering Work Environment',
            label: 'Creating an Empowering Work Environment'
        },
        {
            id: 'building',
            title: 'Building Capabilities for Today and Tomorrow',
            label: 'Building Capabilities for Today and Tomorrow'
        },
        {
            id: 'Strengthening',
            title: 'Strengthening Our Employee Value Proposition',
            label: 'Strengthening Our Employee Value Proposition'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-smooth">
            {/* Hero Section */}
            <TopSection
                title="Human Resources"
                subtitle="A future-ready workplace is pivotal to the chemistry of sustainable growth, enabling Tata Chemicals to navigate the challenges and capitalise on the opportunities of the evolving business landscape."
                description="Tata Chemicals is committed to creating an empowering work environment, building capabilities for today and tomorrow thereby strengthening Employee Value Proposition (EVP) to drive value for all stakeholders."
                tabs={tabs}
                activeTab={activeTab}
                onTabClick={scrollToSection}
                isVisible={isVisible}
            />


            {/* Main Content */}
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    id="creating"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['creating'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 text-xl backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <h3 className='font-[900] text-2xl mb-4 text-[#2368b3]'>
                            Creating an Empowering Work
                            Environment
                        </h3>
                        <p className='mb-4'>
                            The company’s commitment to excellence is rooted in providing purpose-driven work, enabling policies, infrastructure and systems that equip every employee to unlock their potential.
                        </p>
                        <p className='mb-4'>
                            We continue to strengthen global
                            functional structure, aligning teams
                            globally to improve efficiency, customer
                            engagement and work agility. Through
                            quality work, leveraging well-articulated
                            policies and robust infrastructure, we
                            equip every employee to thrive and grow
                        </p>
                        <p className='mb-4'>
                            LEAD framework (Leadership, Ecosystem,
                            Awareness, Data), led by DEI Council
                            and DEI Champions, advances our
                            commitment to diversity, equity and
                            inclusion. We focus on five areas:
                            gender, differently-abled individuals,
                            disadvantaged communities,
                            disadvantaged locations and
                            LGBTQIA+. This year, coverage of bias
                            and inclusion training was expanded,
                            external benchmarking surveys were
                            undertaken, focus groups were hosted,
                            and DEI Month was celebrated
                        </p>
                        <p className='mb-4'>
                            We maintain constructive union
                            relations through regular dialogue,
                            supporting a stable work environment.
                            In the past year, we revised several
                            employee policies and processes
                            to enhance clarity and accessibility,
                            incorporating internal feedback and
                            external benchmarks. Additionally, the
                            leadership team has defined cultural
                            anchors and leadership competencies,
                            which will be integrated into key
                            processes over the next year.
                        </p>

                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 space-y-20 mt-10 pb-10">
                <div
                    id="building"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['building'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 text-xl backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <h3 className='font-[900] text-2xl mb-4 text-[#2368b3]'>
                            Building Capabilities for Today and Tomorrow
                        </h3>
                        <p className='mb-4 bg-[#f0ecf1] p-4 border-t-4 border-[#a088ac]'>
                            Our Learning Architecture
                            provides us with a
                            structured approach to
                            building capabilities.
                            We have prioritised
                            sharpening functional skills
                            through domain-specific
                            programmes such as FinX,
                            SalesX, Business Excellence,
                            continuous improvement
                            and project management.
                        </p>
                        <p className='mb-4 bg-[#e9f3f0] p-4 border-t-4 border-[#41b2a2]'>
                            We prioritised continuous
                            learning of our employees
                            through our ‘en-RICH’
                            learning platforms, such as
                            Tata Tomorrow University
                            and LinkedIn Learning
                            which allows employees
                            to upskill as per their
                            needs and requirements.
                        </p>
                        <p className='mb-4 bg-[#e7f6fd] p-4 border-t-4 border-[#40aeef]'>
                            Data and digital skills
                            were addressed through
                            ‘Transcend’ programme
                            at foundational
                            and advanced levels.
                        </p>
                        <p className='mb-4 bg-[#fef5e7] p-4 border-t-4 border-[#f8b841]'>
                            Our manager and leadership development programmes include flagship initiatives
                            such as the Tata Group Emerging/Executive/Strategic Leadership Seminars, Blue Mint
                            for those with early leadership potential, the ‘Breakthrough Series’ for women leaders,
                            ‘INVEST’, ‘Coach Pro’, and ‘Coach and Nurture’ for enhancing the skills of people managers.
                            Furthermore, we’ve expanded our Educational Assistance Programme by offering
                            Executive MBA opportunities in partnership with TMTC and SDA Bocconi.
                        </p>
                        <div>
                            <img src="./ESG/hr/46-IMG.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto bg-[#eef6f3] px-6 space-y-20 mt-10 pb-10">
                <div
                    id="Strengthening"
                    data-animate
                    className={`scroll-mt-30 transition-all duration-1000 delay-100 transform ${isVisible['building'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-white/70 text-xl backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
                        <h3 className='font-[900] text-2xl mb-4 text-[#2368b3]'>
                            Strengthening Our Employee
                            Value Proposition
                        </h3>
                        <p className='py-4 border-t-2 border-[#41b2a2]'>
                            Rooted in the ethos of the Tata brand,
                            our EVP continues to evolve. To enhance
                            engagement and experience, we introduced
                            ‘Amber’, an AI-powered continuous listening
                            tool that gathers confidential employee
                            feedback, helping in proactively addressing
                            concerns and improving experiences.
                        </p>
                        <p className='py-4 border-t-2 border-[#41b2a2]'>
                            Recognition programmes foster a culture
                            of appreciation through digital peerto-peer platforms. Career advancement
                            initiatives such as ‘Springboard’ talent
                            management framework and ‘SHINE+’
                            framework offer cross-functional exposure
                            and opportunities.
                        </p>
                        <p className='py-4 border-t-2 border-[#41b2a2]'>
                            Under our ‘We Care’ framework, we
                            advanced physical, mental, financial
                            and social well-being programmes. This
                            includes Employee Assistance Programmes
                            across India, Magadi and the UK, the
                            introduction of Refyne (Earned Wage
                            Access platform) as a part of the financial
                            well-being provisions and the third edition
                            of Career Crafters, a career guidance
                            initiative for employee’s children.
                        </p>
                        <p className='py-4 border-t-2 border-[#41b2a2]'>
                            The integrated township model at
                            Mithapur and Magadi continues to attract
                            and retain talent by combining workplace,
                            home and community amenities such as
                            schools, healthcare and recreation.
                        </p>
                        <div className='flex md:flex-row flex-col gap-4 mb-4 items-stretch'>
                            {/* First Card */}
                            <div className='md:w-1/2 flex'>
                                <div className="flex flex-col h-full bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full">
                                    <div className="bg-gradient-to-r from-[#1368b4] to-transparent px-4 rounded-t-md mb-5">
                                        <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 mb-3">
                                            Case Study
                                        </div>
                                        <h3 className="font-semibold text-2xl sm:text-3xl">
                                            Tata Chemicals Europe: <br />
                                            Restructuring and Growth Plans
                                        </h3>
                                    </div>

                                    <div className="bg-white text-black rounded-br-4xl mt-0 flex-grow flex flex-col divide-y divide-gray-300">
                                        <div className="w-full p-6 text-[#0057a0] text-xl font-medium leading-7">
                                            In 2024, Tata Chemicals Europe (TCE) announced a significant restructuring
                                            to shift its focus on high-grade specialty products, investing £60 million
                                            in a state-of-the-art sodium bicarbonate plant in Northwich. This facility
                                            will triple the high-grade production capacity, supporting sustainability
                                            efforts by using captured CO2 to produce Ecokarb. The new facility
                                            aims to start full operations by early 2028.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Second Card */}
                            <div className='md:w-1/2 flex'>
                                <div className="flex flex-col h-full bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full">
                                    <div className="bg-gradient-to-r from-[#1368b4] to-transparent px-4 rounded-t-md mb-5">
                                        <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 mb-3">
                                            Case Study
                                        </div>
                                        <h3 className="font-semibold text-2xl sm:text-3xl">
                                            Advancing our DEI Journey
                                        </h3>
                                    </div>

                                    <div className="bg-white text-black rounded-br-4xl mt-0 flex-grow flex flex-col md:flex-row justify-between divide-gray-300">
                                        <div className="w-full md:w-2/3 p-6 text-[#0057a0] text-base sm:text-lg font-normal leading-7">
                                            <p className="text-[#0057a0] font-medium mb-4">
                                                Last year, we took significant steps to strengthen diversity, equity and inclusion (DEI):
                                            </p>
                                            <ul className="list-disc list-inside space-y-3 text-black">
                                                <li>Introducing unconscious bias training across all functions.</li>
                                                <li>Conducting AON Voice of Women Survey and Focus Group Discussions led by CHRO.</li>
                                                <li>Celebrating the Annual DEI Month with several initiatives to create awareness on inclusion and culminating in a vibrant International Women’s Day event.</li>
                                            </ul>
                                        </div>
                                        <div className="w-full md:w-1/3 p-6 flex flex-col items-start justify-center">
                                            <h1 className="text-[2.5rem] font-extrabold text-[#522a8f] leading-none mb-2">50%</h1>
                                            <hr className="border-t border-gray-400 w-10 mb-2" />
                                            <p className="text-black text-base sm:text-lg leading-6">
                                                Women representation among Graduate Engineers hired from Campus
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div>
                        <img src="./ESG/hr/47-IMG.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanResources;
