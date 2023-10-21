import {motion} from 'framer-motion'
import RubicsCube from '../../../../Common/RubicsCube/RubicsCube';

const WhyChoose = () => {
    return (
        <>
            <div className="bg-themeColor py-48">
                <div className="w-11/12 m-auto md:flex md:justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="md:w-7/12">
                        <h4 className="text-xl font-bold pb-4">WHY CHOOSE ME?</h4>
                        <div  className="text-2xl gap-y-5 flex flex-col">
                            <p>I work with startup companies and freelancers to create beautiful and creative websites, visual designs, logos, and brands.</p>
                            <p>I expand beyond the ordinary and form creative solutions.</p>
                            <p>Taking complex ideas and turning them into extraordinary websites, designs, and brands.</p>
                        </div>
                    </motion.div>
                    <div className='md:pr-28'>
                        <RubicsCube></RubicsCube>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoose;