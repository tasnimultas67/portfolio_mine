import { useEffect, useState } from 'react';
import Certificate from '../../../../Common/Certificate/Certificate';
import { Link } from 'react-router-dom';
import './Certification.css'

const Certification = () => {
    const [certificates, setCertificats] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/certificates.json')
            .then(res => res.json())
        .then(data => setCertificats(data))
    },[])
    return (
        <div className='py-28'>

            <div className='text-center'>
                <p className='text-base font-semibold leading-7 text-[#ffff00] mb-3 scrollFade'>Certifications</p>
                <h1 className='max-w-3xl m-auto mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center text-white scrollFade'>Officially Recognize As</h1>
                <p className='max-w-2xl lg:max-w-4xl lg:w-2xl w-[90%]  mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl text-center m-auto scrollFade'>You can lead and motivate people without a certificate or title, what you need to do is to tell people a compelling secret that was only known to you.</p>
            </div>

                <div className="items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-11/12 m-auto gap-5 scrollFade mt-16">
                    {
                    certificates.slice(0, 3).map(certificate => <Certificate key={certificate._id} certificate={certificate}/>)
                }
                </div>
                <div className='text-center mt-10'>
                    {/* <Link to='/about' className='border border-[#ffff00] text-center justify-center py-2 px-5 text-white'>See More</Link> */}

                    <Link to="/about#certificates">
                        <button className="button button-mat btn--7 scrollFade">
                        <div className="psuedo-text">Show More</div>
                        </button>
                    </Link>

                </div>

            



        </div>
    );
};

export default Certification;