import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const CertificateSlider = () => {
    const [certificates, setCertificats] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/certificates.json')
            .then(res => res.json())
        .then(data => setCertificats(data))
    },[])
    return (
        <Swiper id='certificates' className='w-11/12'
    
       modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
    //   navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
        >
            {
                certificates.map(certificate => (
                    <SwiperSlide key={certificate._id} className='mb-5'>
                        <div className=' backdrop-blur mb-5'>
                    <div className="relative mb-6 sm:mb-0 p-6 rounded-md  border-t border-[#ffffff0d] duration-300 bg-slate-800 highlight-white/5 shadow-md">
                <div className="">
                    <div className='h-14 w-14 bg-slate-700 rounded-md flex justify-center items-center  mb-4 shadow-md'>
                        <ShieldCheckIcon className="h-6 w-6 text-yellow-300" />
                    </div>
                <h3 className="text-lg font-semibold text-white">{certificate.name}</h3>
                <p className="block mb-2 text-sm font-normal  text-gray-300">{ certificate.scholl}</p>
                <time className="block mb-2 text-sm font-normal  text-gray-200">Issue Date: {certificate.issueDate}</time>
                <p className="block mb-2 text-sm font-normal  text-gray-200">Credential ID: { certificate.credentialId}</p>
                <p className="text-sm font-normal text-gray-200">{certificate.description.length > 180 ? `${certificate.description.substring(0, 180)}...` : certificate.description}</p>
                
                <Link to={certificate.certificateURL} className=" inline-flex items-center mt-3 px-4 py-2 text-sm font-medium text-gray-300 bg-slate-700 border border-gray-700 rounded-lg hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-yellow-500 dark:bg-gray-800 dark:text-gray-700 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Download <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></Link>
            </div>
            
        </div>
        </div>
                    </SwiperSlide>))
            }
                {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
    );
};

export default CertificateSlider;