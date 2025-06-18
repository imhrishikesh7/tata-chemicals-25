import React, { useState } from 'react';

const HorizontalTabsComponent = () => {
    const [activeTab, setActiveTab] = useState('green-chemistry');

    // Sample data
    const tabsData = [
        {
            id: 'green-chemistry',
            title: 'Shift towards Low Carbon Technologies and Green Chemistry',
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                            The chemical industry is integral to the manufacturing ecosystem. Between 2018 and 2022, greenhouse gas intensity decreased by 7.4% and energy efficiency improved by 6.9%. Scope 1 and 2 emissions reporting increased by 46%, while scope 3 emissions reporting rose by 83%.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">Investment Growth</p>
                            <p className="text-gray-700">
                                Global investments in low-carbon energy transition technologies grew by 11% annually, reaching $2.1 trillion in 2024.
                            </p>
                        </div>
                        
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">Industry Focus</p>
                            <p className="text-gray-700">
                                Approximately 20-25% of the chemical industry's capital expenditure is directed towards green chemistry, growing at ~5% CAGR.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-teal-500 text-white text-sm rounded-full font-medium">
                                SP 2
                            </span>
                            <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full font-medium">
                                SP 3
                            </span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'digital-transformation',
            title: 'Embracing AI and Digital Transformation',
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                            Industry 4.0 technologies are revolutionizing manufacturing processes, improving efficiency and reducing waste through smart automation and data analytics.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">AI Integration</p>
                            <p className="text-gray-700">
                                Machine learning algorithms optimize production schedules and predict maintenance needs.
                            </p>
                        </div>
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">IoT Implementation</p>
                            <p className="text-gray-700">
                                Connected sensors provide real-time monitoring of equipment and processes.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                                SP 1
                            </span>
                            <span className="px-3 py-1 bg-teal-500 text-white text-sm rounded-full font-medium">
                                SP 2
                            </span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'supply-chain',
            title: 'Supply Chain Resilience',
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                            Building robust supply chains that can withstand global disruptions while maintaining cost efficiency and sustainability standards.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">Risk Management</p>
                            <p className="text-gray-700">
                                Diversified supplier base and strategic inventory management reduce operational risks.
                            </p>
                        </div>
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">Sustainability</p>
                            <p className="text-gray-700">
                                Green logistics and circular economy principles guide procurement decisions.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-medium">
                                SP 1
                            </span>
                            <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full font-medium">
                                SP 3
                            </span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'innovation',
            title: 'Operational Efficiencies and Asset Realisation',
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                        <p className="text-gray-700 leading-relaxed">
                            Investing in cutting-edge research to develop next-generation products and processes that meet evolving market demands.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">Investment Focus</p>
                            <p className="text-gray-700">
                                15% of revenue allocated to R&D activities and innovation initiatives.
                            </p>
                        </div>
                        <div className="bg-white/70 p-4 rounded-xl border border-gray-200/50">
                            <p className="text-sm text-gray-600 mb-2">Collaboration</p>
                            <p className="text-gray-700">
                                Strategic partnerships with universities and research institutions.
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-lg font-semibold text-red-500 mb-3">Strategic Objectives</h4>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-teal-500 text-white text-sm rounded-full font-medium">
                                SP 2
                            </span>
                            <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium">
                                SP 4
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    const activeTabData = tabsData.find(tab => tab.id === activeTab);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#1368b4] to-[#0f4c75] bg-clip-text text-transparent mb-12">
                    Strategic Initiatives
                </h1>
                


                {/* Content Box */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/40 p-8 min-h-[600px] transition-all duration-500">
                    <div className="opacity-100 transition-opacity duration-300">
                        {activeTabData?.content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalTabsComponent;