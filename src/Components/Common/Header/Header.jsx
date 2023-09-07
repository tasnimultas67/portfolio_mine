import { useEffect, useState } from 'react';
import './Header.css'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../../../public/tasnimul-haque-logo.png'
import MyResume from '../../../../public/Tasnimul Haque Resume.pdf';
import { Link, NavLink, useLocation } from 'react-router-dom';
import TopBanner from '../TopBanner/TopBanner';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

const navigation = [
    { name: '<Home/>', href: '/' },
    { name: '<About/>', href: '/about' },
    { name: '<Portfolio/>', href: '/portfolio' },
    { name: '<Contact/>', href: '/contact' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navBg, setNavBg] = useState(false);
  const [isHidden, setIsHidden] = useState(false)

  const location = useLocation()
  const isContactPage = location.pathname === '/contact';
  const classAbsolute = isContactPage ? '' : 'absolute';
    const changeNavBg = () => {
        window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
        window.removeEventListener('scroll', changeNavBg);
        }
    }, [])
  const handleClickHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
      <>
      {!isHidden && <TopBanner handleClickHidden={handleClickHidden}></TopBanner>}
      <div className="sticky top-0 z-[1000] bg-white" onScroll={changeNavBg}>
      <header className={`${classAbsolute} inset-x-0 top-0 z-50`}>
        <nav className={`flex items-center justify-between px-6 py-3 lg:px-8 ${navBg ? 'backdrop-blur bg-black/20' : 'bg-black'}`} aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Tasnimul Haque</span>
              <img
                className="h-10 w-auto"
                src={Logo}
                alt="Tasnimul Haque Logo"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className={`${({ isActive, isPending }) =>
    isActive ? "active" : isPending ? "pending" : "" } text-[0.7rem] hover:text-themeColor uppercase leading-6 text-white `}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end group group-* relative">
            <a href='../../../../public/Tasnimul Haque Resume.pdf' className="flex items-center text-[0.7rem] relative leading-6 text-black uppercase bg-themeColor px-5 py-1" download>
              Resume <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/"  className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-10 w-auto"
                  src={Logo}
                  alt="Tasnimul Haque Logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-themeColor"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root text-center">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700 hover:text-themeColor"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
            </header>
            </div>
      </>
        
    );
};

export default Header;