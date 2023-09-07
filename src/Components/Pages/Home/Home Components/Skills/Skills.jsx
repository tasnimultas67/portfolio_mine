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
        <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 py-28 relative isolate overflow-hidden bg-themeColor'>
            {/* <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
                <div className=' '>
                    <p className='text-8xl font-bold uppercase leading-8 scrollFade text-gray-900/[0.1]'>Skills</p>
                    <h1 className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none scrollFade -mt-1'>My area of expertise</h1>
                    <p className='max-w-2xl lg:max-w-5xl lg:w-3xl w-[90%]  mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl scrollFade'>People who wish to go into the future should have two skills to succeed – the ability to deal with people and the ability to sell. - Shiv Khera</p>
                </div>
                <div className='backdrop-blur-md bg-white rounded-xl shadow skills-container grid-cols-3 grid sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-10 pt-10 p-5'>
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