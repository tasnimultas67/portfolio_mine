import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon} from "@heroicons/react/24/solid";
import SinglePortfolioCard from "../../../../Common/SinglePortfolioCard/SinglePortfolioCard";
import {motion} from 'framer-motion'

const Portfolios = () => {

    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch('https://portfoliobackendserver-tasnimul.up.railway.app/portfolio')
            .then(res => res.json())
            .then(data =>setPortfolios(data))
    },[])
    
    return (
            <div className='py-28 md:py-40 bg-themeColor'>
            <div className='w-11/12 m-auto text-center sm:text-left'>

                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-4 text-5xl md:text-5xl lg:text-6xl xl:text-[4.2rem] 2xl:text-7xl font-bold text-white tracking-tight leading-none text-center m-auto '>A taste of what I can do for you</motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className='max-w-2xl text-center m-auto lg:w-5xl  mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl'>This section serves as a visual representation of my professional trajectory and the significant milestones I’ve achieved</motion.p>

                <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.9,
                        }}
                    viewport={{ once: true }}
                className="flex justify-center items-center">
                    <Link to="/portfolio" className="w-fit m-auto sm:m-0 justify-center group group-*  flex items-center text-sm relative leading-6 text-black uppercase bg-white px-8 py-3 cursor-pointer rounded">
                        See More <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                    </Link>
                </motion.div>
                
                <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 pt-10'>
                    {
                        portfolios.slice(0, 3).map(portfolio => <SinglePortfolioCard key={portfolio._id} portfolio={portfolio}/>)
                    }
                </div>
            </div>

        </div>
    );
};



export default Portfolios;