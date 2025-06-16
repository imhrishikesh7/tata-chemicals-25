import React, { useState, useEffect, useRef } from 'react';

const RevenueChart = ({ title, data }) => {
    const [animatedWidths, setAnimatedWidths] = useState(data.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    // Start animation when component becomes visible
                    setTimeout(() => {
                        setAnimatedWidths(data.map(item => item.width));
                    }, 100);
                }
            },
            {
                threshold: 0.3, // Trigger when 30% of component is visible
                rootMargin: '0px 0px -50px 0px' // Trigger slightly before reaching exact position
            }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => {
            if (chartRef.current) {
                observer.unobserve(chartRef.current);
            }
        };
    }, [data, isVisible]);

    return (
        <div ref={chartRef} className="w-full max-w-md">
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
                            className={`${item.color} px-4 flex justify-between items-center text-sm transition-all duration-1000 ease-out`}
                            style={{
                                width: `${animatedWidths[index]}%`,
                                height: '48px',
                                borderTop: '2px solid white',
                                borderTopRightRadius: index === 0 ? '1.5rem' : '0',
                                transitionDelay: `${index * 200}ms`
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