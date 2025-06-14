import React from 'react'
import HeaderWRedBottom from '../../Components/HeaderWRedBottom'

const A360Degree = () => {
    // Content data for different sections - har section ke liye alag data
    const sectionData = [
        {
            title: "Embracing AI and Digital Transformation",
            leftContent: `Automation, digitisation, analytics and AI/ML are extensively used in the industry, enhancing operational efficiency with increase in productivity, improving safety through video analytics and PSRM and optimising CRM for seamless customer experience. Approximately 40% of companies utilise AI, with 42% exploring its adoption. In the supply chain, businesses achieve better integration across multi-modal logistics and demand forecasting`,
            middleContent1: `A survey from 2024 shows that 77% of global manufacturers have implemented AI solutions, up from 70% in 2023. These solutions span production (31%), inventory management (28%) and customer service (28%), demonstrating AI's role in optimising operations.`,
            middleContent2: `Over the next five years, chemical companies are projected to invest about 5% of their annual revenue in digital operations solutions, aiming for efficiency improvements. Recent reports indicate that these digital initiatives have resulted in efficiency gains of 10-12%.`,
            rightContent: `As of 2023, approximately 36% of manufacturing companies are investing in AI and digital initiatives to enhance plant safety. Some of these initiatives are predictive analytics, digital twin models, AI powered computer vision systems for safety protocols etc. The usage of AI in plant safety has also seen significant growth over the past five years. From 2018 to 2023, the adoption of AI technologies in plant safety has increased by approximately 25%. This growth is driven by the need for improved safety measures, predictive maintenance and operational efficiency in manufacturing plants`
        },
        {
            title: "Sustainability and Green Innovation",
            leftContent: `Environmental regulations are becoming more stringent globally, pushing companies to adopt sustainable practices. Green chemistry initiatives, carbon footprint reduction, and circular economy principles are now integral to business strategies. Companies are investing heavily in renewable energy sources and waste reduction technologies.`,
            middleContent1: `Recent studies show that 65% of chemical companies have set net-zero targets by 2050. Investment in green technologies has increased by 40% since 2022, with focus on bio-based materials and energy-efficient processes.`,
            middleContent2: `The transition to sustainable practices is expected to require 8-10% of annual revenue investment over the next decade. Companies implementing comprehensive sustainability programs report 15-20% improvement in operational efficiency.`,
            rightContent: `Regulatory compliance costs have increased by 30% over the past three years, but companies with proactive sustainability measures report 25% better regulatory compliance rates. Green innovation is becoming a key differentiator in the market, with sustainable products commanding premium pricing.`
        },
        {
            title: "Supply Chain Resilience and Risk Management",
            leftContent: `Global supply chain disruptions have highlighted the need for more resilient and agile supply networks. Companies are diversifying suppliers, implementing digital supply chain tracking, and building strategic inventory buffers to mitigate risks.`,
            middleContent1: `Supply chain digitization has accelerated, with 80% of companies implementing real-time tracking systems. Investment in supply chain technology has grown by 35% since 2023, focusing on predictive analytics and automated procurement.`,
            middleContent2: `Risk management frameworks now include geopolitical risk assessment, climate impact analysis, and supplier financial health monitoring. Companies with robust risk management report 30% fewer supply disruptions.`,
            rightContent: `Regional supply chain networks are being established to reduce dependency on single sources. Near-shoring and friend-shoring strategies have become prevalent, with 45% of companies relocating critical suppliers closer to operations to ensure continuity.`
        },
        {
            title: "Customer-Centric Innovation and Market Expansion",
            leftContent: `Customer expectations are evolving rapidly, demanding more customized solutions, faster delivery times, and transparent sustainability credentials. Companies are investing in customer analytics and relationship management systems to better understand and serve their markets.`,
            middleContent1: `Market research indicates that 70% of customers now consider sustainability as a key factor in purchasing decisions. Companies with strong customer engagement platforms report 25% higher customer retention rates.`,
            middleContent2: `Investment in customer-facing digital platforms has increased by 50% since 2023. Companies are focusing on omnichannel experiences and personalized service delivery to maintain competitive advantage.`,
            rightContent: `New market opportunities are emerging in developing economies, with 60% of growth expected from Asia-Pacific and Latin American markets. Companies are adapting products and services to local needs while maintaining global quality standards.`
        }
    ];

    const ContentSection = ({ data, index }) => (
        <div key={index} className="mb-12">
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-4'>
                <div className="flex-1">
                    <h1 className='text-xl sm:text-2xl lg:text-3xl text-[#1368b4] m-semi-bold leading-tight'>
                        {data.title}
                    </h1>
                </div>
                <div className="flex-shrink-0">
                    <img 
                        src="ValueCreationApproach/18-Page-IMG.png" 
                        alt=""
                        className='w-12 h-16 sm:w-14 sm:h-18 md:w-16 md:h-20 lg:w-18 lg:h-22 object-contain'
                    />
                </div>
            </div>
            <HeaderWRedBottom />
            
            <div className="w-full mt-6 lg:mt-10">
                <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x border-gray-300 shadow-sm rounded-lg overflow-hidden">
                    {/* Left Box */}
                    <div className="lg:w-1/4 bg-[#eef5f3] p-4 sm:p-6 flex items-center justify-center rounded-bl-none lg:rounded-bl-[40px]">
                        <p className="text-[#0057a0] font-semibold text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-center lg:text-left">
                            {data.leftContent}
                        </p>
                    </div>

                    {/* Middle Box */}
                    <div className="lg:w-1/2 p-4 sm:p-6 flex flex-col gap-4">
                        <p className="text-[#333] text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            {data.middleContent1}
                        </p>
                        <hr className="border-gray-400" />
                        <p className="text-[#333] text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            {data.middleContent2}
                        </p>
                        <div className='mt-3 sm:mt-5 border-b border-[#1368b4] pb-1'>
                            <span className="text-[#ed1a3b] m-bold text-base sm:text-lg xl:text-xl">
                                Strategic Objectives
                            </span>
                        </div>
                        <div className="flex gap-2 mt-2 sm:mt-3">
                            <div className="bg-[#3e2c84] text-white text-sm sm:text-base lg:text-lg xl:text-xl px-2 py-1 rounded m-bold">
                                SP 1
                            </div>
                            <div className="bg-[#40b2a2] text-white text-sm sm:text-base lg:text-lg xl:text-xl px-2 py-1 rounded m-bold">
                                SP 4
                            </div>
                        </div>
                    </div>

                    {/* Right Box */}
                    <div className="lg:w-1/4 p-4 sm:p-6">
                        <p className="text-[#333] text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            {data.rightContent}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className='marginal'>
            <div className="px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <h1 className="m-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center text-[#1368b4] font-bold mb-6 sm:mb-8 leading-tight">
                    A 360-degree View of Operating Landscape
                </h1>
                
                {/* Introduction Text */}
                <div className='mb-8 sm:mb-12'>
                    <p className='text-[#432c87] text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-5 m-semi-bold leading-relaxed'>
                        Our operating environment is increasingly becoming more complex posing varied challenges and
                        opportunities. Having Manufacturing operations across four continents increase exposure to global
                        geopolitical developments and economic cyclicality. Being a chemicals manufacturing company, the
                        business is influenced by stringent environmental regulations and heightened social sensitivities.
                    </p>
                    <p className='text-base sm:text-lg lg:text-xl leading-relaxed'>
                        We are conscious of the influence of these mega trends and events on our business and have structured approaches
                        like materiality assessment, risk and mitigation frameworks among others to identify and assess these trends.
                    </p>
                </div>

                {/* Content Sections - Har section mein alag data */}
                {sectionData.map((data, index) => (
                    <ContentSection key={index} data={data} index={index} />
                ))}
                
                {/* Agar aur sections add karne hain, toh sectionData array mein add kar dena */}
            </div>
        </div>
    )
}

export default A360Degree