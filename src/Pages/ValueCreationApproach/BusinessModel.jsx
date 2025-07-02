import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Zap, Target, Globe, Factory } from 'lucide-react';
import TopSection from '../../Components/TopSection';


// SDG image paths
const SDG_PATHS = {
    1: './business-model/sdgs/1.webp',
    2: './business-model/sdgs/2.webp',
    3: './business-model/sdgs/3.webp',
    4: './business-model/sdgs/4.webp',
    5: './business-model/sdgs/5.webp',
    6: './business-model/sdgs/6.webp',
    7: './business-model/sdgs/7.webp',
    8: './business-model/sdgs/8.webp',
    9: './business-model/sdgs/9.webp',
    10: './business-model/sdgs/10.webp',
    11: './business-model/sdgs/11.webp',
    12: './business-model/sdgs/12.webp',
    13: './business-model/sdgs/13.webp',
    14: './business-model/sdgs/14.webp',
    15: './business-model/sdgs/15.webp',
    16: './business-model/sdgs/16.webp',
    17: './business-model/sdgs/17.webp',
    18: './business-model/sdgs/18.webp',
    19: './business-model/sdgs/19.webp',
    20: './business-model/sdgs/20.webp'
};


// Output category icons mapping
const OUTPUT_ICONS = {
    'financial': './business-model/outputs/financial.webp',
    'production': './business-model/outputs/production.webp',
    'innovation': './business-model/outputs/innovation.webp',
    'employee': './business-model/outputs/employee.webp',
    'customer': './business-model/outputs/customer.webp',
    'environmental': './business-model/outputs/environmental.webp'
};

