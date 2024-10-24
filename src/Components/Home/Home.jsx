import React,{useEffect} from 'react'
import './home.css'
import video from '../../Assests/video.mp4'
import { MdLocationPin } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  //Hook to add scroll animation

  useEffect(()=>{
      Aos.init({duration:2000})
  },[])


  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted  autoPlay loop type="video/mp4"></video>
      
      <div className='homeContent container'>
        <div className='textDiv'>

          <span data-aos="fade-up" className='smallText'>
            Our Packages
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>Search Your Holiday</h1>
        </div>

        <div data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor="city">Search your Destination</label>
            <div className='input flex'>
              <input type="text" placeholder='Enter name here...'/>
              <MdLocationPin className='icon'/>
            </div>
          </div>

          <div className='dateInput'>
            <label htmlFor="date">Select your Date</label>
            <div className='input flex'>
              <input type="date"/>
            </div>
          </div>

          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor='price'>Max price:</label>
              <h3 className='total'>$10000</h3>
            </div>
            <div className='input  flex'>
              <input type='range' max='10000' min='1000'/>
            </div>
          </div>

          <div className='searchOptions flex'>
             <FaFilter className='icon'/>
             <span>More filters</span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home