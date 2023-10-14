import './Footer.css'
import Logo from '../../../../public/tasnimul-haque-logo.png'
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRightIcon} from '@heroicons/react/24/solid'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
]

const Footer = () => {
    const facebook = "https://www.facebook.com/tasnimulh.tas/";
    const instagram = "https://www.instagram.com/_tasnimul_haque/";
    const linkedin = "https://www.linkedin.com/in/tasnimul-haque-/";
    const twitter = "https://twitter.com/tasnimultas";
    const github = "https://github.com/tasnimultas67";
    

    const copyWriteYear = new Date().getFullYear();

    return (
        
        <>
            <div className='w-11/12 m-auto'>
                <div className='py-24 flex flex-col gap-y-10'>
                    <h2 className='text-white text-2xl '>HAVE A NICE WORKS? LET’S TALK WITH ME</h2>

                    <div className='text-gray-300 text-4xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold block md:flex lg:flex xl:flex 2xl:flex items-center'>
                        <h2>hello</h2>
                        <Link className='text-white flex items-center group-* group ml-0 md:ml-3 lg:ml-3 xl:ml-3 2xl:ml-3' to="mailto:tasnimul.haque6@gmail.com">@tasnimul.com
                            <ArrowUpRightIcon className=' h-10 w-10 p-3 md:h-20 md:w-20 md:p-5  bg-gray-800 rounded-full ml-3 group-hover:rotate-45 transition ease-in-out delay-150 group-hover:text-themeColor'></ArrowUpRightIcon>
                        </Link>
                    </div>

                </div>
                <hr className='border-gray-800'/>
                <div className='py-12'>
                    <div className='lg:flex justify-between items-center'>
                        <div className='flex gap-5'>
                            {
                                navigation.map(item => (
                                    <NavLink
                                        style={({ isActive, isPending }) => {
                                            return {
                                                color: isActive ? "yellow" : "white",
                                            }
                                        }}
                                        className="text-white text-xl hover:text-themeColor" to={item.href} key={item.name}>{item.name}</NavLink>
                                ))
                            }
                            {/* {
                                navigation.map(item => (
                                    <NavLink className={` text-xl ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}`} to={item.href} key={item.name}>{ item.name}</NavLink>
                                ))
                            } */}
                        </div>
                        <div>
                            {/* Social Media Link */}
                         <div className='flex gap-3'>
                             {/* Facebook Link */}
                            
                         <Link className='' to={facebook} target='_blank'>
                                 <div className='custom-btn social-btn py-2 px-2.5'>
                                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path className=' fill-white group-hover:fill-black' d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                                 </div>
                             </Link>
                             {/* Instagram Link */}
                             <Link className='' to={instagram} target='_blank'>
                                 <div className='custom-btn social-btn py-2 px-2'>
                                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path
                                    className=' fill-white group-hover:fill-black' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                 </div>
                             </Link>
                             {/* Linkedin Link */}
                             <Link className='' to={linkedin} target='_blank'>
                                 <div className='custom-btn social-btn py-2 px-2'>
                                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path
                                    className=' fill-white group-hover:fill-black' d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                                </div>
                            </Link>
                            {/* Twitter Link */}
                            <Link className='' to={twitter} target='_blank'>
                                <div className='custom-btn social-btn py-2 px-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path className=' fill-white group-hover:fill-black' d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                </div>
                            </Link>
                            {/* Github Link */}
                            <Link className='' to={github} target='_blank'>
                                <div className='custom-btn social-btn py-2 px-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path className=' fill-white group-hover:fill-black' d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                </div>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center pb-7'>
                   
                    <Link className='buyMeCoffee bg-themeColor' target="_blank" to="https://www.buymeacoffee.com/tasnimulhaque" rel="noreferrer">
                           <img className=' bg-themeColor' src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=tasnimulhaque&button_colour=FFFF00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
                    </Link>
                     <p className='text-gray-400'>©{copyWriteYear} All Rights Reserved. Designed with 🤍</p>
                </div>
            </div>
        </>
    );
};

export default Footer;