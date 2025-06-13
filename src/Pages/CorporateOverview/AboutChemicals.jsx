import React from 'react'
import Awards from '../../Components/Awards'

const formatTitle = (key) =>
    key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());

const BOD = () => {
    const data = [
        {
            title: 'mission',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-1.png',
            desc: 'Serving Society through Science',
        },
        {
            title: 'vision',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-2.png',
            desc: 'Be a leading sustainable chemistrysolutions company',
        },
        {
            title: 'leadership',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-3.png',
            desc: 'We have become the preferred choice for customers seeking sustainable chemistry solutions worldwide',
        },
        {
            title: 'values',
            img: 'CorporateOverview/AboutChemicals/06-icon-img-4.png',
            desc: 'S.P.I.C.E.',
        },
    ];
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
            {/* Heading */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-[#1368b4] font-bold mb-8">
                    About Tata Chemicals
                </h1>
            </div>
            <div className="w-full md:px-6 md:py-10">
                <div className="flex flex-wrap justify-center gap-8">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border text-center max-w-full md:w-[20%] border-[#40b2a2]  p-6 w-full"
                        >
                            <div className="flex items-center justify-center bg-white rounded-full mb-4 p-1 shadow-md">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <h3 className="text-[#40b2a2] font-semibold text-2xl">{item.title}</h3>
                            <p className="text-base text-gray-700 mt-2">{item.desc}</p>

                            {/* Small red line below description */}
                            <div className="w-10 h-[3px] bg-red-600 rounded-full mt-3" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full h-[120px] gap-2 border-b mb-10">
                <div className="flex-1 flex items-center justify-center text-center">
                    3rd - largest Soda Ash
                    producer globally
                    (ex. China)
                </div>
                <div className="flex-1 flex items-center justify-center text-center">5th - largest Sodium
                    Bicarbonate
                    producer globally</div>
                <div className="flex-1  flex items-center justify-center text-center">Leading
                    Producer of salt
                    in India and the UK </div>
                <div className="flex-1  flex items-center justify-center text-center">Zero freshwater
                    withdrawal and zero waste
                    to landfill at Mithapur</div>
                <div className="flex-1  flex items-center justify-center text-center">Pioneer in fermentation
                    product technologies
                    in India</div>
            </div>
            <div className="w-full px-6 py-10">
                <h1 className='text-[#1368b4] text-3xl font-bold mb-6 text-center'>Our Presence</h1>

                {/* Top Region Blocks */}
                <div className="flex flex-wrap justify-between border-b-[2px] border-black pb-8 mb-8">
                    {/* Region Block Reusable */}
                    {[
                        { title: 'Asia', value: '7,104 crore', employee: '3,471' },
                        { title: 'America', value: '5,261  crore', employee: '612' },
                        { title: 'Europe', value: '2,007 crore', employee: '377' },
                        { title: 'Africa', value: '669 crore', employee: '329' }
                    ].map((region, value, index) => (
                        <div key={index} className="flex-1 min-w-[220px] px-2">
                            <h1 className='text-[#ed1a3b] text-2xl font-bold border-b-2 border-[#1368b4] pb-2 mb-3 w-full'>
                                {region.title}
                            </h1>
                            <h2 className='text-[#432c87] text-2xl font-bold border-b border-black w-max'>₹ {region.value}</h2>
                            <h3 className='text-[#4d4d4f] text-2xl mb-3'>Revenue</h3>
                            <h2 className='text-[#432c87] text-2xl font-bold border-b border-black w-max'>{region.employee}</h2>
                            <h3 className='text-[#4d4d4f] text-2xl mb-3'>Employees</h3>
                        </div>
                    ))}
                </div>

                {/* Bottom Aligned Stats */}
                <div className="flex flex-wrap justify-between gap-4">
                    {/* Under Asia */}
                    <div className="flex flex-col items-start flex-1 min-w-[220px] px-2">
                        <h2 className='text-[#432c87] text-2xl font-bold border-b border-black w-max'>3</h2>
                        <h3 className='text-[#4d4d4f] text-2xl mb-3'>R&D Centers</h3>
                    </div>

                    {/* Under America */}
                    <div className="flex flex-col items-start flex-1 min-w-[220px] px-2">
                        <h2 className='text-[#432c87] text-2xl font-bold border-b border-black w-max'>15</h2>
                        <h3 className='text-[#4d4d4f] text-2xl mb-3'>Plants</h3>
                    </div>

                    {/* Under Europe */}
                    <div className="flex flex-col items-start flex-1 min-w-[220px] px-2">
                        <h2 className='text-[#432c87] text-2xl font-bold border-b border-black w-max'>Mumbai, India</h2>
                        <h3 className='text-[#4d4d4f] text-2xl mb-3'>Head Office</h3>
                    </div>
                    <div className="flex flex-col items-start flex-1 min-w-[220px] px-2">

                    </div>
                </div>
            </div>
            <div className="w-full px-6 py-10">
                <h1 className="text-[#1368b4] text-3xl font-bold mb-6 text-center">Highlights of FY 2025</h1>

                <div className="flex flex-wrap justify-between gap-x-8 border-black pb-8 mb-8">
                    {[
                        {
                            title: 'Financial',
                            value1: '₹ 14,887 crore',
                            des1: 'Revenue',
                            value2: '₹ 1,953 crore ',
                            des2: 'EBITDA',
                            bgcolor: '#1368b4',
                        },
                        {
                            title: 'Customer',
                            value1: '86',
                            des1: 'Customer Satisfaction Index (CSI)',
                            value2: '90',
                            des2: 'Net Promoter Score (NPS)',
                            bgcolor: '#40b2a2',
                        },
                        {
                            heading: 'Production Volume (MT)',
                            title: 'Operations',
                            value1: '36,76,780',
                            des1: 'Soda Ash',
                            value2: '16,83,320',
                            des2: 'Salt',
                            value3: '2,37,489',
                            des3: 'Bicarbonate',
                            bgcolor: '#a088ad',
                        },
                        {
                            title: 'Social',
                            value1: '72%',
                            des1: 'Employee Engagement Score',
                            value2: '34%',
                            des2: 'Increase in Renewable Energy',
                            value3: '₹ 22.54 crore',
                            des3: 'CSR Spend',
                            bgcolor: '#06aeef',
                        }
                    ].map((region, index) => (
                        <div
                            key={index}
                            className={`flex-1 min-w-[220px] px-2 ${index < 3 ? 'border-r border-black' : ''}`}
                        >
                            {/* Title with dynamic background */}
                            <div className="border-b mb-10">
                                <div
                                    className="text-white text-3xl font-bold w-[97%] rounded-tr-3xl px-2 py-1"
                                    style={{ backgroundColor: region.bgcolor }}
                                >
                                    {region.title}
                                    
                                </div>
                                
                            </div>
                            {region.heading && (
                                <h2 className="text-[#4d4d4f] text-xl font-bold mb-4">{region.heading}</h2>
                            )}

                            {/* Values and Descriptions */}
                            {['value1', 'value2', 'value3'].map((valKey, i) =>
                                region[valKey] ? (
                                    <div key={i} className="mb-6">
                                        <h2
                                            className="font-bold text-4xl"
                                            style={{ color: region.bgcolor }}
                                        >
                                            {region[valKey]}
                                        </h2>
                                        <div className="border-b border-black w-[80%] my-1" />
                                        <p className="text-[#4d4d4f] text-xl font-medium mt-3">
                                            {region[`des${i + 1}`]}
                                        </p>
                                    </div>
                                ) : null
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-[#1368b4] font-bold ">
                Performance Review
                </h1>
                <img src="CorporateOverview/AboutChemicals/07-Page-IMG.png" alt=""/>
            </div>
            <div>
            <h1 className="text-[#1368b4] text-3xl font-bold mb-6 mt-10 text-center">Awards and Recognitions</h1>
            <Awards />
            </div>
        </div>
    )
}

export default BOD
