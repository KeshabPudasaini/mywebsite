import React from "react";
import photo0 from "../../assets/photo0.jpeg";
import { Link } from "react-scroll";

export default function About() {
  return (
    <div className="lg:mx-12 mx-4 my-20" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 items-center justify-between py-10">
        <div className="sm:w-[40%]  ">
          <img src={photo0} alt="" className=" imgShadow2" />
        </div>
        <div className=" sm:w-[60%]">
          <p className="text-xl font-semibold mb-5">About</p>
          <h2 className="md:text-6xl text-4xl font-bold">About Me</h2>
          <p className="mt-8 md:pr-8  text-xl text-justify">
            Hi, I'm Mrs. Roshani Giri ,As a dedicated and detail-oriented Radiographer, 
            I am committed to providing high-quality imaging services to help diagnose and treat patients effectively. 
            With 7+ years of experience in performing a wide range of radiographic procedures, including X-rays,
            I am proficient in operating advanced imaging equipment while ensuring patient comfort and safety.
            With strong communication skills and a compassionate approach to patient care, 
            I strive to make every patient experience as positive as possible while producing accurate and reliable results.
            I am excited about the opportunity to contribute to a dynamic healthcare team and support patient-centered care through my expertise in diagnostic radiography.
          </p>
          <br></br>
          <br></br>
          <br></br>

          <Link
            to="contact"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-100}
          >
            <button className="btn-primary text-2xl">Contact Me</button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
