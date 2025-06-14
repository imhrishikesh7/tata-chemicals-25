import React from 'react'
import Awards from '../../Components/Awards'

const Performance = () => {
    return (
        <div className='marginal'>
            <div className="mx-auto">
                <h1 className="m-bold text-3xl sm:text-4xl lg:text-5xl text-center text-[#1368b4] font-bold ">
                    Performance Review
                </h1>
                <img src="CorporateOverview/AboutChemicals/07-Page-IMG.webp" alt="" />
            </div>
            <div>
                <h1 className="m-semi-bold text-[#1368b4] text-3xl mb-6 mt-10 text-center">Awards and Recognitions</h1>
                <Awards/>
            </div>
        </div>
    )
}

export default Performance