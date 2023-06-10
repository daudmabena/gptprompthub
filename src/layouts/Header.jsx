import { useState } from 'react';
import logo from '../assets/logo.svg'
import { Link } from "react-router-dom";
import MenuLink from "../components/MenuLink.jsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="pl-4 mx-auto bg-white md:pl-24 lg:pl-8 sticky top-0 z-50">
            <div className="relative flex items-center justify-between">
                <Link to="/" aria-label="All4Love" title="All4Love">
                    <img alt="All4Love" className="logo" src={logo} height={42} />
                </Link>
                <ul className="flex items-center space-x-6 lg:flex">
                    <li>
                        <MenuLink href="/" title={'Home'} />
                    </li>
                    <li>
                        <MenuLink href="/" title={'About Us'} />
                    </li>
                    <li>
                        <MenuLink href="/" title={'What We Do'} />
                    </li>
                    <li>
                        <MenuLink href="/" title={'Where We Work'} />
                    </li>
                    <li>
                        <MenuLink href="/" title={'News & Stories'} />
                    </li>
                    <li>
                        <MenuLink href="/" title={'Research & Reports'} />
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                alert('Signup Clicked')
                            }}
                            className="p-6 bg-black text-white text-2xl uppercase font-bold"
                            aria-label="Sign up"
                            title="Sign up">
                            Sign up
                        </button>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        Icon
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            All4Love
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Icon
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Product
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Product pricing"
                                                title="Product pricing"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Header;
