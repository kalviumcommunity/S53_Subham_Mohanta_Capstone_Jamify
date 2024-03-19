import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import "../App.css"
import Illustration_1 from '../assets/Illustration_1';
import Illustration_2 from '../assets/Illustration_2';
import Section_1 from '../assets/Section_1.png';
import Section_2 from '../assets/Section_2.png';
import Lenis from '@studio-freight/lenis';

const Landing = () => {
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
        <Navbar/>
        <div className='Banner'>
            <div className='content'>
              <div className='Heading'>
                <h1>THINK OF A PLACE...</h1>
              </div>
              <div className='Description'>
                <p>...where you can meet artists of your genre viz. Pop, Hip-Hop, EDM<br/> etc. Where you can jam and make connections with different people. A<br/> place where you can show your music talent freely.</p>
              </div>
              <div className='Banner_buttons'>
                <div className='Explore'>
                  <Link to="/Explore" style={{textDecoration: "None"}}><button className='Explore-btn'>Explore rooms</button></Link>
                </div>
                <div className='Learn_more'>
                  <Link to="/learnmore" style={{textDecoration: "None"}}><button className='Learn_more-btn'>Learn more</button></Link>
                </div>
              </div>
              <div className='illustration-1'>
                <Illustration_1/>
              </div>
              <div className='illustration-2'>
                <Illustration_2/>
              </div>
            </div>
        </div>
        <div className='Section-1'>
          <div className='left'>
            <img src={Section_1} width="390px"/>
          </div>
          <div className='right'>
            <div className='sec-heading-1'>
              <h1>Join your interested <br/>genre room</h1>
            </div>
            <div className='sec-text-1'>
              <p>Users can see others post as well as post their<br/> videos performing in the specific genre in<br/> different rooms. They can also like, comment<br/> and share post right from the platform.</p>
            </div>
          </div>
        </div>
        <div className='Section-2'>
          <div className='left-2'>
            <div className='sec-heading-2'>
              <h1>1-1 Video chat<br/> rooms</h1>
            </div>
            <div className='label'>Premium</div>
            <div className='sec-text-2'>
              <p>Users can schedule 1-1 meeting with artists<br/> within a range of 8 miles.</p>
            </div>
          </div>
          <div className='right-2'>
            <img src={Section_2} width="360px"/>
          </div>
        </div>
    </>
  )
}

export default Landing;