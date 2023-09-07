import { Link } from 'react-router-dom';
import Tasnimul from '../../../../../assets/Tasnimul Haque.jpg'
import { useEffect, useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import './About.css'

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
        <div className="overflow-hidden py-24 sm:py-32 bg-white">
            <div className="w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center">
                <div className=''>
                    <p className=" text-8xl font-bold uppercase leading-8 scrollFade text-gray-100">Concerning Me</p>
                    <p className=" mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none scrollFade -mt-1">A hands-on creative with more than <br />{experience} years design experience.</p>
                    <Link to="/about" className="w-[11rem] justify-center group group-* mt-14 flex items-center text-sm relative leading-6 text-black uppercase bg-themeColor px-6 py-3 ">
                        Know More <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </Link>
                </div>
               
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-12">
                    <div className="lg:pr-8 lg:pt-4 flex ">
                        <div className="">
                            <p className="scrollFade text-xl sm:text-2xl md:text2xl xl:text-2xl lg:text-2xl 2xl:text-[1.6rem] leading- text-gray-950 Roobert-font">Hello, I am Tasnimul Haque! I'm a {age}-year-old Web Developer and student based in Dhaka, Bangladesh. I completed a Higher Secondary Certificate degree from Bhola Govt College in 2021. Now I am doing BSS(Hons) in the Political Science department.</p>

                            <p className="scrollFade mt-6 text-xl sm:text-2xl md:text2xl xl:text-2xl lg:text-2xl 2xl:text-[1.6rem] leading-8 text-gray-950 Roobert-font">Since the internet was introduced to me at an early age, I always aspired to use the internet to benefit myself or other people. I realised that the internet is a powerful tool capable of solving any problem. Whenever using the internet I always find myself analysing the design and functionality of websites - how they could be improved, what makes them successful.</p>
                            
                        </div>
                    </div>
                    <div className='lg:sticky lg:top-4 flex items-center '>
                        <img
                            src={Tasnimul}
                            alt="Tasnimul Haque Image"
                            className="w-full sm:w-[38rem] md:w-[38rem] lg:w-[40rem] xl:w-[40rem] rounded-xl img-shadow ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 isolate scrollFade"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
