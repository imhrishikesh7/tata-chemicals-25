import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import HeaderWRedBottom from './HeaderWRedBottom';

const MitigationStrategies = () => {
    const [expandedItems, setExpandedItems] = useState({ 0: true });

    const toggleExpand = (index) => {
        setExpandedItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const strategies = [
        {
            title: "Sustainability Risk",
            image: "ValueCreationApproach/RiskManagement/27-Page-IMG.png",
            image2: "ValueCreationApproach/RiskManagement/1.png",
            content: {
                description: "Failure to address climate change-related risks – Reducing carbon emissions, maintaining a circular economy (water, solid waste and renewables) and preserving nature and biodiversity.",
                mitigationActions: [
                    "Sustainability risks are regularly monitored against defined targets for all business units through a centralised digital platform.",
                    "The sustainability roadmap and environmental compliance status are reviewed quarterly at the Board level to ensure oversight and alignment.",
                    "Transitioning from high carbon intensity fossil fuels to lower intensity or renewable alternatives, enhancing energy efficiency in manufacturing operations and investing in carbon capture and utilisation initiatives.",
                    "Collaboration with key customers is ongoing to reduce the carbon intensity of selected products (measured in metric tonnes of CO₂ emissions per metric tonne of product), supporting their Scope 3 emission reduction goals.",
                    "We work closely with supply chain partners to reduce the overall carbon footprint across the value chain.",
                    "Dedicated investments are made to balance environmental objectives with long-term business viability and sustainable growth."
                ],
                achievements: [
                    "We are a signatory to the Responsible Care initiative and have achieved CORE (Certificate of Readiness) certification.",
                    "Compliance with Extended Producer Responsibility (EPR) on plastic waste is maintained, as outlined in the approved EPR action plan.",
                    "Water consumption is optimised across plants, and water harvesting projects are implemented to support resource conservation."
                ],
                opportunities: [
                    "Growing market demand for products with a lower carbon footprint, particularly in carbon-regulated regions.",
                    "Rising demand for applications with sustainability drivers, such as solar glass, lithium carbonate and glass packaging.",
                    "Product innovation aligned with green chemistry principles, including use of the renewable feedstocks, energy-efficient synthesis methods and reduction of hazardous byproducts.",
                    "Strengthening customer relationships by offering sustainable product alternatives that support their decarbonisation goals."
                ],
            }
        },
        {
            title: "Recession Risk",
            image2: "ValueCreationApproach/RiskManagement/2.png",
            image: "ValueCreationApproach/RiskManagement/27-Page-IMG-1.png",
            content: {
                description: `Global economic slowdown impacting demand and pricing `,
                mitigationActions: [
                    `We maintain a strong focus on both variable and fixed costs across all entities to ensure operational efficiency.`,
                    `Strategic customer relationships are protected through volume and price-based contractual tie-ups aimed at sustaining wallet share.`,
                    `Import trends—both volume and pricing—are continuously monitored, with sales strategies adjusted accordingly to remain competitive.`,
                    `Efforts are underway to scale up export markets, particularly in the United States and Kenya, while further strengthening the distribution network.`,
                    `Supply chain flexibility is ensured through the ability to service demand from multiple locations, enhancing responsiveness.`,
                    `Service levels with customers are maintained consistently to support reliability and satisfaction.`
                ],
                opportunities: [
                    `Cost optimisation through targeted input cost reduction initiatives.`,
                    `Deepening customer relationships via sustained engagement and service performance.`,
                    `Enhancing domestic sales focus to mitigate export market volatility.`,
                ],
            }
        },
        {
            title: "Digitalisation Risk",
            image2: "ValueCreationApproach/RiskManagement/3.png",
            image: "ValueCreationApproach/RiskManagement/28-Page-IMG.png",
            content: {
                description: "Embracing digitalisation as a key lever of business growth ",
                mitigationActions: [
                    `During the fiscal year, several projects aligned with organisational
goals were undertaken. The functional Strategic Delivery Model
(SDM) was mapped to the Company’s Balanced Scorecard (BSC),
identifying business-critical projects.`,
                    `Structured digital initiatives cover the following key areas:`,
                    `Core Systems: Business Process Re-engineering (BPR)-driven
migration to SAP S/4HANA and harmonisation of systems
such as SAP Ariba.`,
                    `Data and Analytics: Adoption of the Data and Analytics Target
Operating Model (DATOMTM) framework. Digital projects were
initiated based on structured assessment feedback. `,
`Digital Re-imagination: Artificial Intelligence (AI),Machine
Learning (ML), and Industrial Internet of Things (IIoT)-based
initiatives were implemented across various business functions.`,
`Technology Backbone: Technology infrastructure has
been strengthened to support ongoing and future
digitalisation initiatives.`,
`All projects and initiatives follow a defined review cadence to
monitor progress and ensure alignment with strategic objectives.`,
`An annual Data Maturity Model (DMM) assessment is conducted to
track digital progress and initiate necessary corrective actions`,
`We have undertaken digital upskilling of employees from
non-IT backgrounds to improve adoption and effective use
of new technologies.`
                ],
                opportunities: [
                    `Adoption of AI, IoT and cloud computing to optimise business
processes, automate operations and enable real-time data insights.`,
                    `Strengthening infrastructure readiness through a cloud-first
strategy to enhance scalability and agility.`,
                    `Upskilling the workforce in digital technologies to foster a culture of
continuous innovation and transformation.`,
                ],
            }
        },
        {
            title: "Talent Risk",
            image2: "ValueCreationApproach/RiskManagement/4.png",
            image: "ValueCreationApproach/RiskManagement/28-Page-IMG-2.png",
            content: {
                description: "Challenges of attracting and retaining talent in remote manufacturing locations ",
                mitigationActions: [
                    `Infrastructure at remote locations is being enhanced to improve working
conditions and accessibility.`,
                    `We support skill and competency development through training
programmes, education assistance schemes and sabbatical opportunities.`,
                    `Job enrichment is facilitated through job rotations, cross-functional
exposure and participation in cross-functional teams.`,
                    `Engagement surveys are conducted, and targeted interventions are
implemented based on feedback to improve retention and morale.`
                ],
                opportunities: [
                    `Collaborating with academic institutions to strengthen employer
branding and talent pipeline development.`,
                    `Building a workforce equipped with future-relevant
skills and competencies.`,
                    `Creating structured career development pathways to enhance
internal mobility and long-term retention.`,
                ],
            }
        },
        {
            title: "Cyber Risk",
            image2: "ValueCreationApproach/RiskManagement/5.png",
            image: "ValueCreationApproach/RiskManagement/29-Page-IMG.png",
            content: {
                description: "Loss of data and compromised operations resulting from cyber attacks",
                mitigationActions: [
                    `Strong governance mechanisms are in place for data security
and access control.`,
                    `Cybersecurity posture is monitored around the clock, with a
structured approach to prevention, detection, analysis and
response to security incidents.`,
                    `Periodic Vulnerability Assessment and Penetration Testing (VAPT)
are conducted on critical infrastructure and applications to
proactively identify and address potential security gaps.`,
                    `Real-time solutions have been implemented to detect and mitigate
cyber threats on endpoint devices and prevent unauthorised access
to critical systems.`,
`We conduct regular security awareness campaigns and training
programmes to build a workforce that is informed and sensitive to
cybersecurity issues`,
`Compliance with applicable government and industry security
standards, regulations and audit requirements is maintained.`,
`Periodic cybersecurity assessments and audits are conducted
to validate the effectiveness of controls and identify
areas for improvement.`
                ],
                opportunities: [
                    `Enhanced trust and reputation among customers and stakeholders
by upholding strong cybersecurity measures.`,
                    `Adherence to best security practices and audit standards
to establish oneself as the torchbearers of trust and
excellence in the industry`,
                ],
            }
        },
        {
            title: "Supply Chain Risk",
            image2: "ValueCreationApproach/RiskManagement/6.png",
            image: "ValueCreationApproach/RiskManagement/29-Page-IMG-1.png",
            content: {
                description: "Securing raw materials, energy sources and upgradation of logistics infrastructure to support growth plans",
                mitigationActions: [
                    `Secure access to fuels and critical raw materials is maintained
through captive sourcing and long-term supply arrangements.`,
                    `Captive access to essential raw materials reduces reliance on
external suppliers.`,
                    `Long-term tie-ups ensure consistent and cost-effective
supply of key inputs.`,
                    `Efforts are ongoing to explore and maximise the use of alternate
and sustainable energy sources.`,
`Contracts with ship operators enable reliable and economical
transportation of supplies.`,
`Inbound and outbound logistics infrastructure is prepared to
support current operations and future expansion plans.`,
`Private rail siding has been augmented and a new track line added
to increase handling capacity.`,
`Loading and unloading operations have been automated and
mechanised to enhance efficiency and safety`,
`Warehouse storage capacity has been expanded at Mithapur and at
other strategic locations.`,
`The vehicle parking area has been upgraded with improved
facilities to support increased movement.`,
`Infrastructure modernisation is underway to improve
operational effectiveness.`,
`Additional gates have been installed to ensure safe and
smooth traffic flow.`,
`Digitisation through an integrated logistics management system
is being implemented to improve visibility, productivity and cost
efficiency, enhancing overall customer experience.`
                ],
                opportunities: [
                    `Increased automation enabling higher capacity throughput and
improved risk management.`,
                    `Continued development of alternative raw material sources aligned
with sustainability and operational resilience.`,
`Strategic procurement of renewable energy and feedstocks to
reduce exposure to geopolitical volatility.`,
`Localisation of sustainable energy sourcing to improve supply chain
reliability and long-term cost efficiency.`
                ],
            }
        },
        {
            title: "Debt Risk",
            image2: "ValueCreationApproach/RiskManagement/7.png",
            image: "ValueCreationApproach/RiskManagement/30-Page-IMG-4.png",
            content: {
                description: "Managing debt and tightening interest rates ",
                mitigationActions: [
                    "Periodic assessment of the Company’s debt portfolio to ensure alignment with financial objectives",
                    `Adjustment of borrowing levels, repayment schedules, prepayment
plans, and refinancing needs according to the annual operating
plan and long-term strategic road map`,
                    `Prioritisation of free cash flow generation to support
timely debt reduction.`,
                    "Succession planning for key positions."
                ],
                opportunities: [
                    `Managing cash flow efficiently`,
                    
                ],
            }
        },
        {
            title: "Unfunded Pension Risk",
            image2: "ValueCreationApproach/RiskManagement/8.png",
            image: "ValueCreationApproach/RiskManagement/30-Page-IMG-1.png",
            content: {
                description: "Unfunded pension liabilities of overseas subsidiaries",
                mitigationActions: [
                    `Our defined benefit pension schemes in the UK are closed
to further accruals.`,
                    `We use hedging and investment strategies, where appropriate, to
manage economic risks, including those related to inflation.`,
                    `A new agreement covering the period 2025–2027 has been
secured, which includes support for the Project Natrium
investment through deferred payment arrangements.`,
                ],
                opportunities: [
                    `NA`,
                    
                ],
            }
        },
        {
            title: "Regulatory and Policy Risk ",
            image2: "ValueCreationApproach/RiskManagement/9.png",
            image: "ValueCreationApproach/RiskManagement/30-Page-IMG-3.png",
            content: {
                description: "Policy changes which could impact the Company’s operations at large",
                mitigationActions: [
                    `We monitor compliance through an electronic compliance management
framework that supports periodic reporting and reviews at leadership
forums. Our senior leaders participate in various committees and
sub-committees formed by external bodies to gain early insight into
regulatory developments and support policy advocacy.`,
                    `We maintain ongoing engagement with regulatory authorities
through liaison meetings, dialogue sessions, participation
in seminars and memberships in government and industry
associations, particularly those that represent industry views to the
ministries responsible for issuing regulations and notifications.`,
                    `We hold proactive meetings and discussions with industry
representatives and government ministries to present our views
during the formulation of rules and regulations.`,
`We provide inputs during policy formulation to support
the development of policies that are beneficial to the
industry and the country. `,
`We also monitor potential regulatory changes to help
mitigate emerging risks.`,
`Structured process to track draft notifications and regulatory
proposals from both government and industry bodies to identify
potential risks and prepare timely responses.`
                ],
                opportunities: [
                    `Developing agility to adapt to policy changes, ensuring compliance
and a competitive advantage.`,
                    `Strengthening our core to capitalise on emerging markets such
as carbon credits`
                ],
            }
        },
        {
            title: "Safety Risk",
            image2: "ValueCreationApproach/RiskManagement/10.png",
            image: "ValueCreationApproach/RiskManagement/30-Page-IMG-4.png",
            content: {
                description: "Ensuring containment of safety hazards (behaviour, workplace, process and product) ",
                mitigationActions: [
                    `Comprehensive safety programme, including Safety Leadership
Workshops, promotes a strong safety culture, influences employee
behaviour and reinforces physical safety standards such as mine
safety protocols and Process Safety Risk Management (PSRM).`,
                    `An Enterprise Risk Register captures key safety risks, with assigned
ownership for implementing mitigation plans. Regular reviews by
senior leadership and the Risk Management Committee support
progressive risk reduction.`,
                    `Emergency Preparedness Plans are established for potential failures
in hazard containment, with on-site and off-site protocols in place.
Regular tabletop exercises and field drills are conducted to ensure
emergency readiness.`,
                    `Mitigation plans for key risks are integrated into the annual
business plan with dedicated resource allocation. A long-term
Strategic Asset Management Plan addresses risks associated with
ageing infrastructure and assets.`,
`Risk identification is carried out using Hazard and Operability Study
(HAZOP), Hazard Identification and Risk Assessment (HIRA), What-if
analysis and Failure Mode and Effects Analysis (FMEA). A risk control
hierarchy is applied to address identified hazards.`,
`Regular internal cross-unit audits and external audits by
customers, competent agencies and statutory authorities assess
the effectiveness of safety controls to minimise risks to human
health and safety.`,
`The Company has transitioned to ISO-certified tankers equipped
with Global Positioning System (GPS) tracking for the transport
of hazardous chemicals such as bromine and chlorine, enhancing
transportation safety.`,
`TCL is a member of the Nicer Globe initiative in India, which focuses
on mitigating transportation-related hazards and improving
chemical logistics safety`

                ],
                opportunities: [
                    `Leveraging digital monitoring solutions to enhance compliance
with safety procedures.`,
                    `Strengthening safety culture at the shop floor through Felt
Leadership programmes.`,
`Enhancing contractor safety management through an updated and
refreshed Contractor Safety Management System (CSMS).`,
`Developing ‘My Safety Centre’ as a platform to promote safety
learning and awareness.`
                ],
            }
        }
    ];


    return (
        <div className="w-full mx-auto bg-white">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-[#1368b4] inline-block">
                    Mitigation Strategies
                </h2>
            </div>

            <HeaderWRedBottom />

            <div className="space-y-3 mt-10">
                {strategies.map((strategy, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
                        <div
                            className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={() => toggleExpand(index)}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 border-1 border-[#e7000b] text-[#4d4d4f] rounded-full flex items-end justify-center text-lg m-semi-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg m-semi-bold text-gray-800">{strategy.title}</h3>
                            </div>

                            <div className="flex items-center text-[#1368b4] transition-transform duration-200 ease-in-out">
                                {/* Yahan sirf current strategy ka image dikhega */}
                                <div className="w-15 h-15 rounded-full flex items-center justify-center mr-2">
                                    <img
                                        src={strategy.image}
                                        alt={strategy.title + ' image'}
                                        className="w-15 h-15 object-contain"
                                    />
                                </div>
                                {expandedItems[index] ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </div>

                        {expandedItems[index] && (
                            <div className="p-6 bg-white animate-in slide-in-from-top-2 duration-300">
                                <p className="text-[#1368b4] text-xl mb-6 leading-relaxed m-semi-bold">
                                    {strategy.content.description}
                                </p>

                                {strategy.content.mitigationActions && (
                                    <div className="mb-6">
                                        <h4 className="text-[#1368b4] text-2xl m-semi-bold mb-3">Mitigation Actions</h4>
                                        <div className="space-y-2">
                                            {strategy.content.mitigationActions.map((action, actionIndex) => (
                                                <div key={actionIndex} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700 text-lg leading-relaxed">{action}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {strategy.content.achievements && (
                                    <div className="mb-6">
                                        <div className="space-y-2">
                                            {strategy.content.achievements.map((achievement, achievementIndex) => (
                                                <div key={achievementIndex} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700 text-lg leading-relaxed">{achievement}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {strategy.content.opportunities && (
                                    <div className="mb-4">
                                        <h4 className="text-[#1368b4] text-2xl m-semi-bold mb-3">Translating risks into opportunities</h4>
                                        <div className="space-y-2">
                                            {strategy.content.opportunities.map((opportunity, opportunityIndex) => (
                                                <div key={opportunityIndex} className="flex items-start space-x-3">
                                                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <p className="text-gray-700 text-lg leading-relaxed">{opportunity}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center text-[#1368b4] transition-transform duration-200 ease-in-out">
                                    {/* Yahan sirf current strategy ka image dikhega */}
                                    <div className="mr-2">
                                        <img
                                            src={strategy.image2}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MitigationStrategies;