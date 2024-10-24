import React,{useEffect} from 'react'
import './footer.css'
import video from '../../Assests/video.mp4'
import { IoIosSend } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video} loop autoPlay type='video/mp4'/>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div data-aos="fade-up" className='inputDiv flex'>
            <input type='text' placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <IoIosSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href="#" className='logo flex'>
              <h1><MdOutlineTravelExplore className="icon"/> Travel.</h1>
              </a>
            </div>
            <div data-aos="fade-up" className='footerParagraph'>
             Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <div data-aos="fade-up" className='footerSocials'>
              <FaXTwitter  className='icon'/>
              <FaInstagram className='icon'/>
              <CiYoutube className='icon'/>
            </div>
          </div>
        
          <div className='footerLinks grid'>
            {/*Group One*/}
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                OUR COMPANY
              </span>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Servies
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Insurance
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Careers
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Privacy Policy
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Tourism
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Payment
              </li> 
            </div>
                  
            {/*Group Two*/}
            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Bookings
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                RentCars
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                HotelWorld
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Trivago
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Trip Advisor
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Hostels
              </li> 
            </div>

            {/*Group Three*/}
            <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                India
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                London
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Bangkok
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Dubai
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Italy
              </li>

              <li className='footerList flex'>
                <FaChevronRight className='icon'/>
                Paris
              </li> 
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>React Practice Travel Website - Apoorva SN </small>
            <small>Copyrights {new Date().getFullYear()}</small>
          </div>


          

        </div> 
      </div>

    </section>
  )
}

export default Footer