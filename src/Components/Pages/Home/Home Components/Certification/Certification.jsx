import { useEffect, useState } from 'react';
import Certificate from '../../../../Common/Certificate/Certificate';
import { Link } from 'react-router-dom';
import './Certification.css'
import CertificateSlider from '../../../../Common/CertificateSlider/CertificateSlider';

const Certification = () => {
    // const [certificates, setCertificats] = useState([])
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/certificates.json')
    //         .then(res => res.json())
    //     .then(data => setCertificats(data))
    // },[])
    return (
        <div className='py-28 gradient-bg'>

            <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16'>
                <div className='mb-16'>
                <p className='text-base font-semibold leading-7 text-[#ffff00] mb-3 scrollFade'>Certifications</p>
                <h1 className='text-[2.5rem] md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl mb-4 font-extrabold tracking-tight leading-none text-white scrollFade'>Officially Recognize As</h1>
                <p className='max-w-2xl lg:max-w-4xl lg:w-2xl w-[90%]  mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl'>You can lead and motivate people without a certificate or title, what you need to do is to tell people a compelling secret that was only known to you.</p>
            </div>
            <CertificateSlider/>
            </div>
        </div>
    );
};

export default Certification;