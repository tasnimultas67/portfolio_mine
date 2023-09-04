import { useEffect, useState } from 'react';
function getAge(dateString) {
    const today = new Date();
    const givenDate = new Date(dateString);
    let age = today.getFullYear() - givenDate.getFullYear();
    const m = today.getMonth() - givenDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < givenDate.getDate())) {
        age--;
    }
    return age;
}
export default function Simple() {
          const [age, setAge] = useState(null);
  const [experience, setExperience] = useState(null)

  useEffect(() => {
      setAge(getAge("2003/12/24"));
      setExperience(getAge("2019/11/02"))
  }, []);
  return (
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:pr-8 lg:pt-4 flex items-center">
          <div className="lg:max-w-xl isolate">
            <h2 className="text-base font-semibold leading-7 text-[#ffff00] scrollFade">About</h2>
                            <p className="mb-4 text-5xl font-extrabold text-white tracking-tight leading-none md:text-5xl xl:text-6xl scrollFade">Concerning Me</p>
                            <p className="mt-6 text-2xl leading-8 text-gray-200 Roobert-font scrollFade">A hands-on creative with more than {experience} years design experience.</p>
                            <p className="scrollFade mt-6 text-2xl leading-8 text-gray-200 Roobert-font">Hello, I am Tasnimul Haque! I'm a {age}-year-old developer and student based in Dhaka, Bangladesh. I completed a Higher Secondary Certificate degree from Bhola Govt College in 2021. Now I am doing BSS(Hons) in the Political Science department.</p>

                            <p className="scrollFade mt-6 text-2xl leading-8 text-gray-200 Roobert-font">Since the internet was introduced to me at an early age, I always aspired to use the internet to benefit myself or other people. I realised that the internet is a powerful tool capable of solving any problem. Whenever using the internet I always find myself analysing the design and functionality of websites - how they could be improved, what makes them successful.</p>
                            <p className="scrollFade mt-6 text-2xl leading-8 text-gray-200 Roobert-font">I became fascinated with web design when I got my first computer several years ago, spending hours experimenting with CSS and HTML coding.As a person I am organized, punctual and a quick learner. I enjoy problem solving and motivating myself, which I feel plays a key part in learning how to use programming languages and creating websites.</p>
                            <p className="scrollFade mt-6 text-2xl leading-8 text-gray-200 Roobert-font">In my spare time I enjoy reading, music, watching movies, travelling, art and socialising, these have all led me to use the internet to research and keep updated with my interests. I have benefited greatly from applying the internet to my hobbies, which is another reason why I aspire to become a web developer. I have recently designed my own website which I use as a portfolio and a place to practice using HTML, CSS, JavaScript, React, WordPress & Shopify.</p>
                            <p className="scrollFade mt-6 text-2xl leading-8 text-gray-200 Roobert-font">I created this website so I could showcase all this and through this process, make it easier for you to connect with me. If you like what you see, head over to the contact section below and send me a text. I would love to hear from you!</p>
          </div>
        </div>
        <div className="-ml-12  p-12 lg:sticky lg:top-4 lg:overflow-hidden">
          <img
            className="w-[38rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0  scrollFade "
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
      </div>
          </div>
      
    </div>
  )
}
