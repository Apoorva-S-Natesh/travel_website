import React,{useEffect} from 'react'
import './main.css'
import BoraBora from '../../Assests/BoraBora.jpg'
import Tokyo from '../../Assests/Tokyo.jpg'
import Rome from '../../Assests/Rome.jpg'
import Dubai from '../../Assests/Dubai.jpg'
import Hampi from '../../Assests/Hampi.jpg'
import { CiLocationOn } from "react-icons/ci";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc:BoraBora,
    destTitle:'Bora Bora',
    location:'New Zealand',
    grade:'CULTURAL RELAX',
    cost:'$700',
    description:'The epitome of romance,  BOra Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activites.'
  },
  {
    id:2,
    imgSrc:Tokyo,
    destTitle:'Tokya',
    location:'Japan',
    grade:'CULTURAL HISTORICAL',
    cost:'$1000',
    description:'In Tokyo, tradition meets pop culture, offering travelers the opportunity to first stroll in awe through ancient temples and then have fun at a karaoke bar. '
  },
  
  {
    id:3,
    imgSrc:Rome,
    destTitle:'Rome',
    location:'Italy',
    grade:'ARCHAEOLOGICAL HISTORICAL',
    cost:'$1100',
    description:'Rome cannot be visited in one day either. The city feels like you are in the exhibition halls of a huge open-air museum, a lifelike collage of squares, markets and stunning historical sites. Enjoy one of the best meals of your life with a plate of fresh pasta, some delicious fried artichokes or a delicious oxtail soup.'
  },
  {
    id:4,
    imgSrc:Dubai,
    destTitle:'Dubai',
    location:'UAE',
    grade:'RELAX ADVENTURE',
    cost:'$900',
    description:'History and modernity meet in Dubai. In addition to adventurous activities, you will also find world-class shopping and entertainment options here. Attend a show at Dubai Opera, enjoy downtown views from Burj Khalifa, and spend the afternoon exploring the gold, textile, and spice souk along Dubai Creek.'
  },
  {
    id:5,
    imgSrc:Hampi,
    destTitle:'Hampi',
    location:'Karnataka',
    grade:'HISTORIAL ARCHAEOLOGICAL',
    cost:'$1000',
    description:'Set in an awesome boulder-strewn landscape along the banks of the Tungabhadra River, Hampi was the capital city of the magnificent capital of the mighty Vijayanagara Empire.'
  },
  
]


const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='main section container'>
      <div className='secTitle'>
       <h3 data-aos="fade-right" className='title'>
        Most Visited Destinations
       </h3>
      </div>

     <div className='secContent grid'>
     {
      Data.map(({id,imgSrc,destTitle,location,grade,cost,description})=>{
        return(
          <div key={id} className='singleDestination'>
            <div className='imageDiv grid'>
              <img src={imgSrc} alt={destTitle}/>
            </div>

            <div data-aos="fade-up" className='cardInfo'>
              <h4 className='desTitle'>{destTitle}</h4>
              <span className='continent flex'>
                <CiLocationOn className='icon'/>
              </span>
              <span className='name'>{location}</span>

              <div className='cost flex'>
                <div className='grade'>
                  <span>{grade}</span>
                </div>
                
                <div className='price'>
                  <h5>{cost}</h5>
                </div>
              </div>

              <div className='description'>
                <p>{description}</p>
              </div>
              
              <button className='btn'>Details</button>
            </div>
          </div>
        )
      })
    }

    </div>

    </section>
  )
}

export default Main