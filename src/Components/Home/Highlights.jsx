import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Title from '../Title';

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: 'Financial',
        colorFrom: '#2469b3cf',
        colorTo: '#2469b3',
        data: [
            { value: 14887, label: 'Revenue', suffix: '₹', unit: ' crore' },
            { value: 1953, label: 'EBITDA', suffix: '₹', unit: ' crore' },
        ],
    },
    {
        title: 'Customer',
        colorFrom: '#41b2a2cf',
        colorTo: '#41b2a2',
        data: [
            { value: 86, label: 'Customer Satisfaction Index (CSI)', suffix: '', unit: '%' },
            { value: 90, label: 'Net Promoter Score (NPS)', suffix: '', unit: '%' },
        ],
    },
    {
        title: 'Operations',
        colorFrom: '#a088abcf',
        colorTo: '#6d2e8a',
        heading: 'Production Volume (MT)',
        data: [
            { value: 3676780, label: 'Soda Ash' },
            { value: 1683320, label: 'Salt' },
            { value: 237489, label: 'Bicarbonate' },
        ],
    },
    {
        title: 'Social',
        colorFrom: '#40aeefcf',
        colorTo: '#40aeef',
        data: [
            { value: 72, label: 'Employee Engagement Score', suffix: '', unit: '%' },
            { value: 34, label: 'Increase in Renewable Energy', suffix: '', unit: '%' },
            { value: 22.54, label: 'CSR Spend', suffix: '₹', unit: ' crore' },
        ],
    },
];

const Highlights = () => {
    const numberRefs = useRef([]);

    const collectNumberRef = (el, value, suffix, unit) => {
        if (!el) return;
        if (numberRefs.current.some(item => item.el === el)) return;

        // Immediately show formatted number
        const formatted = new Intl.NumberFormat('en-IN').format(value);
        el.innerText = `${suffix || ''}${formatted}${unit || ''}`;

        numberRefs.current.push({ el, value, suffix, unit });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            numberRefs.current.forEach(({ el, value, suffix, unit }) => {
                const target = parseFloat(value);
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                    },
                    onUpdate: () => {
                        const val = target % 1 !== 0 ? obj.val.toFixed(2) : Math.floor(obj.val);
                        const formatted = new Intl.NumberFormat('en-IN').format(val);
                        el.innerText = `${suffix || ''}${formatted}${unit || ''}`;
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-white marginal py-20 relative z-10">
            <div className='text-center my-6'>
                <Title text="Highlights of FY 2025" />
            </div>
            <div className="mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {sections.map((section, i) => (
                    <div
                        key={i}
                        className="rounded-xl  border-[#2469b3] border  flex flex-col gap-4"

                        style={{
                            color: section.colorTo
                            // background: `linear-gradient(to bottom right, ${section.colorFrom}, ${section.colorTo})`,
                        }}
                    >
                        <div className='bordeannualReport w-full border  p-2'
                        >
                        <h3 className="text-xl font-semibold pb-2">
                            {section.title}
                        </h3>
                        </div>
                        {section.heading && (
                            <p className="text-sm  text-black font-bold italic mb-2">{section.heading}</p>
                        )}
                        {section.data.map((item, j) => (
                            <div key={j} className="flex flex-col">
                                <p
                                    ref={(el) =>
                                        collectNumberRef(el, item.value, item.suffix || '', item.unit || '')
                                    }
                                    className="text-3xl font-bold"
                                ></p>
                                <p className="text-base text-black opacity-90">{item.label}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Highlights;
