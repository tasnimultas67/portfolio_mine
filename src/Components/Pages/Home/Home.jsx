import './Home.css'
import Hero from './Home Components/Hero/Hero';
import About from './Home Components/About/About';
import Experiences from './Home Components/Experiences/Experiences';
import Portfolios from './Home Components/Portfolios/Portfolios';
import Skills from './Home Components/Skills/Skills';
import ContactMeBanner from '../../Common/ContactMeBanner/ContactMeBanner';
import ClientLogo from '../../Common/ClientLogo/ClientLogo';
import WhyChoose from './Home Components/WhyChoose/WhyChoose';


const Home = () => {
    return (
        <div className='home'>

            <Hero></Hero>
            <About></About>
            <WhyChoose></WhyChoose>
            <Experiences ></Experiences>
            <Skills/>
            <Portfolios />
            <ClientLogo></ClientLogo>
            <ContactMeBanner />

        </div>
    );
};

export default Home;