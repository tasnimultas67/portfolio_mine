import { useEffect, useState } from 'react';
import './Skills.css'
import SkillLogo from '../../../../Common/SkillLogo/SkillLogo';
import { motion } from 'framer-motion'
import SkillLogoGrid from '../../../../Common/SkillLogo/SkillLogoGrid';

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/expertise.json')
            .then(res => res.json())
            .then(data =>setSkills(data))
    }, [])
    return (
        <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 py-28 relative isolate overflow-hidden bg-white'>
                <div className=' pb-10'>
                <motion.h1
                    
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black tracking-tight leading-none text-center'>My area of expertise</motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className='max-w-2xl lg:max-w-5xl lg:w-3xl w-[90%]  mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl text-center m-auto'>People who wish to go into the future should have two skills to succeed – the ability to deal with people and the ability to sell. - Shiv Khera</motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.9,
                }}
                viewport={{ once: true }}
            className='pb-16'>
                {/* <SkillLogo></SkillLogo> */}
                <SkillLogoGrid></SkillLogoGrid>
            </motion.div>
            
            </div>
    );
};



export default Skills;