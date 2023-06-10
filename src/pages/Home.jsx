import { Link } from "react-router-dom";
import { BeakerIcon } from "@heroicons/react/20/solid/index.js";

const Home = () => {
    return (
        <>
            <div className="relative isolate overflow-hidden pt-14 bg-red-500">
                <img src="/homecover.jpg" alt="" className="absolute inset-0 -z-10 w-full object-cover" />
                <div className="mx-auto max-w-2xl h-[calc(100vh-200px)] flex flex-col items-center justify-center">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full text-xl px-3 py-1 text-sm leading-6 text-white hover:bg-white/20 ring-1 ring-white/100 hover:ring-white/50">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-white">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-family-foldit">
                            The Future is Filled with Positive vibes
                        </h1>
                        <p className="mt-6 text-2xl leading-8 text-gray-300">
                            Empowering Youth for a Positive Future: Join All4Love in Creating Lasting Impact
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    Technology
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                The quick, brown fox<br className="hidden md:block" />
                                jumps over{' '}
                                <span className="inline-block text-deep-purple-accent-400">a lazy dog</span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:flex-row">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                <span className="mr-3">Get Started</span>
                                <BeakerIcon className="h-6 w-6 text-white" />
                            </a>
                            <a href="/" aria-label="" className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">Get things done</a>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2">
                        <img className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="" />
                        <a href="/" aria-label="Play Video" className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25">
                            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                                <svg className="w-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex-col hidden items-center justify-center text-center">
                <p className="text-gray-500 max-w-xl flex dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <div className="inline-flex max-w-xl flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                    <div className="absolute max-w-xl flex px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
                <p className="text-gray-500 max-w-xl flex dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>
            </div>

        </>
    );
}
export default Home;
