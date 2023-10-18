import {motion} from 'framer-motion'

const WhyChoose = () => {
    return (
        <>
            <div className="bg-styled py-32">
                <div className="w-10/12 m-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="w-7/12">
                        <h4 className="text-xl font-bold pb-4">WHY CHOOSE ME?</h4>
                        <div  className="text-2xl gap-y-5 flex flex-col">
                            <p>In collaboration with startups and freelancers, I craft visually stunning and innovative websites, graphic designs, logos, and brands. </p>
                            <p>I transcend the conventional, shaping unique solutions.</p>
                            <p>I transform intricate concepts into exceptional websites, designs, and brands.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default WhyChoose;