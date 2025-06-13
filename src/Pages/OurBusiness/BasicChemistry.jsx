import React from 'react'
import HeadingWRedCorner from '../CorporateOverview/HeadingWRedCorner';

const BasicChemistry = () => {
    const columns = [
        [
            "Market leadership in India for Sodium Bicarbonate (#1) and Soda Ash (#3)",
            "Strong brand recognition and long-standing customer relationships",
            "High product quality and performance",
            "Innovation Centre at Pune, enabling product development and customer collaboration"
        ],
        [
            "Strong culture of safety to target zero harm",
            "Integrated energy and resource management, ensuring cost efficiency",
            "Deep commitment to sustainability and ESG principles"
        ],
        [
            "Robust and flexible supply chain, leveraging multimodal logistics",
            "Strategic global presence, ensuring competitive pricing and availability",
            "Stringent safety standards, ensuring Compliance and enhancing Process Efficiency"
        ]
    ];
    return (
        <div className='marginal'>
            <div className="max-w-7xl mx-auto mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-[#1368b4] font-bold mb-8">
                    Basic Chemistry Business
                </h1>
                <p className='text-[#432c87] text-2xl'>Tata Chemicals’ Basic Chemistry Business focuses on the production of essential inorganic
                    chemicals such as soda ash, sodium bicarbonate, and salt, which are used across glass,
                    detergents, food, and industrial sectors.</p>
            </div>
            <div>
                <h1 className="text-[#1368b4] text-3xl font-bold mb-6 text-center">Value Proposition</h1>

            </div>
            <div className="bg-[#f4f9f8] p-6 md:p-10 rounded-br-4xl">
                <div className="flex flex-col md:flex-row border border-[#dcdcdc] rounded-br-4xl">

                    {/* Image Column */}
                    <div className="w-full md:w-2/4 p-4 flex justify-center items-center order-1">
                        <img
                            src="OurBusiness/BasicChemistry/10-Page-IMG-1.png"
                            alt="Descriptive Alt"
                            className="max-w-full h-auto object-contain rounded-br-4xl"
                        />
                    </div>
                    {columns.map((group, idx) => (
                        <div key={idx} className="w-full md:w-1/4 p-4 space-y-6">
                            {group.map((text, i) => (
                                <div key={i} className="flex items-start space-x-2">
                                    <div className="w-6 h-1 bg-[#1368b4] mt-2 shrink-0"></div>
                                    <p className="text-[#4d4d4f] text-sm md:text-xl">{text}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <img src="OurBusiness/BasicChemistry/11-Page-IMG.png" alt="" />

                <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">

                    {/* Column 1 */}
                    <div className="w-full md:w-1/3">
                        <p className="text-xl mt-5">
                            Even with an oversupplied domestic soda ash market, Tata Chemicals remained competitive in India during the 2024–25 fiscal year.
                            The headwinds were addressed by strengthening customer partnerships and an expanded supply chain footprint.
                            Sodium bicarbonate was a key factor in propelling our growth in the initial years, particularly in industries with evolving
                            sustainability requirements. The salt business contributed to portfolio stability by addressing sustained demand across salt.
                        </p>

                        <h1 className="text-2xl text-[#1368b4] font-bold mt-5">Trends</h1>
                        <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                            <li>
                                Soda ash market faced oversupply with stable overall demand in other materials
                            </li>
                            <li>
                                Sodium bicarbonate demand grew driven by sustainability-focused segments
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full md:w-1/3 flex flex-col space-y-4">
                        <h1 className="text-2xl text-[#1368b4] font-bold mt-5">Operational Highlights</h1>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            Improved multimodal logistics by adding container rake motions, resulting in faster delivery, increased visibility and market share
                        </p>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            Process twin implemented across plants, improving quality and efficiency.
                        </p>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            Improved customer interactions by implementing proactive engagement strategies.
                        </p>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            Extended Saarthi platform to include in-plant movement and inbound logistics for key raw materials.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                        <h1 className="text-2xl text-[#1368b4] font-bold">Roadmap Ahead</h1>

                        {[
                            "Bring sharper focus on safety management, risk control and sustainability in operations.",
                            "Digitise and automate projects to increase operational efficiency and yield from products.",
                            "Expand sodium bicarbonate market leadership by targeting new customer segments and geographies.",
                            "Streamline logistics strategies to reduce costs and improve customer service.",
                            "Exercise IIoT, AI and data analytics to enhance production efficiency.",
                            "Work towards carbon neutrality by adopting renewable energy sources such as solar, wind and biomass fuels.",
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                <p className="text-[#4d4d4f] text-xl">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <div className="bg-[#003f84] text-white rounded-br-[50px] p-4 sm:p-6 md:p-4 w-full mt-10">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-[#1368b4] to-tranparent p-4 rounded-t-md mb-5">
                    <div className="bg-[#ed1a3b] text-white text-sm font-semibold inline-block px-3 py-1 rounded-br-2xl mb-2">
                        Case Study
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-semibold">Elevating Technology and Sustainability</h1>
                </div>

                {/* Main Content Box */}
                <div className="bg-white text-black rounded-br-4xl mt-0 flex flex-col md:flex-row divide-x-[1px] divide-gray-300">
                    {/* Left: Paragraph */}
                    <div className="w-full md:w-1/2 p-6 text-[#0057a0] text-lg font-medium leading-7">
                        The ability to offer multimodal logistics is a major differentiator. This year presented both challenges and opportunities.
                        We acted quickly by strengthening warehousing and delivery mechanisms, keeping inventory closer to core markets to enable faster distribution.
                        We expanded loose-fill delivery options, in line with sustainability goals to reduce packaging waste.
                    </div>

                    {/* Middle: Challenges */}
                    <div className="w-full md:w-1/4 p-6 space-y-4">
                        <h2 className="text-[#ed1a3b] text-xl font-bold mb-2">Challenges</h2>
                        <ul className="space-y-4 text-[#4d4d4f] text-base">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                Managing increased supply quantities, while remaining cost efficient and ensuring timely deliveries.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                Making packaging more sustainable by reducing reliance on traditional materials.
                            </li>
                        </ul>
                    </div>

                    {/* Right: Actions Taken */}
                    <div className="w-full md:w-1/4 p-6 space-y-4">
                        <h2 className="text-[#ed1a3b] text-xl font-bold mb-2">Actions Taken</h2>
                        <ul className="space-y-4 text-[#4d4d4f] text-base">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                Shifted more shipments to rail to reduce costs.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                Set up warehouses closer to key markets to speed up shipping.
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#00b398] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                Bulk shipments were increased by 57%.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <img src="OurBusiness/BasicChemistry/12-Page-IMG.png" alt="" />

                {/* Responsive flex column for mobile, row for larger screens */}
                <div className='flex flex-col lg:flex-row text-[#4d4d4f] gap-10'>

                    {/* Left Column */}
                    <div className='w-full lg:w-1/3'>
                        <p className='text-xl mt-5'>
                            Soda ash operations in the United States operated efficiently, utilising the energy-efficient trona mining process to ensure production stability. Despite the ongoing challenges in export markets, the North American market remained stable due to strong domestic demand. We maintained operational continuity by means of effective planning and response.
                        </p>
                        <h1 className='text-2xl text-[#1368b4] font-bold mt-5'>Trends</h1>
                        <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                            <li>Stable domestic demand for soda ash in North America</li>
                            <li>Export prices under stress, particularly in South East (SE) Asia</li>
                        </ul>
                    </div>

                    {/* Middle Column */}
                    <div className='w-full lg:w-1/3 flex flex-col space-y-4'>
                        <h1 className='text-2xl text-[#1368b4] font-bold mt-5'>Operational Highlights</h1>

                        <div className='bg-[#ed1a3b] h-[2px] w-[20%]'></div>
                        <p className='text-xl'>
                            Mine operations exceeded performance targets, improving over FY 2023–24 by more than 9% and supporting strong soda ash demand.
                        </p>

                        <div className='bg-[#ed1a3b] h-[2px] w-[20%]'></div>
                        <p className='text-xl'>
                            Surface operations met targets and delivered strong annual performance despite external market pressures.
                        </p>

                        <div className='bg-[#ed1a3b] h-[2px] w-[20%]'></div>
                        <p className='text-xl'>
                            Post ANSAC exit, direct sales into international markets were expanded.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6 mt-5 lg:mt-0">
                        <h1 className="text-2xl text-[#1368b4] font-bold">Roadmap Ahead</h1>

                        {[
                            "Fixed Costs optimisation and debt reduction.",
                            "Advance efforts to reduce carbon emissions through the ongoing transition from coal to less carbonintensive energy sources.",
                            "Further optimise production processesto minimise environmental impact.",
                            "Expand market presence in emerging economies.",
                            "Invest in digital technologies to enhance efficiency across operations.",
                            "Continued collaboration with external partners on the small modular nuclear reactor initiative.",
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                <p className="text-[#4d4d4f] text-xl">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div>
                    <HeadingWRedCorner title='UK' />
                </div>

                <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">

                    {/* Column 1 */}
                    <div className="w-full md:w-1/3">
                        <p className="text-xl mt-5">
                            UK soda ash demand declined.
                            Performance in salt and sodium
                            bicarbonate remained strong, driven
                            by sustainability-focused initiatives and
                            operational efficiency.
                        </p>

                        <h1 className="text-2xl text-[#1368b4] font-bold mt-5">Trends</h1>
                        <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                            <li>
                                Muted demand for soda
                                ash in the UK market
                            </li>
                            <li>
                                Sustained demand for salt and
                                sodium bicarbonate products
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full md:w-1/3 flex flex-col space-y-4">
                        <h1 className="text-2xl text-[#1368b4] font-bold mt-5">Operational Highlights</h1>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            For the production of sodium
                            bicarbonate, UK successfully
                            continued to operate its new 40 KT
                            carbon capture unit, producing CO2
                            in accordance with EIGA (European
                            Industrial Gases Association)
                            standard. The future sales will focus
                            more on premium products such as
                            pharma-grade, sodium bicarbonate.
                        </p>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            A new pharmaceutical-grade salt
                            manufacturing facility and related
                            warehousing were completed
                            and started operations.
                        </p>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            The Lostock soda ash production facility
                            was closed in Q4 FY25.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                        <h1 className="text-2xl text-[#1368b4] font-bold">Roadmap Ahead</h1>

                        {[
                            "Fixed Costs optimisation and debt reduction.",
                            "Facilitate the launch of an energyfrom-waste plant in collaboration with a third party at the Lostock site in late FY 2026 as part of decarbonisation efforts.",
                            "The first sales of EP/USP pharma salt are expected in FY26. This will allow to strengthen export capabilities in high-end applications.",
                            "Future involvement in hydrogen storage and supply will align with emerging energy transition requirements and infrastructure readiness.",
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                <p className="text-[#4d4d4f] text-xl">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="mt-10">
                <div>
                    <HeadingWRedCorner />
                </div>

                <div className="flex flex-col md:flex-row text-[#4d4d4f] gap-10">

                    {/* Column 1 */}
                    <div className="w-full md:w-1/3">
                        <p className="text-xl mt-5">
                            Standard Ash Magadi (SAM), comes
                            naturally from trona deposits in Lake
                            Magadi and is widely used in container
                            glass, silicates and detergents. Steady sales
                            and stronger pricing helped retain market
                            leadership in Africa.
                            Over the past year, we expanded in
                            the domestic market, grew presence
                            in Kenya, and strengthened position
                            as a key exporter.
                        </p>

                        <h1 className="text-2xl text-[#1368b4] font-bold mt-5">Trends</h1>
                        <ul className="list-disc list-inside text-xl text-[#4d4d4f] marker:text-[#40b2a2] space-y-3">
                            <li>
                                Growing customer preference for
                                sustainable soda ash alternatives
                            </li>
                            <li>
                                Increasing demand within Africa
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="w-full md:w-1/3 flex flex-col space-y-4">
                        <h1 className="text-2xl text-[#1368b4] font-bold mt-5">Operational Highlights</h1>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            Started trials of Eco Ash using solar ponds
                            to meet growing demand for sustainable
                            materials in Africa’s float glass sector.
                        </p>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            Commenced the Project of Electric Calciner
                            to expand capacity by about 50,000 TPA,
                            meeting the increasing demand for greener
                            soda ash worldwide.
                        </p>

                        <div className="bg-[#ed1a3b] h-[2px] w-[20%]"></div>
                        <p className="text-xl">
                            Strengthened focus on the local
                            market, increasing sales in Kenya and
                            strengthening our regional position.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="w-full md:w-1/3 bg-[#e7f6fd] rounded-md shadow-sm px-4 py-5 space-y-6">
                        <h1 className="text-2xl text-[#1368b4] font-bold">Roadmap Ahead</h1>

                        {[
                            "Increase production of eco-friendly soda ash by rolling out the Electric Calciner and a solar Photovoltaic Thermal plant, aiming to lower CO₂ emissions per tonne by about 20%.",
                            "Improve efficiency across operations and logistics.",
                            "Expand sodium carbonate sales into new regional markets.",
                            "Accelerate the shift to renewable energy, including solar and biomass, to support more sustainable production.",
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-4 h-[2px] bg-[#1368b4] mt-2 flex-shrink-0"></div>
                                <p className="text-[#4d4d4f] text-xl">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BasicChemistry