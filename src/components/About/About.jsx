import React from 'react'
import photo0 from '../../assets/photo0.jpg'
import {Link} from 'react-scroll'

export default function About() {
  return (
    <div className='lg:mx-12 mx-4 my-20' id='about'>
        <div className='flex flex-col sm:flex-row md:gap-24 items-center justify-between py-10'>  
        <div className='sm:w-1/2'>
            <img src={photo0} alt="" className=' imgShadow2' />
        </div>
        <div className=' sm:w-1/2'>
          <p className="text-xl font-semibold mb-5">About</p>
          <h2 className="md:text-6xl text-4xl font-bold">About Me</h2>
          <p className="mt-8 md:pr-8 mb-8 text-xl">
            here we going to wirte a paragraph in this section
          </p>
          <Link to="contact" spy ={true} activeClass="active" smooth={true} offset={-100}>
          <button className="btn-primary text-2xl">Contact Me</button>
          </Link>
        </div>

        </div>
        <div>

        </div>
    </div>
  )
}

