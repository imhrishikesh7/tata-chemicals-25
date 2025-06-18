import React from 'react';
import { Activity, Users, DollarSign, Leaf, Beaker, Brain } from 'lucide-react';

const StrategyDashboard = ({ 
  strategicObjective = "Drive Operational Excellence in Manufacturing and Supply Chain Management",
  keyEfficiencyLevers = ["Cost Competitiveness", "Customer Centricity"],
  statusAndActionPlan = [
    "Fixed cost optimisation plan",
    "Specific consumption reduction plan", 
    "Salt works yield improvement plan",
    "Leverage industry 4.0 technologies",
    "Energy hedging across regions",
    "Develop robust partner networks",
    "Optimising inbound and outbound logistics network"
  ],
  manufacturingChallenges = [
    "Climate change impact",
    "Rising cost", 
    "Increased pressure to adopt green fuels"
  ],
  supplyChallenges = [
    "Energy price fluctuations and import restrictions",
    "Logistics infrastructure for increased material flows"
  ],
  risks = ["Recession, high energy cost, cyber"],
  kpis = {
    production: {
      "Soda Ash": "36,76,780",
      "Bicarbonate": "2,37,489", 
      "Salt": "16,83,320",
      "Silica": "7,644",
      "FOS": "3,817"
    },
    customerCentricity: {
      "CSI Score": "86",
      "NPS Score": "90"
    }
  },
  sdgs = [1, 2, 6, 7, 9], // SDG numbers to display
  capitalIcons = {
    human: Users,
    social: Activity, 
    financial: DollarSign,
    natural: Leaf,
    manufactured: Beaker,
    intellectual: Brain
  }
}) => {

  const SDGColors = {
    1: '#E5243B', 2: '#DDA63A', 3: '#4C9F38', 4: '#C5192D', 5: '#FF3A21',
    6: '#26BDE2', 7: '#FCC30B', 8: '#A21942', 9: '#FD6925', 10: '#DD1367',
    11: '#FD9D24', 12: '#BF8B2E', 13: '#3F7E44', 14: '#0A97D9', 15: '#56C02A',
    16: '#00689D', 17: '#19486A'
  };

  const CapitalIcon = ({ type, label }) => {
    const IconComponent = capitalIcons[type];
    return (
      <div className="flex flex-col items-center p-3">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
          <IconComponent className="w-6 h-6 text-blue-600" />
        </div>
        <span className="text-xs text-center font-medium text-gray-700">{label}</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-red-600 font-bold text-lg mb-2">Strategic Objective</h2>
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full border-2 border-red-600 flex items-center justify-center">
            <span className="text-red-600 font-bold">1</span>
          </div>
          <h3 className="text-blue-800 font-bold text-xl">{strategicObjective}</h3>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Left Column */}
        <div className="col-span-3 space-y-4">
          {/* Key Efficiency Levers */}
          <div className="bg-blue-50 p-4 rounded-lg h-32">
            <h4 className="text-blue-800 font-bold mb-3 border-b border-blue-200 pb-2">Key Efficiency lever</h4>
            <div className="space-y-2">
              {keyEfficiencyLevers.map((lever, index) => (
                <div key={index} className="text-gray-700 text-sm">{lever}</div>
              ))}
            </div>
          </div>

          {/* Risks */}
          <div className="bg-blue-50 p-4 rounded-lg h-20">
            <h4 className="text-blue-800 font-bold mb-3 border-b border-blue-200 pb-2">Risks</h4>
            <div className="space-y-2">
              {risks.map((risk, index) => (
                <div key={index} className="text-gray-700 text-sm">{risk}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-5 space-y-4">
          {/* Status and Action Plan */}
          <div className="flex-1">
            <h4 className="text-blue-800 font-bold mb-3 border-b border-blue-200 pb-2">Status and action plan</h4>
            <div className="space-y-2 h-64 overflow-y-auto">
              {statusAndActionPlan.map((plan, index) => (
                <div key={index} className="text-gray-700 text-sm py-1 border-b border-gray-100">
                  {plan}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {/* Capitals impacted */}
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="text-blue-800 font-bold mb-2 text-xs">Capitals impacted</h4>
              <div className="flex gap-1">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                  <Beaker className="w-4 h-4 text-teal-600" />
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Material matters */}
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="text-blue-800 font-bold mb-2 text-xs">Material matters</h4>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">M5</span>
              </div>
            </div>

            {/* SDGs */}
            <div className="bg-blue-50 p-3 rounded-lg col-span-2">
              <h4 className="text-blue-800 font-bold mb-2 text-xs">SDGs</h4>
              <div className="grid grid-cols-3 gap-1">
                {sdgs.map((sdg) => (
                  <div 
                    key={sdg}
                    className="w-8 h-8 flex items-center justify-center text-white font-bold text-xs rounded"
                    style={{ backgroundColor: SDGColors[sdg] }}
                  >
                    {sdg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4 space-y-4">
          {/* Key Challenges */}
          <div className="flex-1">
            <h4 className="text-blue-800 font-bold mb-3 border-b border-blue-200 pb-2">Key challenges</h4>
            <div className="space-y-4 h-40">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Challenges faced by Manufacturing -</h5>
                <div className="space-y-1">
                  {manufacturingChallenges.map((challenge, index) => (
                    <div key={index} className="text-gray-700 text-sm">{challenge}</div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Supply Chain Challenges -</h5>
                <div className="space-y-1">
                  {supplyChallenges.map((challenge, index) => (
                    <div key={index} className="text-gray-700 text-sm">{challenge}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="flex-1 mt-10">
            <h4 className="text-blue-800 font-bold mb-3 border-b border-blue-200 pb-2">KPIs tracked</h4>
            <div className="space-y-3 h-64">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Global Production (MT):</h5>
                <div className="space-y-2">
                  {Object.entries(kpis.production).map(([product, value]) => (
                    <div key={product} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{product}</span>
                      <span className="text-blue-600 font-bold text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Customer Centricity:</h5>
                <div className="space-y-2">
                  {Object.entries(kpis.customerCentricity).map(([metric, value]) => (
                    <div key={metric} className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{metric}</span>
                      <span className="text-blue-600 font-bold text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capital Types Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-center gap-8">
          <CapitalIcon type="human" label="Human Capital" />
          <CapitalIcon type="social" label="Social and Relationship Capital" />
          <CapitalIcon type="financial" label="Financial Capital" />
          <CapitalIcon type="natural" label="Natural Capital" />
          <CapitalIcon type="manufactured" label="Manufactured Capital" />
          <CapitalIcon type="intellectual" label="Intellectual Capital" />
        </div>
      </div>
    </div>
  );
};

// Example usage with different data
const App = () => {
  // You can customize any of these props for different data
  const customData = {
    strategicObjective: "Drive Digital Transformation and Innovation",
    keyEfficiencyLevers: ["Technology Adoption", "Process Automation", "Data Analytics"],
    statusAndActionPlan: [
      "Cloud migration strategy implementation",
      "AI/ML capabilities development",
      "Digital workforce training programs",
      "Cybersecurity framework enhancement",
      "Customer experience digitization"
    ],
    manufacturingChallenges: [
      "Legacy system integration",
      "Skills gap in digital technologies",
      "Cybersecurity threats"
    ],
    supplyChallenges: [
      "Digital supply chain visibility",
      "Real-time tracking and monitoring"
    ],
    risks: ["Technology obsolescence, cyber attacks, talent shortage"],
    kpis: {
      production: {
        "Digital Orders": "85%",
        "Automation Level": "72%",
        "Cloud Adoption": "65%",
        "AI Projects": "15"
      },
      customerCentricity: {
        "Digital Experience Score": "92",
        "Mobile App Rating": "4.8"
      }
    },
    sdgs: [8, 9, 11, 12, 17]
  };

  return (
    <div className="space-y-8">
      <StrategyDashboard />
      <div className="border-t-4 border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Different Data Example</h2>
        <StrategyDashboard {...customData} />
      </div>
    </div>
  );
};

export default App;