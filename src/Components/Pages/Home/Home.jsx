import './Home.css'
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
            <div className='py-48'>
                <h1 className='mb-20 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold max-w-4xl m-auto text-black tracking-tight leading-none text-center'>Trusted by thousands of successful startups worldwide</h1>
                <ClientLogo></ClientLogo>
            </div>
            {/* <ContactMeBanner /> */}

        </div>
    );
};

export default Home;