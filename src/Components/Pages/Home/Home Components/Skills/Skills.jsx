import React, { useEffect, useState } from 'react';
import './Skills.css'
const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/expertise.json')
            .then(res => res.json())
            .then(data =>setSkills(data))
    }, [])
    console.log(skills);
    return (
        <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 py-28 bg-white'>
                <div className=' '>
                    <p className='text-base font-semibold leading-7 text-[#ffff00] mb-3 scrollFade'>Skills</p>
                    <h1 className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none scrollFade mt-5'>My area of expertise</h1>
                    <p className='max-w-2xl lg:max-w-5xl lg:w-3xl w-[90%]  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl scrollFade'>People who wish to go into the future should have two skills to succeed – the ability to deal with people and the ability to sell. - Shiv Khera</p>
                </div>
                <div className='skills-container grid-cols-3 grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-10 pt-10 '>
                {
                    skills.map(skill => <Skill key={skill.name} skill={skill}/>)
                    }
                </div>

            </div>
    );
};

function Skill({skill}) {
    return (
        <div className=" skill-container  p-5 flex items-center  justify-center rounded-md">
            <img className={`${skill.name} lg:w-[4rem] md:w-[3rem]sm:w-[1rem] w-[3rem]`} title={skill.name} src={skill.img} alt="" srcSet="" />
        </div>
    )
}

export default Skills;