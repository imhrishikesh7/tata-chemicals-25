import React from 'react'
import { motion } from 'framer-motion';

const CEO = () => {
    return (
        <div className='marginal'>
            <h1 className="m-bold text-3xl sm:text-4xl lg:text-5xl text-center text-[#1368b4] mb-8">
                CEO’s Message
            </h1>
            <motion.div
                className=' flex border-b-4 border-red-500 items-center gap-6'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, threshold: 0.2 }}
            >
                <motion.div
                    className='w-[30%]'
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, threshold: 0.2 }}
                >
                    <motion.img
                        src="CorporateOverview/CEO/CEO.webp"
                        alt=""
                        className='w-full'
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true, threshold: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>
                <motion.div
                    className='w-[70%]'
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true, threshold: 0.2 }}
                >
                    <motion.p
                        className='text-[#1368b4] text-3xl'
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
                        viewport={{ once: true, threshold: 0.2 }}
                    >
                        "Safety remains our first priority and our efforts are to create a zero harm work place. Our focus on operational efficiencies and newly commissioned capacities is expected to contribute towards improved performance as well as delivering safe and sustainable growth."
                    </motion.p>
                </motion.div>
            </motion.div>
            <motion.div
                className=''
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, threshold: 0.1 }}
            >
                <motion.h1
                    className="text-[#1368b4] text-3xl font-bold mb-6 mt-10"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, threshold: 0.2 }}
                >
                    Dear Shareholders,
                </motion.h1>
                <motion.p
                    className='text-xl'
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true, threshold: 0.1 }}
                >
                    I hope this message finds you and your families well. Thank you for your unwavering trust and support for Tata Chemicals. <br />
                    <br />
                    Looking to the year passed by, Global Soda Ash demand grew by 8.3% year-on -year (5.3 mn MT), driven by an 18% increase in China and a 4.5% rise in India. Demand in the rest of the world declined by 2.3%. However, capacity increased by 8.9% (6.5 mn MT), leading to oversupplied markets with an erosion of margins caused by a decline in prices by over 25% from the previous year, weighing heavily and impacting the results of the company. Consequently, our performance was substantially lower than FY2024. Tata Chemicals saw Soda Ash volume growth of 6% (+205 KT). Net sales realisation across regions declined, impacting contribution at consolidated level (INR 5,969 crore CY Vs INR 6,867 crore PY). Fixed cost was maintained at the last year's level (INR 4,016 crore CY Vs INR 4,020 crore PY), resulting in a lower EBITDA (INR 1,953 crore CY Vs INR 2,847 crore PY). <br />
                    <br />
                    Our operations were impacted by fluctuating energy and feedstock costs, shipping costs and logistical hurdles. We seamlessly met customer needs through teamwork, efficient operations and a resilient supply chain. Tata Chemicals is focused on driving operational excellence to improve its resilience aided by synergies from our multi-geography presence. During the year, UK soda ash Lostock plant ceased operations due to lower product prices and high gas costs resulting in sustained negative margins. We will now pivot UK towards higher value added businesses of food and pharma grade salt and bicarbonates. <br />
                    <br />
                    Sustainability is a fundamental driver of industrial transformation and our vision is aligned to Project Aalingana, Tata Group's flagship endeavour for a greener sustainable future. Soda ash and bicarbonate are increasingly relevant for sustainable applications such as solar glass, EV batteries, biodegradable packaging and industrial flue gas treatment. These materials play a foundational role in enabling low emission technologies and energy transition. The integration of artificial intelligence (AI) and machine learning (ML) technologies is revolutionising the chemical industry, optimising processes, driving innovation in new product development and enhancing competitiveness in the digital age. SAP HANA Safety remains our first priority and our efforts are to create a zero harm work place. Our focus on operational efficiencies and newly commissioned capacities is expected to contribute towards improved performance as well as delivering safe and sustainable growth. was successfully implemented during the year. We have adopted the TCS Datom Data Framework and Zero Trust security architecture to protect our digital infrastructure against cyber security threats. <br />
                    <br /> The outlook for the company's portfolio is expected to remain stable in FY 2026. Global demand for soda ash is expected to remain flat with India forecasted to grow by 5.8%. Bicarb, Salt and specialty portfolio which serve the pharma, food and feed segments will continue to show healthy growth rates. Safety remains our first priority and our efforts are to create a zero harm work place. Our focus on operational efficiencies and newly commissioned capacities is expected to contribute towards improved performance as well as delivering safe and sustainable growth. On behalf of Tata Chemicals, I thank you all for your continued support in our ongoing journey of transformation to deliver chemistry of sustainable growth.
                </motion.p>
            </motion.div>
        </div>
    )
}

export default CEO