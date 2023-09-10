import './Home.css'
import Hero from './Home Components/Hero/Hero';
import About from './Home Components/About/About';
import Certification from './Home Components/Certification/Certification';
import Experiences from './Home Components/Experiences/Experiences';
import Portfolios from './Home Components/Portfolios/Portfolios';
import Skills from './Home Components/Skills/Skills';
import ContactMeBanner from '../../Common/ContactMeBanner/ContactMeBanner';
import SimpleBanner from '../../Common/SimpleBanner/SimpleBanner';
import ClientsReview from './Home Components/ClientsReview/ClientsReview';
import SinglePortfolioCard from '../../Common/SinglePortfolioCard/SinglePortfolioCard';


const Home = () => {
    return (
        <div className='home'>

            <Hero></Hero>
            <About></About>
            <Certification></Certification>
            <Experiences></Experiences>

            {/* <section className="scrolling-text">
                <div className="scroll text1 ">
                <div className="bg-[#ffff00]">
                Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>
                </div>
                <div className="bg-[#ffff00]">
                Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>
                </div>
                <div>
                Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>Tasnimul <span>Haque • </span>
                </div>
                </div>
            </section> */}
            <Skills/>
            <Portfolios />
            {/* <SinglePortfolioCard/> */}
            {/* <ClientsReview/> */}
            <ContactMeBanner />
            {/* <SimpleBanner/> */}

        </div>
    );
};

export default Home;