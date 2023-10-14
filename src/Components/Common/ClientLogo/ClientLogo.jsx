import { Swiper, SwiperSlide } from 'swiper/react';
import './ClientLogo.css'

import 'swiper/css';

export default function ClientLogo() {
  return (
      <>
          <div className='bg-white pt-28'>
              
              <h2 className='text-center mb-8'>Trusted Clients</h2>


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
              <SwiperSlide className=''><img className="dhakaStartup" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/383237225_338182715351598_1197577533740449479_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=Lw66HgMNHawAX_zlZTI&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDmXYg9JzcIbpu1nfY9oPVHLTmQC845H7dTKjw0bJbo1g&oe=651D8A2A" alt="Dhaka Startup" /></SwiperSlide>
              <SwiperSlide className=''><img className="theFundSociety" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/383157776_338182668684936_7770472767770134987_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=49d041&_nc_ohc=rjDedo6_p7kAX-QFZS0&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDElmrh4y9pNGkfog8UIj2xAYcAnpt0JM5FEvl95fXong&oe=651BFF68" alt="The Fund Society" /></SwiperSlide>
              <SwiperSlide className=''><img className="viveFitness" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/384803267_338182658684937_3104583119025891327_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=NriOr9uof-oAX89UPd-&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBVy8Bu6DYm1cFDGtNioW1JAH5KiDMxXKMzEGhMSh9uvg&oe=651BE286" alt="Vive Fitness" /></SwiperSlide>
              <SwiperSlide className=''><img className="whoWillSpeakForYou" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/384787784_338182655351604_7214706264977261595_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=49d041&_nc_ohc=IOcVZ5fVO-cAX-8-TqO&_nc_ht=scontent.fdac14-1.fna&oh=00_AfD_tcNrqy4fMyd8F475yYMedywhMukAymS7BHAWRJ4ehA&oe=651D90CA" alt="Who will speak for you" /></SwiperSlide>
              <SwiperSlide className=''><img className="dorfladen" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/383224189_338182745351595_4373811347507596361_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=n2X30EdMba0AX-wCiNZ&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDl0_lywYR1LyJY9wWxaYnAkO5e3UC9in8g-w--vR-5Vw&oe=651C20D3" alt="Dorfladen" /></SwiperSlide>
              <SwiperSlide className=''><img className="dulhan" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/383345139_338182768684926_3264051522726193792_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=udUnmxlMV3gAX9Qe4sV&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAadJZUgGkZEXD--3wwnkEgsZH6gzJ806E2rbCvkukc6w&oe=651C47A6" alt="Dulhan" /></SwiperSlide>
              <SwiperSlide className=''><img className="fusionArts" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/383228314_338182802018256_8313943653397015495_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=g8ZsMHDAvu8AX8NnAZ3&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDvk-TiDcqgzMYnQ9mP9JdMk9X45Qf-SXNiHJxBwWsMTw&oe=651CD1BB" alt="Fusion Arts" /></SwiperSlide>
              <SwiperSlide className=''><img className="greenlife" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/385078968_338182818684921_3701901083213677190_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=3O_ynE5bgngAX-WnCoU&_nc_ht=scontent.fdac14-1.fna&oh=00_AfC29Qw1jssoTXD8n_w7Nd5sMcwCZ1i4OywF9iCkg8Rtug&oe=651DD248" alt="GreenLife" /></SwiperSlide>
              <SwiperSlide className=''><img className="herbsWorld" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/384777326_338182848684918_581826552352809489_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=Ez_yODMikPYAX_F7v_o&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAhdWhmRMqUbJQOOYPp7QUegxmR5c2qc-xbrJ84gzQoWg&oe=651CACAF" alt="Herbs World Limited" /></SwiperSlide>
              <SwiperSlide className=''><img className="marlonNikolai" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/384993484_338182882018248_2954237473131616875_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=lcgVrrgi0JkAX-bE-KZ&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAiga_VumYg0L8N1B39dR3J92CAc4n247Dr8hKVjYO23A&oe=651DD821" alt="Marlon Nikolai" /></SwiperSlide>
              <SwiperSlide className=''><img className="mundgefuhl" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/384775013_338182905351579_6383300381088723485_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=449iKbXkItoAX8TFgsd&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCylAeZgkCL7B8lCLreh4cymDmhXLTmLukpDIG3QMZy4w&oe=651D6468" alt="Mundgefuhl" /></SwiperSlide>
              <SwiperSlide className=''><img className="oremy" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/384803356_338182938684909_8130984471113070496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=JMdm36iZy8QAX-OUtl2&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDWPRIWkby8wiSw6or51WDasSlbBQJUagi0Hsyo5A9jOw&oe=651DAF89" alt="Oremy" /></SwiperSlide>
              <SwiperSlide className=''><img className="sparkyMall" src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/383153409_338182965351573_648227701326546822_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=TKB-UqtpI6EAX8OxQ0K&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCcHa6DUXFvM0IFE4WzfRd4zSjZdNoIm4I9Quk8cRNdGg&oe=651D5A68" alt="Sparky Mall" /></SwiperSlide>
              

      </Swiper>

          </div>
      
    </>
    
  );
}
