import React from 'react';
import './SinglePortfolio.css'
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const SinglePortfolio = ({ portfolio }) => {
    const { portImg, portTitle, portDescription, siteLink, category } = portfolio

    return (
//         <div className='portfolio-container rounded-md p-5 bg-slate-800 shadow-md'>
//             <img className='rounded-md' src={portImg} alt="" srcSet="" />
//             <div className='mt-4 relative '>
//                 <p className='absolute -top-14 left-3 rounded  backdrop-blur-lg bg-white/10 px-3.5 py-1 inline-block text-sm  text-white'>Wordpress</p>
//                 <h2 className='text-lg leading-10 text-white font-semibold'>{portTitle}</h2>
//                 <p className='text-gray-300 text-sm'>{portDescription.length > 90 ? `${portDescription.substring(0, 90)}...` : portDescription}</p>
                
//                                      <div className='flex gap-2 items-center'>
//                         {/* Case Study Button */}
//                         <Link className=' py-2 px-5 text-white backdrop-blur-lg bg-white/10 rounded hover:bg-[#ffff00] hover:text-black text-sm flex gap-1 items-center'><RocketLaunchIcon className="h-4 w-4 text-[#ffff00] mr-1 hover:text-black"/>Case Study </Link> 
//                         {/* Live Link Button */}
//                         <Link to={siteLink} target='_blank' className='flex gap-1 items-center text-white backdrop-blur-lg bg-white/10 py-2 px-5 rounded hover:bg-[#ffff00] hover:text-black text-sm'>Live <ArrowUpRightIcon className="h-4 w-4 text-[#ffff00] ml-1"/> </Link>    
                                       
//                     </div>
// </div>
// </div>
        <>
            <div className="relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-md bg-slate-800 text-left  shadow-lg scrollFade">
                <div className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url(${portImg})] bg-cover bg-clip-border bg-center  shadow-none`}>
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/100 via-black/70"></div>
                </div>
                <div className="relative p-6  px-6 md:px-6">
                    <p className='backdrop-blur-lg bg-white/20 px-2 py-0.5 inline-block text-sm text-gray-300 rounded shadow-lg'>{ category}</p>
                    <h2 className="mb-2 block font-sans text-2xl font-semibold text-white antialiased">{portTitle}</h2>
                    <p className="mb-4 block font-sans text-base  leading-snug tracking-normal text-gray-200 antialiased">{portDescription.length > 100 ? `${portDescription.substring(0, 100)}...` : portDescription}</p>
                     <div className='flex gap-2 items-center'>
                        {/* Case Study Button */}
                        <Link className=' py-2 px-5 text-white backdrop-blur-lg bg-white/10 rounded hover:bg-[#ffff00] hover:text-black text-sm flex gap-1 items-center'><RocketLaunchIcon className="h-4 w-4 text-[#ffff00] mr-1 hover:text-black"/>Case Study </Link> 
                        {/* Live Link Button */}
                        <Link to={siteLink} target='_blank' className='flex gap-1 items-center text-white backdrop-blur-lg bg-white/10 py-2 px-5 rounded hover:bg-[#ffff00] hover:text-black text-sm'>Live <ArrowUpRightIcon className="h-4 w-4 text-[#ffff00] ml-1"/> </Link>    
                                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolio;