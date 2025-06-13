import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Title from '../Title';
import KnowMore from '../KnowMore';

const bod = [
    '/home/b1.webp',
    '/home/b2.webp',
    '/home/b3.webp',
    '/home/b4.webp',
    '/home/b5.webp',
    '/home/b6.webp',
    '/home/b7.webp',
    '/home/b8.webp',
];

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute bottom-0 left-1/2 transform -translate-x-14 bg-white/50 hover:bg-white/70 cursor-pointer border-[#2263a7] border rounded-full w-10 h-10 flex items-center justify-center z-10"
            aria-label="Previous"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
            </svg>
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute bottom-0 left-1/2 transform translate-x-4 bg-white/50 hover:bg-white/70 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center border-[#2263a7] border z-10"
            aria-label="Next"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
            </svg>
        </button>
    );
};

const BOD = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="marginal relative ">
            <div className='text-center my-6'>
                <Title text="Board of Directors" />
            </div>
            <Slider {...settings}>
                {bod.map((img, i) => (
                    <div key={i} className="px-4 pb-10">
                        <div className="bg-white md:w-[300px] md:h-[480px] mx-auto rounded-xl overflow-hidden shadow">
                            <img
                                src={img}
                                alt={`BOD ${i + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
            <div>
            <KnowMore text="Explore More" />
            </div>
        </div>
    );
};

export default BOD;
