import { Link } from 'react-router-dom';
import Tasnimul from '../../../../../assets/Tasnimul Haque.jpg'
import { useEffect, useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import signature from '../../../../../../public/tasnimul-signature.png'
import './About.css'
import { motion } from 'framer-motion';

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
    const tasnimulImage = "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/375668856_326333556536514_7453168691461338886_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=OBzLZHreO7IAX_kz6iQ&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBfNz-kSYNp_ovzreEJq3CELGbQdnYY_QI-D_2aMrLaYA&oe=6521E779"

  useEffect(() => {
      setAge(getAge("2003/12/24"));


  }, []);

    
    return (
        <div className="overflow-hidden  pt-40 pb-44 bg-white isolate z-50">
            <div className="w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center">
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                    viewport={{ once: true }}
                    className=''>
                    <h1
                    
                        className=" mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black tracking-tight leading-none">A visual designer focused on creating emotional digital experience</h1>
                    <Link to="/about" className="w-fit justify-center group group-* md:mt-14 flex items-center text-sm relative leading-6 text-black uppercase bg-themeColor px-8 py-3 ">
                        Know More <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </Link>
                </motion.div>
               
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-12">
                    <motion.div
                    
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.7,
                        }}
                        viewport={{once: true}}
                        className="lg:pr-8  flex ">
                        <div className="">
                            <p className="scrollFade text-xl sm:text-2xl md:text2xl xl:text-2xl lg:text-2xl 2xl:text-[1.6rem] leading- text-gray-950 Roobert-font">Hello, I am Tasnimul Haque! I'm a {age}-year-old Web Developer and student based in Dhaka, Bangladesh. I completed a Higher Secondary Certificate degree from Bhola Govt College in 2021. Now I am doing BSS(Hons) in the Political Science department.</p>

                            <p className="scrollFade mt-6 text-xl sm:text-2xl md:text2xl xl:text-2xl lg:text-2xl 2xl:text-[1.6rem] leading-8 text-gray-950 Roobert-font">Since the internet was introduced to me at an early age, I always aspired to use the internet to benefit myself or other people. I realised that the internet is a powerful tool capable of solving any problem. Whenever using the internet I always find myself analysing the design and functionality of websites - how they could be improved, what makes them successful.</p>
                            <img className='md:w-[10rem] lg:w-[11rem] xl:w-[11rem] w-[9rem] mt-2 mb-5' src={signature} alt="Tasnimul Signature" />
                        </div>
                    </motion.div>
                    <div className=' -mt-16 '>
                        <motion.img
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.8,
                            }}
                            viewport={{once: true}}
                            src={Tasnimul}
                            alt="Tasnimul Haque Image"
                            loading='lazy'
                            className="w-full sm:w-[38rem] md:w-[38rem] lg:w-[40rem] xl:w-[40rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 isolate scrollFade"
                        />
                        
                            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
