import crown from '../../../../../assets/img1.png'

const Process = () => {
    const p1 = "https://i.ibb.co/VpGdyP7/box.png";
    const p2 = "https://i.ibb.co/vwV9G1M/curve.png";
    const p3 = "https://i.ibb.co/vmSCBV4/build.png";
    const p4 = "https://i.ibb.co/Rh8xs22/startup.png";


    return (
        <>
            <div className=" bg-yellowAc py-40">
                <div className="w-11/12 m-auto relative">
                    <img src={crown} alt="" srcSet="" className='absolute left-64 -top-16' />
                    <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black m-auto text-center max-w-3xl">Merging your vision with my <span className="text-themeColor">design</span></h1>
                    <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="">
                            <img src={p1} className="h-20 w-20 mb-4" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4">Discovery</h1>
                            <p>This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience.</p>
                        </div>
                        <div>
                            <img src={p2} className="h-20 w-20 mb-4" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4">Design</h1>
                            <p>This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience.</p>
                        </div>
                        <div>
                            <img src={p3} className="h-20 w-20 mb-4" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4">Build</h1>
                            <p>Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability.</p>
                        </div>
                        <div>
                            <img src={p4} className="h-20 w-20 mb-4" alt="Process Icon" srcSet="" />
                            <h1 className="text-2xl font-bold py-4">Launch</h1>
                            <p>Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Process;