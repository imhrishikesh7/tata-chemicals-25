import React from 'react'
import ImageCarousel from '../../Components/ImageCarousel'
import HeaderWRedBottom from '../../Components/HeaderWRedBottom'
import RevenueChart from '../../Components/RevenueChart'


const data = {
    revenue: [
      { year: 'FY25', value: 14887, width: 85, color: 'bg-[#0056a3]' },
      { year: 'FY24', value: 15421, width: 88, color: 'bg-[#2ca9a1]' },
      { year: 'FY23', value: 16789, width: 95, color: 'bg-[#7cc3b9]' },
      { year: 'FY22', value: 12622, width: 72, color: 'bg-[#add4ce]' },
    ],
    EBITDA: [
      { year: 'FY25', value: 1953, width: 55, color: 'bg-[#0056a3]' },
      { year: 'FY24', value: 2847, width: 80, color: 'bg-[#2ca9a1]' },
      { year: 'FY23', value: 3822, width: 95, color: 'bg-[#7cc3b9]' },
      { year: 'FY22', value: 2305, width: 60, color: 'bg-[#add4ce]' },
    ],
    PAT: [
      { year: 'FY25', value: '354', width: 25, color: 'bg-[#0056a3]' },
      { year: 'FY24', value: '449', width: 35, color: 'bg-[#2ca9a1]' },
      { year: 'FY23', value: 2452, width: 95, color: 'bg-[#7cc3b9]' },
      { year: 'FY22', value: 1400, width: 55, color: 'bg-[#add4ce]' },
    ],
    cashFromOperations: [
      { year: 'FY25', value: 1761, width: 55, color: 'bg-[#0056a3]' },
      { year: 'FY24', value: 3016, width: 95, color: 'bg-[#2ca9a1]' },
      { year: 'FY23', value: 2971, width: 92, color: 'bg-[#7cc3b9]' },
      { year: 'FY22', value: 1645, width: 50, color: 'bg-[#add4ce]' },
    ],
    netWorth: [
      { year: 'FY25', value: 22501, width: 88, color: 'bg-[#0056a3]' },
      { year: 'FY24', value: 23114, width: 92, color: 'bg-[#2ca9a1]' },
      { year: 'FY23', value: 20642, width: 80, color: 'bg-[#7cc3b9]' },
      { year: 'FY22', value: 19157, width: 72, color: 'bg-[#add4ce]' },
    ],
    netDebtToEquity: [
      { year: 'FY25', value: 0.25, width: 75, color: 'bg-[#0056a3]' },
      { year: 'FY24', value: 0.20, width: 60, color: 'bg-[#2ca9a1]' },
      { year: 'FY23', value: 0.22, width: 66, color: 'bg-[#7cc3b9]' },
      { year: 'FY22', value: 0.26, width: 78, color: 'bg-[#add4ce]' },
    ],
  };
  

const formatTitle = (key) =>
    key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());

const BOD = () => {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
            {/* Heading */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-[#1368b4] font-bold mb-8">
                    Board of Directors
                </h1>
            </div>

            {/* Full-width Carousel */}
            <ImageCarousel />

            {/* Full-width Announcement Box */}
            <div className="bg-[#0b3f7e] rounded-br-[70px] flex p-4 sm:p-6 md:p-8 lg:p-10 text-white my-10">
                <div className="bg-[#40b2a2] w-1 sm:w-2 md:w-2 mr-4 shrink-0"></div>
                <p className="text-lg sm:text-xl leading-relaxed">
                    Mr. N. Chandrasekaran stepped down from the position of Director and Chairman of the Board of Directors of the Company
                    with effect from May 29, 2025. The Board of Directors placed on record their highest appreciation for the guidance, support
                    and the leadership provided by Mr. N. Chandrasekaran as Chairman of the Company during his tenure. Mr. S. Padmanabhan
                    has been appointed as the Chairman of the Board with effect from May 30, 2025.
                </p>
            </div>

            {/* Centered Ending Text */}
            <div className="border-b pb-10">
                <p>
                    You can read the detailed profiles of our Board of Directors at
                </p>
                <a className='text-[#1368b4]' href="https://www.tatachemicals.com/about-us/leadership-team/board-of-directors" target="_blank" rel="noopener noreferrer">
                    https://www.tatachemicals.com/about-us/leadership-team/board-of-directors
                </a>
            </div>
            <div className="mt-8 flex gap-6">
                {/* A–F Labels Section (5 parts) */}
                <div className="flex flex-wrap gap-4 flex-[5]">
                    {[
                        { letter: 'A', label: 'Audit Committee' },
                        { letter: 'B', label: 'Nomination and Remuneration Committee' },
                        { letter: 'C', label: 'Stakeholders Relationship Committee' },
                        { letter: 'D', label: 'Corporate Social Responsibility Committee' },
                        { letter: 'E', label: 'Risk Management Committee' },
                        { letter: 'F', label: 'Safety, Health, Environment and Sustainability Committee' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-white border border-[#0b3f7e] flex items-center justify-center text-[#000000] font-bold text-sm">
                                {item.letter}
                            </div>
                            <span className="text-sm text-[#000000] font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Legend Section (1 part) */}
                <div className="flex flex-col justify-center gap-4 flex-[1]">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#0b3f7e]"></div>
                        <span className="text-sm">Chairperson</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#40b2a2]"></div>
                        <span className="text-sm">Member</span>
                    </div>
                </div>
            </div>
            <div className="bg-[#eaf4f1] rounded-tr-[70px] mt-10">
                <div className='w-[90%] m-auto pb-10'>
                    {/* Subheading */}
                    <div className="bg-[#40b2a2] text-white font-bold text-sm sm:text-xl pb-1 pt-1 pr-2 pl-2 w-fit mb-6">
                        Senior Management Personnel*
                    </div>

                    {/* 5x2 Grid of Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Mr. R. Mukundan", role: "Managing Director and CEO" },
                            { name: "Mr. John Doe", role: "Chief Financial Officer" },
                            { name: "Ms. Jane Smith", role: "Chief Operating Officer" },
                            { name: "Mr. Arjun Mehta", role: "Chief Technology Officer" },
                            { name: "Ms. Priya Desai", role: "Chief Marketing Officer" },
                            { name: "Mr. Rohit Sharma", role: "Head of Strategy" },
                            { name: "Ms. Kavita Nair", role: "Chief Legal Officer" },
                            { name: "Mr. Amit Khanna", role: "Chief HR Officer" },
                            { name: "Ms. Neha Patel", role: "Head of Sustainability" },
                            { name: "Mr. Sameer Verma", role: "Chief Compliance Officer" },
                        ].map((person, i) => (
                            <div key={i} className="flex flex-col">
                                <h2 className="text-[#432c87] text-base font-bold mb-1">
                                    {person.name}
                                </h2>
                                <p className="text-[#4d4d4f] text-sm">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <p className='italic'>*As on June 1, 2025</p>
            </div>
            <div className='mt-15'>
                <h1 className='text-3xl text-[#1368b4] font-bold'>Financial Performance</h1>
                <HeaderWRedBottom />
                <div className="flex flex-wrap">
                    {Object.entries(data).map(([category, values]) => (
                        <div key={category} className="w-full md:w-1/2 lg:w-1/3">
                            <RevenueChart title={formatTitle(category)} data={values} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
            <p className="text-lg italic mt-4">
  *After Exceptional items of INR 861 crore in FY24 and INR 125 crore in FY25
</p>

            </div>
        </div>
    )
}

export default BOD