// Updated SDG component to use actual images
const SDGIcon = ({ number }) => (
    <div className="w-full h-full overflow-hidden shadow-md">
        <img
            src={SDG_PATHS[number]}
            alt={`SDG ${number}`}
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
            onError={(e) => {
                // Fallback to gradient background if image fails to load
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 text-white font-bold text-lg flex items-center justify-center rounded-lg">
                        ${number}
                    </div>
                `;
            }}
        />
    </div>
);



const renderBoldParts = (text = '') =>
    text.split(/(\*\*.*?\*\*)/g).map((part, idx) =>
        part.startsWith('**') && part.endsWith('**') ? (
            <strong key={idx} className="font-bold text-black">
                {part.slice(2, -2)}
            </strong>
        ) : (
            part
        )
    );

const BusinessModel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRef = useRef(null);
    const outputsRef = useRef(null);
    const sdgsRef = useRef(null);

    // Initialize GSAP timeline
    const tl = useRef(null);

    useEffect(() => {
        // Import GSAP dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.onload = () => {
            // GSAP is now available
            if (window.gsap) {
                animateContent();
            }
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (window.gsap) {
            animateContent();
        }
    }, [activeIndex]);

    const animateContent = () => {
        if (!window.gsap || !contentRef.current) return;

        const gsap = window.gsap;

        // Kill any existing animations
        gsap.killTweensOf([contentRef.current, outputsRef.current, sdgsRef.current]);

        // Create timeline
        const timeline = gsap.timeline();

        // Animate content container
        timeline.fromTo(contentRef.current,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }
        );

        // Animate content items
        const contentItems = contentRef.current.querySelectorAll('.content-item');
        timeline.fromTo(contentItems,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" },
            "-=0.3"
        );

        // Animate outputs
        if (outputsRef.current) {
            timeline.fromTo(outputsRef.current,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
                "-=0.2"
            );

            const outputItems = outputsRef.current.querySelectorAll('.output-item');
            timeline.fromTo(outputItems,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: "power1.out" },
                "-=0.3"
            );
        }

        // Animate SDGs
        if (sdgsRef.current) {
            timeline.fromTo(sdgsRef.current,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
                "-=0.4"
            );

            const sdgItems = sdgsRef.current.querySelectorAll('.sdg-item');
            timeline.fromTo(sdgItems,
                { opacity: 0, scale: 0.8, rotation: 5 },
                { opacity: 1, scale: 1, rotation: 0, duration: 0.4, stagger: 0.06, ease: "back.out(1.7)" },
                "-=0.3"
            );
        }
    };

    const inputCapitals = [
        {
            iconPath: './business-model/F.webp',
            title: 'Financial Capital',
            color: 'bg-[#edeff8]',
            content: [
                'Net Debt: **₹5,515 crore**',
                'Capital Employed: **₹29,573 crore**',
                '**0.25 net D/E ratio**',
                'Capital investments into brownfield/greenfield expansions'
            ],
            outputs: [
                { text: 'Revenue **₹14,887 crore**', icon: 'financial' },
                { text: 'EBITDA **₹1,953 crore**', icon: 'financial' },
                { text: 'Debt/EBITDA **2.9**', icon: 'financial' },
                { text: 'Net Cash from Operations **₹1,761 crore**', icon: 'financial' }
            ],
            sdgs: [6, 7, 8, 9, 12, 13],
        },
        {
            iconPath: './business-model/M.webp',
            title: 'Manufactured Capital',
            color: 'bg-[#f1f8f6]',
            content: [
                '**15** manufacturing sites across **5 countries**',
                'Capex incurred  **₹2,005 crore**',
                'Smart factory initiatives',
                'Commissioned **225 KT** soda ash, **140 KT** sodium bicarb, **70KT** salt capacity',
                'Multi-modal logistics and warehousing network',
                'Digitally integrated plant management systems'
            ],
            outputs: [
                { text: '**Sales**', icon: 'production' },
                { text: 'Soda Ash **3,533 KT**', icon: 'production' },
                { text: 'Sodium Bicarbonate **232 KT**', icon: 'production' },
                { text: 'Salt **1,639 KT**', icon: 'production' },
                { text: 'Enhancement in production volumes', icon: 'production' },
                { text: 'Increased asset uptime', icon: 'production' }
            ],
            sdgs: [7, 9, 12, 13, 8, 6],
        },
        {
            iconPath: './business-model/I.webp',
            title: 'Intellectual Capital',
            color: 'bg-[#fdf0ea]',
            content: [
                'Expertise in green chemistry, silica applications, fermentation-based prebiotics',
                'Process know-how for integrated and energyefficient operations',
                'R&D Expenditure (Capex + Revenue) **₹99 crore**',
                'Cumulative patents filed **445***',
                'R&D Professionals **209+**'
            ],
            outputs: [
                { text: 'New patents granted **3**', icon: 'innovation' }
            ],
            sdgs: [9, 12, 13, 7, 8, 6],
        },
        {
            iconPath: './business-model/H.webp',
            title: 'Human Capital',
            color: 'bg-[#f3f0f4]',
            content: [
                'Employees **4,789**',
                'Training **2.7 days/employee**',
                'TRIFR: **1.34**'
            ],
            outputs: [
                { text: 'High employee retention **93%**', icon: 'employee' },
                { text: 'Improved safety metrics and engagement scores', icon: 'employee' }
            ],
            sdgs: [8, 5, 3, 4, 10, 13],
        },
        {
            iconPath: './business-model/S.webp',
            title: 'Social and Relationship Capital',
            color: 'bg-[#ecf8fe]',
            content: [
                'B2B customer partnerships for tailored product development',
                'CSR Spend: **₹22.54 crore**',
                'CSI Score: **86**'
            ],
            outputs: [
                { text: 'Expanded reach: \n Dealers **6,800** | Retailers **93,000**', icon: 'customer' },
                { text: 'Strengthened supply partnerships', icon: 'customer' },
                { text: 'Growth in customer satisfaction', icon: 'customer' },
                { text: 'NPS **90**', icon: 'customer' },
                { text: 'CSR Beneficiaries **2.2 lakh**', icon: 'customer' }
            ],
            sdgs: [11, 17, 4, 3, 9, 8],
        },
        {
            iconPath: './business-model/N.webp',
            title: 'Natural Capital',
            color: 'bg-[#f5f5ea]',
            content: [
                'Consistent focus on reducing carbon footprint, circularity initiatives and biodiversity protection.',
                'Trona Consumption: **47,33,022 MT**',
                'Solar Salt Usage: **29,64,402 MT**',
                'Water Withdrawal: **10,03,29,509 KL**'],
            outputs: [
                { text: 'Freshwater consumption **1,00,19,711 KL**', icon: 'environmental' },
                { text: 'CO2 emissions: \n**Scope 1: 47,70,357 MT** \n **Scope 2: 75,534 MT**', icon: 'environmental' }
            ],
            sdgs: [6, 7, 12, 13, 15, 9],
        },
    ];

    const activeCapital = inputCapitals[activeIndex];

    const handleTabClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="min-h-screen ">
            {/* <TopSection 
            title="A Resilient Business Model" 
            d
            /> */}
            <TopSection
                title="A Resilient Business Model"
            />

            <div className="container mx-auto px-6 py-10">
                {/* Dashboard Section */}


                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  mx-auto mb-16">
                    {/* Left Sidebar - Input Tabs */}
                    <div className="lg:col-span-1 bg-[#ececec]/50 rounded-2xl p-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-1 h-6"></div>
                            Input Capitals
                        </h2>
                        <div className="space-y-6">
                            {inputCapitals.map((capital, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTabClick(index)}
                                    className={`w-full text-left p-4 border bg-white cursor-pointer border-gray-200 shadow-lg rounded-lg transition-all duration-300 transform hover:scale-102`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg border border-gray-200 shadow-lg bg-gradient-to-r bg-white ${activeIndex === index ? 'scale-110 shadow-lg' : ''
                                            } transition-all duration-300`}>
                                            <img
                                                src={capital.iconPath}
                                                alt={capital.title}
                                                className="w-5 h-5 object-contain"
                                                onError={(e) => {
                                                    // Fallback to a simple colored square if image fails
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = '<div class="w-4 h-4 bg-white/30 rounded"></div>';
                                                }}
                                            />
                                        </div>
                                        <span className="font-semibold text-gray-800 text-base">{capital.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:col-span-3 space-y-4 bg-[#ececec]/50 p-4 rounded-2xl">
                        {/* Input Details */}
                        <div ref={contentRef} className="rounded-xl bg-white shadow-lg border border-gray-200 p-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-3 rounded-lg bg-gradient-to-r bg-white shadow-lg transform transition-all duration-300 hover:scale-110`}>
                                    <img
                                        src={activeCapital.iconPath}
                                        alt={activeCapital.title}
                                        className="w-6 h-6  object-contain "
                                        onError={(e) => {
                                            e.target.parentElement.innerHTML = '<div class="w-6 h-6 rounded"></div>';
                                        }}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">{activeCapital.title}</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activeCapital.content.map((line, i) => (
                                    <div key={i} className="content-item p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-l-4 border-blue-300 transition-all duration-300 hover:shadow-md hover:border-blue-400 transform hover:-translate-y-1">
                                        <span className="text-gray-700">
                                            {renderBoldParts(line)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Outputs with Custom Icons */}
                            <div ref={outputsRef} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                                        {/* <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-sm mt-0.5 flex-shrink-0">
                                                    <img 
                                                        src={OUTPUT_ICONS} 
                                                        className="w-4 h-4 object-contain filter brightness-0 invert"
                                                        onError={(e) => {
                                                            // Fallback to a simple colored square if image fails
                                                            // e.target.style.display = 'none';
                                                            e.target.parentElement.innerHTML = '<div class="w-4 h-4 bg-white/30 rounded"></div>';
                                                        }}
                                                    />
                                                </div>  */}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">Outputs</h3>
                                </div>
                                <div className="space-y-3">
                                    {activeCapital.outputs.map((output, i) => (
                                        <div key={i} className="output-item p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-l-4 border-indigo-400 transition-all duration-300 hover:shadow-md hover:border-indigo-500 transform hover:-translate-y-1">
                                            <div className="flex items-start gap-3">
                                                {/* <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-sm mt-0.5 flex-shrink-0">
                                                    <img 
                                                        src={OUTPUT_ICONS[output.icon]} 
                                                        alt={output.icon}
                                                        className="w-4 h-4 object-contain filter brightness-0 invert"
                                                        onError={(e) => {
                                                            // Fallback to a simple colored square if image fails
                                                            e.target.style.display = 'none';
                                                            e.target.parentElement.innerHTML = '<div class="w-4 h-4 bg-white/30 rounded"></div>';
                                                        }}
                                                    />
                                                </div> */}
                                                <span className="text-gray-700 whitespace-pre-line flex-1">
                                                    {renderBoldParts(output.text)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SDGs */}
                            <div ref={sdgsRef} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg">
                                        <Globe className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">SDGs</h3>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {activeCapital.sdgs.map((sdgNum, index) => (
                                        <div key={sdgNum} className="sdg-item relative group transition-all duration-300 hover:scale-110">
                                            <div className="w-22 h-22 overflow-hidden border border-gray-200 group-hover:shadow-lg group-hover:border-green-300 transition-all duration-300">
                                                <SDGIcon number={sdgNum} />
                                            </div>
                                            {/* Tooltip */}
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                                SDG {sdgNum}
                                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Value Creation Process Section */}
                <section className="bg-white rounded-2xl shadow-lg p-8 mb-8 transition-all duration-500 hover:shadow-xl">
                    <h2 className="text-3xl md:text-3xl font-bold text-center mb-8">
                        Our Value Creation Process
                    </h2>

                    <div className="mb-12 flex justify-center">
                        <div className="bg-white rounded-lg p-6 md:w-2/3 text-center shadow-sm">
                            <img src="./business-model/Infographic.webp" alt="" />
                        </div>
                    </div>

                    <div className="">
                        <div className="bg-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                Approach
                            </h3>
                            <div className="space-y- flex md:flex-row flex-col justify-between flex-wrap items-stretch gap-">
                                <div className="border bg-white text-lg border-gray-300 shadow-lg md:w-[32%] it ems-start gap-3 p-6 rounded-lg transition-all duration-300 hover:bg-indigo-50">
                                    {/* <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 transition-all duration-300"></div> */}
                                    <h3 className='mb-3 text-[#1368b4] font-bold text-xl'>Efficient and Integrated Operations</h3>
                                    <p className='mb-3 '>
                                        Low-cost feedstock access (brine, trona, solar salt)
                                    </p>
                                    <p className='mb-3 '>
                                        Low-cost feedstock access (brine, trona, solar salt)
                                    </p>
                                    <p className='mb-3 '>
                                        Integrated manufacturing (e.g. Mithapur)
                                    </p>
                                    <p className='mb-3 '>
                                        Industry 4.0 and automation
                                    </p>
                                    <p className='mb-3 '>
                                        Lean logistics and warehousing efficiency
                                    </p>
                                    <div className='w-full h-[1px] bg-gray-300 mb-3'></div>
                                    <p className='mb-3 '>
                                        Digitised process control
                                    </p>
                                    <p className='mb-3 '>
                                        Global capacity optimisation
                                    </p>
                                    <p className='mb-3 '>
                                        Operational risk and safety management
                                    </p>
                                    <div className='w-full h-[1px] bg-gray-300 mb-3'></div>
                                    <p className='mb-3 '>
                                        Operational reliability and cost leadership
                                    </p>
                                </div>
                                <div className="border bg-white border-gray-300 shadow-lg md:w-[32%] it ems-start gap-3 text-lg p-6 rounded-lg transition-all duration-300 hover:bg-indigo-50">
                                    {/* <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 transition-all duration-300"></div> */}
                                    <h3 className='mb-3 text-[#1368b4] font-bold text-xl'>Customer-Centric Approach</h3>
                                    <p className='mb-3 '>
                                        Segmented approach for B2B and B2F
                                    </p>
                                    <p className='mb-3 '>
                                        Product development aligned with enduse requirements
                                    </p>
                                    <p className='mb-3 '>
                                        Technical support and VoC systems
                                    </p>
                                    <div className='w-full h-[1px] bg-gray-300 mb-3'></div>
                                    <p className='mb-3 '>
                                        Just-in-Time delivery
                                    </p>
                                    <p className='mb-3 '>
                                        Customised solutions for key customers
                                    </p>
                                    <p className='mb-3 '>
                                        Customer feedback loops
                                    </p>
                                    <div className='w-full h-[1px] bg-gray-300 mb-3'></div>

                                    <p className='mb-3 '>
                                        Strong client retention and valueadded services
                                    </p>
                                </div>
                                <div className="border bg-white shadow-lg border-gray-300 md:w-[32%] it ems-start gap-3 text-lg p-6 rounded-lg transition-all duration-300 hover:bg-indigo-50">
                                    {/* <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0 transition-all duration-300"></div> */}
                                    <h3 className='mb-3 text-[#1368b4] font-bold text-xl'>Sustainability as a Core Driver</h3>
                                    <p className='mb-3 '>
                                        Portfolio aligned with sustainability trends
                                    </p>
                                    <p className='mb-3 '>
                                        Strive for reducing carbon, water and energy intensity
                                    </p>
                                    <p className='mb-3 '>
                                        Circular use of CO₂ and sodium
                                    </p>
                                    <div className='w-full h-[1px] bg-gray-300 mb-3'></div>
                                    <p className='mb-3 '>
                                        Scope 3 emissions reduction (smart logistics)
                                    </p>
                                    <p className='mb-3 '>
                                        Renewable energy use
                                    </p>
                                    <p className='mb-3 '>
                                        Access to green financing and responsible sourcing
                                    </p>
                                    <div className='w-full h-[1px] bg-gray-300 mb-3'></div>
                                    <p className='mb-3 '>
                                        Regulatory alignment and environmental licence to operate
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl shadow-md border border-gray-100 p-6 mt-4 hover:shadow-lg transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                Enablers
                            </h3>
                            <div className="space-y-4  md:flex gap-3 ">
                                <div className='p-4 md:w-[25%] border-l flex flex-col bg-white justify-center border-r border-rose-600 h-[200px] rounded-lg shadow-lg '>
                                    <div className='h-20 w-20 mb-2 mx-auto'>
                                        <img src="./business-model/T.webp" className='h-full w-full object-contain' alt="" />
                                    </div>
                                    <p className='text-2xl text-center'>Technology (R&D)</p>
                                </div>
                                <div className='p-4 md:w-[25%] h-[200px] flex flex-col bg-white justify-center border-l border-r border-rose-600 rounded-lg shadow-lg '>
                                    <div className='h-20 w-20 mb-2 mx-auto'>
                                        <img src="./business-model/D.webp" className='h-full w-full object-contain' alt="" />
                                    </div>
                                    <p className='text-2xl text-center'>Digitalisation</p>
                                </div>
                                <div className='p-4 md:w-[25%] h-[200px] border-l bg-white flex flex-col justify-center border-r border-rose-600 rounded-lg shadow-lg '>
                                    <div className='h-24 w-24 mb-2 mx-auto'>
                                        <img src="./business-model/P.webp" className='h-full w-full object-contain' alt="" />
                                    </div>
                                    <p className='text-2xl text-center'>People</p>
                                </div>
                                <div className='p-4 md:w-[25%] h-[200px] border-l bg-white flex flex-col justify-center border-r border-rose-600 rounded-lg shadow-lg '>
                                    <div className='h-20 w-24 mb-2 mx-auto'>
                                        <img src="./business-model/Partners.webp" className='h-full w-full object-contain' alt="" />
                                    </div>
                                    <p className='text-2xl text-center'>Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stakeholder Outputs Section */}
                <section className="bg-gray-50 rounded-2xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1368b4]">
                        Stakeholder Outputs
                    </h2>
                    <div className="max-w-6xl mx-auto px-4 py-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Customers */}
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-bold text-[#1368b4] mb-3">Customers</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>High-quality and consistent supply of soda ash, bicarbonate, salt, silica and agri-products</li>
                                    <li>Customised solutions through product development collaborations</li>
                                    <li>Just-in-time delivery and responsive technical support</li>
                                    <li>Lower carbon footprint products supporting customer ESG goals</li>
                                </ul>
                            </div>

                            {/* Farmers */}
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-bold text-[#1368b4] mb-3">Farmers</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>Full suite of agri solutions including seeds, crop protection and farm advisory</li>
                                    <li>Farm mechanisation and weather-linked services</li>
                                    <li>Wide access through on-ground dealer and retailer network in 80% of Indian districts</li>
                                </ul>
                            </div>

                            {/* Employees */}
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-bold text-[#1368b4] mb-3">Employees</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>Safe and engaging work environment</li>
                                    <li>Upskilling opportunities in digital and operational domains</li>
                                    <li>Stable employment with zero labour unrest</li>
                                </ul>
                            </div>

                            {/* Communities */}
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-bold text-[#1368b4] mb-3">Communities</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>Local employment and skill-building</li>
                                    <li>CSR initiatives in education, health and infrastructure</li>
                                    <li>Environmental preservation through responsible resource use</li>
                                </ul>
                            </div>

                            {/* Investors */}
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-bold text-[#1368b4] mb-3">Investors</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>Steady financial returns and business resilience</li>
                                    <li>Exposure to sustainable, high-margin growth segments</li>
                                </ul>
                            </div>

                            {/* Suppliers and Partners */}
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
                                <h2 className="text-xl font-bold text-[#1368b4] mb-3">Suppliers and Partners</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>Stable sourcing relationships</li>
                                    <li>Shared sustainability and logistics improvements</li>
                                    <li>Collaboration on responsible procurement and transport</li>
                                </ul>
                            </div>

                            {/* Regulators */}
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:col-span-2">
                                <h2 className="text-xl font-bold text-[#1368b4] mb-3">Regulators</h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-800">
                                    <li>Compliance with environmental laws</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .hover\\:scale-102:hover {
                    transform: scale(1.02);
                }
            `}</style>
        </div>
    );
};

export default BusinessModel;