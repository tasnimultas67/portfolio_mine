import { Profiler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePortfolio from "../../../../Common/SinglePortfolio/SinglePortfolio";

const Portfolios = () => {

    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/portfolio.json')
            .then(res => res.json())
            .then(data =>setPortfolios(data))
    },[])
    
    return (
            <div className='w-11/12 m-auto py-28'>
                <div className='text-center'>
                    <p className='text-base font-semibold leading-7 text-[#ffff00] mb-3 scrollFade'>Portfolio</p>
                    <h1 className='max-w-4xl m-auto mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center text-white scrollFade'>Helping brands to simplify their digital experiences.</h1>
                    <p className='max-w-2xl lg:max-w-5xl lg:w-3xl w-[90%]  mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl text-center m-auto scrollFade'>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” - Steve Jobs</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-10'>
                    {
                        portfolios.slice(0, 3).map(portfolio => <SinglePortfolio key={portfolio._id} portfolio={portfolio}/>)
                    }
            </div>
            <div className="w-11/12 m-auto mt-10 text-center">
                <Link to="/portfolio">
                    <button className="button button-mat btn--7 scrollFade">
                    <div className="psuedo-text">Show More</div>
                    </button>
                </Link>
            </div>

            </div>
    );
};

export default Portfolios;