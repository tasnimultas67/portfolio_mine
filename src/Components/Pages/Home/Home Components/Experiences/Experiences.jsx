import React, { useEffect, useState } from 'react';
import Experience from '../../../../Common/Experience/Experience';

const Experiences = () => {

    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data))
        
    }, [])

    return (
        <div className='w-11/12 m-auto py-28'>
            <div className='text-center'>
                <p className='text-base font-semibold leading-7 text-[#ffff00] mb-3 scrollFade'>Experiences</p>
                <h1 className='max-w-2xl m-auto mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center text-white scrollFade'>Companies I have worked with</h1>
                <p className='max-w-2xl lg:max-w-4xl lg:w-2xl w-[90%]  mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl text-center m-auto scrollFade'>The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt</p>
            </div>
            <div className='md:grid lg:grid grid-cols-2 gap-10 scrollFade md:mt-16 lg:mt-16'>
                {
                experiences.map(experience => <Experience key={experience._id} experience={experience } />)
                 }
            </div>
            

        </div>
    );
};

export default Experiences;