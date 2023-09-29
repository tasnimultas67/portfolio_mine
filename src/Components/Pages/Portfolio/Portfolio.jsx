import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SinglePortfolio from '../../Common/SinglePortfolio/SinglePortfolio';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const Portfolio = () => {
    const loadedPortfolios = useLoaderData()
    console.log(loadedPortfolios);
    const [portfolios, setPortfolios] = useState(loadedPortfolios)
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/portfolio.json')
    //         .then(res => res.json())
    //         .then(data => setPortfolios(data))
        
    // },[])

    return (
        <div className='py-28 w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center bg-white'>
            <div className='mb-10'>
                    <p className='text-base font-semibold leading-7 text-themeColor mb-3 scrollFade'>Portfolio</p>
                    <h1 className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none scrollFade mt-5'>Helping brands to simplify their digital experiences.</h1>
                <p className='max-w-2xl lg:max-w-5xl lg:w-5xl  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl scrollFade'>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” - Steve Jobs</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {
                    portfolios.map(portfolio => <SinglePortfolio key={portfolio._id} portfolio={portfolio}/>)
                }
            </div>
        </div>
    );
};

export default Portfolio;