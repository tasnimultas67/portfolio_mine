import { Link } from 'react-router-dom';
import Tasnimul from '../../../../../assets/Tasnimul Haque.jpg'
import { useEffect, useState } from 'react';

function getAge(dateString) {
    const today = new Date();
    const givenDate = new Date(dateString);
    let age = today.getFullYear() - givenDate.getFullYear();
    const m = today.getMonth() - givenDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < givenDate.getDate())) {
        age--;
    }
    return age;
}

export default function About() {
  const [age, setAge] = useState(null);
  const [experience, setExperience] = useState(null)

  useEffect(() => {
      setAge(getAge("2003/12/24"));
      setExperience(getAge("2019/11/02"))
  }, []);

    return (
        <div className="overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4 flex items-center">
                        <div className="lg:max-w-xl isolate">
                            <h2 className="text-base font-semibold leading-7 text-[#ffff00] scrollFade">About</h2>
                            <p className="mb-4 text-5xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl scrollFade">Concerning Me</p>
                            <p className="mt-6 text-2xl leading-8 text-gray-200 Roobert-font scrollFade">A hands-on creative with more than {experience} years design experience.</p>
                            <p className="scrollFade mt-6 text-2xl leading-8 text-gray-200 Roobert-font">Hello, I am Tasnimul Haque! I'm a {age}-year-old developer and student based in Dhaka, Bangladesh. I completed a Higher Secondary Certificate degree from Bhola Govt College in 2021. Now I am doing BSS(Hons) in the Political Science department.</p>

                            <p className="scrollFade mt-6 text-2xl leading-8 text-gray-200 Roobert-font">Since the internet was introduced to me at an early age, I always aspired to use the internet to benefit myself or other people. I realised that the internet is a powerful tool capable of solving any problem. Whenever using the internet I always find myself analysing the design and functionality of websites - how they could be improved, what makes them successful.</p>
                            <Link to="/about/#aboutme" className='text-[#ffff00] scrollFade mt-6 text-xl leading-8'>&lt;Know More/&gt;</Link>
                        </div>
                    </div>
                    <div className='lg:sticky lg:top-4 flex items-center'>
                        <img
                            src={Tasnimul}
                            alt="Tasnimul Haque Image"
                            className="w-[38rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 isolate scrollFade"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
