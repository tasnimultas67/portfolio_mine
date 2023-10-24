import { useEffect, useState } from 'react';
import Experience from '../../../../Common/Experience/Experience';
import './Experiences.css'
import {motion} from 'framer-motion'

const Experiences = () => {

    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data))
        
    }, [])

    return (
        <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 py-36 bg-white'>
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black tracking-tight leading-none text-center'>Employment <span className='text-themeColor'>Background</span></motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}                
                    className='max-w-2xl m-auto lg:max-w-4xl lg:w-2xl w-[90%]  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl text-center'>The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt</motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.9,
                }}
                viewport={{ once: true }}
                className='md:flex gap-5 md:mt-10'>
                {
                experiences.map(experience => <Experience key={experience._id} experience={experience } />)
                 }
            </motion.div>
            

        </div>
    );
};

export default Experiences;