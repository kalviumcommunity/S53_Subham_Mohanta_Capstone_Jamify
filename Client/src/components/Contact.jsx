import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
import Navbar from './Navbar';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='parent'>
                    <div className='contact-head'>
                        <h1>CONTACT</h1>
                    </div>
                    <div className='contact-title'>
                        <p>We are here to help you</p>
                    </div>
                    <div className='links'>
                        <div className='link-1'>

                            <svg width="28" height="26" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 8.19995L37 10.95L32 15.7V32H39C40.657 32 42 30.657 42 29V8.19995Z" fill="#4CAF50"/>
<path d="M0 8.19995L3.614 9.90995L10 15.7V32H3C1.343 32 0 30.657 0 29V8.19995Z" fill="#1E88E5"/>
<path d="M32 3.19995L21 11.45L10 3.19995L9 8.99995L10 15.7L21 23.95L32 15.7L33 8.99995L32 3.19995Z" fill="#E53935"/>
<path d="M0 4.298V8.2L10 15.7V3.2L6.876 0.859C6.132 0.301 5.228 0 4.298 0C1.924 0 0 1.924 0 4.298Z" fill="#C62828"/>
<path d="M42 4.298V8.2L32 15.7V3.2L35.124 0.859C35.868 0.301 36.772 0 37.702 0C40.076 0 42 1.924 42 4.298Z" fill="#FBC02D"/>
                            </svg>
                            <p>Gmail</p>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=subhammohanta99@gmail.com" 
                                style={{textDecoration:"none", color:"#292929", display: "flex", alignItems:"center"}} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button className='visit-btn'>Visit</button>
                            </a>
                            
                        </div>
                        <div className='link-2'>
                            <svg width="28" height="28" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3.00819C0 1.34656 1.38075 -6.10352e-05 3.08437 -6.10352e-05H38.9156C40.6192 -6.10352e-05 42 1.34656 42 3.00819V38.9917C42 40.6533 40.6192 41.9999 38.9156 41.9999H3.08437C1.38075 41.9999 0 40.6533 0 38.9917V3.00819ZM12.9754 35.1592V16.1936H6.67275V35.1592H12.9754ZM9.82538 13.6027C12.0225 13.6027 13.3901 12.1484 13.3901 10.3267C13.3507 8.46556 12.0251 7.05069 9.86738 7.05069C7.70963 7.05069 6.3 8.46819 6.3 10.3267C6.3 12.1484 7.66763 13.6027 9.78337 13.6027H9.82538ZM22.7089 35.1592V24.5673C22.7089 24.0003 22.7509 23.4333 22.9189 23.0291C23.373 21.8977 24.4099 20.7243 26.1529 20.7243C28.434 20.7243 29.3449 22.4621 29.3449 25.0136V35.1592H35.6475V24.2812C35.6475 18.4537 32.5395 15.7447 28.392 15.7447C25.0477 15.7447 23.5489 17.5822 22.7089 18.8763V18.9419H22.6669L22.7089 18.8763V16.1936H16.4089C16.4876 17.9733 16.4089 35.1592 16.4089 35.1592H22.7089Z" fill="#0A66C2"/>
                            </svg><p>LinkedIn</p>
                            <a href="https://www.linkedin.com/in/subham-mohanta-59b683289/?msg=1" 
                                style={{textDecoration:"none", color:"#292929", display: "flex", alignItems:"center"}} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <button className='visit-btn'>Visit</button> 
                        </a>
                        </div>
                        <div className='link-3'>                        <svg width="30" height="32" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 0C9.3975 0 0 9.3975 0 21C0 30.2925 6.01125 38.1413 14.3587 40.9238C15.4087 41.1075 15.8025 40.4775 15.8025 39.9263C15.8025 39.4275 15.7763 37.7738 15.7763 36.015C10.5 36.9863 9.135 34.7288 8.715 33.5475C8.47875 32.9438 7.455 31.08 6.5625 30.5813C5.8275 30.1875 4.7775 29.2163 6.53625 29.19C8.19 29.1638 9.37125 30.7125 9.765 31.3425C11.655 34.5188 14.6738 33.6263 15.8813 33.075C16.065 31.71 16.6162 30.7913 17.22 30.2663C12.5475 29.7413 7.665 27.93 7.665 19.8975C7.665 17.6138 8.47875 15.7238 9.8175 14.2538C9.6075 13.7288 8.8725 11.5763 10.0275 8.68875C10.0275 8.68875 11.7863 8.1375 15.8025 10.8413C17.4825 10.3688 19.2675 10.1325 21.0525 10.1325C22.8375 10.1325 24.6225 10.3688 26.3025 10.8413C30.3188 8.11125 32.0775 8.68875 32.0775 8.68875C33.2325 11.5763 32.4975 13.7288 32.2875 14.2538C33.6263 15.7238 34.44 17.5875 34.44 19.8975C34.44 27.9563 29.5313 29.7413 24.8588 30.2663C25.62 30.9225 26.2763 32.1825 26.2763 34.1513C26.2763 36.96 26.25 39.2175 26.25 39.9263C26.25 40.4775 26.6438 41.1338 27.6938 40.9238C31.8633 39.5174 35.4865 36.8384 38.0531 33.2641C40.6196 29.6898 42.0001 25.4003 42 21C42 9.3975 32.6025 0 21 0Z" fill="#292929"/>
                        </svg><p>Github</p>
                            <a href="https://github.com/SubhamMohanta" style={{textDecoration:"none", color:"#292929", display: "flex", alignItems:"center"}} target="_blank" rel="noopener noreferrer">
                            <button className='visit-btn'>Visit</button>
                        </a>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default Contact