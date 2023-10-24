

const Experience = ({ experience }) => {
    const icon = "https://i.ibb.co/8NRgKx2/online-work.png"
    const {position, company, startDate, endDate, description} = experience
    return (
            <div className=''>
                <div className="mb-6 bg-gray-100 px-10 py-10 rounded-xl">
                    <div className=" ">
                        <div className='mb-4 '>
                            <img src={icon} className="h-16 w-16 " />
                        </div>
                        <h3 className="text-2xl font-bold mb-5 text-black">{[position]}</h3>
                        <p className="block mb-5 text-lg font-semibold leading-4 text-gray-900">{ company}</p>
                            <div className='flex items-center justify-between'>
                                <p className="block mb-2 text-base font-normal leading-4  text-gray-900">Start: <span className='bg-themeColor/20 px-2 py-0.5 rounded-md'> {startDate}</span></p>
                                <p className="block mb-2 text-base font-normal leading-3 text-gray-900">End: <span className='bg-themeColor/20 px-2 py-0.5 rounded-md'>{ endDate}</span></p>    
                            </div>
                        <p className="text-base font-normal text-gray-900">{description}</p>
                    </div>
            
                </div>
            </div>
    );
};

export default Experience;