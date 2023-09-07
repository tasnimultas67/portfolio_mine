import React from 'react';
import './Footer.css'
import Logo from '../../../../public/tasnimul-haque-logo.png'
import { Link } from 'react-router-dom';


const Footer = () => {

    const copyWriteYear = new Date().getFullYear();

    return (
        <>
            <footer className=" rounded-lg shadow m-4">
    <div className="w-full mx-auto p-4 md:py-8">
        <div className="flex items-center justify-center lg:justify-between">
		<a className="text-3xl font-bold leading-none" href="/">
<img src={Logo} className="w-[12rem]" alt="Tasnimul Haque"/>
		</a>
    <Link className='buyMeCoffee bg-[#ffff00]' target="_blank" to="https://www.buymeacoffee.com/tasnimulhaque" rel="noreferrer"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=tasnimulhaque&button_colour=FFFF00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" /></Link>
        </div>
        <hr className="my-6 text-yellow-400 sm:mx-auto lg:my-8" />
        <p className="block text-sm text-gray-300 text-center ">© {copyWriteYear} Tasnimul Haque. All Rights Reserved.</p>
    </div>

</footer>
        </>
    );
};

export default Footer;