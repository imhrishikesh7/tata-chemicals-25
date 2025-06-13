import React from 'react';

const RevenueChart = ({ title, data }) => {
    return (
        <div className="w-full max-w-md">
            {/* Heading */}
            <div className="flex justify-between items-center px-4 pt-4">
                <h2 className="text-2xl font-bold text-[#0056a3]">{title}</h2>
                <span className="text-sm text-gray-600">₹ crore</span>
            </div>

            <hr className="border-gray-300 my-2 mx-4" />

            {/* Bars */}
            <div className="space-y-0">
                {data.map((item, index) => (
                    <div
                        key={item.year}
                        className={`text-white font-semibold border-t border-white`}
                    >
                        <div
                            className={`${item.color} px-4 flex justify-between items-center text-sm`}
                            style={{
                                width: `${item.width}%`,
                                height: '48px',
                                borderTop: '2px solid white',
                                borderTopRightRadius: index === 0 ? '1.5rem' : '0',
                            }}
                        >
                            <span>{item.year}</span>
                            <span>{item.value.toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default RevenueChart;
