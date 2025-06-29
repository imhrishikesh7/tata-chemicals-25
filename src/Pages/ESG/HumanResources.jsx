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
                        <div className='flex md:flex-row flex-col gap-4 mb-4'>
                            <div className='md:w-1/2'>
                                <img src="./ESG/hr/47-Box-IMG.webp" className='' alt="" />
                            </div>
                            <div className='md:w-1/2'>
                                <img src="./ESG/hr/47-Box2-IMG.webp" className='' alt="" />
                            </div>
                        </div>
                        <div>
                            <img src="./ESG/hr/47-IMG.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HumanResources;
