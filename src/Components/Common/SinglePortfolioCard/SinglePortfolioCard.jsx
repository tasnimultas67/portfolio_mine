import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const SinglePortfolioCard = ({portfolio}) => {
    const { portImg, portTitle, portDescription, siteLink, category } = portfolio

    return (
        <>
            <div className="relative flex-col items-end justify-center overflow-hidden rounded-sm text-left scrollFade border border-black/10 hover:border-black/50">

                <div className="relative p-6  px-6 md:px-6">
                    <img src={portImg} className="border border-black/10 mb-4" alt="Portfolio Image" />
                    <p className='backdrop-blur-lg bg-white/20 absolute top-[9.8rem] left-[2rem] px-2 py-0.5 inline-block text-sm text-[#ffff00] rounded shadow-lg'>{ category}</p>
                    <h2 className="mb-2 block font-sans text-2xl font-semibold text-black antialiased">{portTitle}</h2>
                    <p className="mb-4 block font-sans text-base  leading-snug tracking-normal text-gray-900 antialiased">{portDescription.length > 150 ? `${portDescription.substring(0, 150)}...` : portDescription}</p>
                     <div className='flex gap-2 items-center justify-between'>
                        {/* Case Study Button */}
                        <Link to="/about" className=" group group-* mt-5 flex items-center text-sm relative leading-6 text-black uppercase hover:text-yellow-600">
                        Case Study <span aria-hidden="true"><ArrowUpRightIcon className="h-4 w-4 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3 group-hover:text-yellow-600"/></span>
                        </Link>
                        {/* Live Link Button */}
                        <Link to={siteLink} className=" group group-* mt-5 flex items-center text-sm relative leading-6 text-black uppercase hover:text-yellow-600">
                        Live <span aria-hidden="true"><ArrowUpRightIcon className="h-4 w-4 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3 group-hover:text-yellow-600"/></span>
                        </Link>   
                                       
                    </div>
                </div>
            </div>
        </>
    )
};

export default SinglePortfolioCard;