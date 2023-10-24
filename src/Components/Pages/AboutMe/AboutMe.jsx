import tasnimulAboutBanner from '../../../assets/TasnimulHaqueAboutBanner.webp'
import { useEffect, useState } from "react";
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import CertificateSlider from '../../Common/CertificateSlider/CertificateSlider';
import {motion} from 'framer-motion'
import ClientLogo from '../../Common/ClientLogo/ClientLogo';
register();
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
const AboutMe = () => {
    const [age, setAge] = useState(null);

  useEffect(() => {
      setAge(getAge("2003/12/24"));

  }, []);
    
  
    return (
        <>
            <div className=''>
                <div className=' py-28 md:py-40 bg-white'>
                    <div className='w-11/12 md:w-10/12 m-auto'>
                        {/* Title */}
                        <div className='md:pb-24 pt-20 '>
                            <motion.h1
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                    viewport={{ once: true }}
                                
                                className='text-center text-4xl md:text-6xl lg:text-7xl font-extrabold '>Not a dev, designer and most certainly not a role model. Just a stray cat trying to survive.
                            </motion.h1>
                        </div>
                        {/* Image */}
                        <motion.img
                            initial={{ opacity: 0, y: 200 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                    viewport={{ once: true }}
                            className='m-auto mt-28 shadow-xl h-80 md:h-[100%]  md:max-h-none w-full object-cover rounded ' loading='lazy' src={tasnimulAboutBanner} alt="Tasnimul Image" srcSet="" />
                        {/* Details about me */}
                        <div className=" m-auto text-center sm:text-left md:py-10 py-5 mt-10 text-xl">
                                    
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="   mt-6 text-gray-900 Roobert-font">Hello, I am Tasnimul Haque! I'm a {age}-year-old developer and student based in Dhaka, Bangladesh. I completed a Higher Secondary Certificate degree from Bhola Govt College in 2021. Now I am doing BSS(Hons) in the Political Science department.</motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="   mt-6 text-gray-900 Roobert-font">Since the internet was introduced to me at an early age, I always aspired to use the internet to benefit myself or other people. I realised that the internet is a powerful tool capable of solving any problem. Whenever using the internet I always find myself analysing the design and functionality of websites - how they could be improved, what makes them successful.</motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="   mt-6 text-gray-900 Roobert-font">I became fascinated with web design when I got my first computer several years ago, spending hours experimenting with CSS and HTML coding.As a person I am organized, punctual and a quick learner. I enjoy problem solving and motivating myself, which I feel plays a key part in learning how to use programming languages and creating websites.</motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="   mt-6 text-gray-900 Roobert-font">In my spare time I enjoy reading, music, watching movies, travelling, art and socialising, these have all led me to use the internet to research and keep updated with my interests. I have benefited greatly from applying the internet to my hobbies, which is another reason why I aspire to become a web developer. I have recently designed my own website which I use as a portfolio and a place to practice using HTML, CSS, JavaScript, React, WordPress & Shopify.</motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="   mt-6 text-gray-900 Roobert-font">I created this website so I could showcase all this and through this process, make it easier for you to connect with me. If you like what you see, head over to the contact section below and send me a text. I would love to hear from you!</motion.p>
                        </div>
                    </div>
                    <div  className="pt-28">
                        <ClientLogo></ClientLogo>
                    </div>
                    
                </div>
                {/* Certificates */}
                <div className='py-28 w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center bg-[#214FC6]'>
                    <CertificateSlider/>
                </div>
             </div>
        </>
    );
};

export default AboutMe;
