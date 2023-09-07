import { Profiler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SinglePortfolio from "../../../../Common/SinglePortfolio/SinglePortfolio";
import { ArrowUpRightIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";

const Portfolios = () => {

    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/portfolio.json')
            .then(res => res.json())
            .then(data =>setPortfolios(data))
    },[])
    
    return (
            <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 py-36 bg-white'>
                <div className=''>
                    <p className='text-8xl font-bold uppercase leading-8 scrollFade text-gray-100'>Portfolio</p>
                    <h1 className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none scrollFade -mt-1'>Helping brands to simplify their digital experiences.</h1>
                <p className='max-w-2xl lg:max-w-5xl lg:w-5xl  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl scrollFade'>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” - Steve Jobs</p>

                <Link to="/about" className="w-[11rem] justify-center group group-* mt-10 flex items-center text-sm relative leading-6 text-black uppercase bg-themeColor px-6 py-3 ">
                        See More <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </Link>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-10'>
                    {
                        portfolios.slice(0, 3).map(portfolio => <SinglePortfolio key={portfolio._id} portfolio={portfolio}/>)
                    }
            </div>
            {/* <div className="w-11/12 m-auto mt-10 text-center">
                <Link to="/portfolio">
                    <button className="button button-mat btn--7 scrollFade">
                    <div className="psuedo-text">Show More</div>
                    </button>
                </Link>
            </div> */}

            </div>
    );
};

const SinglePortfolio = ({portfolio}) => {
        const { portImg, portTitle, portDescription, siteLink, category } = portfolio

    return (
        <>
            <div className="relative flex-col items-end justify-center overflow-hidden rounded-sm text-left scrollFade border border-black/10 hover:border-black/50">
                {/* <div style={{backgroundImage:`url(${portImg})`}} className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center  shadow-none`}>
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/100 via-black/75"></div>
                </div> */}

                <div className="relative p-6  px-6 md:px-6">
                    <img src={portImg} className="border border-black/10 mb-4" alt="Portfolio Image" srcSet="" />
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
}


export default Portfolios;