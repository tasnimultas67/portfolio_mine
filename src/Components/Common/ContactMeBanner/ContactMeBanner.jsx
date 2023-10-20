import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion'

import { Link } from "react-router-dom";

export default function ContactMeBanner() {
    return (
        <>
            <section className="bg-white md:pb-48 pb-28 pt-36 overflow-hidden" >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center">
                    <h1
                        className="mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold text-black tracking-tight leading-none">You can get in touch with me at your convenience.</h1>
                    <Link
                        to="/contact" className="w-fit justify-center group group-* mt-8 flex items-center text-sm  leading-6 text-black uppercase bg-themeColor px-6 py-3">Contact Me <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3" /></span>
                        </Link>
    </motion.div>
                <div>
                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" fade size="sm" style={{color: "#000000",}} />
                </div>
</section>
        </>
  )
}
