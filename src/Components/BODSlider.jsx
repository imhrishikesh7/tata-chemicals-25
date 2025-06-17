import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image list
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

// Bottom Arrow Components
const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-white border border-[#1368b4]/30 shadow-lg hover:scale-110 transition rounded-full w-12 h-12 flex items-center justify-center mx-2"
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1368b4" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
        </svg>
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-white border border-[#1368b4]/30 shadow-lg hover:scale-110 transition rounded-full w-12 h-12 flex items-center justify-center mx-2"
    >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1368b4" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
        </svg>
    </button>
);

// Main Component
const BODSlider = () => {
    const settings = {
        dots: false, // Removed dots
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false, // Disabled default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    // Slider ref to control navigation
    const sliderRef = React.useRef(null);

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
            <Slider ref={sliderRef} {...settings}>
                {bodImages.map((img, index) => (
                    <div key={index} className="px-2">
                        <div className="group relative rounded-2xl overflow-hidden transition-transform hover:scale-105 duration-300">
                            <div className="aspect-[3/4] bg-gradient-to-br from-blue-50 to-indigo-50">
                                <img
                                    src={img}
                                    alt={`Director ${index + 1}`}
                                    className="w-full h-full object-contain rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            
            {/* Bottom Navigation Arrows */}
            <div className="flex justify-center items-center mt-6">
                <PrevArrow onClick={goToPrev} />
                <NextArrow onClick={goToNext} />
            </div>
        </div>
    );
};

export default BODSlider;