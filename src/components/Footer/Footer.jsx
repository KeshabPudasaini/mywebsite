import React from 'react'
import { Link } from 'react-scroll'
import { FaGithub, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div className="bg-bgShade py-10 md:px-12 px-4 ">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-20">
      <a href=""className="flex-shrink-0">
        {/* <img src={logo} alt="logo" className="w-15 h-14 hover:-translate-y-3"/> */}
        <h3 className=" font-roboto text-4xl hover:-translate-y-3 ">
          RO<span className="text-primary">SHA</span>NI  
        </h3>
        </a>
      <div className="flex flex-col sm:flex-row md:items-center gap-1 flex-wrap ">
      <Link to="home" spy ={true} activeClass="active" smooth={true} offset={-100}>
        <a href="/" className="block hover:text-gray-400 py-2 px-4">Home</a>
        </Link>
        <Link to="skills" spy ={true} activeClass="active" smooth={true} offset={-100}>
        <a href="/" className="block hover:text-gray-400 py-2 px-4">Skills</a>
        </Link>
        <Link to="about" spy ={true} activeClass="active" smooth={true} offset={-100}>
        <a href="/" className="block hover:text-gray-400 py-2 px-4">About Me</a>
        </Link>
        <Link to="portfolio" spy ={true} activeClass="active" smooth={true} offset={-100}>
        <a href="/" className="block hover:text-gray-400 py-2 px-4">Portfolio</a>
        </Link>
        <Link to="photography" spy ={true} activeClass="active" smooth={true} offset={-100}>
        <a href="/" className="block hover:text-gray-400 py-2 px-4">Photography</a>
        </Link>
      </div>
      <div className="flex items-center gap-4 ">
        <a target='_blank' href="/">
        <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
        </a>
        <a target = "_blank" href="">
        <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
        </a>
        <a target='_blank' href="">
        <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary"/>
        </a>
      </div>
    </div>
    <hr />
    <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
      <p>Made with  💖 in Nepal</p>
      <span className="text-sm text-gray-500 sm:text-center">
          © 2023  
          <a href="https://shresthashailesh.com.np/" className="hover:underline hover:text-primary">

          </a>
          . All Rights Reserved.
          
        </span>
      <div className="space-x-6">
        <a href="/" className="hover:text-gray-400">Privacy Policy</a>
        <a href="/" className="hover:text-gray-400">Terms of Service</a>
        <a href="/" className="hover:text-gray-400">Cookies Settings</a>
      </div>
    </div>
  </div>
  )
}

export default Footer