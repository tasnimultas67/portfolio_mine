/* eslint-disable react/prop-types */
import './SinglePortfolio.css'
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const SinglePortfolio = ({ portfolio }) => {
    const { portImg, portTitle, portDescription, siteLink, category } = portfolio

    return (
        <>
            <div className="relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-md bg-slate-800 text-left  shadow-lg scrollFade group group-*">
                <div style={{backgroundImage:`url(${portImg})`}} className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none group-hover:scale-[1.1] transition duration-700">
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/100 via-black/75"></div>
                </div>
                <div className="relative p-6  px-6 md:px-6">
                    <p className='backdrop-blur-lg bg-white/20 px-2 py-0.5 inline-block text-sm text-gray-300 rounded shadow-lg'>{ category}</p>
                    <h2 className="mb-2 block font-sans text-2xl font-semibold text-white antialiased">{portTitle}</h2>
                    <p className="mb-4 block font-sans text-base  leading-snug tracking-normal text-gray-200 antialiased">{portDescription.length > 100 ? `${portDescription.substring(0, 100)}...` : portDescription}</p>
                     <div className='flex gap-2 items-center'>
                        {/* Case Study Button */}
                        <Link className=' py-2 px-5 text-white backdrop-blur-lg bg-white/10 rounded hover:bg-[#ffff00] hover:text-black text-sm flex gap-1 items-center group group-*'><RocketLaunchIcon className="h-4 w-4 text-[#ffff00] mr-1 group-hover:text-black"/>Case Study </Link> 
                        {/* Live Link Button */}
                        <Link to={siteLink} target='_blank' className='flex gap-1 items-center text-white backdrop-blur-lg bg-white/10 py-2 px-5 rounded hover:bg-[#ffff00] hover:text-black text-sm group group-*'>Live <ArrowUpRightIcon className="h-4 w-4 text-[#ffff00] ml-1 group-hover:text-black"/> </Link>    
                                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolio;