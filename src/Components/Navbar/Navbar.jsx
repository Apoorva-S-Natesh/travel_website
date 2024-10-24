import React,{useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const[active,setActive]=useState('navBar')
  //function to show Navbar
  const showNavbar=()=>{
    setActive('navBar activeNavbar')
  }
  //Function to hide or remove Navbar
  const removeNavbar=()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>
       <div className='logoDiv'> 
          <a href="#" className='logo flex'>
            <h1><MdOutlineTravelExplore className="icon"/> Travel.</h1>
          </a>
       </div>

       <div className={active}>
          <ul className='navLists flex'>
            <li className='listItem'>
              <a href='#' className='navLink'>Home</a>
            </li>

            <li className='listItem'>
              <a href='#' className='navLink'>About</a>
            </li>

            <li className='listItem'>
              <a href='#' className='navLink'>Packages</a>
            </li>

            <li className='listItem'>
              <a href='#' className='navLink'>Shop</a>
            </li>

            <li className='listItem'>
              <a href='#' className='navLink'>Contact</a>
            </li>

            <li className='listItem'>
              <a href='#' className='navLink'>Blogs</a>
            </li>

            <li className='listItem'>
              <a href='#' className='navLink'>Privacy</a>
            </li>

            <button className='btn'>
              <a href='#'>BOOK NOW</a>
            </button>
          </ul>
          
          <div onClick={removeNavbar} className='closeNavBar'>
             <IoClose className='icon'/>
          </div>
        </div>

          <div onClick={showNavbar} className='toggleNavbar'>
            <TbGridDots className='icon'/>
          </div>
       

      </header>
    </section>
  )
}

export default Navbar