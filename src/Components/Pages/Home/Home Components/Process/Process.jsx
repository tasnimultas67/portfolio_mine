import crown from '../../../../../assets/img1.png'
import { motion } from 'framer-motion'
import './Process.css'
import arrow2 from '../../../../../assets/arrow2.svg'
import Marquee from 'react-fast-marquee';

const Process = () => {
 
    const p1 = "https://i.ibb.co/VpGdyP7/box.png";
    const p2 = "https://i.ibb.co/vwV9G1M/curve.png";
    const p3 = "https://i.ibb.co/vmSCBV4/build.png";
    const p4 = "https://i.ibb.co/Rh8xs22/startup.png";


    return (
        <>
            <div className=" bg-yellowAc py-28 md:py-40">
                <div className="w-11/12 m-auto relative">
                    <img src={crown} alt="" srcSet="" className='hidden md:block absolute left-5 xl:left-52 -top-16' />
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="mb-4 text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black m-auto text-center max-w-3xl">You’re 4 steps away from a new<span className="text-themeColor"> website</span></motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.7,
                        }}
                        viewport={{ once: true }}
                        className="mt-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                        <div className="text-center md:text-left">
                            <img src={p1} className="h-16 w-16 mb-4 m-auto md:m-0" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4 text-center md:text-left">Discovery</h1>
                            <p>This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience.</p>
                        </div>
                        <div className='text-center md:text-left'>
                            <img src={p2} className="h-16 w-16 mb-4 m-auto md:m-0" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4">Design</h1>
                            <p>This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience.</p>
                        </div>
                        <div className='text-center md:text-left'>
                            <img src={p3} className="h-16 w-16 mb-4 m-auto md:m-0" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4">Build</h1>
                            <p>Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability.</p>
                        </div>
                        <div className='text-center md:text-left md:pt-2'>
                            <img src={p4} className="h-14 w-14 mb-4 m-auto md:m-0" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4">Launch</h1>
                            <p>Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Marquee speed={50} gradient={false} pauseOnHover={false} className='bg-themeColor marquee-text font-semibold py-4 text-white'>
                <h2>WEB DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2>WORDPRESS DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /><h2>SHOPIFY DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2 ' /><h2>WORDPRESS CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2>shopify CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' />
    </Marquee>
        </>
    );
};

export default Process;