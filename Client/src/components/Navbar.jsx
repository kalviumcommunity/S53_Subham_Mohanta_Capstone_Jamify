// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css"
import { SignedIn, SignedOut, SignInButton} from "@clerk/clerk-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 570) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='web_name'>
                <a href="#" style={{ textDecoration: "none" }}>
                    <div style={{ display: 'flex' }}>
                        <div className='logo_svg'>
                            <svg width="50" height="50" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="72" height="72" rx="23" fill="#191919" />
                                <rect x="17" y="11" width="39" height="46" fill="url(#paint0_linear_256_1256)" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M52.8455 10.0296H16.3104C15.1524 10.0296 15.3613 10.3894 14.5425 11.2082C13.7236 12.027 13.3639 11.818 13.3639 12.976L13.3639 55.9932C13.3639 52.558 12.5451 57.5315 13.3639 58.3503C14.1827 59.1692 13.9738 58.9396 15.1318 58.9396H54.5216C55.6796 58.9396 55.5623 58.5799 56.3811 57.761C57.1999 56.9422 56.9704 55.9727 56.9704 54.8147V12.976C56.9704 11.818 56.6106 11.4377 55.7918 10.6189C54.973 9.80008 54.0035 10.0296 52.8455 10.0296ZM47.8879 40.4537C47.0802 42.1216 46.2594 42.2089 46.6174 40.4537C47.5387 35.9172 46.9143 26.1718 40.0506 25.0889V45.8285C40.0506 50.0768 38.0945 53.775 32.8944 55.4473C27.847 57.0584 22.2015 55.3774 20.8785 51.7535C19.5555 48.1295 22.5246 43.7196 27.5064 41.9033C30.2877 40.8903 33.51 40.6283 35.6844 41.4623V11.9903H40.0506C40.0506 22.2727 57.7993 20.0198 47.8879 40.4537Z" fill="#191919" />
                                <defs>
                                    <linearGradient id="paint0_linear_256_1256" x1="24.481" y1="53.2311" x2="52.5225" y2="28.0576" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#DB4523" />
                                        <stop offset="1" stopColor="#FFB6A4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className={scrolled ? 'logo_name scrolled' : 'logo_name'}>
                            <h1>JAMIFY</h1>
                        </div>
                    </div>
                </a>
            </div>
            <div className={scrolled ? 'main_routes scrolled' : 'main_routes'}>
                <div className='About'>
                    <a href="#" style={{ textDecoration: "none" }}><p>About</p></a>
                </div>
                <div className='Pricing'>
                    <a href="#pricing" style={{ textDecoration: "none" }}><p>Pricing</p></a>
                </div>
                <div className='Contact'>
                    <a href="#contact" style={{ textDecoration: "none" }}><p>Contact</p></a>
                </div>
            </div>
            <div className={scrolled ? 'Login scrolled' : 'Login'}>
                <SignedOut>
                    <SignInButton className='login-btn' />
                </SignedOut>
                <SignedIn>
                <Link to="/Dashboard" style={{ textDecoration: "none" }}><button className='jamify-btn'>Open Jamify</button></Link>
                </SignedIn>            
            </div>
        </nav>
    );
}

export default Navbar;
