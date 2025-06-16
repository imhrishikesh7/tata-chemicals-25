import React from 'react';
import { motion } from 'framer-motion';

const HeaderWRedBottom = () => {
    return (
        <div>
            <div className="w-full flex flex-col items-start mt-5">
                <div className="w-full h-[2px] bg-[#1368b4] relative">
                    <motion.div 
                        className="absolute top-[-3px] left-0 h-[8px] bg-red-600 rounded-sm"
                        initial={{ width: '100%' }}
                        whileInView={{ width: '15rem' }} // w-60 = 15rem
                        transition={{ 
                            duration: 1.5, 
                            ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoother ending
                            delay: 0.1 
                        }}
                        viewport={{ 
                            once: false, 
                            threshold: 0.3,
                            margin: '0px 0px -50px 0px'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderWRedBottom;