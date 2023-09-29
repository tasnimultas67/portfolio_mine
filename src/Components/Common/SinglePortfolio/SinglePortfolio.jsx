/* eslint-disable react/prop-types */
import './SinglePortfolio.css'
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const SinglePortfolio = ({ portfolio }) => {
    const { portfolioCategory, portfolioDetails, portfolioImgLink, portfolioLiveLink, portfolioTitle } = portfolio

    return (
        <>
           <div className="relative flex-col items-end justify-center overflow-hidden rounded-sm text-left scrollFade border border-black/10 hover:border-black/50">

                <div className="relative p-6  px-6 md:px-6">
                    <img src="https://images.unsplash.com/photo-1695726594598-3cc937112d7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" className="border border-black/10 mb-4 h-[11rem] w-full object-cover" alt="Portfolio Image" />
                    <p className='backdrop-blur-lg bg-white/20 absolute top-[9.8rem] left-[2rem] px-2 py-0.5 inline-block text-sm text-[#ffff00] rounded shadow-lg'>{ portfolioCategory}</p>
                    <h2 className="mb-2 block font-sans text-2xl font-semibold text-black antialiased">{portfolioTitle}</h2>
                    <p className="mb-4 block font-sans text-base  leading-snug tracking-normal text-gray-900 antialiased">{portfolioDetails.length > 150 ? `${portfolioDetails.substring(0, 150)}...` : portfolioDetails}</p>
                     <div className='flex gap-2 items-center justify-between'>
                        {/* Case Study Button */}
                        <Link to="/about" className=" group group-* mt-5 flex items-center text-sm relative leading-6 text-black uppercase hover:text-yellow-600">
                        Case Study <span aria-hidden="true"><ArrowUpRightIcon className="h-4 w-4 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3 group-hover:text-yellow-600"/></span>
                        </Link>
                        {/* Live Link Button */}
                        <Link to={portfolioLiveLink} target='_blank' className=" group group-* mt-5 flex items-center text-sm relative leading-6 text-black uppercase hover:text-yellow-600">
                        Live <span aria-hidden="true"><ArrowUpRightIcon className="h-4 w-4 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3 group-hover:text-yellow-600"/></span>
                        </Link>   
                                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolio;