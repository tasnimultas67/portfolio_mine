import { useEffect, useState } from 'react';
import Experience from '../../../../Common/Experience/Experience';
import './Experiences.css'

const Experiences = () => {

    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data))
        
    }, [])

    return (
        <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 py-36 bg-white'>
            <div className=''>
                <p className='text-8xl font-bold uppercase leading-8 scrollFade text-gray-100'>Experiences</p>
                <h1 className='mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none scrollFade -mt-1'>Where I’ve Worked</h1>
                <p className='max-w-2xl lg:max-w-4xl lg:w-2xl w-[90%]  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl scrollFade'>The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt</p>
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