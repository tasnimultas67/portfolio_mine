import { Swiper, SwiperSlide } from 'swiper/react';
import './ClientLogo.css'

import 'swiper/css';

export default function ClientLogo() {
  return (
      <>
          <div className='bg-white'>
              
              {/* <h2 className='text-center mb-8'>Trusted Clients</h2> */}


              <Swiper
        loop={true}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: false, 
          disableOnInteraction: false,
        }}
        speed={2000}
        slidesPerView={5}
        className="clientLogo "
      >
              <SwiperSlide className=''><img className="dhakaStartup" src="https://i.ibb.co/SngBKn1/Dhaka-Startup.png" alt="Dhaka Startup" /></SwiperSlide>
              <SwiperSlide className=''><img className="theFundSociety" src="https://i.ibb.co/C9vXPg4/thefundsociety.png" alt="The Fund Society" /></SwiperSlide>
              <SwiperSlide className=''><img className="viveFitness" src="https://i.ibb.co/zVMYvRM/vivefitness.png" alt="Vive Fitness" /></SwiperSlide>
              <SwiperSlide className=''><img className="whoWillSpeakForYou" src="https://i.ibb.co/sKXqN1z/whowillspeakforyou.png" alt="Who will speak for you" /></SwiperSlide>
              <SwiperSlide className=''><img className="dorfladen" src="https://i.ibb.co/1GnkKjD/dorfladen.png" alt="Dorfladen" /></SwiperSlide>
              <SwiperSlide className=''><img className="dulhan" src="https://i.ibb.co/R06N2dB/dulhan.png" alt="Dulhan" /></SwiperSlide>
              <SwiperSlide className=''><img className="fusionArts" src="https://i.ibb.co/09p6KZL/fusion-arts.png" alt="Fusion Arts" /></SwiperSlide>
              <SwiperSlide className=''><img className="greenlife" src="https://i.ibb.co/YQDdJP2/greenlife.webp" alt="GreenLife" /></SwiperSlide>
              <SwiperSlide className=''><img className="herbsWorld" src="https://i.ibb.co/zbzRRT3/herbsworld.png" alt="Herbs World Limited" /></SwiperSlide>
              <SwiperSlide className=''><img className="marlonNikolai" src="https://i.ibb.co/n6YkK9X/marlonnikolai.png" alt="Marlon Nikolai" /></SwiperSlide>
              <SwiperSlide className=''><img className="mundgefuhl" src="https://i.ibb.co/HNvTbsv/mundgefuhl.png" alt="Mundgefuhl" /></SwiperSlide>
              <SwiperSlide className=''><img className="oremy" src="https://i.ibb.co/GcJfd7F/oremy.jpg" alt="Oremy" /></SwiperSlide>
              <SwiperSlide className=''><img className="sparkyMall" src="https://i.ibb.co/rQ2xh8h/sparkymall.png" alt="Sparky Mall" /></SwiperSlide>
              <SwiperSlide className='text-blue-700 text-xl uppercase text-center font-semibold'>Boon Solutions</SwiperSlide>
              

      </Swiper>

          </div>
      
    </>
    
  );
}
