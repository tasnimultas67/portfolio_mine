import { Link, useLoaderData } from "react-router-dom";
import { ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid'

const SinglePortfolio = () => {

    const Img1 = "https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/381400336_338293568673846_4856061978783159680_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=b5ZjrhrY_U4AX-hM1ce&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDgum8pEK7gSPhuuxOj6ZNqHrp5UW1Fs9TmSbQuh3TdXA&oe=651D7F19"

    const portfolio = useLoaderData();
    const { _id, portfolioTitle, portfolioCategory, portfolioImgLink, portfolioDetails, portfolioLiveLink } = portfolio;

    return (
        <>
            <div className="bg-white py-36">
                <div className="md:w-9/12 lg:w-9/12 xl:w-9/12 m-auto">
                    {/* Portfolio Promotional banner */}
                    <div className="relative overflow-hidden rounded-lg shadow">
                            <img alt="Portfolio Cover Image" src={portfolioImgLink} className="absolute inset-0 h-full w-full object-cover" />
                            <div className="relative bg-gradient-to-t from-black/80 to-black/25 pt-32 pb-4 sm:pt-48 sm:pb-5 lg:pt-64 lg:pb-6">
                                <div className="p-4 sm:p-6">
                                    <p className="block text-sm text-white/90">Wordpress</p>
                                <h3 className="mt-2 text-5xl font-bold text-white mb-4">{portfolioTitle}</h3>
                                <Link className="text-yellow-500 flex items-center w-[15rem]" to={portfolioLiveLink} target="_blank">{portfolioLiveLink} <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 text-yellow-500"/></Link>
                                </div>
                            </div>
                    </div>
                    {/* Portfolio Content */}
                    <div className="md:w-11/12 lg:w-11/12 xl:w-11/12 m-auto">
                        <div className="mt-5 py-4">
                            <h2 className="text-4xl font-extrabold">Focused on web standards and modern web app UX, you’re simply going to build better websites</h2>
                        </div>
                        <div>
                            <p className="py-4 text-md">The website in question is an innovative platform that has revolutionized the way users interact with digital content. It offers a unique blend of information, interactivity, and user-friendly design that sets it apart from other websites in its niche.</p>

                            <p className="py-4 text-md">**User Interface**The user interface of the website is intuitive and easy to navigate. The layout is clean and uncluttered, making it easy for users to find what they're looking for. The use of vibrant colors and engaging graphics adds to the overall appeal of the website.</p>

                            <p className="py-4 text-md">**Content**The content on the website is well-researched and presented in a clear, concise manner. It covers a wide range of topics, providing users with a wealth of information at their fingertips. The use of multimedia elements such as videos and infographics enhances the user experience by presenting information in an engaging and digestible format.</p>

                            <p className="py-4 text-md">**Interactivity**One of the standout features of the website is its high level of interactivity. Users can engage with the content in various ways, such as leaving comments, sharing posts on social media, and participating in polls and quizzes. This level of interactivity fosters a sense of community among users and keeps them coming back for more.</p>

                            <p className="py-4 text-md">**Performance**In terms of performance, the website loads quickly and runs smoothly. It is optimized for both desktop and mobile devices, ensuring a seamless user experience regardless of the device used to access it.</p>

                            <p className="py-4 text-md">**Conclusion**Overall, this website serves as an excellent case study for how to effectively combine information, design, and interactivity to create a compelling online platform. It stands as a testament to the power of digital innovation in enhancing user engagement and satisfaction.</p>
                        </div>
                        <div>
                            <img className="rounded-lg" src="https://images.unsplash.com/photo-1694801928101-615280ca4e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        
        </>
    );
};

export default SinglePortfolio;