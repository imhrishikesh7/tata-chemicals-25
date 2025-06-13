import React from 'react'

const Saftey = () => {
    const steps = [
        "Digital boards and signages",
        "Gemba walk",
        "Marked pedestrian and vehicle zones through circulation plan",
        "Fire safety upgrades: hydrant lines, sprinklers, ERTs",
        "AI based traffic and vehicle Management System",
        "‘My Area My Machine’ ownership programme"
    ];
    return (
        <div>
            <div className='marginal'>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center text-[#1368b4] font-bold mb-8">
                    Safety at the Core
                </h1>
                <div className='flex '>
                    <div className='w-2/4 order-1'>
                        <p className='text-xl mt-17 ml-10'>
                            Tata Chemicals priortises achieving ‘Zero Harm’ by promoting a robust safety culture and
                            systematic safety management systems. Health, safety and environmental practices are
                            governed through ISO 45001, ISO 14001 and Responsible Care Certifications.
                        </p>
                    </div>
                    <div className='w-2/4'>
                        <h1 className="text-[#1368b4] text-3xl font-bold mb-6 text-center">EHS Governance Framework</h1>
                        <img src="CorporateOverview/Saftey/09-Page-IMG.webp" alt="" />
                    </div>
                </div>
                <div className='flex gap-3 mt-5'>
                    <div className='w-2/4'>
                        <h1 className="text-[#1368b4] text-3xl font-bold mb-4">Ensuring Safety Every Step of the Way</h1>
                        <p className='text-xl'>
                            We have deployed the Progressive Safety
                            Index (PSI) across all our manufacturing
                            sites to track leadership engagement,
                            workplace safety practices employee
                            competency, behaviour-based safety
                            and review systems.
                        </p>
                        <div className='flex flex-row gap-10 items-end'>
                            <div>
                                <h2 className='text-xl mt-5 text-[#ed1a3b] font-bold'>PSI Implementation Status</h2>
                                <h1 className='text-3xl text-[#432c87] mt-2 font-bold border-b border-black w-fit pb-3 mb-2'>100%</h1>
                                <p className='text-lg'>of manufacturing sites have adopted PSI</p>
                            </div>
                            <div>
                                <h1 className='text-3xl text-[#432c87] mt-2 font-bold border-b border-black w-fit pb-3 mb-2'>85%</h1>
                                <p className='text-lg'>of the enterprise-wide target has been achieved</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl'>We build capability among our employees and business partners through Safety Felt Leadership programmes and targeted skill development initiatives. We also strengthen engagement with contractors and partners through activities such as safety toolbox talks, monthly compliance review and trade validations.</p>
                        </div>
                    </div>
                    <div className='w-2/4'>
                        <div className='h-full flex-row  items-center'>
                            <h1 className="text-[#1368b4] text-3xl font-bold text-center">Safety Performance (Consolidated)</h1>
                            <div className='flex h-full flex-row items-center gap-4'>
                                <div className='md:w-1/2'>
                                    <img src="CorporateOverview/Saftey/09-Page-IMG-1.webp" alt=""
                                        className='mt-[2.5px] '
                                    />
                                </div>
                                <div className='md:w-1/2'>
                                    <img src="CorporateOverview/Saftey/09-Page-IMG-2.webp" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex gap-3 mt-10 '>
                    <div className='w-2/4'>
                    <div className='mb-8'>
                        <h1 className="text-[#1368b4] text-3xl font-bold mb-3">Process Safety and Risk Management</h1>
                        <p className='text-xl'>
                            Process Safety and Risk Management (PSRM) has
                            been implemented at our manufacturing sites
                            in India. The adoption of Hazard and Operability
                            Study (HAZOP) study recommendations and
                            Normalisation of Deviation (NoD) procedures
                            has strengthened our risk-based decisionmaking model at critical sites, leading to better
                            identification and mitigation of process risks,
                            particularly in the storage and handling of
                            hazardous chemicals. We do not have any tier 1
                            process safety incidents in the past 5 years.
                            <br />
                            Process Safety and Risk Management (PSRM) has
                            been implemented at our manufacturing sites
                            in India. The adoption of Hazard and Operability
                            Study (HAZOP) study recommendations and
                            Normalisation of Deviation (NoD) procedures
                            has strengthened our risk-based decisionmaking model at critical sites, leading to better
                            identification and mitigation of process risks,
                            particularly in the storage and handling of
                            hazardous chemicals. We do not have any tier 1
                            process safety incidents in the past 5 years.
                        </p>
                        </div>
                        <h1 className="text-[#1368b4] text-3xl font-bold mb-3">Occupational Health Measures</h1>
                        <div className='mt-5'>
                            <p className='text-xl'>Occupational health is supported
                                through initiatives such as regular health
                                checkups that are performed to assess
                                employee well-being. Further, industrial
                                hygiene evaluations are conducted to
                                evaluate exposure to physical, chemical
                                and biological risks, with necessary
                                corrective and preventive measures
                                implemented as required.</p>
                        </div>
                    </div>
                    <div className='w-2/4'>
                        <div className='h-full'>
                            <h1 className="text-[#1368b4] text-3xl font-bold text-center">Workplace Enhancements</h1>
                            <div className="h-full justify-center items-center flex-col flex ">
                                <div className='w-fit m-auto flex flex-col gap-10'>
                                {steps.map((text, index) => (
                                    <div key={index} className="flex w-fit items-start gap-4">
                                        {/* Circle with number */}
                                        <div className="flex items-center">
                                            <div className="relative">
                                                <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center">
                                                    <span className="text-[#1368b4] font-bold">{index + 1}</span>
                                                </div>
                                                <div className="absolute top-1/2 left-full w-6 h-0.5 bg-red-500"></div>
                                            </div>
                                        </div>
                                        <p className="text-[#4d4d4f] text-base md:text-xl transform translate-y-[6px] translate-x-[10px]">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saftey