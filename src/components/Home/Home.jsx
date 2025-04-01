import React from 'react'
import homePic from '../../assets/homePic1.jpeg'
import 'animate.css';
import cv from '../../assets/cv.pdf'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="mt-5 bg-bgShade" id = "home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-16 gap-2">
        <div className="md:w-[40%]">
          <img src={homePic} alt="" className="imgShadow hover:-translate-y-3" />
        </div>

        <div className="md:w-[70%] w-full ">
          <span className="md:text-4xl text-4xl font-bold text-headingColor leading-sung md:leading-[76px]
          mb-5">Namaste, I am </span> <br />
          <span className=' text-6xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 font-extrabold '>
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Roshani Giri',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Radiographer',
        1000,
        'Radiology Technician',
        1000,
        'Medical Radiographer',
        1000,
        'Diagnostic Imaging Technician',
        1000,
        'Radiographer Specialists',
        1000,
        'X-ray Technician',
        1000,
        'Imaging Technician',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
    </span>
            
          <p className=" mt-5 text-body text-xl leading-9 mb-9">I’m a radiographer with 7+ of experience working in a fast-paced hospital environment. I graduated with a degree in Radiologic Technology from National Multiple College, where I gained hands-on experience with various imaging techniques, including X-ray, CT, MRI, and ultrasound.
          I am passionate about the role of radiography in diagnosing and treating patients, and I’m eager to continue growing in this field. I believe that my combination of technical expertise, patient-centered approach, and ability to work as part of a multidisciplinary team.
          </p>
            <a target='_blank' href={cv}><button className="btn-primary">Download CV</button></a>
        </div>
        
      </div>

    </div>
  )
}

export default Home