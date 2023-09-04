import React from 'react';
import {BriefcaseIcon } from '@heroicons/react/24/solid'

const Experience = ({ experience }) => {
    const {position, company, startDate, endDate, description} = experience
    return (
                <div className=' backdrop-blur'>
 <div className="relative mb-6 sm:mb-0 p-8 rounded-md h-[22rem] flex items-center duration-300 bg-slate-800 highlight-white/5 hover:highlight-white/10 shadow-md border-t border-[#ffffff0d]">
            
                <div className="">
                    <div className='h-16 w-16 bg-slate-700 rounded-md flex justify-center items-center  mb-4 shadow-md'>
                        <BriefcaseIcon className="h-6 w-6 text-yellow-300" />
                    </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{[position]}</h3>
                <p className="block mb-2 text-base font-normal leading-4 text-gray-300">{ company}</p>
                <time className="block mb-2 text-sm font-normal leading-4  text-gray-200">Start Date: {startDate}</time>
                <p className="block mb-2 text-sm font-normal leading-3 text-gray-200">End Date: { endDate}</p>
                <p className="text-sm font-normal text-gray-200">{description}</p>
            </div>
            
        </div>
        </div>
    );
};

export default Experience;