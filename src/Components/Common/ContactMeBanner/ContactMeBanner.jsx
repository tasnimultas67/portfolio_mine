import './ContactMeBanner.css'
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion'

import { Link } from "react-router-dom";

export default function ContactMeBanner() {

    return (
        <>
            <section className="bg-white md:py-60 py-28 overflow-hidden" >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="w-11/12 m-auto text-center">
                    <h1
                        className="mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black tracking-tight leading-none">You can get in touch with me at your convenience.</h1>
                    <Link
                        to="/contact" className="w-fit justify-center group group-* mt-8 flex items-center text-sm  leading-6 text-white uppercase bg-themeColor px-6 py-3 m-auto rounded">Contact Me <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 text-white ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3" /></span>
                    </Link>
                </motion.div>
            </section>
        </>
  )
}
