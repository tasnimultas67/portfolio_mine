import React from 'react';
import {BriefcaseIcon } from '@heroicons/react/24/solid'

const Experience = ({ experience }) => {
    const {position, company, startDate, endDate, description} = experience
    return (
                <div className=''>
 <div className=" mb-6 p-8 sm:mb-0 sm:p-10 md:p-14 lg:p-14 xl:p-14 rounded-md flex items-center bg-gray-200  ">
            
                <div className="">
                    <div className='h-16 w-16 backdrop-blur bg-white/80 rounded-md flex justify-center items-center  mb-4 '>
                        <BriefcaseIcon className="h-8 w-8 text-themeColor" />
                    </div>
                <h3 className="text-2xl font-bold mb-5 text-black">{[position]}</h3>
                <p className="block mb-5 text-lg font-semibold leading-4 text-gray-900">{ company}</p>
                <time className="block mb-2 text-base font-normal leading-4  text-gray-900">Start Date: {startDate}</time>
                <p className="block mb-5 text-base font-normal leading-3 text-gray-900">End Date: { endDate}</p>
                <p className="text-base font-normal text-gray-900">{description}</p>
            </div>
            
        </div>
        </div>
    );
};

export default Experience;