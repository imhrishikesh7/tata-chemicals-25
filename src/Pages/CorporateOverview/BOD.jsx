import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '../../Components/Title';
import KnowMore from '../../Components/KnowMore';
import HeaderWRedBottom from '../../Components/HeaderWRedBottom';
import RevenueChart from '../../Components/RevenueChart';

const bodImages = [
    '/home/b1.webp',
    '/home/b2.webp',
    '/home/b3.webp',
    '/home/b4.webp',
    '/home/b5.webp',
    '/home/b6.webp',
    '/home/b7.webp',
    '/home/b8.webp',
];

const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute bottom-0 left-1/2 transform -translate-x-14 bg-white/50 hover:bg-white/70 border-[#2263a7] border rounded-full w-10 h-10 flex items-center justify-center z-10"
        aria-label="Previous"
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
        </svg>
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute bottom-0 left-1/2 transform translate-x-4 bg-white/50 hover:bg-white/70 border-[#2263a7] border rounded-full w-10 h-10 flex items-center justify-center z-10"
        aria-label="Next"
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
        </svg>
    </button>
);

const formatTitle = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());


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

const BOD = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">

            {/* Heading */}
            <div className="m-bold text-center mb-6">
                <Title text="Board of Directors" />
            </div>

            {/* BOD Slider */}
            <Slider {...sliderSettings}>
                {bodImages.map((img, i) => (
                    <div key={i} className="px-4 pb-10">
                        <div className="bg-white md:w-[300px] md:h-[480px] mx-auto rounded-xl overflow-hidden">
                            <img src={img} alt={`BOD ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div className="text-center mt-4">
                <KnowMore text="Explore More" />
            </div> */}

            {/* Announcement Box */}
            <div className="bg-[#0b3f7e] rounded-br-[70px] flex p-6 text-white my-10">
                <div className="bg-[#40b2a2] w-2 mr-4 shrink-0"></div>
                <p className="text-lg leading-relaxed">
                    Mr. N. Chandrasekaran stepped down from the position of Director and Chairman of the Board of Directors of the Company
                    with effect from May 29, 2025. The Board of Directors placed on record their highest appreciation for the guidance, support
                    and the leadership provided by Mr. N. Chandrasekaran as Chairman of the Company during his tenure. Mr. S. Padmanabhan
                    has been appointed as the Chairman of the Board with effect from May 30, 2025.
                </p>
            </div>

            {/* External Link */}
            <div className="border-b pb-10">
                <p className="text-lg">You can read the detailed profiles of our Board of Directors at</p>
                <a href="https://www.tatachemicals.com/about-us/leadership-team/board-of-directors" className="text-[#1368b4] text-lg" target="_blank" rel="noopener noreferrer">
                    https://www.tatachemicals.com/about-us/leadership-team/board-of-directors
                </a>
            </div>

            {/* Committee Labels and Legend */}
            <div className="mt-8 flex gap-6">
                {/* A–F Labels */}
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
                            <div className="w-5 h-5 rounded-full bg-white border border-[#0b3f7e] flex items-center justify-center text-black font-bold text-sm">
                                {item.letter}
                            </div>
                            <span className="text-sm text-black font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Legend */}
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

            {/* Senior Management */}
            <div className="bg-[#eaf4f1] rounded-tr-[70px] mt-10">
                <div className="w-[90%] mx-auto pb-10">
                    <div className="bg-[#40b2a2] text-white font-bold text-xl pb-1 pt-1 px-2 w-fit mb-6">
                        Senior Management Personnel*
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
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
                        ].map((person, i) => (
                            <div key={i}>
                                <h2 className="text-[#432c87] text-base font-bold mb-1">{person.name}</h2>
                                <p className="text-[#4d4d4f] text-sm">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-lg italic mt-2">*As on June 1, 2025</p>

            {/* Financial Charts */}
            <div className="mt-15">
                <h1 className="text-3xl text-[#1368b4] font-semibold">Financial Performance</h1>
                <HeaderWRedBottom />
                <div className="flex flex-wrap">
                    {Object.entries(data).map(([category, values]) => (
                        <div key={category} className="w-full md:w-1/2 lg:w-1/3">
                            <RevenueChart title={formatTitle(category)} data={values} />
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-lg italic mt-4">
                *After Exceptional items of INR 861 crore in FY24 and INR 125 crore in FY25
            </p>
        </div>
    );
};

export default BOD;
