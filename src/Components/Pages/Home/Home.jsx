import './Home.css'
import {motion} from 'framer-motion'
import Hero from './Home Components/Hero/Hero';
import About from './Home Components/About/About';
import Experiences from './Home Components/Experiences/Experiences';
import Portfolios from './Home Components/Portfolios/Portfolios';
import Skills from './Home Components/Skills/Skills';
import ContactMeBanner from '../../Common/ContactMeBanner/ContactMeBanner';
import ClientLogo from '../../Common/ClientLogo/ClientLogo';
import WhyChoose from './Home Components/WhyChoose/WhyChoose';
import Process from './Home Components/Process/Process';


const Home = () => {
    return (
        <div className='home'>

            <Hero></Hero>
            <About></About>
            <WhyChoose></WhyChoose>
            <Experiences ></Experiences>
            <Process></Process>
            <Skills/>
            <Portfolios />
            <div className='py-28 md:py-48'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-20 w-11/12  text-4xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold md:max-w-4xl m-auto text-black tracking-tight leading-none text-center'>Trusted by thousands of successful startups worldwide</motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}>
                    <ClientLogo></ClientLogo>
                </motion.div>
            </div>
            {/* <ContactMeBanner /> */}

        </div>
    );
};

export default Home;