import {useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import SinglePortfolioCard from '../../Common/SinglePortfolioCard/SinglePortfolioCard';
import {motion} from "framer-motion"

const Portfolio = () => {
    const loadedPortfolios = useLoaderData()
    console.log(loadedPortfolios);
    const [portfolios, setPortfolios] = useState(loadedPortfolios)

    return (
        <div className='py-28 w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center bg-white'>
            <div className='md:pt-28 md:pb-10 pt-16 pb-5'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black tracking-tight leading-none'>Helping brands to simplify their digital experiences.</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className='max-w-2xl lg:max-w-5xl lg:w-5xl  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl scrollFade'>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.” - Steve Jobs</motion.p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {
                    portfolios.map(portfolio => <SinglePortfolioCard key={portfolio._id} portfolio={portfolio}/>)
                }
            </div>
        </div>
    );
};

export default Portfolio;