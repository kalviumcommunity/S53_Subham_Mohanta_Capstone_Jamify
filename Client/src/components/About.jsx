import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Aboutil from '../assets/Aboutil'
import "../App.css"

const About = () => {
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return (
        <>
            <nav className='navbar scrolled'>
                <div className='web_name'>
                    <Link to="/" style={{ textDecoration: "none" }}>
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
                            <div className='logo_name scrolled'>
                                <h1>JAMIFY</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='main_routes scrolled'>
                    <div className='About'>
                        <Link to="/About" style={{ textDecoration: "none" }}><p>About</p></Link>
                    </div>
                    <div className='Contact'>
                        <Link to="/Contact" style={{ textDecoration: "none" }}><p>Contact</p></Link>
                    </div>
                    <div className='Pricing'>
                        <Link to="/Pricing" style={{ textDecoration: "none" }}><p>Pricing</p></Link>
                    </div>
                </div>
                <div className='Login scrolled'>
                    <Link to="/Login" style={{ textDecoration: "none" }}><button className='login-btn'>Login</button></Link>
                </div>
            </nav>
            <div className='parent about'>
                <div className=' about'>
                    <div className='about-head'>
                        <h1>ABOUT</h1>
                    </div>
                    <div className='about-title'>
                        <p>
                            Welcome to Jamify, the platform where music connects and creativity thrives. Our mission is to revolutionize how budding music artists collaborate and connect, breaking down barriers of genre and location. Dive into our vibrant community, where pop, hip-hop, rock, metal, and more find common ground. With our innovative scanner feature, discover local talent within a 15-kilometer radius, making collaboration seamless and exciting. Whether you're starting a band, producing tracks, or simply jamming for fun, finding the right collaborators is effortless on Jamify. We're dedicated to empowering musicians to unleash their creativity and showcase their talent to the world. Join us today and become part of a dynamic community passionate about making beautiful music together. Let's jam!
                        </p>
                    </div>
                    <Aboutil/>
                </div>
            </div>


        </>
    )
}

export default About