import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SinglePortfolio from "../../../../Common/SinglePortfolio/SinglePortfolio";
import { ArrowUpRightIcon} from "@heroicons/react/24/solid";
import SinglePortfolioCard from "../../../../Common/SinglePortfolioCard/SinglePortfolioCard";

const Portfolios = () => {

    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data =>setPortfolios(data))
    },[])
    
    return (
            <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 py-36 bg-white'>
                <div className=''>
                    <p className='text-8xl font-bold uppercase leading-8 scrollFade text-gray-100'>Portfolio</p>
                    <h1 className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none scrollFade -mt-1'>I collaborated with pioneering leaders to create exceptional products</h1>
                <p className='max-w-2xl lg:max-w-5xl lg:w-5xl  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl scrollFade'>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” - Steve Jobs</p>

                <Link to="/about" className="w-[11rem] justify-center group group-* mt-10 flex items-center text-sm relative leading-6 text-black uppercase bg-themeColor px-6 py-3 ">
                        See More <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </Link>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-10'>
                    {
                        portfolios.slice(0, 3).map(portfolio => <SinglePortfolioCard key={portfolio._id} portfolio={portfolio}/>)
                    }
            </div>

            </div>
    );
};



export default Portfolios;